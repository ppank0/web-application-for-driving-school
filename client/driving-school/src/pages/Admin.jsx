import { Container, Button } from "react-bootstrap";
import CreateExam from "../components/modals/CreateExam";
import CreateGroup from "../components/modals/CreateGroup";
import CreateImg from "../components/modals/CreateImg";
import { useState } from "react";

const Admin = () => {
    const[examVisible, setExamVisible] =useState(false)
    const[groupVisible, setGroupVisible] =useState(false)
    const[imgVisible, setImgVisible] =useState(false)
    return ( 
        <Container className="d-flex flex-column" style={{minHeight:"70vh"}}>
            <Button variant="outline-dark"
             className="mt-2"
             onClick={()=> setExamVisible(true)}
            >Добавить экзамен</Button>

            <Button variant="outline-dark"
             className="mt-2" 
             onClick={()=> setGroupVisible(true)}>Добавить группу</Button>
            <Button variant="outline-dark"
            className="mt-2" onClick={()=> setImgVisible(true)}>Добавить изображение</Button>

            <CreateExam show={examVisible} hide={()=>setExamVisible(false)}/>
            <CreateGroup show={groupVisible} hide={()=>setGroupVisible(false)}/>
            <CreateImg show={imgVisible} hide={()=>setImgVisible(false)}/>
        </Container>
     );
}
 
export default Admin;