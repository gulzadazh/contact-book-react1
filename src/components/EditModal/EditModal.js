import React, { useState } from 'react';
import './EditModal.css';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { IconButton } from '@material-ui/core';


const EditModal = (props) => {
    let [name, setName] = useState(props.editContact.name)
    let [surname, setSurname] = useState(props.editContact.surname)
    let [phone, setPhone] = useState(props.editContact.phone)

    console.log(props);

    function handleSave() {
        let save = {
            name, 
            surname, 
            phone,
            id: props.editContact.id
        }
        props.changeItem(save)
    }

    return (
        <div className="main-modal">
            <div style={{backgroundColor: "purple"}} className="inner-modal">
                <div className="close">
                    <button>&times;</button>
                </div>

                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
                    value={name}
                    className='inp-edit'
                />

                <input
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                    placeholder="surname"
                    value={surname}
                    className='inp-edit'
                />

                <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="phone"
                    value={phone}
                    className='inp-edit'
                />
                <IconButton onClick={handleSave}><SaveAltIcon/></IconButton>

            </div>
        </div>
    );
};

export default EditModal;