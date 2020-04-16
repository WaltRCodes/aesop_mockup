import React from 'react';
import '../app.charles.css';

export default class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div id="mainHeader">
    <div id="navBar">
        <div id="leftBar"></div>Shop Read Stores Search<div id="login">Login &#9864;</div>
    </div>
    <div id="centerText">
            <div><h1>Aesop</h1></div>
            <div id="bannerMiddle"><h1>Formulations for skin, hair, home and body</h1>
            <br/><div id="underCenter"><h3>Created with sensory pleasure in mind</h3></div>
            </div>
        </div>
</div>
        )
    }
}