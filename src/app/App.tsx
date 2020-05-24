import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import IntroPage from './components/intro/IntroPage';
import { IntlProvider } from 'react-intl';
import { getTranslations } from '../configuration/language';
import Footer from './components/footer/Footer';

const locale = navigator.language;

const App = () => {
  return (
    <IntlProvider locale={locale} messages={getTranslations(locale)}>
      <Navbar />
      <IntroPage />
      <Footer />
    </IntlProvider>
  );
}

export default App;
