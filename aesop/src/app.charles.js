import React from 'react';
import './app.charles.css';

export default class charles extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
        <div id="veryTop"></div>
        <div id="mainHeader"></div>
        <div id="soapSpot">
            <div id="soapwords"></div><div id="soapSpotOne"></div><div id="soapSpotTwo"></div><div id="soapSpotThree"></div>
        </div>
        <div id="noSoapSpot"></div>
        <div id="giftKitdiv">
            <div id="giftKitWords"></div><div id="giftKitPic"></div>
        </div>
        <div></div>
        <div></div>
        </div>
        )
    }

}