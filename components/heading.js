import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

const Heading = props => {
  const [username, setUsername] = useState();
  const setGlobalUsername = useStoreActions(
    actions => actions.user.setUsername
  );

  const user = useStoreState(state => state.user.username);

  useEffect(() => {
    axios.post("/api/is-authenticated", {}).then(
      response => {
        if (response.data.loggedIn === true) {
          setGlobalUsername(response.data.payload.username);
          setUsername(user);
        }
      },
      { withCredentials: true }
    );
  });

  return (
    <>
      <header>
        <div>
          <span className="branding">
            <Link href="/">
              <a>Quoke</a>
            </Link>
          </span>
        </div>
        <div className={"nav"}>
          {/* <Link href="/about">
            <a>About</a>
          </Link> */}
          {user ? (
            <Link href={"/[username]"} as={"/" + user}>
              <a>{user}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </header>

      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
        header {
          font-family: 'Inconsolata', monospace;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          padding: 4px 16px;
          background-color: black;
          color: white;
        }
        a {
        }
        .branding {
          
        }
        .branding a {
          text-decoration: none;
          color: white;
        }
        .nav a {
          margin-left: 6px;
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Heading;
