import { useContext, useEffect, useState} from 'react';
import { Context } from '../index';
import { fetchDrivingSchedules, fetchDrivingInstructors } from '../http/studentAPI';

const DrivingScheduleTab = () => {
  const { student } = useContext(Context);
  const [isStudent, setIsStudent] = useState();

  try {
    useEffect(() => {
      if (localStorage.studentId != null) {
        fetchDrivingSchedules(localStorage.studentId).then((data) => {
          if (data != null) {
            student.setDrivingSchedule(data);
            setIsStudent(localStorage.getItem('isStudent'));
          }
        });
        fetchDrivingInstructors().then((data) => {
          student.setDrivingInstructors(data);
        });
      }
    }, []);
    
  } catch (error) {
    console.log("ошибка в расписании вождения")
  }

  const getLectureDateTime = (lecture) => {
    if (lecture) {
      const examDate = new Date(lecture.date);
      const formattedDate = examDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return formattedDate;
    }
    return '';
  };

  const getDrivingInstructorInfo = (schedule) => {
    const instructor = student.drivingInstructors.find((item) => item.id === schedule.instructorDrivingId);
    return instructor ? `${instructor.name} ${instructor.surname}` : '';
  };

  return (
    <div>
      <h2 className="mt-4 mb-4">Расписание вождения</h2>
        <>
          {isStudent ? (
            <div className="card">
              <ul className="list-group list-group-flush">
                {student.drivingSchedule.map((lec) => (
                  <li key={lec.id} className="list-group-item">
                    <h3>Дата: {getLectureDateTime(lec)}</h3>
                    <p className="mb-1">Инструктор: {getDrivingInstructorInfo(lec)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h2 style={{ color: 'gray', textAlign: 'center' }}>Вы не проходите обучение, запишитесь на курс</h2>
          )}
        </>
      
    </div>
  );
};

export default DrivingScheduleTab;