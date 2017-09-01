import React from 'react';
import ModalAdapter from '../../adapters/ModalAdapter';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  close = (event) => this.props.onClose(event);

  setSlotEl = (el) => {
    this.setState({ slotEl: el });
  };

  render() {
    return (
      <ModalAdapter
        body={this.props.body}
        buttons={this.props.buttons}
        headerColor={this.props.headerColor}
        open={this.props.isOpen}
        onCloseClick={this.close}
        onOverlayClick={this.close}
        title={this.props.title}
        slotEl={this.state.slotEl}
      >
        <div ref={this.setSlotEl}>{this.props.children}</div>
      </ModalAdapter>
    );
  }
}


export default Modal;