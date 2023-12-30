import { Container } from "react-bootstrap";
import './services.css'

const Services = (props) => {
    const{name, description, price, duration} = props
    return ( 
        <Container>
            <h1 className="service-name">{name}</h1> <span></span>
            <hr />
            <div className="service-container">
                <p>{description}</p>
                <div className="price-dur-container">

                    <h3>Цена: <span className="service-price">{price}</span></h3> 
                    <h3>Продолжительность: <span>{duration}</span ></h3>
                </div>
            </div>
            
           
        </Container>
     );
     
}
 

export default Services;