import React, { Component } from "react";
import { Breadcrumb } from "@gull";
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
import { Row, Col, Tab, Tabs, Nav, Dropdown, Accordion } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import StackedPolarBar from "./StackedPolarBar";
import StackedPolarBar2 from "./StackedPolarBar2";


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
        title: "Mode",
        amount: "pwrOFF"
      },
      {
        icon: "i-Bar-Chart",
        color: "text-danger",
        title: "ast",
        amount: "16:26:01.0"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "lmst",
        amount: "10:30:36.6"
      },
      {
        icon: "i-Bookmark",
        color: "text-warning",
        title: "mjd",
        amount: "59759"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "POS",
        amount: "09:53:09.3 ra, 7:55:35.7 dec"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "reqP",
        amount: "220.8009 az, 76.3556 el"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "curP",
        amount: "201.5009 az, 78.5649 el"
      },
      {
        icon: "i-Full-Cart",
        color: "text-success",
        title: "errP",
        amount: "18.9771 az, -2.4106 el"
      },
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
        title: "STAT",
        subtitle: "Last down 4 days ago",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "OK"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "MODE",
        subtitle: "Last up 1 days ago",
        color: "danger",
        message: "pwrOff"
      },
      {
        title: "RA",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "9:53:09.3"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "DEC",
        color: "danger",
        message: "7:55:35.7"
      },
    ],
    cardList4: [
      {
        title: "AST",
        subtitle: "Atlantic Standard Time",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "16:26:01.0"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "LMST",
        subtitle: "Local Mean Sidereal Time",
        color: "danger",
        message: "10:30:36.6"
      },
      {
        title: "MJD",
        subtitle: "Mean Julian Day",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "59759"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "POS",
        subtitle: "Source Position",
        color: "danger",
        message: "09:53:09.3 ra, 7:55:35.7 dec"
      },
      {
        title: "ReqP",
        subtitle: "requested az deg, el deg",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "220.8009, 76.3556"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "CurP",
        subtitle: "current az deg, el deg",
        color: "danger",
        message: "201.5009, 78.7662"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "ErrP",
        subtitle: "error az deg, el deg, totErr",
        color: "danger",
        message: "18.9771, -2.4106, 68865.7\""
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "vHel",
        subtitle: "km/sec",
        color: "danger",
        message: "-22.4581"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "vGeo",
        subtitle: "km/sec",
        color: "danger",
        message: "-0.0688"
      },

    ],
    cardList5: [
      {
        title: "yymmdd",
        subtitle: "year, month, day",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "07/14/22"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "if1frq",
        subtitle: "MHz",
        color: "danger",
        message: "1500"
      },
      {
        title: "vlbaFrq",
        subtitle: "MHz",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "2000"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "gainIF",
        subtitle: "dB",
        color: "danger",
        message: "-5 -5"
      },
      {
        title: "mix1Frq",
        subtitle: "requested az deg, el deg",
        icon: "i-Arrow-Up-in-Circle",
        color: "success",
        message: "1175.0000"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "mix2Frq",
        subtitle: "current az deg, el deg",
        color: "danger",
        message: "1175.0000"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "mix3Frq",
        subtitle: "error az deg, el deg, totErr",
        color: "danger",
        message: "1175.0000"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "mix4Frq",
        subtitle: "km/sec",
        color: "danger",
        message: "1175.0000"
      },
      {
        icon: "i-Cube-Molecule-2",
        title: "mix5Frq",
        subtitle: "km/sec",
        color: "danger",
        message: "1175.0000"
      },

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
      cardList4,
      cardList5,
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
            { name: "Log", path: "/pages/operators-log" },
            { name: "Records", path: "/pages/records" },
            { name: "12M Radio Telescope Dashboard" },
          ]}
        ></Breadcrumb>

        <div className="row">
          <Col lg={8} md={8} sm={8} xs={8}>
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

            <div className="row">
            <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                <SimpleCard className="h-100" title="12m Azimuth">
                  <StackedPolarBar />
                </SimpleCard>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
                <SimpleCard className="h-100" title="12m Elevation">
                  <StackedPolarBar2 />
                </SimpleCard>
              </Col>
            </div>

            <SimpleCard title="12M Status">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab
                  eventKey="home"
                  title={customTabHeader("Monitor Broadcast", "i-Atom")}
                >
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
                </Tab>
                <Tab
                  eventKey="profile"
                  title={customTabHeader("Pointing requested position", "i-Shutter")}
                >
                  <div className="row">
                    {cardList4.map((item, ind) => (
                      <div key={ind} className="col-md-6">
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
                </Tab>
                <Tab
                  eventKey="contact"
                  title={customTabHeader("Downstairs if/lo", "i-Boy")}
                >

                  <div className="row">
                    {cardList5.map((item, ind) => (
                      <div key={ind} className="col-md-6">
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

                </Tab>
              </Tabs>
            </SimpleCard>
          </Col>

          <Col lg={4} md={2} sm={2} xs={2}>
            <div className="card bg-dark text-white o-hidden mb-2">
              <img
                className="card-img"
                src="/assets/images/12m-cropped.jpg"
                alt="Card"
              />
            </div>

            <div className="card bg-primary">
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-12 col-md-12">
                    <div className="text-white ">
                      <h4 className="card-title text-white">Arecibo</h4>
                      <h5 className="font-light text-white">
                        Tuesday July 19, 2022
                      </h5>
                      <h3 className="font-light text-white">12:00:00 AM</h3>
                    </div>
                    <div className="mt-4">
                      <span className="text-white">
                        <i className="i-Cloud-Sun display-4"></i>
                      </span>
                      <div className="d-inline-block ms-3">
                        <h2 className="text-white"> 29° C</h2>
                        <h4 className="text-white">Day Rain</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ul-weather-card__weather-info text-white mt-4">
                  <div className="row text-center">
                    <div className="col-6 col-md-2">
                      <div className="">SAT</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        12 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">SUN</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">MON</div>
                      <div className="">
                        <i className="i-Cloud-Weather"></i>
                      </div>
                      <div className="">
                        17 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">TUE</div>
                      <div className="">
                        <i className="i-Clouds"></i>
                      </div>
                      <div className="">
                        23 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">WED</div>
                      <div className="">
                        <i className="i-Clouds-Weather"></i>
                      </div>
                      <div className="">
                        27 <sup>o</sup>C
                      </div>
                    </div>
                    <div className="col-6 col-md-2">
                      <div className="">THU</div>
                      <div className="">
                        <i className="i-Cloud-Sun"></i>
                      </div>
                      <div className="">
                        38 <sup>o</sup>C
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Accordion className="mb-3 mt-8" defaultActiveKey="navigation">
              <Accordion.Item eventKey="navigation">
                <Accordion.Header className="w-100" eventKey="search">
                  Navigation
                </Accordion.Header>
                <Accordion.Body eventKey="navigation">
                  <div id="custom-toggle3">
                    <p className="card-text">Actions</p>

                    <div className="list-group">
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                      >
                        <span className="custom-font">
                          <i className="i-Add-Window"> </i>
                        </span>
                        Telescope Schedule
                      </Link>
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action "
                      >
                        <i className="i-Empty-Box"> </i> Upcoming Projects
                      </Link>
                      <Link
                        to="https://www.naic.edu/ao/projects-dashboard"
                        className="list-group-item list-group-item-action"
                      >
                        <i className="i-Edit"> </i> Projects Dashboard
                      </Link>
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                      >
                        <i className="i-Add-User"> </i> 12m Control Program
                      </Link>
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                      >
                        <i className="i-Business-Mens"> </i> Phil's 12m Page
                      </Link>
                    </div>
                    <div className="mb-4"></div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Col>

        </div>
      </div>
    );
  }
}

export default Dashboard12m;
