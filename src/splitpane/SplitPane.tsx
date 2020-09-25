import React, { Component } from "react";

export class SplitPane extends Component {
  collapsePane = (index: number) => {
    console.log("Collapse Pane", index);
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        SplitPane
        {children}
        SPlitPANE
      </div>
    );
  }
}
