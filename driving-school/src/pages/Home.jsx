import { Button, Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroImg from '../images/hero-img.png';
import './home.css'
import GroupHomeCards from '../components/GroupHomeCards';

const Home = () => {
    return ( 
        <>
            <Header/>
            <Container className='home-hero-section'>
                <div className="hero-section-text-box">
                    <p className="hero_section_text-box-p">Приглашаем присоединиться к нашей автошколе ДОСААФ города 
                    Быхов и начать ваше увлекательное и безопасное дорожное путешествие.</p>
                    <Button className='hero-button'>Записаться</Button>
                </div>

                <img src={heroImg} alt="" className="img-fluid hero-section-img"/>
            </Container>
                <GroupHomeCards/>
            <Footer/>
        </>
     );
}
 
export default Home;