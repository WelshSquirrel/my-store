import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Ben", phone: "123-123" },
      { id: 2, name: "Steve", phone: "123-123" },
      { id: 3, name: "James", phone: "123-123" },
      { id: 4, name: "Mark", phone: "123-123" },
      { id: 5, name: "John", phone: "123-123" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {" "}
          {this.state.pageTitle}
          <span className="badge badge-dark m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn=info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thread>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thread>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}
