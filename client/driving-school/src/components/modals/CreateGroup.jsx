import { Button, Form, Modal} from "react-bootstrap";
import { useState } from "react";
import { useContext, useEffect } from 'react';
import { Context } from '../../index';
import { fetchCourse } from '../../http/courseAPI';
import { createGroup } from "../../http/studentAPI";

const CreateGroup = ({show, hide}) => {
    const {course} = useContext(Context);

    const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [_course, setCourse] = useState('');

  useEffect(()=>{
    fetchCourse().then(data=>course.setCourse(data))
  }, [])

  const addGroup = () => {
    // Проверка наличия значений
    if (groupName && groupSize && _course) {
      createGroup({name:groupName, quantity: groupSize, courseId: _course})
      setGroupName('');
      setGroupSize('');
      setCourse('');
  
      hide();
    } else {
      console.log('Заполните все поля');
    }
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
                            {course.courses.map((item) => (
                                <option key={item.id} value={item.id}>
                                {item.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button className="ms-2" variant="outline-danger" onClick={hide}>
                    Отмена
                </Button>
                <Button variant="outline-dark" onClick={() => {addGroup()}}>
                    Добавить
                </Button>
            </Modal.Footer>

            </>
             
            </Modal>
     );
}
 
export default CreateGroup;