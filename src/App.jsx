import { useState } from "react";
import "./App.css";

export default function App() {
  //set useState for single entry or whole form
  // const [name, setName] = useState(""); //state value
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  //handle input from the form
  function handleInputChange(event) {
    // setName(event.target.value);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  //handle submit of form
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
    setFormValues({ name: "", email: "", password: "" }); //clears the form after submited
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    let tempError = "";
    if (formValues.name.length < 3) {
      tempError += "username is too short";
    }
    if (formValues.password.length < 7) {
      tempError += "Password is too short";
    } else if (!regex.test(formValues.password)) {
      tempError +=
        "Password must meet the following requirements: at least one uppercase letter, one lowercase letter, one number, one special character, and a length of 8 to 16 characters. ";
    }
    if (tempError !== "") {
      setFormError(tempError);
    } else {
      setFormError("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {formError !== "" && <p className="error">{formError}</p>}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formValues.password}
        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
        onChange={handleInputChange}
      />
      <p>Current Name Value is: {formValues.name}</p>
      <p>Current Email Value is: {formValues.email}</p>
      <p>Current Password count is: {formValues.password}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
// conect handeler to onsubmit form this brings consol logs the object
//connect handeler to on change event this change is shown in the P tag as it happens
