import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Heading = props => {
  const [loginInfo, setLoginInfo] = useState();

  useEffect(() => {});

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
            <Link href="/logout">
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
          display: flex;
          justify-content: space-between;
        }
        .branding {
          font-family: "Press Start 2P", cursive;
          font-size: 33px;
          margin-bottom: 0;
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
