import React, { useState } from 'react';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


const ContactList = (props) => {
    let style = {
        color: "red",
        listStyleType: "none"
    }

    return (
        <ul style={style}>
            {props.contacts.map((item, index) => {
                return (
                    <li style={{backgroundColor: "lavender", textAlign: "center"}}key={item.id} className={item.status ? "completed" : "uncompleted"}>
                        <input
                            onChange={() => props.changeStatus(item.id)}
                            type="checkbox" 
                            />
                        {item.name} {item.surname} {item.phone}

                        <IconButton onClick={() => props.handleDelete(item.id)}><DeleteIcon/></IconButton>
                        <IconButton onClick={() => props.handleEdit(index)}><CreateIcon/></IconButton>

                    </li>
                )
            })}

        </ul>
    );
};

export default ContactList;

