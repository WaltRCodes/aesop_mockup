import React from 'react';
import '../app.charles.css';

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div id="trademarkSection">
<div id="trademarkName">&copy; Aesop</div><div id="unitedStates">UnitedStates</div>
        </div>        )
    }
}