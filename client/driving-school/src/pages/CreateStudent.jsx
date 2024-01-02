import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
//import { useStores } from '../hooks/useStores';
import { useContext } from 'react';
import { Context } from '../index';
import './createStudent.css'
import { Container } from 'react-bootstrap';
import Footer from '../components/footer/Footer';

const CreateStudent = observer(() => {
  //const { studentStore, categoryStore } = useStores();
  const { studentStore, category } = useContext(Context);

  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [passportSeries, setPassportSeries] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [categor, setCategor] = useState('');

//   useEffect(() => {
//     // Загрузка категорий из базы данных при монтировании компонента
//     categoryStore.fetchCategoriesFromDatabase();
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка наличия значений в обязательных полях
    if (
      name.trim() === '' ||
      surname.trim() === '' ||
      phone.trim() === '' ||
      address.trim() === '' ||
      birthday.trim() === '' ||
      passportSeries.trim() === '' ||
      passportNumber.trim() === '' ||
      categor.trim() === ''
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
    // Создание нового студента
    const newStudent = {
      name,
      patronymic,
      surname,
      phone,
      address,
      birthday,
      passport_series: passportSeries,
      passport_number: passportNumber,
      categor,
    };

    // Сохранение студента в StudentStore
    studentStore.setStudent(newStudent);

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
  };

  return (
    <>
        <Container className='create_student-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
                    <span>Name:</span>
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
                    <span>Patronymic:</span>
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
                    <span>Surname:</span>
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
                    <span>Phone:</span>
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
                    <span>Address:</span>
                    <input
                        className='create_student_form-input'
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    <span>Birthday:</span>
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
                    <span>Passport Series:</span>
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
                    <span>Passport Number:</span>
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
                    <span>Category:</span>
                    <select
                        value={categor}
                        onChange={(e) => setCategor(e.target.value)}
                        required
                    >
                        <option value="">Выберите категорию</option>
                            {category.categories.map((item) => (
                            <option key={item.id}>{item.name}</option>
                            ))}
                    </select>
                    </label>
                </div>
                <div className="form-row">
                    <button type="submit">Записаться</button>
                </div>
            </form>
        </Container>
        {/* <Footer/> */}
    </>
  );
});

export default CreateStudent;