import { Button, Form, Modal, Spinner  } from "react-bootstrap";

const CreateExam = ({show, hide}) => {
    return ( 
        <Modal show={show} onHide={hide}>
       <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Добавить экзамен
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                       <Form.Control className="mt-2" type="text"
                           placeholder="Название" />
                        <Form.Control className="mt-2" type="date" 
                            placeholder="Укажите дату" />
                                
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
 
export default CreateExam;