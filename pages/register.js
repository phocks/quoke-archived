import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { load } from "recaptcha-v3";
import axios from "axios";
import { useRouter } from "next/router";

const RECAPTCHA_SITE_KEY = "6LcIzbwUAAAAAAn47gGOqId6Z9FAWRrbWqcrE9PT";

const Register = props => {
  const [recaptchaToken, setRecaptchaToken] = useState();

  const router = useRouter();

  const init = async () => {
    const recaptcha = await load(RECAPTCHA_SITE_KEY, {
      useRecaptchaNet: false,
      autoHideBadge: true
    });
    const token = await recaptcha.execute("register");

    setRecaptchaToken(token);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const res = await axios.post("/api/register", {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      recaptchaToken: recaptchaToken,
      noRedirect: true
    });

    console.log(res.data);
    const { success } = res.data;

    if (success) router.push("/login");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout>
      <main>
        <form action="/api/register" method="post" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Register" />
        </form>
        <p className="recaptcha">
          <small>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
            apply.
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
          .recaptcha {
            text-align: center;
            max-width: 360px;
          }
        `}
      </style>
    </Layout>
  );
};

Register.getInitialProps = async ctx => {
  return {
    checkCaptcha: () => {
      console.log("server");
    }
  };
};

export default Register;
