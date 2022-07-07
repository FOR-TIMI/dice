import React, { Component } from 'react'
import './Die.css'


class Die extends Component{

    render(){
        return  (
        
        <i class={`fas fa-dice-${this.props.num} die fa-6x ${this.props.rolled ? 'animate__animated animate__shakeX' : ''}`}></i>
      
        )
    }
}
export default Die