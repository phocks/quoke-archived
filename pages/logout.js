import axios from "axios";
import { useRouter } from "next/router";
// import Link from "next/link";

import Layout from "../components/layout";

export default props => {
  const router = useRouter();

  const doLogout = async event => {
    event.preventDefault();

    const res = await axios.post(
      "/api/logout",
      {
        // username: event.target.username.value,
        // password: event.target.password.value,
        noRedirect: true
      },
      { withCredentials: true }
    );

    console.log(res.data);
    const { success } = res.data;

    if (success) {
      router.push("/");
    } else {
      console.log("Something bad happened..");
    }
  };

  return (
      <>
      <main className={"mid"}>
        <button onClick={doLogout}>Logout?</button>
      </main>
      <style jsx>
        {`
          input,
          button {
            /* width: 100%; */
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
