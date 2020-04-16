import React from 'react';
import '../app.charles.css';

export default class FindStore extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <div>
        <div id="emptySection"></div>
        <div id="smallTextSpot">
            <div id="leftSideText"></div><div id="rightSideText"></div>
        </div>
   </div>
        )
    }
}