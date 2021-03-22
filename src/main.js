
import React from 'react';
import HornedBeast from './hornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
  
  render() {

    return (
      <div className="beast-container">
        <CardDeck>
          {this.props.cards.map ((info, index) => (
            <div key = {index}>
              <HornedBeast
                index={index}
                title={info.title}
                url={info.image_url}
                description={info.description}
                alt={info.keyword}
                horns={info.horns}
                displayAsModal = {this.props.displayAsModal}
                />
            </div>
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Main;
