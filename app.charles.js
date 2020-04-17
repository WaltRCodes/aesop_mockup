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
                <div id="textDiv">Subscribe</div>
                <div id="emailFieldDiv"><input type="text" value="Email address"></input></div>
            </div>
            <div id="contact">
                <br></br>
                    Orders & Support
                <br></br>
                <br></br>
                    Contact us
                <br></br>
                    FAQs
                <br></br>
                    Delivery and Returns
                <br></br>
                    Track your order
            </div>

            <div id="about">
            <br></br>
                    Orders & Support
                <br></br>
                <br></br>
                    Contact us
                <br></br>
                    FAQs
                <br></br>
                    Delivery and Returns
                <br></br>
                    Track your order
            </div>
            <div id="social">
            <br></br>
                    About
                <br></br>
                <br></br>
                    Our Story 
                <br></br>
                    Careers
                <br></br>
                    Press 
                <br></br>
                    Coorperate gifts 
            </div>
        </div>
        </div>
        )
    }

}
