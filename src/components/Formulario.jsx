import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import ListaCitas from './ListaCitas';
import { useForm } from 'react-hook-form';
import { validarFecha } from './validators.js';
import { useState } from 'react';

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [citas, setCitas] = useState([]);

    const onSubmit = (data) => {
        setCitas([...citas, data]);
        console.log(citas);
        reset();
    }

    const borrarCita = (citaABorrar) => {
        const nuevaListaCitas = citas.filter((cita) => {
           return cita.fecha !== citaABorrar.fecha && cita.hora !== citaABorrar.hora;
        })
        setCitas(nuevaListaCitas);
    }

    return (
        <>
            <div className='border rounded text-light mt-5'>
                <div className='p-3 text-center rounded form-title'>
                    <h2>Llenar el formulario para crear una cita</h2>
                </div>
                <div className='p-5 bg-dark'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Nombre de la mascota:</FormLabel>
                            <input className='col-md-9' placeholder='nombre de mascota' type='text' {...register("nombreMascota", {
                                required: true,
                                maxLength: 20,
                                minLength: 2,
                                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                            })}></input>
                            <div className='error-container'>
                                {errors.nombreMascota?.type === "required" && <div className='error-msg'>Debe ingresar el nombre de la mascota</div>}
                                {errors.nombreMascota?.type === "maxLength" && <div className='error-msg'>El nombre de la mascota no debe superar los 20 caracteres</div>}
                                {errors.nombreMascota?.type === "minLength" && <div className='error-msg'>El nombre de la mascota debe ser de mas de 2 caracteres</div>}
                                {errors.nombreMascota?.type === "pattern" && <div className='error-msg'>Debe ingresar un nombre válido</div>}
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Nombre del dueño:</FormLabel>
                            <input className='col-md-9' placeholder='nombre de dueño' type='text' {...register("nombreDuenio", {
                                required: true,
                                maxLength: 20,
                                minLength: 3,
                                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                            })}></input>
                            <div className='error-container'>
                                {errors.nombreDuenio?.type === "required" && <div className='error-msg'>Debe ingresar el nombre del dueño</div>}
                                {errors.nombreDuenio?.type === "maxLength" && <div className='error-msg'>El nombre del dueño no debe superar los 20 caracteres</div>}
                                {errors.nombreDuenio?.type === "minLength" && <div className='error-msg'>El nombre del dueño debe tener al menos 2 catacteres</div>}
                                {errors.nombreDuenio?.type === "pattern" && <div className='error-msg'>Debe ingresar un nombre válido</div>}
                            </div>
                        </div>
                        <div className='row mb-4 d-flex align-items-center justify-content-around'>
                            <FormGroup className='col-md-6 row'>
                                <FormLabel className='col-md-6'>Fecha:</FormLabel>
                                <input className='col-md-6' type='date' {...register("fecha", {
                                    required: true,
                                    validate: validarFecha
                                })}></input>
                                <div className='error-container'>
                                    {errors.fecha?.type === "required" && <div className='error-msg'>Debe ingresar una fecha</div>}
                                    {errors.fecha?.type === "validate" && <div className='error-msg'>La fecha no puede ser anterior a hoy y no debe pasar por dos meses la fecha actual</div>}
                                </div>
                            </FormGroup>
                            <FormGroup  className='col-md-6 row d-flex align-items-center justify-content-around'>
                                <FormLabel className='col-md-6'>Hora:</FormLabel>
                                <input className='col-md-6' placeholder='hh:mm' type='text' {...register("hora", {
                                    required: true,
                                    pattern: /^(?:[01]\d|2[0-3]):[0-5]\d$/
                                })}></input>
                                <div className='error-container'>
                                    {errors.hora?.type === "required" && <div className='error-msg'>Debe ingresar un horario</div>}
                                    {errors.hora?.type === "pattern" && <div className='error-msg'>Debe ingresar un horario en hh:mm (entre 00 y 23h y 00 y 59min)</div>}
                                </div>
                            </FormGroup>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Sintomas:</FormLabel>
                            <input className='col-md-9' placeholder='describir sintomas' type='text' {...register("sintomas", {
                                maxLength: 100,
                                min:10
                            })}></input>
                            <div className='error-container'>
                                {errors.sintomas?.type === "maxLength" && <div className='error-msg'>La cantidad de caracteres no puede ser mayor a 100</div>}
                                {errors.sintomas?.type === "minLength" && <div className='error-msg'>La cantidad de caracteres no puede ser menor a 10</div>}
                            </div>
                        </div>
                        <div><Button type="submit">Enviar</Button></div>
                    </Form>
                </div>
                <ListaCitas citas={citas} borrarCita={borrarCita}></ListaCitas>
            </div>
        </>
    );
};

export default Formulario;