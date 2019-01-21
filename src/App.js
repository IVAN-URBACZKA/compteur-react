import React, { Component , Fragment } from 'react';
import './App.css';
import Screen from './Components/Screen'
import Button from './Components/Button'


class App extends Component {

  state = {
    num : 0
  }

  handleAdd =  () => {
     this.setState({
       state : this.state.num += 1
     })
  }

  handleLess =  () => {
    this.setState({
      state : this.state.num -= 1
    })
 }
  
  render() {
  const { num } = this.state;
  const { title } = this.props;
    return (
      <Fragment>

        
        
       <main>

       <h1>{ title }</h1>

       <Screen num={num} />

       <div className="buttons">

       <Button action={this.handleAdd} name='+' />

       <Button action={this.handleLess} name='-' />


       </div>




       </main>


       


      </Fragment>
    );
  }
}

export default App;
