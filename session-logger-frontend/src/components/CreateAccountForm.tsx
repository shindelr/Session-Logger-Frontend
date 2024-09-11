import SubmitButton from "./SubmitButton";
import { useState } from "react";

const CreateAccountForm = () => {
  const [loadBool, setLoadBool] = useState(false);
  // State fields for the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target, e.target.value;
    const name: string = e.target.id;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadBool(true);

    console.log(formData);
    setLoadBool(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Your Personal Information</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <label className="formlabel">Login Information</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <SubmitButton
          buttonType="primary"
          label="Create"
          loadBool={loadBool}
          onClick={() => {
            handleSubmit;
          }}
        />
      </form>
    </>
  );
};

export default CreateAccountForm;
