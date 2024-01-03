import { Container } from "react-bootstrap";
import {Row, Col} from "react-bootstrap"
import { useContext } from 'react';
import { Context } from '../index';
import { fetchGallery } from "../http/galleryAPI";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Pages from "../components/Pages";

const Gallery =  observer(() => {
    const { images } = useContext(Context);

  useEffect(()=>{
    fetchGallery(1,8).then(data => {
        images.setImages(data.rows)
        images.setTotalCount(data.count)
  })
  }, [])

  useEffect(()=>{
    fetchGallery(images.page, 8).then(data => {
        images.setImages(data.rows)
        images.setTotalCount(data.count)
  })
  }, [images.page])

    return ( 
        <>
        <Container style={{minHeight:"70vh", margin:'5vh auto'}}>
            <h1 style={{textAlign:'center', color:'var(--darkgray)', marginBottom:'5vh', fontWeight:'normal'}}>ФОТОГАЛЕРЕЯ</h1>
            <hr style={{ backgroundColor: 'var(--darkgray)', height: '5px', border: 'none', borderStyle: 'solid' }} />
            <Row>

                {images.images.map((image) => (
                <Col key={image.id} sm={6} md={3} className="mb-2">
                    <img style={{width:'318px', height:'222px'}} src={process.env.REACT_APP_API_URL+image.url} alt="" />
                </Col>
                ))}
            </Row>
        </Container>
            <Pages />
        </>
     );
})
 
export default Gallery;