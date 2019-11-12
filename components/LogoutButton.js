import axios from "axios";
import { useRouter } from "next/router";
import { useStoreActions } from "easy-peasy";

const LogoutButton = props => {
  const router = useRouter();
  const setGlobalUsername = useStoreActions(
    actions => actions.setUsername
  );

  const doLogout = async event => {
    event.preventDefault();

    const res = await axios.post(
      "/api/logout",
      {
        noRedirect: true
      },
      { withCredentials: true }
    );

    console.log(res.data);
    const { success } = res.data;

    if (success) {
      setGlobalUsername(null);
      router.push("/");
    } else {
      console.log("Something bad happened..");
    }
  };

  return (
    <>
      <button onClick={doLogout}>Logout?</button>

      <style jsx>
        {`
          input,
          button {
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

export default LogoutButton;

