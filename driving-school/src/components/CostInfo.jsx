import './costInfo.css'
import { Button } from 'react-bootstrap';
import arrowImg from './../images/Arrow-sm.svg'
import CostInfoText from './CostInfoText';
const CostInfo = () => {
    return ( 
        <>
            <div className="costInfo-container">
                <div className="costInfo-cards-container">
                    <CostInfoText title="ПЕРЕПОДГОТОВКА С “B”/“C” НА “A”" cost="280p"/>
                    <CostInfoText title="Категория B" cost="800p"/>
                    <CostInfoText title="Категория С" cost="850p"/>
                    <CostInfoText title="Категория СЕ" cost="850p"/>
                    <CostInfoText title="Категория D" cost="900p"/>
                </div>
                
                <Button variant='danger costInfo-btn'>Узнать подробнее <img src={arrowImg} alt="arrow"/></Button>
            </div>
        </>
     );
}
 
export default CostInfo;