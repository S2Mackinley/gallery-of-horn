import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfHearts:0
        };
    }
    render() {
    const likeImage = () => {
        this.setState({numberOfHearts: this.state.numberOfHearts + 1});
    }
        return(

        <Card style={{ width: '18rem' }}>
            <Card.Img
                    src={this.props.url} 
                    alt={this.props.alt} 
                    title={this.props.title}
                    onClick={likeImage} 
                 />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text> ❤️ {this.state.numberOfHearts}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
                
             
            </Card.Body>
        </Card>

        )
    }

}

export default HornedBeasts;
