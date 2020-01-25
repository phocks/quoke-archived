import Layout from "../components/layout";
import css from "./about.scss";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.about}>
        <div className={css.top}>
          <h1 className={css.title}>About</h1>
          <p>quoke - an <a href="https://github.com/phocks/quoke">open source</a> place to find and share quotations run by one <a href="https://github.com/sponsors/phocks/">creator</a></p>
        </div>
      </div>
      <hr />
    </Layout>
  );
};

export default About;
