import React from 'react';
import './HomePage.scss';
import { Header } from '../../components/Header';
import { CurrentExhibitions } from '../../components/CurrentExhibitions';
import { CurrentEvents } from '../../components/CurrentEvents';
import { Plan } from '../../components/Plan';
import { NewsComponent } from '../../components/NewsComponent';
import { Subscribe } from '../../components/Subscribe';
import { Footer } from '../../components/Footer';

type Props = {
  lang: string,
  handleLangChange: (e: {target: {value: React.SetStateAction<string>;};}) => void,
};

export const HomePage: React.FC<Props> = ({ lang, handleLangChange }) => {
  return (
    <div className="container">
      <Header lang={lang} handleLangChange={handleLangChange} />
      <CurrentExhibitions />
      <CurrentEvents />
      <Plan />
      <NewsComponent />
      <Subscribe />
      <Footer />
    </div>
  );
};
