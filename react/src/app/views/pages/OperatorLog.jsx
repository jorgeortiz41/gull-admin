import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Dropdown } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
// import Form from "./@gull/components/Form/Form.js";
// import Log from "./@gull/components/Log/Log.js";


class OperatorLog extends Component {
  state = {
    newEventList: [
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

    hoursList: [
      "00:00",
      "00:30",
      "01:00",
      "01:30",
      "02:00",
      "02:30",
      "03:00",
      "03:30",
      "04:00",
      "04:30",
      "05:00",
      "05:30",
      "06:00",
      "06:30",
      "07:00",
      "07:30",
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
      "22:30",
      "23:00",
      "23:30",
    ],

    dateList: [
      {
        curDT: new Date().toLocaleString(),
        curD: new Date().toLocaleDateString(),
        curT: new Date().toLocaleTimeString(),
      }
    ],

  };

  setOpenItem = (name) => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  handlePageClick = (data) => {
    let pageNumber = data.selected;
    let offset = Math.ceil(pageNumber * this.props.perPage);
    this.setState({ offset: offset }, () => {
      console.log(data);
    });
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
      newEventList = [],
      namesList = [],
      eventCodeList = [],
      dateList = [],
      hoursList = [],
    } = this.state;

    let optionNames = namesList.map((user) =>
      <option key={user}>{user}</option>
    );

    let optionEventCodes = eventCodeList.map((event) =>
      <option key={event}>{event}</option>
    );

    let optionDate = dateList.map((date, index) =>
      <option key={date.curD}>{date.curD}</option>
    );

    let optionTime = dateList.map((date, index) =>
      <option key={date.curT}>{date.curT}</option>
    );

    let optionDateTime = dateList.map((date, index) =>
      <option key={date.curDT}>{date.curDT}</option>
    );

    let optionHours = hoursList.map((hour) =>
      <option key={hour}>{hour}</option>
    );

    return (
      <div>
        <Breadcrumb className="operatorNavbar"
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Records", path: "/pages/Records" },
            { name: "12M Dashboard", path: "/pages/12m-dashboard" },
            { name: "12M Operator's Log" },
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="col-md-2 form-group mb-3">
                <label htmlFor="picker1">Operator</label>
                <select className="form-control" placeholder="Pick your name">
                  {optionNames}
                </select>
              </div>

              <div className="col-md-2 form-group mb-3">
                <label htmlFor="picker2">date</label>
                <select className="form-control">
                  {optionDate}
                </select>
              </div>

              <div className="col-md-2 form-group mb-3">
                <label htmlFor="picker1">Time</label>
                <select className="form-control">
                  {optionHours}
                </select>
              </div>

              <div className="col-md-2 form-group mb-3">
                <label htmlFor="picker1">Event</label>
                <select className="form-control">
                  {optionEventCodes}
                </select>
              </div>

              <div className="col-md-5 form-group mb-3">
                <label htmlFor="website">Comments</label>
                <input
                  className="form-control"
                  id="comments"
                  placeholder="Comments"
                />
              </div>

              <div className="col-md-12">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-md-4 mt-3 ms-80">
            <div className="card bg-dark text-white o-hidden mb-4">
              <img
                className="card-img"
                src="/assets/images/12m-cropped.jpg"
                alt="Card"
              />
              <div className="card-img-overlay">
                <div className="text-center pt-4">
                  <h5 className="card-title mb-2 text-white">Sunny</h5>
                  <div className="separator border-top mb-2"></div>
                  <h3 className="text-white">Arecibo</h3>
                </div>
                <div className="ul-widget-card__cloud card-icon-bg">
                  <div className="ul-widget-card__head">
                    <i className="i-Cloud-Sun"></i>
                    <h1 className="m-0">
                      32 <sup>o</sup>
                    </h1>
                  </div>
                  <div className="ul-widget-card__body">
                    <div className="ul-widget-card__weather-info">
                      <span>Precipitation</span>
                      <span>6%</span>
                    </div>
                    <div className="ul-widget-card__weather-info">
                      <span>Humidity</span>
                      <span>64%</span>
                    </div>
                    <div className="ul-widget-card__weather-info">
                      <span>Wind</span>
                      <span>6 km/h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
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
                  {newEventList.map((user, index) => (
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
                  pageCount={5}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OperatorLog;
