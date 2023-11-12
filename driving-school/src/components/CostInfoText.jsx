import arrow from './../images/Arrow-long.svg'
import './costInfoText.css'
const CostInfoText = (props) => {
    const{title,cost } = props
    return ( 
        
        <div className="costInfoText-container">
            <li className='costInfoText-text'>{title}</li>
            <img src={arrow} alt="arrow"/>
            <p className='costInfoText-cost'>{cost}</p>
        </div>
         
        
     );
}
 
export default CostInfoText;