import React, { useState } from 'react';
import AddContactBook from './components/AddContactBook/AddContactBook'
import ContactList from './components/ContactList/ContactList'
import EditModal from './components/EditModal/EditModal';
import './index.css'

function App() {

  const [contact, setContact] = useState([])
  const [modal, setModal] = useState(false)
  const [editContact, setEditModal] = useState({})

  function onChangeInput(value) {
    let arr = [...contact]
    arr.push(value)
    setContact(arr)
  }

function changeStatus(id){
  let newContact = contact.map(item => {
    if(item.id === id){
      item.status = !item.status
    }
    return item
  })
  setContact(newContact)
}

function handleDelete(id){
  let newContact = contact.filter(item => {
    return item.id !== id
  })
  setContact(newContact);
}

function handleEdit(index){
  setModal(true)
  setEditModal(contact[index])
}
function changeItem(save){
  let newContact = contact.map(item => {
    if(item.id === save.id){
      return save
    }
    return item
  })
  setContact(newContact)
  setModal(false)
}


  return (
    <div className="App" >
      <AddContactBook
        onChangeInput={onChangeInput} />

      <ContactList
        contacts={contact}
        changeStatus={changeStatus}
        handleDelet e={handleDelete}
        handleEdit={handleEdit}
      />
        {modal? <EditModal
        editContact={editContact}
        changeItem={changeItem}
        />: 
        null}
    </div>
  );
}

export default App;
