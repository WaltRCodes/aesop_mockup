import React, { Component } from 'react';

{/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_bottom */}
class Modal extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        {/* the modal on the page is hidden and is only shown via button clicks*/}
        let modal = document.getElementsByClassName("modal")[0];
        let thex = document.getElementsByClassName("thex")[0];
        let link = document.getElementById("hoverThis");
        link.onclick = function() {
            modal.style.display = "block";
          };
        thex.onclick = function() {
            modal.style.display = "none";
          };
    }
    render() {
        return (
            <div className="modal">
              <div className="modalSideBar">
                
                <span className="thex">&times;</span>
                some text inside
              </div>
            </div>
          );

    }
  
}

export default Modal;
