import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Dropdown } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import Form from "./@gull/components/Form/Form.js";
// import Log from "./@gull/components/Log/Log.js";


class Records extends Component {
  state = {
    EventsList: [
      {
        name: "Phil Perillat",
        comment: "Observation has been delayed by 15 minutes",
        eventCode: "A4000",
      },
      {
        name: "P.K Manoharan",
        comment: "The sun is hot",
        eventCode: "A4001",
      },
      {
        name: "Felix Fernandez",
        comment: "Upgrading cryogenic frontend",
        eventCode: "MAINT",
      },
      {
        name: "Phil Perillat",
        comment: "Observation has been delayed by 15 minutes",
        eventCode: "A4000",
      },
      {
        name: "P.K Manoharan",
        comment: "The sun is hot",
        eventCode: "P4000",
      },
      {
        name: "Felix Fernandez",
        comment: "Upgrading cryogenic frontend",
        eventCode: "MAINT",
      },
      {
        name: "Felix Fernandez",
        comment: "Upgrading cryogenic frontend",
        eventCode: "MAINT",
      },
      {
        name: "P.K Manoharan",
        comment: "The sun is hot",
        eventCode: "P4000",
      },
      {
        name: "Phil Perillat",
        comment: "Observation has been delayed by 15 minutes",
        eventCode: "A4000",
      },
    ],

    namesList: [
      "Phil Perillat",
      "P.K Manoharan",
      "Felix Fernandez",
    ],

    eventCodeList: [
      "A4000",
      "A4001",
      "P4000",
      "MAINT",
    ],

    dateList: [
      {
        curDT : new Date().toLocaleString(),
        curD : new Date().toLocaleDateString(),
        curT  : new Date().toLocaleTimeString(),
      }
    ],

    itemPerPage: 6,
    currentPage: 0,

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

  render() {
    let {
      EventsList = [],
      namesList = [],
      eventCodeList = [],
      dateList = [],
      itemPerPage,
      currentPage,
    } = this.state;

    let optionNames = namesList.map((user) =>
        <option key={user}>{user}</option>
    );

    let optionEventCodes = eventCodeList.map((event) =>
        <option key={event}>{event}</option>
    );

    let optionDate = dateList.map((date,index) =>
        <option key={date.curD}>{date.curD}</option>
    );

    let optionTime = dateList.map((date,index) =>
        <option key={date.curT}>{date.curT}</option>
    );

    let optionDateTime = dateList.map((date,index) =>
        <option key={date.curDT}>{date.curDT}</option>
    );

    return (
      <div>
        <Breadcrumb className="operatorNavbar"
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Log", path : "/pages/operators-log" },
            { name: "12M Operations Records" },
          ]}
        ></Breadcrumb>

<div className="row mb-4">
          <div className="col-xl-10">
            <div className="navbar navbar-expand-lg navbar-light navbar-component rounded">
              <div className="text-center d-lg-none w-100">
                <button
                  type="button"
                  className="task-manager-button navbar-toggler text-white"
                  data-toggle="collapse"
                  data-target="#navbar-filter"
                >
                  <i className="i-Filter-2"> </i>
                </button>
              </div>

              <div className="navbar-collapse collapse" id="navbar-filter">
                <div className="filter-mobile">
                  <span className="navbar-text fw-semibold ">Filter:</span>
                </div>

                <ul className="navbar-nav flex-wrap">
                  <Dropdown className="nav-item mx-2">
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <Link className="navbar-nav-link" to="#">
                        <i className="i-Time-Window "> </i> By date
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show all</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Today</Dropdown.Item>
                      <Dropdown.Item>Yesterday</Dropdown.Item>
                      <Dropdown.Item>This week</Dropdown.Item>
                      <Dropdown.Item>This month</Dropdown.Item>
                      <Dropdown.Item>This year</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="nav-item mx-2">
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <Link className="navbar-nav-link" to="#">
                        <i className="i-Bar-Chart-2 "></i> By event
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show all</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Open</Dropdown.Item>
                      <Dropdown.Item>On hold</Dropdown.Item>
                      <Dropdown.Item>Resolved</Dropdown.Item>
                      <Dropdown.Item>Closed</Dropdown.Item>
                      <Dropdown.Item>Duplicate</Dropdown.Item>
                      <Dropdown.Item>Invalid</Dropdown.Item>
                      <Dropdown.Item>Wontfix</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="nav-item mx-2">
                    <Dropdown.Toggle
                      as="span"
                      className="toggle-hidden cursor-pointer"
                    >
                      <Link className="navbar-nav-link" to="#">
                        <i className="i-Arrow-Turn-Right "></i> By shift
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Show all</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Highest</Dropdown.Item>
                      <Dropdown.Item>High</Dropdown.Item>
                      <Dropdown.Item>Normal</Dropdown.Item>
                      <Dropdown.Item>Low</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="card o-hidden mb-4">
          <div className="card-header d-flex card-title align-items-center mb-0">
            <h3 className="w-50 float-left m-0">Operations Log</h3>
          </div>

          <div className="table-responsive">
            <Table
              hover
              id="user_table"
              className="table dataTable-collapse text-center"
            >
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Name</th>
                  <th scope="col">Event</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {EventsList
                .slice(
                    currentPage * itemPerPage,
                    (currentPage + 1) * itemPerPage
                  )
                .map((user, index) => (
                  <tr key={optionDateTime}>
                    <th scope="row">{optionDateTime}</th>
                    <td>{user.name}</td>
                    <td>
                      <span
                        className={`badge ${this.getUserEventClass(
                          user.eventCode
                        )}`}
                      >
                        {user.eventCode}
                      </span>
                    </td>
                    <td>{user.comment}</td>
                    <td>
                      <span className="cursor-pointer text-success mr-2">
                        <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                      </span>
                      <span className="cursor-pointer text-danger mr-2">
                        <i className="nav-icon i-Close-Window font-weight-bold"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="px-3 pb-3 mt-3 d-flex flex-row justify-content-end">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(EventsList.length / itemPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={itemPerPage}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Records;
