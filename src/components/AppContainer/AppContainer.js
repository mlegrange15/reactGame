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

  handleClick = id => {
    this.shuffle(this.state.cities);

    let alreadyClicked = this.state.clickedCities;
    console.log("Already clicked = " , alreadyClicked.includes(id));

    if ( alreadyClicked === false) {

        this.state.clickedCities.push(id);
        console.log("this is the clicked cities array: ", this.state.clickedCities);
        console.log("this is shuffled cities: ", this.state.cities);
        this.setState({ cities, score: this.state.score + 1 });
    } else {

        console.log("Add logic to reset the game and check if the total high score was beaten!");
        
    }
  };

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

  handleTotalScore = () => {};

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
