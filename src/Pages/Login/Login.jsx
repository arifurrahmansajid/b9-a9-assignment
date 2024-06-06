import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // sign in user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);0
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
        <h2 className="text-center">Please login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p className="text-center">
          Do not have an account ?
          <Link className="text-secondary ml-3" to="/register">
            Register
          </Link>
        </p>
      </form>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline hover:bg-secondary"
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline hover:bg-secondary"
        >
          Login with Github
        </button>
      </div>
    </>
  );
};

export default Login;
