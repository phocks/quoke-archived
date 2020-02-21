import Layout from "../components/layout";
import css from "./about.scss";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.about}>
        <div className={css.top}>
          <h1 className={css.title}>About</h1>
          <p>quoke - an open source project to collect and share quotations.</p>
        </div>
      </div>
      <hr />
    </Layout>
  );
};

export default About;
