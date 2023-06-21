import React, { useEffect,useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function TodoAppim() {
  
  const [inputVisible, setInputVisible] = useState(false)
  


  const resimTikla = () => {
    setInputVisible(!inputVisible)
  }

 

  return (
    <div className='note'>To-Do List
      <div className='noteContent'>
        <InputGroup className="my-3 px-5 " style={{ visibility: inputVisible ? 'visible' : 'hidden' }} onKeyUp={}>
          <Form.Control
            placeholder="Please add a task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={}>
            Add
          </Button>
          {
             
          }

        </InputGroup>
        <img src='images/notepad.png' className='noteImg' onClick={resimTikla} />


      </div>

    </div>
  )
}

export default TodoAppim