import React from 'react';
import Calculator from './components/Calculator';
import './components/Calculator.css';

// const App = () => (
//   <>
//     <Calculator />
//   </>
// );

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}
