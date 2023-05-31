import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import ListaCitas from './ListaCitas';

const Formulario = () => {
    return (
        <>
            <div className='border rounded text-light mt-5'>
                <div className='bg-black p-3 text-center rounded'>
                    <h2>Llenar el formulario para crear una cita</h2>
                </div>
                <div className='p-5 bg-dark'>
                    <Form>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Nombre de la mascota:</FormLabel>
                            <input className='col-md-9' placeholder='nombre de mascota' type='text'></input>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Nombre del dueño:</FormLabel>
                            <input className='col-md-9' placeholder='nombre de dueño' type='text'></input>
                        </div>
                        <div className='row mb-4 d-flex align-items-center justify-content-around'>
                            <FormGroup className='col-md-6 row'>
                                <FormLabel className='col-md-6'>Fecha:</FormLabel>
                                <input className='col-md-6' type='date'></input>
                            </FormGroup>
                            <FormGroup  className='col-md-6 row d-flex align-items-center justify-content-around'>
                                <FormLabel className='col-md-6'>Hora:</FormLabel>
                                <input className='col-md-6' placeholder='hh:mm' type='text'></input>
                            </FormGroup>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Sintomas:</FormLabel>
                            <input className='col-md-9' placeholder='describir sintomas' type='text'></input>
                        </div>
                    </Form>
                </div>
                <ListaCitas></ListaCitas>
            </div>
        </>
    );
};

export default Formulario;