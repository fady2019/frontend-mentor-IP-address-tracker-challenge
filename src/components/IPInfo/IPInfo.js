import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';

import styles from './IPInfo.module.css';

import IPInfoContent from './IPInfoContent';

import Spinner from '../UI/Spinner';

import Map from './Map';

const IPInfo = () => {
  const ipTrackingState = useSelector(state => state);

  let mainContent = (
    <Fragment>
      <IPInfoContent ipInfo={ipTrackingState} />
      <Map location={ipTrackingState.location} />
    </Fragment>
  );

  if (!ipTrackingState.location || ipTrackingState.isTracking) {
    mainContent = <Spinner className={styles.spinner} />;
  }

  return <main className={styles.main}>{mainContent}</main>;
};

export default IPInfo;
