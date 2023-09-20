import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";
import waiting = Simulate.waiting;
import { root } from "postcss";
import { render } from "react-dom";
import App from "../routes/post.tsx";
export const SignUpCheck = () => {
  const postUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const usernameInput = event.target.username;
    const emailInput = event.target.email;
    const passwordInput = event.target.password;

    console.log(usernameInput);

    const username: string = usernameInput.value;
    const email: string = emailInput.value;
    const password: string = passwordInput.value;

    console.log(username);

    const formResult = {
      name: username,
      email: email,
      password: password,
    };

    fetch("http://localhost:3003/auth/signup", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formResult),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      {/*{UserContext && <div>Your are already logged</div>}*/}
      {/*{isLogged === false && (*/}
      <form
        onSubmit={(e) => {
          postUser(e);
        }}
      >
        <div className="space-y-4">
          <input
            type="username"
            name="username"
            placeholder="Username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl"
          >
            Sign Up
          </button>
        </div>
        <div className="text-end mt-6 flex flex-row justify-end">
          <Link to={"../login"}> LogIn</Link>
        </div>
      </form>
      {/*)}*/}
    </>
  );
};

export const LoginCheck = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    const emailInput = event.target.email;
    const passwordInput = event.target.password;

    const email: string = emailInput.value;
    const password: string = passwordInput.value;

    const formResult = {
      email: email,
      password: password,
    };

    fetch("http://localhost:3003/auth/login", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formResult),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("JWT", response.token);
        localStorage.setItem("id", response.userId);
        localStorage.setItem("name", response.name);
        window.location.replace("/");
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl"
          >
            Log In
          </button>
        </div>

        <div className="text-end mt-6 flex flex-row justify-center">
          <p>Toujours pas de compte ? : </p>
          <Link to={"../signup"} className="text-blue-600 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
};
