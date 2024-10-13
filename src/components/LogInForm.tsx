const LogInForm = () => {
  return (
    <form>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <label>Remember me</label>
      <input type="checkbox" />
      <input type="hidden" name="authenticity_token" value="TODO" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;
