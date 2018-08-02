import React from 'react';

//new component Countdown
class Countdown extends React.Component{

constructor(props){
    super(props);

    this.state = {
        currentValue : props.InitialValue
    };

    setInterval(this._decreaseValue, 1000);
}

//helper function _decreaseValue
_decreaseValue = () => {
    
   let newCurrentValue = this.state.currentValue - 1;
 if (newCurrentValue >= this.props.finalValue){
this.setState({
    currentValue : newCurrentValue
});
 }
//}
}

/*_reportID = (event) => {
    console.log(event);
    this.props.doClick(this.props.id);
}*/

render(){
return (
     <div className='countdown'
        onClick={(event) => {
        this.props.doClick(this.props.id);
        }}> 
  
      {this.state.currentValue}
      </div>
 );
} 


}

export default Countdown;