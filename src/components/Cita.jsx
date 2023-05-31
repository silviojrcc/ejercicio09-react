import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cita = () => {
    return (
        <Card className="col-10 col-lg-3 mb-3 mx-1 p-1 bg-dark text-light">
            <Card.Header className='d-flex align-items-center'>
                <div className="circulo"></div>
                <div className='d-flex flex-column ms-3'>
                    <span>Mascota: Firulais</span>
                    <span>Dueño: Pepe</span>
                </div>
            </Card.Header>
            <div className='d-flex justify-content-around mt-3'>
                <div>
                    <p>Fecha:</p>
                    <p>Hora:</p>
                    <p>Sintomas:</p>
                </div>
                <div className='w-50'>
                    <div className='form-title'><p>dd/mm/yyyy</p></div>
                    <div className='form-title'><p>hh:mm</p></div>
                    <div className='form-title'><p>aqui van los sintomas</p></div>
                </div>
            </div>
            <Card.Footer className='p-3'>
                <Button className='float-end' variant="danger">Borrar</Button>
            </Card.Footer>
        </Card>
    );
};

export default Cita;