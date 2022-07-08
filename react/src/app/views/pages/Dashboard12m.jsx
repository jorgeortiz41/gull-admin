import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Dropdown } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import Echart1 from "../ui-kits/card-metrics/Echart1";
import Echart2 from "../ui-kits/card-metrics/Echart2";
import Echart3 from "../ui-kits/card-metrics/Echart3";
import Echart4 from "../ui-kits/card-metrics/Echart4";
import Echart5 from "../ui-kits/card-metrics/Echart5";
import Echart6 from "../ui-kits/card-metrics/Echart6";
import Echart7 from "../ui-kits/card-metrics/Echart7";
import Echart8 from "../ui-kits/card-metrics/Echart8";
import Echart9 from "../ui-kits/card-metrics/Echart9";
import Echart10 from "../ui-kits/card-metrics/Echart10";
import { ProgressBar } from "react-bootstrap";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

import {
  bAOptions1,
  bAOptions2,
  bAOptions3,
  bAOptions4,
  bAOptions5,
  bAOptions6,
  bAOptions7,
  bAOptions8,
  bAOptions9,
  bAOptions10,
  bAOptions11,
  bAOptions12,
  bAOptions13,
  bAOptions14,
  bAOptions15,
  bAOptions16,
  bAOptions17,
  bAOptions18,
  bAOptions19,
  bAOptions20,
  bAOptions21,
  bAOptions22,
  bAOptions23
} from "./DashboardOptions";

const customTabHeader = (title, icon) => (
  <div className="d-flex align-items-center">
    <span className="me-2">
      <i className={icon}></i>
    </span>
    <span>{title}</span>
  </div>
);


class Dashboard12m extends Component {
  state = {
    cardList1: [
      {
        icon: "i-Car-Items",
        title: "Observations",
        amount: 5630
      },
      {
        icon: "i-Data-Download",
        title: "Workers",
        amount: 16
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "Feedback",
        amount: 80
      },
      {
        icon: "i-File-Horizontal-Text",
        title: "Option",
        amount: 1200
      }
    ],

    chartList1: [
      {
        title: "INCOME",
        amount: 1000,
        chart: bAOptions1
      },
      {
        title: "APPROVE",
        amount: 500,
        chart: bAOptions2
      },
      {
        title: "TRANSACTION",
        amount: 44909,
        chart: bAOptions3
      },
      {
        title: "SALES",
        amount: 500,
        chart: bAOptions4
      }
    ],

    chartList2: [
      {
        icon: "i-Like-2",
        title: "Approve",
        amount: 55000,
        chart: bAOptions5
      },
      {
        icon: "i-File-Horizontal-Text",
        title: "Comments",
        amount: 500,
        chart: bAOptions6
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "Contribution",
        amount: 46000,
        chart: bAOptions7
      },
      {
        icon: "i-Eye",
        title: "Watch",
        amount: 70000,
        chart: bAOptions8
      }
    ],

    chartList3: [
      {
        title: "People",
        amount: 2750,
        chart: bAOptions9
      },
      {
        title: "Use",
        amount: "75%",
        chart: bAOptions10
      },
      {
        title: "Views",
        amount: 2750,
        chart: bAOptions11
      },
      {
        title: "Growth",
        amount: 6760,
        chart: bAOptions12
      }
    ],

    chartList4: [
      {
        amount: 698212,
        chart: bAOptions13
      },
      {
        amount: 369212,
        chart: bAOptions14
      },
      {
        amount: 369212,
        chart: bAOptions15
      },
      {
        amount: 369212,
        chart: bAOptions16
      }
    ],
    cardList2: [
      {
        icon: "i-Building",
        color: "text-primary",
        title: "Assets",
        amount: "46,025"
      },
      {
        icon: "i-Bar-Chart",
        color: "text-danger",
        title: "Progression",
        amount: "80%"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "Total Profit",
        amount: "\u09F3 2000"
      },
      {
        icon: "i-Bookmark",
        color: "text-warning",
        title: "Lease",
        amount: "5,417"
      }
    ],
    chartList5: [
      {
        title: "People Choice Rate",
        chart: bAOptions17
      },
      {
        title: "Item Pending",
        chart: bAOptions18
      },
      {
        title: "Total Profit",
        chart: bAOptions19
      },
      {
        title: "Total Revenue",
        chart: bAOptions20
      }
    ],
    chartList6: [
      {
        title: "Orders Received",
        chart: bAOptions21,
        amount: 697
      },
      {
        title: "Total Marketing",
        chart: bAOptions22,
        amount: "5,767"
      },
      {
        title: "Total Earning",
        chart: bAOptions23,
        amount: "$5,767"
      }
    ],
    cardList3: [
      {
        title: "Server status region 1",
        subtitle: "Last down 4 days ago",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "Up"
      },
      {
        title: "Server status region 2",
        subtitle: "Last down 8 days ago",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "Up"
      },
      {
        title: "Server status region 3",
        subtitle: "Last down 22 days ago",
        icon: "i-Arrow-Down-in-Circle",
        color: "danger",
        message: "Down"
      },
      {
        title: "Server status region 4",
        subtitle: "Last down 2 days ago",
        icon: "i-Arrow-Down-in-Circle",
        color: "danger",
        message: "Down"
      }
    ],
    activePage: 1,

  };

