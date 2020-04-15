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
            <div id="giftAdvertisement"><h3>An odyssey of gifts, for generous and<br/>inspred giving</h3>
                <div id="giftAdLinkOne">Seasonal Gift Kits</div>
                <br/>
                <div id="giftAdLinkTwo">Aesop favorites</div>
                <br/>
                <div id="giftAdLinkThree">Small gestures</div>
                <br/>
                <div id="giftAdLinkFour">Generous offerings</div>
                <br/>
                <div id="giftAdLinkFive">Fragrant formulations</div>
                <br/>
                <div id="giftAdLinkSix">Treats for self</div>
                <br/>
                <div id="giftAdLinkSeven">All gifts</div>
             </div>
                <div id="giftPic"></div>
        </div>
        <div id="dailyCleansingSection">
            <div id="dailyCleansingAd"></div><div id="CleansingPicOne"></div><div id="CleansingPicTwo"></div><div id="CleansingPicThree"></div>
        </div>
        <div id="emptySection"></div>
        <div id="smallTextSpot">
            <div id="leftSideText"></div><div id="rightSideText"></div>
        </div>
        <div id="imageDiv">
            <div id="divImage">

            </div>
        </div>
            <div id="nurturingFormsDiv">
                <div id="nurDivInfo"></div><div id="nurDivItemOne"></div><div id="nurDivItemTwo"></div><div id="nurDivItemThree"></div><div id="nurDivItemFour"></div><div id="nurDivItemFive"></div>
            </div>
            <div id="hugeInfoDiv">
                <div id="soapsAndLinks">
                  <div id="soapsImgDiv"></div><div id="linksDiv"></div>
                </div>
                <div id="hugeInfoQuoteDiv"></div>
            </div>
        <div id="footer">
            <div id="emailDiv">
                <div id="textDiv">I would like to receive communications about Aesop procucts, services, stores, events and matters <br/> of cultural interest</div>
                <div id="emailFieldDiv"><input type="text" value="Email address"></input></div>
            </div>
            <div id="contact"></div>
            <div id="about"></div>
            <div id="social"></div>
        </div>
        <div id="trademarkSection">
<div id="trademarkName">&copy; Aesop</div><div id="unitedStates">UnitedStates</div>
        </div>
        </div>
        )
    }

}