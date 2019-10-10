import { useState, useEffect } from "react";
import Layout from "../components/layout";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import { useRouter } from "next/router";

const RECAPTCHA_SITE_KEY = "6LcIzbwUAAAAAAn47gGOqId6Z9FAWRrbWqcrE9PT";

const Register = props => {
  const [recaptchaToken, setRecaptchaToken] = useState();

  const router = useRouter()

  const verifyCallback = recaptchaToken => {
    setRecaptchaToken(recaptchaToken);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const res = await axios.post(
      "/api/register",
      {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
        recaptchaToken: recaptchaToken,
        noRedirect: true
      }
    );

    console.log(res);
    const {success} = res.data

    if (success) router.push("/login");
  };

  useEffect(() => {
    loadReCaptcha(RECAPTCHA_SITE_KEY);
  }, []);

  return (
    <Layout>
      <ReCaptcha
        sitekey={RECAPTCHA_SITE_KEY}
        action="register"
        verifyCallback={verifyCallback}
      />
      <form action="/api/register" method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      {/* <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p> */}
      <style jsx>
        {`
          input,
          .btn {
            width: 100%;
            padding: 12px;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin: 5px 0;
            opacity: 0.85;
            display: inline-block;
            font-size: 17px;
            line-height: 20px;
            text-decoration: none;
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
