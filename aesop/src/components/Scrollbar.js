import React, { Component } from 'react';
{/*https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp*/}
{/*https://stackoverflow.com/questions/46233598/how-to-control-an-elements-scrollbar-in-javascript*/}
{/* https://www.w3schools.com/jsref/prop_style_position.asp */}
{/* https://www.toptal.com/designers/htmlarrows/arrows/ */}
class Scrollbar extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        let scrollBar = document.getElementsByClassName('scrollBar')[this.props.num];
        let leftButton = document.getElementsByClassName("LeftButton")[this.props.num];
        let rightButton = document.getElementsByClassName("RightButton")[this.props.num];
        // console.log(window.innerWidth, window.outerWidth);
        // console.log(scrollBar,leftButton,rightButton);
        {/*take the scrollbar component and hide the left button through a series of conditional checks*/}
        if(scrollBar.scrollLeft<=0||scrollBar.scrollLeft===null){
            leftButton.style.position = "absolute";
            leftButton.style.left="-100px"
            // console.log(leftButton.style.left);
        } else if (scrollBar.scrollLeft>=window.innerWidth-200){
            leftButton.style.position = "sticky";
            rightButton.style.right="-200px";
            // console.log(rightButton.style.right);
        } else {
            // console.log(scrollBar.scrollLeft);
            leftButton.style.position = "sticky";
            leftButton.style.left="0";
            rightButton.style.right="0";
        }
        {/*onclick for each button move he scrollbar left or right respectively*/}
        leftButton.onclick = function() {
            scrollBar.scrollLeft-=200;
            if(scrollBar.scrollLeft<=0||scrollBar.scrollLeft===null){
                leftButton.style.position = "absolute";
                leftButton.style.left="-100px"
                // console.log(leftButton.style.left);
            } else if (scrollBar.scrollLeft>=window.innerWidth-200){
                leftButton.style.position = "sticky";
                rightButton.style.right="-200px";
                // console.log(rightButton.style.right);
            } else {
                // console.log(scrollBar.scrollLeft);
                leftButton.style.position = "sticky";
                leftButton.style.left="0";
                rightButton.style.right="0";
            }
            //this.checkScrollBar(scrollBar,leftButton,rightButton);
          };
        rightButton.onclick = function() {
            scrollBar.scrollLeft+=200;
            if(scrollBar.scrollLeft<=0||scrollBar.scrollLeft===null){
                leftButton.style.position = "absolute";
                leftButton.style.left="-100px"
                // console.log(leftButton.style.left);
            } else if (scrollBar.scrollLeft>=window.innerWidth-200){
                leftButton.style.position = "sticky";
                rightButton.style.right="-200px";
                // console.log(rightButton.style.right);
            } else {
                // console.log(scrollBar.scrollLeft);
                leftButton.style.position = "sticky";
                leftButton.style.left="0";
                rightButton.style.right="0";
            }
            //this.checkScrollBar(scrollBar,leftButton,rightButton);
        };
        
    }
    
    
    render() {
        return (
            <div>
                <div className="scrollBar FadeIn">
                    <button className="LeftButton">&#8592;</button>
                    <img src={this.props.ImageOne} height="400px"/>
                    <img src={this.props.ImageTwo} height="400px" />
                    <img src={this.props.ImageThree} height="400px"/>
                    <img src={this.props.ImageFour} height="400px"/>
                    <img src={this.props.ImageFive} height="400px"/>
                    <button className="RightButton">&#8594;</button>
                </div>
                
                
            </div>
          );

    }
  
}

export default Scrollbar;
