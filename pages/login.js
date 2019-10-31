import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useStoreActions } from "easy-peasy";

const Login = props => {
  const router = useRouter();
  const [userMessage, setUserMessage] = useState();
  const setGlobalUsername = useStoreActions(actions => actions.user.setUsername);

  const attemptLogin = async event => {
    event.preventDefault();

    const res = await axios.post(
      "/api/login",
      {
        username: event.target.username.value,
        password: event.target.password.value,
        noRedirect: true
      },
      { withCredentials: true }
    );

    console.log(res.data);
    const { loggedIn } = res.data;

    if (loggedIn) {
      axios.post("/api/is-authenticated", {}).then(
        response => {
          if (response.data.loggedIn === true) {
            setGlobalUsername(response.data.payload.username);
          }
        },
        { withCredentials: true }
      );
      router.push("/");
    } else {
      console.log("Something bad happened..");
      setUserMessage("Something went wrong. Try again.");
    }
  };

  return (
    <>
      <main className={"mid"}>
        {userMessage && <div>{userMessage}</div>}
        <form action="/api/login" method="post" onSubmit={attemptLogin}>
          <input type="text" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Login" />
        </form>
        <p>
          <small>
            No account?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>{" "}
            first.
          </small>
        </p>
      </main>
      <style jsx>
        {`
          input,
          .btn {
            width: 100%;
            max-width: 480px;
            padding: 12px;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin: 5px 0;
            opacity: 0.85;
            display: block;
            font-size: 17px;
            line-height: 20px;
            text-decoration: none;
            background: none;
          }
        `}
      </style>
    </>
  );
};

export default Login;
