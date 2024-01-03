import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import heroImg from '../images/hero-img.png';
import whyImg from '../images/why-we-section.png'
import './home.css'
import GroupHomeCards from '../components/GroupHomeCards';
import CostInfo from '../components/CostInfo';
import { useContext } from 'react';
import { Context } from '../index';

const Home = () => {
    const { user } = useContext(Context);
    return ( 
        <>
            {/* <Header/> */}
            <Container className='home_hero-section'>
                <div className="hero-section-text-box">
                    <p className="hero_section_text-box-p">Приглашаем присоединиться к нашей автошколе ДОСААФ города 
                    Быхов и начать ваше увлекательное и безопасное дорожное путешествие.</p>
                    {localStorage.isAuth? 
                    <div></div>:
                        <Button className='btn-danger hero-button red-btn'>
                            <Link to="/registration">Записаться</Link>
                        </Button>
                    }
                </div>

                <img src={heroImg} alt="" className="img-fluid hero-section-img"/>
            </Container>
                <div className="homeCards-section">
                    <p className="homeCard_section-title">Что Мы Предлагаем</p>
                    <GroupHomeCards/>
                </div>
                <div className="home_why-we_container">
                    <Container className='home_why-we-section'>
                        <img className='img-fluid' src={whyImg} alt='img'/>
                        <div className="why-we-textbox">
                            <h1>Почему Мы?</h1>
                            <p>Мы являемся официальным представителем ДОСААФ и предлагаем высококачественное обучение вождению и получение водительских прав.
                                Наша автошкола имеет богатый опыт и отличную репутацию в области подготовки водителей.</p>
                        </div>
                    </Container>
                </div>
                <div className="home_cost-section-container">
                    <p className="home_cost_section-title">
                        СТОИМОСТЬ ОБУЧЕНИЯ
                    </p>
                    <CostInfo/>
                </div>

                <div className="home_slogan-section">
                    <p>Безопасность на дорогах - наш приоритет, а ваш успех - наша гордость!</p>
                </div>
            {/* <Footer/> */}
        </>
     );
}
 
export default Home;