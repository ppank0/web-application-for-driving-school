import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import StudentStore from './store/StudentStore';
import CourseStore from './store/CourseStore';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GalleryStore from './store/GalleryStore';


export const Context  = createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    student: new StudentStore(),
    course : new CourseStore(),
    images : new GalleryStore()
  }}>
    <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>
  </Context.Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

