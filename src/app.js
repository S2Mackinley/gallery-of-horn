import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './assets/data.json';
import SelectedBeast from './selectedbeast.js';
import './hornedBeast.css';
// import FormInfo from './forminfo.js';
import './form.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: data,
      displayModal: false,
      favoriteBeast: {},
    }
  } 


  displayAsModal = (index) => this.setState ({favoriteBeast: this.state.newData[index], displayModal: true});
  
  handleClose =() => this.setState({displayModal: false});
  
  handleFilter = (newData) => {
    console.log(newData)
    this.setState({ newData })
  }


  render () {
    return (
      <div>
        <header>
          <Header />
          <Main
          cards={this.state.newData}
          displayAsModal={this.displayAsModal}
          handleFilter={this.handleFilter}
          />
          <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          favoriteBeast={this.state.favoriteBeast}
          />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
