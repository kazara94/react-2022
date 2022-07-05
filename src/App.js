import "./styles/reset.css";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import { ReactComponent as Bear } from './assets/svg/bear.svg';
import panda from './assets/images/panda.jpeg';

//** i18Next */
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const resources = {
  en: {
    translation: require('./i18n/en.json')
  },
  fr: {
    translation: require('./i18n/fr.json')
  },
  ka: {
    translation: require('./i18n/ka.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

export default function App() {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    handleLanguageChange(language);
  }, [language]);
  const { t } = useTranslation();

  function handleLanguageChange(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="App">
      <Header />
      <div className="MainContent">
        <h3>{t('Welcome to React')}</h3>
        <button onClick={()=> setLanguage('en')}>En</button>
        <button onClick={()=> setLanguage('fr')}>Fr</button>
        <button onClick={()=> setLanguage('ka')}>Ka</button>
        <button onClick={() => language === 'en' ? setLanguage('ka') : setLanguage('en')}>Change Language</button>
        <Bear className="Bear"/>
        <img className="Panda" src={panda} alt="Panda" />
        <div className="bgImage"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path='Products' element={<Products />} />
          <Route path="Products/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
