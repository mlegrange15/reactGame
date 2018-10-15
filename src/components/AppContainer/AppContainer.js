import React from "react";
import CityCard from "../CityCard";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import Container from "../Container";
import Header from "../Header";
import Row from "../Row";
import Col from "../Col";
import cities from "../../cities.json";
import "./AppContainer.css";

class AppContainer extends React.Component {
  state = {
    cities,
    score: 0,
    totalscore: 0,
    clickedCities: []
  };

  // handles city image clicks and logic for game
  handleClick = id => {
    this.shuffle(this.state.cities);

    if ( this.state.clickedCities.includes(id) === false) {

        this.state.clickedCities.push(id);
        console.log("this is the clicked cities array: ", this.state.clickedCities);
        console.log("this is shuffled cities: ", this.state.cities);
        this.setState({ cities, score: this.state.score + 1 });
    } else {

      if (this.state.score > this.state.totalscore) {
        alert("New High Score!");
        this.setState({ cities, score: 0, totalscore: this.state.score, clickedCities: [] });
      } else {
        alert("Sorry you lose!");
        this.setState({ cities, score: 0, clickedCities: [] });
      }
    }
  };
// funtion that shuffles the array of cities if the game is still going
  shuffle = array => {
    let control = array.length,
      temp,
      index;
    while (control > 0) {
      index = Math.floor(Math.random() * control);
      control--;
      temp = array[control];
      array[control] = array[index];
      array[index] = temp;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} totalscore={this.state.totalscore} />
        <Header />
        <Row>
          <Col size="md-12" />
        </Row>
        <Container>
          <Row>
            {this.state.cities.map((f, i) => {
              return (
                <Col size="md-2" key={f.id} id={f.id}>
                  <CityCard
                    name={f.name}
                    image={f.image}
                    nickname={f.nickname}
                    location={f.location}
                    key={f.id}
                    id={f.id}
                    handleClick={this.handleClick}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default AppContainer;
