import React, { Component } from 'react'
import Die from './Die'
import './rollDice.css'
import 'animate.css'


class RollDice extends Component{
   
    constructor(props){
        super(props);
        this.state={rolling: false, die1: 'one',die2: 'one'}
        this.roll = this.roll.bind(this);
       
    }

    roll(){
        const die1 = this.props.nums[Math.floor(Math.random() * 6)]
        const die2 = this.props.nums[Math.floor(Math.random() * 6)]
        this.setState({die1,die2,rolling: true});
 
    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
    }

    static defaultProps ={
        nums : ['one','two','three','four','five','six']
    }
    render(){

    
        return ( 
            <div className='rollDice'>
                <div className='rollDice-container'>
                <Die rolled={this.state.rolling} num={this.state.die1}/>
                <Die rolled={this.state.rolling} num={this.state.die2}/>
                <button disabled={this.state.rolling} className={this.state.rolling ? 'Dice-rolling' : 'Dice-button'} onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'Roll Dice'}</button>
                </div>
            </div>
        )
    }
}

export default RollDice