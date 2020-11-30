import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import First from "./components/firstSlider";
import Fouth from "./components/fourthSlider";
import Second from "./components/secondSlider";
import Third from "./components/thirdSlider";

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
          <Third />
          <Fouth />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default App;
