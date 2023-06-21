import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { Row } from 'react-bootstrap';

function TodoAppim() {
  const [inputData, setInputData] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const addTodo = () => {
    const updatedTodos = [...todos, inputData];
    setTodos(updatedTodos);
    localStorage.setItem('isler', JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    const gelenTodos = JSON.parse(localStorage.getItem('isler'));
    if (gelenTodos) {
      setTodos(gelenTodos);
    }
  }, []);

  return (
    <div className="note">
      <h3>To-Do List</h3>
      <div className="noteContent">
        <InputGroup
          className={`my-3 px-5 ${inputVisible ? 'input-visible' : 'input-hidden'}`}
          onKeyUp={handleInputChange}
        >
          <Form.Control
            placeholder="Please add a task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleInputChange}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
            Add
          </Button>
        </InputGroup>
        <img src="images/notepad.png" className="noteImg" onClick={toggleInputVisibility} />
        <Row>
          <Col>
            {todos.map((element, index) => (
              <div className="todos" key={index}>
                <Row>
                  <Col>
                    <div className="todo">
                      <ul>
                        <li>
                          <h4 className='yazi'>{element}</h4>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TodoAppim;
