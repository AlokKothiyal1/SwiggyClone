import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1">
            Item 1
          </a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">
            Item2
          </a>
          <a class="list-group-item list-group-item-action" href="#list-item-3">
            Item 3
          </a>
          <a class="list-group-item list-group-item-action" href="#list-item-4">
            Item 4
          </a>
        </div>
        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          class="scrollspy-example"
        >
          <h4 id="list-item-1">Item 1</h4>
          <p>...</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>...</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>...</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
