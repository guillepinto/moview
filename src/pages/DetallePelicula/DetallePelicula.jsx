import  './DetallePelicula.css'
import React from 'react'
import {Col, Row} from 'react-bootstrap';
import rottenT from '../../img/rottenTomatoes.png'
import Metta from '../../img/Metacritic.png'
import imdb from '../../img/IMDB.png'

function detallePelicula() {
return (
    <div className='DP-container d-flex'>
        <Row className='d-flex align-items-center justify-content-center' style={{margin:'0px'}}>
            <Col xs={10} sm={4} lg={4} className='DP-poster d-flex align-items-center justify-content-center'> 
            <img id="DP-poster"src='https://image.tmdb.org/t/p/original/4SMqo8Me8aCT4KAVLeG9pk8VYiN.jpg' alt="Poster Pelicula"/>
            </Col>

            <Col xs={11} sm={8} lg={8} className='DP-informacion d-flex flex-column'>
                <Row className='d-flex justify-content-left' style={{margin:'0px'}}>
                    <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                        <h2 style={{marginTop:'5px'}}> <b>Scary movie 4</b> (2006) </h2>   
                        <p>PG-13 - 14/4/2006 (US) - comedia - 1h 29m </p>
                    </Col>      
                </Row>

                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>  
                        <img src={rottenT} style={{width:'60px', alignSelf:'center'}} alt="RottenTomatoes Icon"/>
                        <p>Puntuacion de rotten Tomatoes: <b>34%</b> </p>
                    </Col> 

                    <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>
                        <img src={Metta} style={{width:'60px', alignSelf:'center'}} alt="Mettacritics Icon"/>
                        <p>Puntuacion de MetaCritics: <b>40%</b> </p>
                    </Col>  

                    <Col xs={4} sm={3} lg={3} className='DP-informacion d-flex flex-column text-center'>
                        <img src={imdb} style={{height:'60px', alignSelf:'center'}} alt="RottenTomatoes Icon"/>
                        <p>Puntuacion de Imdb: <b>5.1/10</b> </p>
                    </Col> 
                </Row>

                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                    <em>"El cuarto y último capítulo de la trilogía"</em>
                    </Col>
                </Row>

                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={12} sm={11} lg={11} className='DP-informacion d-flex flex-column text-justify'>
                    <h4>Sinopsis: </h4>
                    <p style={{textAlign:'justify'}}>Una nueva entrega de la franquicia que parodia los últimos títulos del cine americano. 
                    Esta vez, la ingenua Cindy Campbell (Anna Faris) intenta hacer carrera en la atención 
                    sanitaria a domicilio, y encuentra trabajo con una horripilante anciana que vive en una 
                    horripilante casa embrujada por una presencia fantasmal. Si a esto le añades un vecino 
                    guapetón y la amenaza de unos alienígenas que quieren dominar la tierra... el pelo 
                    rubísimo de Cindy se erizará presa del miedo más electrizante. Nuestra valiente heroína 
                    vuelve a sumergirse en la acción más enloquecida en su intento de descifrar los extraños 
                    mensajes que le llegan del más allá. Pero eso no le impide seguir buscando el amor en los sitios 
                    más inusitados y de salvar el mundo de la destrucción masiva.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>   
    );
}

export default detallePelicula;