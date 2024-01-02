import { Button, Form, Modal} from "react-bootstrap";
import { useState } from "react";
const CreateImg = ({show, hide}) => {
    return ( 
        <Modal show={show} onHide={hide}>
       <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Добавить изображение
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            type="file"
                            placeholder="Выберите файл"
                            required
                            className="mb-2"
                        />  
                        
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
 
export default CreateImg;