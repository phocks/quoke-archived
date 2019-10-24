import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/layout";

export default props => {
  const router = useRouter();

  const attemptlogin = async event => {
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
      router.push("/");
    } else {
      console.log("Something bad happened..");
    }
  };

  return (
    <>
    {/* <Layout> */}
      <main className={"mid"}>
        <form action="/api/login" method="post" onSubmit={attemptlogin}>
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
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
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
            color: white;
          }
        `}
      </style>
    {/* </Layout> */}
    </>
  );
};
