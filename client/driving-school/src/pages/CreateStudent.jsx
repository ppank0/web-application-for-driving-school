import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
//import { useStores } from '../hooks/useStores';
import { useContext,  } from 'react';
import { Context } from '../index';
import './createStudent.css'
import { Container } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import { fetchCourse } from '../http/courseAPI';
import { fetchGroup } from '../http/studentAPI';
import { createStudent } from '../http/studentAPI';
import { useNavigate }from 'react-router-dom'
import { USER_PROFILE_ROUTE } from '../utils/consts';

const CreateStudent = observer(() => {
  //const { studentStore, categoryStore } = useStores();
  const { student, course } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    fetchCourse().then((data) => {
      course.setCourse(data);
    });
  
    fetchGroup().then((data) => {
      student.setGroup(data);
    });
  }, []);

  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [passportSeries, setPassportSeries] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [categor, setCategor] = useState('');
  const [group, setGroup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка наличия значений в обязательных полях
    if (
      name.trim() === '' ||
      surname.trim() === '' ||
      phone.trim() === '' ||
      adress.trim() === '' ||
      birthday.trim() === '' ||
      passportSeries.trim() === '' ||
      passportNumber.trim() === '' ||
      categor.trim() === '' ||
      group.trim()===''
    ) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    // Check if age is at least 16
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const age = Math.floor((currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

    if (age < 16) {
      alert('Вам должно быть больше 16');
      return;
    }
    if (categor !== group) {
        alert('Выбранная категория и группа не соответствуют друг другу!');
        return;
    }
    try {
        const formattedBirthday = new Date(birthday).toISOString();
        const Student = {
            name: name,
            patronymic: patronymic,
            surname: surname,
            phone: phone,
            adress: adress,
            birthday: formattedBirthday,
            passport_series: passportSeries,
            passport_number: passportNumber,
            userId: localStorage.userId,
            groupId: group
          };
          createStudent(Student);
          student.setStudent(Student)
          student.setIsStudent(true)
          localStorage.setItem("isStudent", true)
          localStorage.setItem('groupId', Student.groupId)
          navigate(USER_PROFILE_ROUTE);
    
        // Сброс полей формы
        setName('');
        setPatronymic('');
        setSurname('');
        setPhone('');
        setAddress('');
        setBirthday('');
        setPassportSeries('');
        setPassportNumber('');
        setCategor('');
        setGroup('');
        
    } catch (error) {
        alert(error.response.data.message);
    }
  };

  return (
    <>
        <Container className='create_student-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
                    <span>Имя:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Отчество:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Фамилия:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Номер телефона:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder= '+375 29 XXXXXXX'
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Адрес проживания:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={adress}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Дата рождения:</span>
                    <input
                        type="date"
                        className="form-control create_student_form-input"
                        id="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Серия паспорта:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={passportSeries}
                        onChange={(e) => setPassportSeries(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Номер паспорта:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Категория:</span>
                    <select
                        value={categor}
                        onChange={(e) => setCategor(e.target.value)}
                        required
                    >
                        <option value="">Выберите категорию</option>
                            {course.courses.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                            ))}
                    </select>
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Группа:</span>
                    <select
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        required
                        disabled={!categor}
                    >
                        <option value="">Выберите группу</option>
                        {student.groups.map((group) => (
                        <option key={group.id} value={group.courseId}>
                            {group.name}
                        </option>
                        ))}
                    </select>
                    </label>
                </div>
                <div className="form-row">
                    <button type="submit">Записаться</button>
                </div>
            </form>
        </Container>
    </>
  );
});

export default CreateStudent;