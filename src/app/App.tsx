import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import IntroPage from './components/intro/IntroPage';
import { IntlProvider } from 'react-intl';
import { getTranslations } from '../configuration/language';
import Footer from './components/footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Recipes from './components/recipes/Recipes';

const locale = navigator.language;

const App = () => {
  return (
    <IntlProvider locale={locale} messages={getTranslations(locale)}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </IntlProvider>
  );
}

export default App;
