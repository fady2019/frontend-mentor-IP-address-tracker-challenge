import React, { useEffect, useRef, useState } from 'react';

import styles from './IPInfoContent.module.css';

const IPInfoContent = props => {
  const [showContent, setShowContent] = useState(true);

  const infoRef = useRef();

  const windowScrollHandler = () => {
    const pos = infoRef.current.getBoundingClientRect();
    const top = pos.top;

    if (top < -30) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  };

  useEffect(() => {
    document
      .getElementById('root')
      .addEventListener('scroll', windowScrollHandler);
  }, []);

  const ipInfo = props.ipInfo;

  return (
    <ul
      ref={infoRef}
      className={`${styles['ip-info-content']} ${
        !showContent && styles.hidden
      }`}
    >
      <li>
        <span>ip address</span>
        <span>{ipInfo.ip}</span>
      </li>

      <li>
        <span>location</span>
        <span>{`${ipInfo.location.country}, ${ipInfo.location.city}`}</span>
      </li>

      <li>
        <span>timezone</span>
        <span>{ipInfo.location.timezone}</span>
      </li>

      <li>
        <span>isp</span>
        <span>{ipInfo.isp}</span>
      </li>
    </ul>
  );
};

export default IPInfoContent;
