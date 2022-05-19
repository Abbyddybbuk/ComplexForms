import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredName.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredNameAbhijeet = enteredName.trim() === 'Abhijeet';

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    console.log("NAME CHANGED " + event.target.value);
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <select name="name" id="names" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}>
          <option value="Test1">Test1</option>
          <option value="Test2">Test2</option>
          <option value="Abhijeet">Abhijeet</option>
          <option value="Test4">Test3</option>
        </select>
        {/* <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} /> */}
        {nameInputIsInvalid && <p className='error-text'>Name cannot be empty</p>}
      </div>
      <div>
        <input disabled={!enteredNameAbhijeet} type='text' id='generalText' />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputIsInvalid && <p className='error-text'>Please enter a valid email id</p>}
      </div>
    </form>
  );
};

export default SimpleInput;
