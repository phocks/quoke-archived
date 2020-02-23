import Layout from "../components/layout";

const About = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={"about"}>
        <div className={"top"}>
          <div className="col">
            <h1 className={"title"}>About</h1>
            <p>
              quoke - an open source project to collect and share quotations.
            </p>
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
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .top {
          padding-top: 0.5em;
          padding-bottom: 1em;
        }

        h1 {
        }
      `}</style>
    </Layout>
  );
};

export default About;
