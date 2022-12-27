import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
        <input type="text"/>
        </div>
        <div className="body">
        <div className="nameField">
            <input type="text"/>
          </div>

          <div>
            <p>To save your segment, you need to add the schemas to build the query</p>
          </div>

          <div><p>User traits</p> <p>Group traits</p></div>
          <div>  <select> <option value="">First Name</option></select> </div>
          <div>  <select> <option value="">Account Name</option></select> </div>
          <div>  <select> <option value="">Add Schema to Segment</option></select> </div>

        {/* <p>To save your segment, you need to add the schemas to build the query</p>
        <p>User traits</p> <p>Group traits</p>
        <span>  <select> <option value="">First Name</option></select> </span>
        </div>
        <div className="footer">
        <button className="btncss">Save the segment</button>
           <button onClick={()=> setOpenModal(false)} className="cancelbtncss">Cancel</button> */}

          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;