import { useRef } from 'react';
import styles from './Form.module.css';

const Form = props => {
  const inputRef = useRef();

  const submissinHandler = event => {
    event.preventDefault();

    props.onSubmit(inputRef.current.value);
  };

  return (
    <form
      onSubmit={submissinHandler}
      className={`${props.className} ${styles.form}`}
    >
      <div className={styles.input}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button></button>
      </div>
    </form>
  );
};

export default Form;
