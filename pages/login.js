import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useStoreActions } from "easy-peasy";

const Login = props => {
  const router = useRouter();
  const [userMessage, setUserMessage] = useState();
  const setGlobalUsername = useStoreActions(actions => actions.setUsername);
  const setTitle = useStoreActions(actions => actions.setTitle);
  setTitle("Login - Quoke");

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
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="btn"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="btn"
          />
          <input type="submit" value="Login" className="btn" />
          {/* <div>
            <TextField
              id="username"
              name="username"
              label="Username"
              margin="normal"
              variant="filled"
              required
              className={classes.textField}
            />
          </div>
          <div>
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              margin="normal"
              variant="filled"
              required
              className={classes.textField}
              
            />
          </div>

          <div className="button-container">
            <Button
              type="submit"
              variant="contained"
              color="default"
              fullWidth={false}
            >
              Login
            </Button>
          </div> */}
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
           {
            /* .button-container {
            display: flex;
            justify-content: flex-end;
          }
          .button-container button {
            margin: 3px;
          } */
          }
        `}
      </style>
    </>
  );
};

export default Login;
