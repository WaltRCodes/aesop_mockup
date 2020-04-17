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

                  <div id="soapsImgDiv"></div>

                  <div id="linksDiv">
                    <div className="LRlinks">
                        <br></br>
                            Discover More 
                        <br></br>
                        <br></br>
                            Kits & duets
                        <br></br>
                        <br></br>
                            Travel
                        <br></br>
                            Gift kits 
                        <br></br>
                        Skin
                    </div>
                    <div className="LRlinks">
                        <br></br>
                        <br></br>
                        <br></br>
                            Hair 
                        <br></br>
                        <br></br>
                            Cleanse
                        <br></br>
                            Condition 
                        <br></br>
                            Treat 
                    </div>

                  </div>
                </div>
             <div id="hugeInfoQuoteDiv"> 'And your very fresh shall be a great poem' <br></br>Walt Whitman</div>
            </div>
        )
    }
}
