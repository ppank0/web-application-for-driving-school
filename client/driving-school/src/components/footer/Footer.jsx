import vkIcon from '../../images/Vk.svg'
import odnoclassnikiIcon from '../../images/Odnoklassniki.svg'
import mailIcon from '../../images/Mail.svg'
import './footer.css'
const Footer = () => {
    return ( 
        <>
            <div className="footer-container">
                <div className="footer-work-time">
                    <p className="footer_work-time-title">Время работы:</p>
                    <p className="footer_work-time-p">пн-пт 08:00–17:00,<br />
                    перерыв 12:00–13:00</p>
                </div>
                <div className="footer_container-socials">
                    <div className="footer-socials">
                       <a href=""><img src={vkIcon} alt="vk"/></a> 
                       <a href=""><img src={odnoclassnikiIcon} alt="odn"/></a> 
                       <a href=""><img src={mailIcon} alt="mail"/></a> 
                    </div>
                    <p className="footer_socials-p">Разработка сайта: <a href="https://github.com/ppank0">ppank0</a></p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;