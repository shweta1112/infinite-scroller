import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import InfiniteScroll from "react-infinite-scroller";

class Scroll2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 1000,
      hasMoreItems: true
    };
  }

  showItems() {
    var items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(<li key={i}> Item {i} </li>);
    }
    return items;
  }

  loadMore() {
    if (this.state.items === 200) {
      this.setState({ hasMoreItems: false });
    } else {
      setTimeout(() => {
        this.setState({ items: this.state.items + 1000 });
      }, 1000);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>{" "}
        </header>
        <div style={{ height: "1000px", overflow: "auto" }}>
          <InfiniteScroll
            loadMore={this.loadMore.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={<div className="loader"> Loading... </div>}
            useWindow={false}
          >
            {this.showItems()}{" "}
          </InfiniteScroll>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Scroll2;
