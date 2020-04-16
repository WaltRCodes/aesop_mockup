import React from 'react';
import './app.charles.css';

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
        <div id="footer">
            <div id="emailDiv">
                <div id="textDiv">I would like to receive communications about Aesop procucts, services, stores, events and matters</div>
                <div id="emailFieldDiv"><input type="text" value="Email address"></input></div>
            </div>
            <div id="contact"></div>
            <div id="about"></div>
            <div id="social"></div>
        </div>
        </div>
        )
    }

}