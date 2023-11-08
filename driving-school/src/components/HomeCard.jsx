
import './homeCard.css'
const HomeCard = (props) => {
    const{imgSrc, title} = props
    return ( 
        <>
            <div className="homeCard-container">
                <img src={imgSrc} alt="icon" />
                <p className="homeCrad-title">{title}</p>
            </div>
            
        </>
     );
}
 
export default HomeCard;