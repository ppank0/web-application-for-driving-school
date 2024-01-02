import { Button, Form, Modal} from "react-bootstrap";
import { useState } from "react";
import { useContext } from 'react';
import { Context } from '../../index';

const CreateGroup = ({show, hide}) => {
    const {course} = useContext(Context);

    const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [_course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь обработку отправки формы, сохранение данных или другую логику
    console.log('Отправлено:', groupName, groupSize, course);
    // Сбросить значения полей формы
    setGroupName('');
    setGroupSize('');
    setCourse('');
  };

    return ( 
        <Modal show={show} onHide={hide}>
       <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Добавить группу
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="Введите название группы"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            required
                            className="mb-2"
                        />  
                        <Form.Control
                            type="number"
                            placeholder="Введите количество человек"
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}
                            required
                            className="mb-2"
                        />      
                        <Form.Select
                            value={_course}
                            onChange={(e) => setCourse(e.target.value)}
                            required
                            >
                            <option value="">Выберите курс</option>
                            {course.courses.map((item)=>(
                                <option key={item.id}>{item.name}</option>
                            ))}
                            
                            </Form.Select>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button className="ms-2" variant="outline-danger" onClick={hide}>
                    Отмена
                </Button>
                <Button variant="outline-dark" onClick={() => { }}>
                    Добавить
                </Button>
            </Modal.Footer>

            </>
             
            </Modal>
     );
}
 
export default CreateGroup;