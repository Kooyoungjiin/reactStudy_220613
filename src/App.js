import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>      
        <Hello color="pink" />
      </Wrapper>
    );
}

export default App;
