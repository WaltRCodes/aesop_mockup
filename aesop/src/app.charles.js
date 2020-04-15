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
            <div id="giftKitWords">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
            <button>Explore Seasonal gift kits</button>
            </div>
          
            <div id="giftKitPic"></div>
        </div>
        <div id="anotherSoapSection">
            <div id="fragrances"></div><div id="fragranceSpotOne"></div><div id="fragranceSpotTwo"></div><div id="fragranceSpotThree"></div>
        </div>
        <div id="giftSection">
            <div id="giftAdvertisement"></div><div id="giftPic"></div>
        </div>
        <div></div>
        </div>
        )
    }

}