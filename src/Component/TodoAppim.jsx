import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function TodoAppim() {
  const [inputData, setInputData] = useState("")
  const [inputVisible, setInputVisible] = useState(false)
  const [todos, setTodos] = useState([])



  const resimTikla = () => {
    setInputVisible(!inputVisible)
  }

  const listen = (e) => {
    setInputData(e.target.value);
  };

  const add = () => {
    const updatedTodos = [...todos, inputData];
    setTodos(updatedTodos);
    localStorage.setItem("isler", JSON.stringify(updatedTodos));
  };
  

  useEffect(() => {
    let gelenTodos = JSON.parse(localStorage.getItem("isler"))
    if (gelenTodos) {
      setTodos(gelenTodos)
    }
  }, [])
  



  return (
    <div className='note'>To-Do List
      <div className='noteContent'>
        <InputGroup className="my-3 px-5 " style={{ visibility: inputVisible ? 'visible' : 'hidden' }} onKeyUp={listen}>
          <Form.Control
            placeholder="Please add a task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={listen}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={add}>
            Add
          </Button>
          {
            todos.map((element,index) => {
              return <div className='todos' key={index}>
                  <div className='todo'>
                      <h5>{element}</h5>
                  </div>
              </div>
          })
          }

        </InputGroup>
        <img src='images/notepad.png' className='noteImg' onClick={resimTikla} />


      </div>

    </div>
  )
}

export default TodoAppim