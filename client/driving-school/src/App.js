import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';

function App() {
  return (
    // <div className="App">
     
    // </div>
    <BrowserRouter>
     {/* <Header/> */}
      <AppRouter/>
     
    </BrowserRouter>
  );
}

export default App;
