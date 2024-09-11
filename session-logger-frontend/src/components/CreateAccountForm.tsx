import SubmitButton from "./SubmitButton";
import { useState, useEffect } from "react";

const CreateAccountForm = () => {
  const [loadBool, setLoadBool] = useState<boolean>(false);
  // State fields for the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [inputError, setInputError] = useState<String | null>(null);

  // CHANGE HANDLER
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.id;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: e.target.value,
    }));
  };

  // PASSWORD MATCHING CHECK
  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
    if (formData.password !== formData.confirmPassword) {
      setInputError("Passwords do not match");
    } else {
      setInputError(null);
    }
  }
  }, [formData.password, formData.confirmPassword]);

  // SUBMISSION HANDLER
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
          required
        />
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <label className="formlabel">Login Information</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        {inputError && <div style={{ color: "red" }}>{inputError}</div>}

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
