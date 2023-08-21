import React from 'react';
import {Link, useRouteError} from 'react-router-dom';
import Header from '../components/Header';
import '../style/Error.scss';

function Error() {

  const error = useRouteError();

  return (
    <div className='error'>
      <Header />
      <div className='error-content'>
        <span>{error.status}</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className='redirect'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
      
  );
}

export default Error;