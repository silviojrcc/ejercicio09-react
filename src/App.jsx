import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
    <div>
      <Container>
        <h1 className='text-light m-3'>Admministrador pacientes de veterinaria</h1>
        <Formulario></Formulario>

      </Container>
    </div>
    </>
  )
}

export default App;
