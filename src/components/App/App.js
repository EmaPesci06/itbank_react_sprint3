import './App.css';
import NavBar from '../NavBar/NavBar';
import ConversorForm from '../Conversor/ConversorForm';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';


function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <ConversorForm></ConversorForm>
      <Footer></Footer>
    </>
  );
}

export default App;
