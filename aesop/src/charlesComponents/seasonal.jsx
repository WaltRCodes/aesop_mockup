import React from 'react';
import '../app.charles.css';

export default class Seasonal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="giftKitdiv">
                <div id="giftKitWords">
                    <h3>Lorem ipsum Lorem ipsum </h3>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur Lorem  <br/>
                <button>Explore Seasonal gift kits &rarr;</button>
                </div>
            
                <div id="giftKitPic"></div>
            </div>
        )
    }
}