import React, { Fragment, useEffect } from 'react';

import useHttp from '../../hooks/use-http';

import styles from './Header.module.css';

import { useDispatch } from 'react-redux';

import Form from '../UI/Form';
import Modal from '../UI/Modal';

const Header = () => {
  const urlBase =
    'https://geo.ipify.org/api/v2/country,city?apiKey=at_d4YZyyiCj0fpV4iRFr9Da4OsTKomW&ipAddress=';

  const { request, response, isLoading, error, clearError } = useHttp();

  const storeDispatch = useDispatch();

  useEffect(() => {
    trackIPAddressHandler('');
  }, []);

  useEffect(() => {
    if (response) {
      storeDispatch({
        type: 'TRACKIP',
        ipInfo: {
          ip: response.ip,
          isp: response.isp,
          location: response.location,
          isTracking: isLoading,
        },
      });
    }
  }, [response, isLoading]);

  const trackIPAddressHandler = ip => {
    request(urlBase + ip);
  };

  return (
    <Fragment>
      {error && (
        <Modal onClose={clearError}>
          <p>{error}</p>
        </Modal>
      )}

      <header className={styles.header}>
        <h1>IP Address Tracker</h1>

        <Form onSubmit={trackIPAddressHandler} />
      </header>
    </Fragment>
  );
};

export default Header;
