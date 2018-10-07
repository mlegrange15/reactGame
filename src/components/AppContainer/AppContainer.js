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
        totalscore: 0
    }

    handleClick = (id) => {
        const cities = this.state.cities.filter(city => city.id !== id);
        this.setState({ cities, score: this.state.score + 1  })        
    };

    render() {
        return (
            <Wrapper>
                <Navbar 
                    score={this.state.score}
                    totalscore={this.state.totalscore}
                />
                <Header></Header>
                <Row>
                    <Col size="md-12">
                    </Col>
                </Row>
                <Container>
                    <Row>
                        {this.state.cities.map((f, i) => {
                            return <Col size="md-4"
                                key={f.id}
                                id={f.id}
                            >
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
                        })}

                    </Row>
                </Container>
            </Wrapper>
        )
    }
};

export default AppContainer;