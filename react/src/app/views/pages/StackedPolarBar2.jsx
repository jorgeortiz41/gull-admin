import React, { Component } from "react";
import {
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryBar,
  VictoryStack
} from "victory";
import * as _ from "lodash";

const directions = {
  0: "0° E",
  45: "45°",
  90: "90° N",
  135: "135°",
  180: "180° W",
  225: "225°",
  270: "270° S",
  315: "315°"
};

const antennae = {
  45: "45°",
  46: "46°", 
}

const showItems = 3;

const purple = { base: "violet", highlight: "violet" };

const darkpurple = { base: "purple", highlight: "darkPurple" };

const innerRadius = 30;

class CompassCenter extends Component {
  render() {
    const { origin } = this.props;
    const circleStyle = {
      stroke: darkpurple.base,
      strokeWidth: 2,
      fill: purple.base
    };
    return (
      <g>
        <circle
          cx={origin.x}
          cy={origin.y}
          r={innerRadius}
          style={circleStyle}
        />
      </g>
    );
  }
}

class CenterLabel extends Component {
  render() {
    const { datum, active, color } = this.props;
    const text = [`${directions[datum._x]}`, `${Math.round(datum._y1)} mph`];
    const baseStyle = { fill: color.highlight, textAnchor: "middle" };
    const style = [
      { ...baseStyle, fontSize: 18, fontWeight: "bold" },
      { ...baseStyle, fontSize: 12 }
    ];

    return active ? (
      <VictoryLabel text={text} style={style} x={175} y={175} renderInPortal />
    ) : null;
  }
}

class StackedPolarBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = { wind: this.getWindData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ wind: this.getWindData() });
    }, 4000);
  }

  componentWillUnmount() {
    if (this.setStateInterval) window.clearInterval(this.setStateInterval);
  }

  getWindData() {
    return _.keys(antennae).map((d,i) => {
      const speed = 20;
      return {
        windSpeed: speed,
        windGust: speed + 10,
        windBearing: +d
      };
    });
  }

  render() {
    return (
      <VictoryChart
        style={{ parent: { maxWidth: "320px" } }}
        polar
        animate={{ duration: 500, onLoad: { duration: 500 } }}
        theme={VictoryTheme.material}
        innerRadius={innerRadius}
        domainPadding={{ y: 10 }}
        events={[
          {
            childName: "all",
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  { target: "labels", mutation: () => ({ active: true }) },
                  { target: "data", mutation: () => ({ active: true }) }
                ];
              },
              onMouseOut: () => {
                return [
                  { target: "labels", mutation: () => ({ active: false }) },
                  { target: "data", mutation: () => ({ active: false }) }
                ];
              }
            }
          }
        ]}
      >
        <VictoryPolarAxis
          dependentAxis
          labelPlacement="vertical"
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => ""}
        />
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickValues={_.keys(directions).map(k => +k)}
          tickFormat={_.values(directions).slice(0, showItems)}
        />
        <VictoryStack>
          <VictoryBar
            style={{
              data: {
                fill: ({ active }) => (active ? purple.highlight : purple.base),
                width: 40
              }
            }}
            data={this.state.wind}
            x="windBearing"
            y="windSpeed"
            labels={() => ""}
            labelComponent={<CenterLabel color={purple} />}
          />
          <VictoryBar
            style={{
              data: {
                fill: (d, a) => (a ? darkpurple.highlight : darkpurple.base),
                width: 5
              }
            }}
            data={this.state.wind}
            x="windBearing"
            y={d => d.windGust - d.windSpeed}
            labels={() => ""}
            labelComponent={<CenterLabel color={darkpurple} />}
          />
        </VictoryStack>
        <CompassCenter />
      </VictoryChart>
    );
  }
}

export default StackedPolarBar2;
