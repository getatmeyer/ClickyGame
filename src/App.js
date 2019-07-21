import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import butterfly from "./butterfly.json";
import './App.css';

function shufflecard(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
 
class App extends Component {
  // Set this.state
  state = {
    butterfly,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    // let clickedButterflyIds = this.state.clickedButterflyIds;
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });

    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 10) {
      this.setState({ rightWrong: "You got this!" });
    }
    this.handleShuffle();
  };


handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightWrong: "Butterfilies are hard to catch. Try again!",
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let shuffledcard = shufflecard(butterfly);
  this.setState({ friends: shuffledcard });
};    


//If clicked on previous butterfly that 
  render() {
    return (
        
      <Wrapper>
        <Nav
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
        />

        <Title>Butterfilies TEST</Title>

        {this.state.butterfly.map(butterfly => (
          <FriendCard
          key={butterfly.id}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          // clicked={this.clicked}
          id={butterfly.id}
          image ={butterfly.image}
          />
        ))}
  </Wrapper>
     
    );
}
}

export default App;
