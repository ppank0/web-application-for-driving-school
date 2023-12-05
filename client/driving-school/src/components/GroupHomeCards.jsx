import HomeCard from "./HomeCard";
import './groupHomeCards.css'
import bookIcon from '../images/homeCards-icons/book.svg'
import carIcon from '../images/homeCards-icons/Car.svg'
import driverIcon from '../images/homeCards-icons/Driver.svg'
import walletIcon from '../images/homeCards-icons/Wallet.svg'
import wheelIcon from '../images/homeCards-icons/wheel.svg'
const GroupHomeCards = () => {
    return ( 
        <div className="groupHomeCards-container">
            <div className="groupHomeCards-cards">
                <HomeCard imgSrc={carIcon} title ="НОВЫЕ АВТОМОБИЛИ"/>
                <HomeCard imgSrc={driverIcon} title ="Полный пакет документов для экзамена в ГАИ"/>
                <HomeCard imgSrc={wheelIcon} title ="Уверенное вождение"/>
                <HomeCard imgSrc={bookIcon} title ="Хорошее знание теории"/>
                <HomeCard imgSrc={walletIcon} title ="РАССРОЧКА НА 3 МЕСЯЦА"/>
            </div>
            
        </div>
        
     );
}
 
export default GroupHomeCards;