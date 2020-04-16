import React from 'react';
import '../app.charles.css';

export default class GiftSpot extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
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
        )
    }
}