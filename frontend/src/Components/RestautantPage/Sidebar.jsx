import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <div style={{ position: "sticky", top: 120, width: "300px" }}>
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
      </div>
    );
  }
}

export default Sidebar;
