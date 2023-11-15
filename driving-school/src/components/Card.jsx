import { Container, Button } from 'react-bootstrap';
import './card.css'
import Footer from '../components/footer/Footer';

const Card = (props) => {
    const {title, isRegistration, buttonText} = props
    return ( 
        <>
            <Container className='card-container'>
                <div className="card-box">
                    <h3 className="card-title">{title}</h3>
                    <div className="card_inputbox">
                        <input className='card-input' type="text" placeholder='EMAIL'/>
                        <input className='card-input' type="text" placeholder='PASSWORD'/>
                        {isRegistration && (
                            <input className='card-input' type="text" placeholder='CONFIRM PASSWORD' />
                        )}
                        
                    </div>
                    <Button variant='submit'>{buttonText}</Button>
                    {isRegistration && (
                        <div className="card_under-textbox">
                            <p className='small'>*Зарегистрируйтесь, чтобы записаться на обучение</p>
                            <p>Есть аккаунт? &#45;&#62;<a href="">Войти</a></p>
                        </div>
                    )}
                </div>
            </Container>

            <Footer/>
        </>
     );
}
 
export default Card;