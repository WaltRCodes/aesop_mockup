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
        let link = document.getElementById("veryTop");
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Shipping fees and delivery times</h3>
                <h3>Shipping Standard Complimentary</h3>
                <p>2-4 business days</p>
                <p>Order by December 16, 11:59pm EDT to ensure deliver</p>
                <p>by December 24th</p>
                <h3>Next day shipping $35</h3>
                <p>Order by 12 ET for delivery on the next working day</p>
              </div>
            </div>
          );

    }
  
}

export default Modal;
