import { Container, Row, Col , Nav, Link, Tab} from "react-bootstrap";
import './userProfile.css'
import CabinetTab from "../components/CabinetTab";
import ExamsTab from "../components/ExamsTab";
import LectureScheduleTab from "../components/LectureScheduleTab";
import DrivingScheduleTab from "../components/DrivingScheduleTab";

const scheduleArray = [
  { id: 0, value: 'Мой кабинет' },
  { id: 1, value: 'Зачёты/экзамены' },
  { id: 2, value: 'Расписание лекций' },
  { id: 3, value: 'Расписание вождения' }
];
const UserProfile = () => {
    return ( 
        <div>
          <Container >
            <Tab.Container defaultActiveKey={scheduleArray[0].id}>
              <Row className="mt-2">
                  <Col className="user_profile-container" sm={4}>
                    <Nav variant="pills" className="d-flex flex-column mt-2">
                    {scheduleArray.map(item=>
                      <Nav.Item key={item.id}>
                        <Nav.Link
                          eventKey={item.id}
                          className="nav-link_user_profile"
                        >
                            {item.value}
                          </Nav.Link>
                        </Nav.Item>)}</Nav>
                  </Col>
                  <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey={scheduleArray[0].id}>
                          <CabinetTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey={scheduleArray[1].id}>
                          <ExamsTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey={scheduleArray[2].id}>
                          <LectureScheduleTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey={scheduleArray[3].id}>
                          <DrivingScheduleTab />
                        </Tab.Pane>
                    </Tab.Content>
                  </Col>
              </Row>
            </Tab.Container>
        </Container>
        </div>
     );
}
 
export default UserProfile;

