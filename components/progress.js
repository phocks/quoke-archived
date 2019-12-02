import {useState, useEffect} from "react"
import Router from "next/router"

import css from "./progress.scss";

export default props => {
  const [visibility, setVisibility] = useState("hidden")

  const routeChangeStart = url => {
    setVisibility("visible")
  };

  const routeChangeEnd = url => {
    setVisibility("hide")
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    }
  })

  return <div className={css.root} style={{visibility: visibility}}></div>;
};
