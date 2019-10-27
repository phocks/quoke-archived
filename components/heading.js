import { useState, useEffect } from "react";
import Link from "next/link";
import { useStoreActions } from "easy-peasy";

const Heading = props => {
  const [loginInfo, setLoginInfo] = useState();
  const setUsername = useStoreActions(actions => actions.user.setUsername);

  useEffect(() => {
    setUsername(props.username);
  });

  return (
    <>
      <header>
        <div>
          <h1 className="branding">
            <Link href="/">
              <a>Q</a>
            </Link>
          </h1>
        </div>
        <div>
          {props.username ? (
            <Link href={"/[username]"} as={"/" + props.username}>
              <a>{props.username}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}{" "}
        </div>
      </header>

      <style jsx>{`
        header {
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
        }
        a {
          color: white;
        }
        .branding {
          font-family: "Press Start 2P", cursive;
          font-size: 33px;
          margin-bottom: 0;
          margin: 0;
        }
        .branding a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Heading;
