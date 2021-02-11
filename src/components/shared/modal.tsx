import React, { FunctionComponent, useEffect, useRef } from 'react';

import styles from '../../assets/scss/_modal.module.scss';

interface IModal {
  isActive: boolean;
  setActive: Function;
}

const modal: FunctionComponent<IModal> = ({ children, isActive, setActive }) => {
  const modalElement = useRef(null);

  useEffect(() => {
    if (isActive) {
      const scrollY = window.scrollY;
      const body = document.getElementById('__next');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      modalElement.current.style.display = 'block';
      console.dir(modalElement)

      setTimeout(() => {
        modalElement.current.style.opacity = '1';
        const modalContainer = modalElement.current.firstChild;
        modalContainer.style.top = '50%';
      }, 100);
    } else {
      const body = document.getElementById('__next');
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      const modalContainer = modalElement.current.firstChild;
      modalContainer.style.top = '-50%';
      modalElement.current.style.opacity = '0';

      setTimeout(() => {
        modalElement.current.style.display = 'none';
      }, 300)
    }
  }, [isActive]);

  return (
    <div
      ref={modalElement}
      className={styles.modalBackground}>
      <div id="modalContainer" className={styles.modalContainer}>
      {
        children
      }
      <button className={`confirm-button`} onClick={(event) => {event.preventDefault(); setActive(false)}}>Ok</button>
      </div>
    </div>
  );
}

export default modal;