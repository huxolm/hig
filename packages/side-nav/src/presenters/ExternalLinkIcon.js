import React, { Component } from "react";
import PropTypes from "prop-types";
import { ExternalLinkUI } from "@hig/icons";

export default class ExternalLinkIcon extends Component {
  static propTypes = {
    /** Color of the icon */
    color: PropTypes.string
  };

  render() {
    return <ExternalLinkUI color={this.props.color} />;
  }
}
