import React, { Component } from 'react'

export default class ProvisionalReg extends Component {
  render() {
    return (
        <div className='App'>
        <h1 style={{fontWeight: 'bold', fontSize: '1cm'}}>修理は仕上がり具合による</h1>
        <h3  style={{fontWeight: 'semi-bold', fontSize: '.7cm', height: '5em'}}>治療が終わりました</h3>
        <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>閉まっている</button>
        <div style={{height: '5em'}}>
            <p style={{color: 'gray', fontFamily: '-moz-initial',marginTop: '10px'}}>Copyright Ⓒ 2018 DATT JAPAN Inc.</p>
        </div>
        
      </div>
    )
  }
}
