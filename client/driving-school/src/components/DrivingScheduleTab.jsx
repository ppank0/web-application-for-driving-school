import { useContext } from 'react';
import { Context } from '../index';

const DrivingScheduleTab = () => {
  const { student } = useContext(Context);
  const drivingSchedule = student.getDrivingScheduleByStudentId(1);

  const getDrivingInstructorInfo = (instructorId) => {
    const instructor = student.getDrivingInstructorById(instructorId);
    return instructor ? `${instructor.name} ${instructor.surname}` : '';
  };

  return (
    <div >
      <h2 className="mt-4 mb-4">Расписание вождения</h2>
      {student.isStudent ? 
      <div className="card">
        <ul className="list-group list-group-flush">
          {drivingSchedule.map((lec) => (
            <li key={lec.id} className="list-group-item">
              <h3>Дата: {lec.date}</h3>
              <p className="mb-1">Инструктор: {getDrivingInstructorInfo(lec.instructorDrivingId)}</p>
            </li>
          ))}
        </ul>
      </div>
      : <h2 style={{color: 'gray', textAlign: 'center'}}>Вы не проходите обучение, запишитесь на курс</h2>
      }
    </div >
  );
};

export default DrivingScheduleTab;