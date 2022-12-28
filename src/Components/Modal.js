import React,{useState, useEffect} from "react";
import "./Modal.css";
import Dropdown from "./Dropdown";

function Modal({ setOpenModal }) {

  const [dropdown, setDropdown] = useState();

  const [dropdownList, setDropdownList] = useState([]);

  const [dropdowns, setDropdowns] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  // GET selected value to store it in array
  const [selectedValue, setSelectedValue] = useState('');

  // get every choosen value from dropdown
  // const [value, setValue] = useState("");

  const addDropdown = () => {
    let newDropdown = {
      id: Math.random(),
      options: [
        { name: 'First Name'},
        { name: 'Last Name'},
        { name: 'Gender'},
        { name: 'Age'},
        { name: 'Account Name'},
        { name: 'City'},
        { name: 'State'},

      ]
    };
    setDropdowns([...dropdowns, newDropdown]);
    //alert(newDropdown.options.name)
  };

  useEffect(() => {
    const getDropdownList = async () => {
      const list = [
        { name: 'First Name'},
        { name: 'Last Name'},
        { name: 'Gender'},
        { name: 'Age'},
        { name: 'Account Name'},
        { name: 'City'},
        { name: 'State'},
        ];
  
      setDropdownList(list);
      // alert(list[0]["name"])
    };    
    getDropdownList();
  }, []);

        
      // const response = await fetch('/api/dropdownList');
      // const list = await response.json();

  const handleChange = (e, key) => {
    const getSelectedValue = e.target.value;
    const newSelectedOptions = { ...selectedOptions };
    
    // newSelectedOptions[key] = e.target.value;
    // setSelectedOptions(newSelectedOptions);


    // alert (JSON.stringify(getSelectedValue)); //jn
    // alert(getSelectedValue);
  
  };



  // const handleChange = (e) => {

    // setValue(e.target.value);
  // };

  // const handleButtonClick = () => {


  //  setDropdown(
  //   <select> 
         
  //         {/* {value} */}
  //         {dropdownList.map(item => (
  //         <option key={item.id} value={item.value}>
  //           {item.name}
  //         </option>
  //       ))}
         
  //   </select>
     
  //   );
  // };


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
        <p>Enter the name of the segment</p>
        </div>
        <div className="body">
        <div className="nameField">
            <input type="text"/>
          </div>

          <div>
            <p>To save your segment, you need to add the schemas to build the query</p>
          </div>

          <div><ul id="menu"><li><span class="dot2"></span><span>-</span>User Traits</li> <li><span class="dot1"></span><span>-</span>Group Traits</li></ul></div>
                    
          {dropdown}
         
        {/* <Dropdown/> */}
        <div>
      <select onChange={(e) => handleChange(e, 'option1')}
        value={selectedOptions.option1}>
        {dropdownList.map(item => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      </div>

      {/* <button className="btn btn-success" onClick={handleButtonClick}>+Add new schema</button> */}

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
           <div>
      <button className="linkcss" onClick={addDropdown}>+Add new schema</button>
      {dropdowns.map(dropdown => (
        <select  onChange={(e) => handleChange(e, 'option2')}
        value={selectedOptions.option1} key={dropdown.id}>
          {dropdown.options.map(option => (
            <option key={option.id}>{option.name}</option>
          ))}
        </select>
      ))}
    </div>

    <div className="footer">
            <button className="btncss">Save segment</button>
              <button onClick={()=> setOpenModal(false)} className="cancelbtncss">Cancel</button>
    </div>
     

        </div>
      </div>
    </div>
  );
}

export default Modal;