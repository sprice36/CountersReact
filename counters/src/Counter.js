import React from 'react';

//extend React.Component
class Counter extends React.Component{
 //accept props in the constructor 
 //method
 constructor(props){
   super(props);
   
   //state is my stuff. always an object
   //state property to remember "stuff"
   this.state = {
    currentValue : props.InitialValue
   };

 setInterval(this._increaseValue, 1000);

 }
 
 //always write helper functions as arrow 
 //functions. keeps the bugs away
 _increaseValue = () => {
       //calculate the new current value
      //then set the new current value in state
  
      let newCurrentValue = this.state.currentValue + 1;
      if (newCurrentValue <= this.props.finalValue){
      // console.log(newCurrentValue);
      //call this.setState,  cannot alter this.state directly
      this.setState({
        currentValue: newCurrentValue

      });
    }
 }

 /*_reportID = (event) => {
   console.log(event);
    this.props.doClick(this.props.id);
 } */
 
  //must have render method
 render(){
  //return some JSX or a call to 
  //React.createElement
  return (
    <div className='counter'
       onClick={() => {
       //this.props.doClick(this.props.id);
       this.props.doClick(this.props.id);
      }
       }>

       {this.state.currentValue}
    </div>
 );  
 }
}


//Counter is a react component
//const Counter = ({finalValue, InitialValue}) => {
  //  console.log(props);

//};

export default Counter;