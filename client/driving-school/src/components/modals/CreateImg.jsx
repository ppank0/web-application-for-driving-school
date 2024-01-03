import { Button, Form, Modal} from "react-bootstrap";
import { useState } from "react";
import { createGallery } from "../../http/galleryAPI";
const CreateImg = ({show, hide}) => {

    const addImage = () => {
        // Получение значения выбранного файла
        const fileInput = document.querySelector('input[type="file"]');
        const selectedFile = fileInput.files[0];
        console.log(selectedFile)
        // Проверка наличия выбранного файла
        if (selectedFile) {
          // Создание экземпляра FormData
            const formData = new FormData();
            formData.append('url', selectedFile);

            // Вызов функции createGallery с formData
            createGallery(formData)
            .then(() => {
            // Очистка поля ввода файла
            fileInput.value = '';

            // Закрытие модального окна
            hide();
        })
        } else {
          // Вывод сообщения об ошибке или предупреждения, если файл не выбран
          console.log('Выберите файл');
        }
      };
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
                <Button variant="outline-dark" onClick={() => {addImage() }}>
                    Добавить
                </Button>
            </Modal.Footer>
            </>    
        </Modal>
     );
}
 
export default CreateImg;