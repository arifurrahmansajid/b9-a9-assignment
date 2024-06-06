import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setRegisterError("password should be minimum  6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Give at least one uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Give at least one lowercase");
      return;
    }

    //  reset error
    setRegisterError("");
    setSuccess("");
    // create user

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("A new user created successfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <>
      <form
        onSubmit={handleRegister}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
        <h2 className="text-center">Please Register</h2>
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
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <div className="relative">
            <span
              className="cursor-pointer absolute left-[860px] bottom-[10px] text-2xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Register</button>
        </div>
        <p className="text-center">
          Already have an account ?
          <Link className="text-primary ml-3" to="/login">
            Login
          </Link>
        </p>
        {success && <p className="text-success text-center">{success}</p>}
        {registerError && (
          <p className="text-error text-center">{registerError}</p>
        )}
      </form>
    </>
  );
};

export default Register;
