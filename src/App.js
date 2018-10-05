import React from "react";
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import cities from "./cities.json";
import "./App.css";

class App extends React.Component {

  state = {
    cities
  }

  handleX = (id) => {
   const cities = this.state.cities.filter( city => city.id !== id);
   this.setState({ cities })
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Cities List</h1>
        {this.state.cities.map((f, i) => {

          return <CityCard
            name={f.name}
            image={f.image}
            nickname={f.nickname}
            location={f.location}
            key={f.id}
            id={f.id}
            handleX = {this.handleX}
          />
        })}
      </Wrapper>
    )
  }
};

export default App;
