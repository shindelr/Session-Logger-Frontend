const CreateAccountForm = () => {
  return (
    <>
      <form>
        <label>First Name</label>
        <input type="text" required />
        <label>Last Name</label>
        <input type="text" required />
        <label>Username</label>
        <input type="text" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <label>Email</label>
        <input type="email" required />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateAccountForm;