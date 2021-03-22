
import React from 'react';
import HornedBeast from './hornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Horns from './assets/data.json'
import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  filterHorns = (event) => {
    const selectedHorn = parseInt(event.target.value);
    let newList = Horns;
    if (selectedHorn) {
      newList = Horns.filter(animal => animal.horns === selectedHorn)
    }
    this.props.handleFilter(newList)
  };

  filterType = (event) => {
    const selectedType = event.target.value;
    let newList = Horns;
    if (selectedType) {
      newList = Horns.filter(animal => {
        if (selectedType === 'all') {
          return animal
        } else {
          return animal.keyword === selectedType
        }
      })
    }
    this.props.handleFilter(newList)
  };

  keywordArray = [];

  createKeywords = () => {
    Horns.forEach(beast => {
      if (!this.keywordArray.includes(beast.keyword)) {
        this.keywordArray.push(beast.keyword)
      }
    })
  };


  render() {
    this.createKeywords()
    return (
      <div className="beast-container">
                  <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Filter By Horns</Form.Label>
              <Form.Control as="select" onChange={this.filterHorns}>
                <option value="">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">ALl THE HORNS</option>
              </Form.Control>
            </Form.Group>
          </Form>

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