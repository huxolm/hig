import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import stylesheet from "./Menu.stylesheet";

export default function MenuPresenter(props) {
  const { innerRef, isOpen, children, ...otherProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          {...otherProps}
          ref={innerRef}
          className={css(stylesheet(props, resolvedRoles))}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

MenuPresenter.propTypes = {
  // innerRef: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.node
};
