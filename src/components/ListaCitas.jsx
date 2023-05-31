import Cita from "./Cita";

const ListaCitas = () => {
    return (
        <div className={`rounded border border-dark p-3 my-5`}>
            <h4 className='text-light'>Citas</h4>
            <div className='d-flex row justify-content-around mt-4'>
                <Cita></Cita>
                <Cita></Cita>
                <Cita></Cita>
                <Cita></Cita>
            </div>
        </div>
    );
};

export default ListaCitas;