import React, {component} from 'react';
import Counter from './Counter';
import Countdown from './Countdown';

//let counterValues = [42, 29, 10, 20, 30, 60];
//let counterElements = counterValues.map(convertNumToCounter);

function getRandomInt (max = 1000){
  return Math.floor(Math.random() * Math.floor(max));
}

//App is a react component
class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      //counterValues : [42, 29, 10, 20, 30, 60]
     // counterValues : [{id: 1, value : 100}] 
     counterValues : []
    };
   }
   _handleClick = () => {
     
    let newObj = {
      id : (new Date()).getTime(),
      //random value created 
      value : Math.floor(Math.random() * 10)  
    };

    //console.log('handle click');
    this.setState({
      counterValues : this.state.counterValues.concat(newObj)
    })
  };

  _deleteCounterById = (id) => {
 console.log(id);
 let theNewArray = this.state.counterValues.filter(element => element.id !== id);
 console.log(theNewArray);
 this.setState({
   counterValues : theNewArray
 })

  }

   _convertNumToCounter = (obj) => {
    if (obj.value % 2 == 0) {
    return (
    
      <Counter key={obj.id} id={obj.id}
      InitialValue={obj.value}
      doClick={this._deleteCounterById} 
      finalValue ={obj.value * 10}
        /> 
     /* <Countdown key={obj.id} id={obj.id}
      InitialValue = {obj.value}
      doClick={deleteCounterById}/> */ 
    ); 
       }
    else {
      return (
        
        /*  <Counter key={obj.id} id={obj.id}
          InitialValue={obj.value}
          doClick={deleteCounterById} />   */
          <Countdown key={obj.id} id={obj.id}
          InitialValue = {obj.value}
          finalValue = {obj.value * -10}
          doClick={this._deleteCounterById}/> 
        );
    }
  }

  render(){
    //React.createElement('div', {className: 'counter-box'}, 
    // [Counter, Counter]);
   return (<div className='container'>
          <button onClick={this._handleClick}>-</button>
          <div className='counter-box'>
             {this.state.counterValues.map(this._convertNumToCounter)} 
             </div>
            </div>  
   );
  }

}



export default App;