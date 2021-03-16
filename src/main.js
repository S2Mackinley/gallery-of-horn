import React from "react";
import HornedBeasts from "./horned-beasts";

class Main extends React.Component {
  render() {
    let data = require ('./assets/data.json');

    return (
      <div>
        
        {data.map((item) => {
          return <HornedBeasts 
          title = {item.title} 
          url = {item.image_url} 
          alt = {item.alt} 
          description = {item.description}
          horns = {item.horns}
          keywords = {item.keywords}
          />
        })}
    </div>
    );
  }
}

export default Main;
