import {useEffect} from "react"
import Router from "next/router"

import css from "./progress.scss";

export default props => {
  const { progress = 0 } = props;

  const routeChangeStart = url => {
    console.log(url);
  };

  const routeChangeEnd = url => {
    console.log(url);
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

  return <div className={css.root} style={{ width: progress + "%" }}></div>;
};
