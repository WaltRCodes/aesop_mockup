import React from 'react';
import '../app.charles.css';

export default class Seasonal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="giftKitdiv">
            <div id="giftKitWords">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
            <button>Explore Seasonal gift kits &rarr;</button>
            </div>
          
            <div id="giftKitPic"></div>
            </div>
        )
    }
}