import { useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
      display: "block",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      color: "#fff",
    },
  },
};

const PhoneBookForm = (props) => {
  const init = {
    id: null,
    firstName: "Coder",
    lastName: "byte",
    phoneNumber: "000",
  };

  const [userData, setUserData] = useState(init);

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "lastName" || name === "firstName") {
      const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
      value = value.replace(regExp, "");
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  let formIsValid = false;

  const inputBlurHandler = (event) => {
    event.target.value.length === 0
      ? (formIsValid = false)
      : (formIsValid = true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      alert("정보를 모두 입력해야 등록할 수 있습니다");
      return;
    }
    console.log(userData);
    props.addUserData(userData);
    setUserData(init);
  };

  return (
    <form onSubmit={submitHandler} style={style.form.container}>
      <input
        type="text"
        className="firstName"
        name="firstName"
        value={userData.firstName}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        style={style.form.inputs}
      />
      <input
        type="text"
        className="lastName"
        name="lastName"
        value={userData.lastName}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        style={style.form.inputs}
      />
      <input
        type="number"
        className="phoneNumber"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={inputChangeHandler}
        style={style.form.inputs}
      />
      <input style={style.form.submitBtn} type="submit"></input>
    </form>
  );
};

export default PhoneBookForm;
