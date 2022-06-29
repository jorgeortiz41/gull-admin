import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Dropdown } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";


class BlankPage extends Component {
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

    dateList: [
      {
        curDT : new Date().toLocaleString(),
        curD : new Date().toLocaleDateString(),
        curT  : new Date().toLocaleTimeString(),
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
            { name: "12M Operator's App" },
          ]}
        ></Breadcrumb>

        <form>
          <div className="row">
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
                {optionTime}
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
          </div>
        </form>

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
    );
  }
}

export default BlankPage;
