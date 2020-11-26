import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const AddContactBook = (props) => {

    let [value1, setValue1] = useState("");
    let [value2, setValue2] = useState("");
    let [value3, setValue3] = useState("");

    function handleClick() {
        let obj = {
            name: value1,
            surname: value2,
            phone: value3,
            id: Date.now(),
            status: false
        }
        props.onChangeInput(obj)
        setValue1("")
        setValue2("")
        setValue3("")

    }


    return (
        <div style={{backgroundColor: "purple", textAlign: "center", margin: "30px"}}>
            <input value={value1} 
            onChange={e => setValue1(e.target.value)} 
            type="text" 
            placeholder="Enter your name"/>

            <input value={value2} 
            onChange={e => setValue2(e.target.value)} 
            type="text" 
            placeholder="Enter your surname"/>

            <input value={value3} 
            onChange={e => setValue3(e.target.value)} 
            type="text" 
            placeholder="Enter your mobile number"/>
            <IconButton onClick={handleClick}><AddCircleOutlineIcon/></IconButton>
        </div>
    )
};
export default AddContactBook;