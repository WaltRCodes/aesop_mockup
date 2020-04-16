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
</div>
        )
    }
}