  setOpenItem = (name) => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  handlePageClick = (data) => {
    let currentPage = data.selected;
    this.setState({ currentPage });
  };

  getUserEventClass = (eventCode) => {
    switch (eventCode) {
      case "A4000":
        return "bg-success";
      case "A4001":
        return "bg-success";
      case "MAINT":
        return "bg-warning";
      case "not delivered":
        return "bg-warning";
      case "P4000":
        return "bg-primary";
      default:
        break;
    }
  };

  getStatusTextColor = (eventCode) => {
    switch (eventCode) {
      case "In Stock":
        return "text-success";
      case "Low Stock":
        return "text-warning";
      case "Out of Stock":
        return "text-danger";
      default:
        return "text-primary";
    }
  };

  randomText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  render() {
    let {
      cardList1,
      cardList2,
      cardList3,
      chartList1,
      chartList2,
      chartList3,
      chartList4,
      chartList5,
      chartList6
    } = this.state;

    return (
      <div>
        <Breadcrumb className="operatorNavbar"
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Log", path : "/pages/operators-log" },
            { name: "Records", path: "/pages/records" },
            { name: "12M Radio Telescope Dashboard" },
          ]}
        ></Breadcrumb>

<section className="ul-widget-stat-s1">
          <div className="row">
            {cardList1.map((card, ind) => (
              <div key={ind} className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                  <div className="card-body text-center">
                    <i className={card.icon}></i>
                    <div className="content">
                      <p className="text-muted mt-2 mb-0">{card.title}</p>
                      <p className="text-primary text-24 line-height-1 mb-2">
                        {card.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Col lg={6} md={6} sm={6} xs={12}>
              <SimpleCard title="Tabs with Icon">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab
                    eventKey="home"
                    title={customTabHeader("Home", "i-Atom")}
                  >
                    
                  </Tab>
                  <Tab
                    eventKey="profile"
                    title={customTabHeader("Profile", "i-Shutter")}
                  >
                  </Tab>
                  <Tab
                    eventKey="contact"
                    title={customTabHeader("Contact", "i-Boy")}
                  >
                  </Tab>
                  <Tab
                    eventKey="disabled"
                    title={customTabHeader("Disabled", "i-Close")}
                    disabled
                  >
                  </Tab>
                </Tabs>
              </SimpleCard>
            </Col>

        {/* <section className="ul-widget-stat-s2">
          <div className="row">
            {chartList1.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mb-4  o-hidden">
                  <div className="card-body ul-card__widget-chart">
                    <div className="ul-widget__chart-info">
                      <h5 className="heading">{item.title}</h5>
                      <div className="ul-widget__chart-number">
                        <h2 className="t-font-boldest">${item.amount}</h2>
                        <small className="text-muted">
                          46% compared to last year
                        </small>
                      </div>
                    </div>
                    <Chart
                      options={item.chart}
                      series={item.chart.series}
                      type="area"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="ul-widget-stat-s3">
          <div className="row">
            {chartList2.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mb-4  o-hidden">
                  <div className="card-body ul-card__widget-chart">
                    <div className="ul-widget__chart-info">
                      <h5 className="heading text-20  line-height-1 mb-3">
                        <i className={item.icon}></i> {item.title}
                      </h5>
                      <div className="ul-widget__chart-number">
                        <h6 className="">{item.amount.toLocaleString()}</h6>
                      </div>
                    </div>
                    <Chart
                      options={item.chart}
                      series={item.chart.series}
                      type="area"
                      height="100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {chartList3.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mb-4  o-hidden h-100">
                  <div className="card-body">
                    <div className="ul-widget__row">
                      <Chart
                        options={item.chart}
                        series={item.chart.series}
                        type={item.chart.chart.type}
                      />
                      <div className="ul-widget__content">
                        <p className=" text-mute m-0">{item.title}</p>
                        <h4 className="heading">{item.amount}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {chartList4.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mb-4  o-hidden">
                  <div className="card-body">
                    <div className="ul-widget__row-v2">
                      <Chart
                        options={item.chart}
                        series={item.chart.series}
                        type={item.chart.chart.type}
                        height="100"
                      />
                      <div className="ul-widget__content-v2">
                        <h4 className="heading mt-3">{item.amount}</h4>
                        <small className=" text-muted m-0">50% Average</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {cardList2.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="ul-widget__row">
                      <div className="ul-widget-stat__font">
                        <i className={`${item.icon} ${item.color}`}></i>
                      </div>
                      <div className="ul-widget__content">
                        <p className=" m-0">{item.title}</p>
                        <h4 className="heading">{item.amount}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {chartList5.map((item, ind) => (
              <div key={ind} className=" col-md-3 col-lg-3">
                <div className="card mt-4 mb-4  o-hidden">
                  <div className="card-body">
                    <div className="ul-widget__row-v2">
                      <Chart
                        options={item.chart}
                        series={item.chart.series}
                        type={item.chart.chart.type}
                      />
                      <div className="ul-widget__content-v2">
                        <h4 className="heading mt-3">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {chartList6.map((item, ind) => (
              <div key={ind} className=" col-md-4 col-lg-4">
                <div className="card mb-4  o-hidden">
                  <div className="card-body ul-card__widget-chart">
                    <div className="ul-widget__row-v2">
                      <div className="ul-widget__content-v2">
                        <h3 className="heading mt-3">{item.amount}</h3>
                        <small className=" text-muted m-0">{item.title}</small>
                      </div>
                      <Chart
                        options={item.chart}
                        series={item.chart.series}
                        type={item.chart.chart.type}
                        height="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ul-widget-stat-s3">
          <div className="row">
            {cardList3.map((item, ind) => (
              <div key={ind} className="col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h6 className="mb-3">{item.title}</h6>
                    <p
                      className={`text-20 text-${item.color} line-height-1 mb-3`}
                    >
                      <i className="i-Arrow-Down-in-Circle"></i> {item.message}
                    </p>
                    <small className="text-muted">{item.subtitle}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last 24h</h6>
                <p className="text-22 text-success font-weight-light mb-1">
                  13000
                </p>
                <Echart1 height="65px"></Echart1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last week</h6>
                <p className="text-22 text-danger font-weight-light mb-1">
                  65058
                </p>
                <Echart2 height="65px"></Echart2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last month</h6>
                <p className="text-22 text-success font-weight-light mb-1">
                  165058
                </p>
                <Echart3 height="65px"></Echart3>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-1">Taffic in last 3 months</h6>
                <p className="text-22 text-danger font-weight-light mb-1">
                  1065058
                </p>
                <Echart4 height="65px"></Echart4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Storage Usage</h6>
                <p className="mb-1 text-22 font-weight-light">50%</p>
                <ProgressBar
                  variant="success"
                  now={50}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 3 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Bandwith Usage</h6>
                <p className="mb-1 text-22 font-weight-light">90%</p>
                <ProgressBar
                  variant="danger"
                  now={90}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 7 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Data Usage</h6>
                <p className="mb-1 text-22 font-weight-light">60%</p>
                <ProgressBar
                  variant="warning"
                  now={60}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 5 days
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Data Usage</h6>
                <p className="mb-1 text-22 font-weight-light">60%</p>
                <ProgressBar
                  variant="info"
                  now={60}
                  style={{ height: "4px" }}
                ></ProgressBar>
                <small className="text-muted">
                  Most data used in last 4 days
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Registration/Subscription</h6>
                <p className="text-22 font-weight-light mb-1">20/80</p>
                <Echart5 height="140px"></Echart5>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Project Running/Completed</h6>
                <p className="text-22 font-weight-light mb-1">40/60</p>
                <Echart6 height="140px"></Echart6>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Registration/Subscription</h6>
                <p className="text-22 font-weight-light mb-1">20/80</p>
                <Echart7 height="140px"></Echart7>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 text-muted">Project Running/Completed</h6>
                <p className="text-22 font-weight-light mb-1">40/60</p>
                <Echart8 height="140px"></Echart8>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Project Completion Rate</h6>
                <p className="text-22 font-weight-light mb-1">
                  <i className="i-Up text-success"></i> 15%
                </p>
                <Echart9 height="60px"></Echart9>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-2 text-muted">Project Completion Rate</h6>
                <p className="text-22 font-weight-light mb-1">
                  <i className="i-Down text-danger"></i> 15%
                </p>
                <Echart10 height="60px"></Echart10>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard12m;
