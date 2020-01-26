import Layout from "../components/layout";
import css from "./about.scss";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.about}>
        <div className={css.top}>
          <h1 className={css.title}>About</h1>
          <p>quoke - an open source project to collect and share quotations funded by <a href="https://github.com/sponsors/phocks/">the community</a></p>
        </div>
      </div>
      <hr />
      <style jsx>{``}</style>
    </Layout>
  );
};

export default About;
