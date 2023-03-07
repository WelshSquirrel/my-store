import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Ben",
        phone: "673-825",
        address: { city: "London" },
        photo: "https://picsum.photos/id/200/60",
      },
      {
        id: 2,
        name: "Steve",
        phone: "254-857",
        address: { city: "Manchester" },
        photo: "https://picsum.photos/id/234/60",
      },
      {
        id: 3,
        name: "James",
        phone: "473-893",
        address: { city: "London" },
        photo: "https://picsum.photos/id/894/60",
      },
      {
        id: 4,
        name: "Mark",
        phone: null,
        address: { city: "Liverpool" },
        photo: "https://picsum.photos/id/534/60",
      },
      {
        id: 5,
        name: "John",
        phone: "123-433",
        address: { city: "London" },
        photo: "https://picsum.photos/id/256/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn=info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Number</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((customer) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="Customer" />
          </td>
          <td
            style={{
              backgroundColor: customer.name.startsWith("M") ? "green" : "red",
            }}
          >
            {customer.name}
          </td>
          <td>{this.getPhoneToRender(customer.phone)} </td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };
}
