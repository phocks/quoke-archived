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
        <div className={"nav"}>
          {/* <Link href="/about">
            <a>About</a>
          </Link> */}
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
          padding: 0px 16px;
        }
        a {
          color: white;
        }
        .branding {
          font-family: "Press Start 2P", cursive;
          font-size: 33px;
          margin: 0;
          padding-top: 5px;
        }
        .branding a {
          text-decoration: none;
        }
        .nav a {
          margin-left: 6px;
        }
      `}</style>
    </>
  );
};

export default Heading;
