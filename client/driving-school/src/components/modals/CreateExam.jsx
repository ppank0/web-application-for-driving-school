import { Button, Form, Modal, Spinner  } from "react-bootstrap";
import { createExam } from "../../http/studentAPI";

const CreateExam = ({show, hide}) => {

    const addExam =()=>{
        // Получение значений полей формы
        const title = document.querySelector('input[type="text"]').value;
        const date = document.querySelector('input[type="date"]').value;

        // Проверка наличия значений
        if (title && date) {
            createExam({name:title , date: date}).then(data=>{

                document.querySelector('input[type="text"]').value = '';
                document.querySelector('input[type="date"]').value = '';
    
                // Закрытие модального окна
                hide();
            })
        } else {
            // Вывод сообщения об ошибке или предупреждения, если поля не заполнены
            console.log('Заполните все поля');
        }
    }
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
                <Button variant="outline-dark" onClick={() => {addExam()}}>
                    Добавить
                </Button>
            </Modal.Footer>

            </>
             
            </Modal>
     );
}
 
export default CreateExam;