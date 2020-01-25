import Layout from "../components/layout";
import css from "./about.scss";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.about}>About</div>
    </Layout>
  );
};

export default About;
