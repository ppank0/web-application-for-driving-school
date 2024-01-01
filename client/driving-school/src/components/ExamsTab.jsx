import { useContext } from 'react';
import { Context } from '../index';
const ExamsTab = () => {
    const {student} = useContext(Context);
    const results = student.getExamResultsByStudentId(1);

    const getExamName = (examId) => {
        const exam = student.exam.find((ex) => ex.id === examId);
        return exam ? exam.name : '';
      };
    
      const getExamDate = (examId) => {
        const exam = student.exam.find((ex) => ex.id === examId);
        return exam ? exam.date : '';
      };
    
      return (
        <div>
          <h2 className='mt-4'>Зачёты/экзамены</h2>
          {student.isStudent?
          <div className="card">
            <ul className="list-group list-group-flush">
              {results.map((ex) => (
                <li key={ex.id} className="list-group-item">
                  <h3>{getExamName(ex.examId)}</h3>
                  <p className="mb-1">Дата экзамена: {getExamDate(ex.examId)}</p>
                  <p className={`mb-0 ${ex.isPassed ? 'text-success' : 'text-danger'}`}>
                    Статус: {ex.isPassed ? 'Сдан' : 'Не сдан'}
                  </p>
                </li>
              ))}
            </ul>
          </div> : <h2 className='mt-4' style={{color: 'gray', textAlign: 'center'}}>Вы не проходите обучение, запишитесь на курс</h2>
          }
        </div>
      );
    }
    
export default ExamsTab;