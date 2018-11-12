import * as React from 'react';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import './App.scss';

export const App = () => (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
);
