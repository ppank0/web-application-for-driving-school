import { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { CREATE_STUDENT_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';
import { fetchStudent, fetchGroup } from '../http/studentAPI';
import { observer } from 'mobx-react-lite';


const CabinetTab = observer(() => {
  const { student, user } = useContext(Context);

  const [name, setName] = useState();
  const [patronymic, setPatronymic] = useState();
  const [surname, setSurname] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isStudent, setIsStudent] = useState()
 
  try {
    if(localStorage.userId!==null){
      useEffect(() => {
        fetchStudent(localStorage.userId).then((data) => {
          if (data != null) {
            student.setStudent(data);
            setName(data.name);
            setPatronymic(data.patronymic);
            setSurname(data.surname);
            setIsStudent(localStorage.getItem("isStudent"))
          }
        });
        fetchGroup().then((data) => {
          student.setGroup(data);
          setDataLoaded(true);
        });
      }, []);
    }
    
  } catch (error) {
    console.log("ошибка в кабинете " +error)
  }

  let groupName = "";
  if (dataLoaded && student.student && student.student.groupId) {
    const groupObj = student.getGroupById(student.student.groupId);
    if (groupObj && groupObj.name) {
      groupName = groupObj.name;
    } else {
      console.log("Поле name не определено");
    }
  }
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Мой кабинет</h1>
      <div className="card">
        <div className="card-body">
          {dataLoaded ? (
            isStudent
             ? (
              <div>
                <h2 className="card-title mb-3">Информация о студенте</h2>
                <p className="card-text">Имя: {name}</p> <hr className="mb-2" />
                <p className="card-text mt-1">Отчество: {patronymic}</p> <hr className="mb-2" />
                <p className="card-text">Фамилия: {surname}</p> <hr className="mb-2" />
                <p className="card-text">Группа: {groupName}</p>
              </div>
            ) : (
              <div>
                <h2 className="card-title">Email: {user.user.email}</h2>
                <Link to={CREATE_STUDENT_ROUTE}>
                  <button
                    className="btn red-btn mt-2"
                    style={{ backgroundColor: "var(--red)", color: "white" }}
                  >
                    Записаться на обучение
                  </button>
                </Link>
              </div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
});

export default CabinetTab;