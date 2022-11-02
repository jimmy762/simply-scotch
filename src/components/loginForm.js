import { useNavigate, UseNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <label>UserName: </label>
        <input type="text" />
        <label>Password: </label>
        <input type="text" />
        <label>Rememer Me</label>
        <input type="checkbox" />
        <input type="submit" />
      </form>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
      <button onClick={() => navigate("/forgotusername")}>
        Forgot Username
      </button>
      <button onClick={() => navigate("/forgotPassword")}>
        Forgot Password
      </button>
    </div>
  );
}

export default LoginForm;
