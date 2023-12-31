import { useContext } from 'react';
import { Context } from '../index';

const LectureScheduleTab = () => {
  const { student } = useContext(Context);
  const lectures = student.getLectureScheduleByGroupId(1);

  const getLectureDateTime = (lectureId) => {
    const lecture = lectures.find((lec)=>lec.id ===lectureId)
    return lecture ? `${lecture.date} ` : '';
  };

  const getLecturerInfo = (instructorId) => {
    const lecturer = student.getLectureInstructorById(instructorId);
    return lecturer ? `${lecturer.name} ${lecturer.surname}` : '';
  };

  return (
    <div >
      <h2 className="mt-4 mb-4">Расписание занятий</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {lectures.map((lec) => (
            <li key={lec.id} className="list-group-item">
              <h3>Дата: {getLectureDateTime(lec.id)}</h3>
              <p className="mb-1">Лектор: {getLecturerInfo(lec.instructorId)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default LectureScheduleTab;