import './App.css';
import Navi from './layouts/Navi';
import Hrms from './layouts/Hrms';
import Footer from './layouts/Footer';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container maxW='container.xl'>
       <Hrms/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
