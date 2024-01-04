import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)


  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
