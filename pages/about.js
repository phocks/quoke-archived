import Layout from "../components/layout";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={"about container"}>
        <div className={"top"}>
          <h1 className={"title"}>About</h1>
          <p>
            Quoke is an open source project to collect and share quotations.
          </p>

          <p>
            It is still in early development. If you'd like to help out{" "}
            <a href="https://github.com/phocks/quoke">give it a star</a> on
            GitHub.
          </p>
          <div className="edit">
            <a href="https://github.com/phocks/quoke/blob/master/pages/about.js">
              Edit this page
            </a>
          </div>
        </div>
      </div>
      <hr />

      <style jsx>{`
        h1 {
        }

        p {
          font-size: 1.25rem;
        }

        .about {
        }

        .top {
          padding-top: 0.5em;
          padding-bottom: 1em;
        }

        h1 {
        }

        .edit {
          margin-top: 80px;
        }
      `}</style>
    </Layout>
  );
};

export default About;
