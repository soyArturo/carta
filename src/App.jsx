import React, { Component } from "react";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import First from "./components/firstSlider";
import Second from "./components/secondSlider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
    };
  }
  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };
  render() {
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}>
          <First />
          <Second />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default App;
