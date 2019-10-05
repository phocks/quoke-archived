import Layout from "../components/layout";

const Register = props => {
  return (
    <Layout>
      <form action="/api/login" method="post">
        <input type="text" name="username" placeholder="Username" required/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" />
      </form>
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

export default Register;
