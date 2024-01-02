import { useContext } from 'react';
import { Context } from '../index';
import { CREATE_STUDENT_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';

const CabinetTab = () => {
  const { student, user } = useContext(Context);
  const group = student.getGroupById(student.student.groupId);
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Мой кабинет</h1>
      <div className="card">
        <div className="card-body">
          {student.isStudent ? (
            <div>
              <h2 className="card-title">Информация о студенте</h2>
              <p className="card-text">Имя: {student.student.name}</p>
              <p className="card-text">Фамилия: {student.student.surname}</p>
              <p className="card-text">Отчество: {student.student.patronymic}</p>
              <p className="card-text">Группа: {group.name}</p>
            </div>
          ) : (
            <div>
              <h2 className="card-title">Email: {user.user.email}</h2>
              <Link to={CREATE_STUDENT_ROUTE}>
                <button className="btn red-btn mt-2" style={{backgroundColor:'var(--red)', color:'white' }}>Записаться на обучение</button>
              </Link>
            </div> 
          )}
        </div>
      </div>
    </div>
  );
}
 
export default CabinetTab;