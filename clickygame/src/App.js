import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
// import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper;"
import Title from "./components/Title";
import butterfly from "./butterfly.json";
// import Card from "./components/Card";
// import Butterfilies from "./cards.json";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    butterfly,
    clickedButterfly: [],
    score: 0
  };

  // When clicked on card, the butterfly is reshuffled out of the array
  clicked = event => {
    // const currentButterfly = event.target.alt;
    // const ButterflySelected= this.state.clickedButterfly.indexOf(currentButterfly) > -1;
  };
  
  // if (ButterflySelected) {


//If clicked on previous butterfly that 
  render() {
    return (
      <Wrapper>
        <Title>Butterfilies</Title>
        {this.state.butterfly.map(butterfly => (
          <FriendCard
          clicked={this.clicked}
          id={butterfly.id}
          key={butterfly.id}
          image ={butterfly.image}
          />
        ))}
        </Wrapper>
    );
}
}

export default App;
