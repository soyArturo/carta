import React, { Component } from "react";
// import ReactPageScroller from "react-page-scroller";
// import First from "./components/firstSlider";
// import Second from "./components/secondSlider";

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
        <div style={{ textAlign: "center", marginTop: "15%" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
            Bajo construccion 🚧
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            Amor si ves esto es por que no pudiste esperar hasta que lo
            terminara, pero aun asi te amo 🥰 {""}
          </p>
          <p style={{ fontSize: "1rem" }}>
            Te dejo por mientras a los perritos vengadores
          </p>
          <iframe
            title="perritos"
            src="https://giphy.com/embed/wHKRCl4HBSLHq"
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen></iframe>
        </div>

        {/* <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}>
          <First />
          <Second />
        </ReactPageScroller> */}
      </React.Fragment>
    );
  }
}

export default App;
