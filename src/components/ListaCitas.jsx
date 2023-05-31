import Cita from "./Cita";

const ListaCitas = ({ citas, borrarCita }) => {
    return (
        <div className={`rounded border border-dark p-3 my-5`}>
            <h4 className='text-light text-center'> {citas.length >= 1 ? "Citas" : "No hay citas"}</h4>
            <div className='d-flex row justify-content-around mt-4'>
                {citas.map((cita, index) => <Cita cita={cita} key={index} borrarCita={borrarCita}></Cita>)}
            </div>
        </div>
    );
};

export default ListaCitas;