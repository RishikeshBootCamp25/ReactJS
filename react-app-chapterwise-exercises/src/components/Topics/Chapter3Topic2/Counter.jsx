import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      count: 0,
    };
  }

  // method to increment count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // method to decrement count
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="p-6 border rounded-lg shadow w-64 text-center">
        <p className="text-lg">Count: {this.state.count}</p>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={this.decrement}
            className="px-4 py-2 border-red-50 rounded"
          >
            -
          </button>
          <button
            onClick={this.increment}
            className="px-4 py-2 border-red-50 rounded"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
