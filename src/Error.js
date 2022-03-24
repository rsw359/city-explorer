import React from "react";
import { Modal, Button } from "react-bootstrap";

class ErrorModal extends React.Component {

  render() {
    return ( 

      <Modal
        show={this.props.modalDataState}      
      >
        <Modal.Header>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.errorCode}: Please type a valid city name</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>CLOSE</Button>
        </Modal.Footer>
        
      </Modal>

    )
  }
}

export default ErrorModal;