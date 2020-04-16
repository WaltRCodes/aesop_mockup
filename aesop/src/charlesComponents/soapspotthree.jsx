import React from 'react';
import '../app.charles.css';

export default class SoapSpotThree extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div id="dailyCleansingSection">
            <div id="dailyCleansingAd"></div><div id="CleansingPicOne"></div><div id="CleansingPicTwo"></div><div id="CleansingPicThree"></div>
        </div>
        )
    }
}