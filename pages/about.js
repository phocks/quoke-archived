import css from "./about.scss"

const About = () => {
  return (
    <>
      <main className={css.root}>
        <section>
          <div class={css.title}>
          <p>About</p>
          </div>
          <p>Quoke is a website about words and quotes and ideas.</p>
        </section>
      </main>
    </>
  );
};

export default About;
