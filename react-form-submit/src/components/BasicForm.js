import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: restNameName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: restEmailName,
  } = useInput(isNotEmpty);
  useInput(isEmail);

  let fromIsValid = false;

  if (nameValid && emailValid) {
    fromIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (!fromIsValid) {
      return;
    }

    console.log("submited!!!!");
    restNameName();
    restEmailName();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        {nameHasError && <p className="error-text">Name must not be empty</p>}
        <div className={emailClasses}>
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
