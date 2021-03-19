import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numberOfHearts: 0
    }
  }

  render () {
    const hearts = () => {
      this.setState({ numberOfHearts: this.state.numberOfHearts + 1});
    }

    const popOut = () => {
      this.props.displayAsModal(this.props.index);
    }

    return (
      <div>

        <Card 
        style={{ width: '18rem' }}
        bg="dark"
        text="light"
        >
          <Card.Img 
          src={this.props.url} 
          alt={this.props.alt} 
          title={this.props.title} 
          onClick={popOut} 
          />

          <Card.Body>
            <Card.Title onClick={hearts}>{this.props.title} ❤️ {this.state.numberOfHearts}</Card.Title>
            <Card.Text onClick={hearts}>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;