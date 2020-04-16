import React from 'react';
import '../app.charles.css';

export default class SoapSpotTwo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div id="anotherSoapSection">
            <div id="fragrances"></div><div id="fragranceSpotOne"></div><div id="fragranceSpotTwo"></div><div id="fragranceSpotThree"></div>
        </div>
        )
    }
}