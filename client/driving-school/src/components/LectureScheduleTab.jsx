import { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { fetchLectureInstructors, fetchLectureSchedules } from '../http/studentAPI';
import { observer } from 'mobx-react-lite';


const LectureScheduleTab = observer(() => {
  const { student } = useContext(Context);

  useEffect(() => {
    if (localStorage.groupId != null){
      fetchLectureSchedules(localStorage.groupId).then((data) => {
        if (data != null) {
          student.setLectureSchedule(data);
        }
      });
      fetchLectureInstructors().then((data) => {
        student.setLectureInstructor(data)
      });
    }
  }, []);

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

  const getLecturerInfo = (instructor) => {
    const lecturer = student.lectureInstructors.find((item)=>item.id===instructor.instructorLectureId)
    return lecturer ? `${lecturer.name} ${lecturer.surname}` : '';
  };

  return (
    <div >
      <h2 className="mt-4 mb-4">Расписание занятий</h2>
      {localStorage.getItem('isStudent') ?
      <div className="card">
        <ul className="list-group list-group-flush">
          {student.lectureSchedule.map((lec) => (
            <li key={lec.id} className="list-group-item">
              <h3>Дата: {getLectureDateTime(lec)}</h3>
              <p className="mb-1">Лектор: {getLecturerInfo(lec)}</p>
            </li>
          ))}
        </ul>
      </div> :
      <h2 style={{color: 'gray', textAlign: 'center'}}>Вы не проходите обучение, запишитесь на курс</h2>
      }
    </div >
  );
});

export default LectureScheduleTab;