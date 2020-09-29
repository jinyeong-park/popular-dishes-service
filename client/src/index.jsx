/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: block;
  font-family: Halvetica, sans-serif;
  background-color: #fff;
  width: 678px;
  height: 220px
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  margin: 0px 0px 16px;
  padding: 0px 0px 16px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  border-bottom: 1px solid #d8d9db;
`;

const Dishes = styled.div`
  display: flex;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
    this.getAllDishes = this.getAllDishes.bind(this);
  }

  componentDidMount() {
    const restaurant = Math.floor(Math.random() * 100);
    this.getAllDishes(restaurant);
  }

  getAllDishes(restrId) {
    axios.get(`/api/dishes/restaurant/${restrId}`)
      .then((result) => {
        this.setState({
          info: result.data,
        });
      });
  }

  render() {
    return (
      <Wrapper>
        <Title>Popular dishes</Title>
        <Dishes></Dishes>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('popular-dishes-section'));
