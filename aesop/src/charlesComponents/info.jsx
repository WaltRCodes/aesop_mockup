import React from 'react';
import '../app.charles.css';

export default class Info extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="hugeInfoDiv">
                <div id="soapsAndLinks">
                  <div id="soapsImgDiv"></div><div id="linksDiv"></div>
                </div>
                <div id="hugeInfoQuoteDiv"></div>
            </div>
        )
    }
}
