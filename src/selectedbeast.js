import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render(){  
    return (
        <Modal 
        show={this.props.show} 
        onHide={this.props.handleClose}
        >
          <Modal.Dialog>
            {/* <Modal.Header closeButton></Modal.Header> */}
            <Modal.Body>
              <Card className="text-right"
                bg="dark"
                text="light"
                onClick={this.displayAsModal}
              >
              <Card.Img 
              src={this.props.favoriteBeast.image_url} 
              width={430} alt="some horned animal"
              />
              </Card>
              <Card.Text>
                {this.props.favoriteBeast.description}
              </Card.Text>
            </Modal.Body>

            <Modal.Footer>
            <Button 
            onClick={this.props.handleClose} 
            variant="danger">Close</Button
            >
            <Button 
            onClick={this.props.handleClose} 
            variant="primary">Save</Button
            >
            </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;