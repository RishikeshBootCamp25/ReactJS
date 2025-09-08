import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    // State initialization
    this.state = {
      name: "Priyanka",
      email: "priyanka@example.com",
      age: 25,
    };
  }

  // Event handler to update state
  updateAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div className="p-6 max-w-sm mx-auto border rounded shadow">
        <h2 className="text-2xl font-bold mb-2">User Profile</h2>
        <p>
          <span className="font-semibold">Name:</span> {this.state.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {this.state.email}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {this.state.age}
        </p>

        <button
          onClick={this.updateAge}
          className="mt-4 px-4 py-2 bg-blue-500 rounded"
        >
          Increase Age
        </button>
      </div>
    );
  }
}

export default UserProfile;
