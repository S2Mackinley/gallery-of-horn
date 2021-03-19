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
          {/* <Modal.Dialog> */}
            <Modal.Header closeButton>
            {this.props.favoriteBeast.title}
            </Modal.Header>
            <Modal.Body>
              <Card 
                bg="dark"
                text="light"
                onClick={this.displayAsModal}
              >

              <Card.Img 
              src={this.props.favoriteBeast.image_url} 
              width={430} alt="some horned animal"
              />

              
              <Card.Text>
                {this.props.favoriteBeast.description}
              </Card.Text>
              
              </Card>
            </Modal.Body>

            <Modal.Footer>
            <Button 
            onClick={this.props.handleClose} 
            variant="danger">Close</Button
            >

            </Modal.Footer>
        {/* </Modal.Dialog> */}
      </Modal>
    )
  }
}

export default SelectedBeast;