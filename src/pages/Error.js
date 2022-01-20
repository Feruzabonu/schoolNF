import React, { Component } from 'react'
import error from './error.png'
export default class Error extends Component {
  render() {
    return (
      <div style={{width:'100%', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'darkblue', flexDirection:'column'}}>
        <img src={error} alt="..." style={{width:'40%'}}/>
        <h4 style={{color:'white'}}>Saytda texnik ishlar olib borilayotganligi sababli vaqtincha faoliyat ko'rsatmaydi !!!</h4>
      </div>
    )
  }
}
