import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { fetchExamResult, fetchExam } from '../http/studentAPI';
import { Spinner } from 'react-bootstrap';

const ExamsTab = observer(() => {
  const { student } = useContext(Context);
  const [isStudent, setIsStudent] = useState();
try {
  useEffect(() => {
    if (localStorage.studentId != null) {
      Promise.all([fetchExamResult(localStorage.studentId), fetchExam()]).then(
        ([examResults, exams]) => {
          student.setExamResults(examResults);
          student.setExam(exams);
          setIsStudent(localStorage.getItem('isStudent'));
        }
      );
    }
  }, []);
  
} catch (error) {
  console.log("ошибка в экзаменах")
}

  const getExamName = (examId) => {
    const exam = student.exam.find((ex) => ex.id === examId);
    return exam ? exam.name : '';
  };

  const getExamDate = (examId) => {
    const exam = student.exam.find((ex) => ex.id === examId);
    if (exam) {
      const examDate = new Date(exam.date);
      const formattedDate = examDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return formattedDate;
    }
    return '';
  };

  return (
    <div>
      <h2 className="mt-4">Зачёты/экзамены</h2>
      {isStudent ? (
        <div className="card">
          <ul className="list-group list-group-flush">
            {student.examResults.map((ex) => (
              <li key={ex.id} className="list-group-item">
                <h3>{getExamName(ex.examId)}</h3>
                <p className="mb-1">Дата экзамена: {getExamDate(ex.examId)}</p>
                <p className={`mb-0 ${ex.isPassed ? 'text-success' : 'text-danger'}`}>
                  Статус: {ex.isPassed ? 'Сдан' : 'Не сдан'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="mt-4" style={{ color: 'gray', textAlign: 'center' }}>
          Вы не проходите обучение, запишитесь на курс
        </h2>
      )}
    </div>
  );
});

export default ExamsTab;