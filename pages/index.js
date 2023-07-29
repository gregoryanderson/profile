import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gregory Anderson</title>
        <link rel="icon" href="/greg.png" />
      </Head>

      <main>
        <h1 className={styles.title}>Gregory Anderson</h1>

        <img src="/greg.png" alt="Greg" className={styles.logo} />

        <div className={styles.grid}>
          <a
            target="_blank"
            href="https://squid-app-64juc.ondigitalocean.app/"
            className={styles.card}
          >
            <h3>LanguageLearnerAI</h3>
            <p>Next.js/OpenAI/Auth0/Stripe/MongoDB/TailwindCSS/DigitalOcean</p>
          </a>
          <a
            target="_blank"
            href="https://main.d1c9y9h64gi11a.amplifyapp.com/"
            className={styles.card}
          >
            <h3>Matching Shapes</h3>
            <p>HTML/CSS/JS</p>
          </a>
          <a
            target="_blank"
            href="https://shrouded-beach-49821-3031fdaf97fe.herokuapp.com/"
            className={styles.card}
          >
            <h3>CRUD Blog</h3>
            <p>Ruby/Rails/Heroku</p>
          </a>

          <a
            target="_blank"
            href="https://main.d1zl8mhk88pyp0.amplifyapp.com/"
            className={styles.card}
          >
            <h3>Customer Relationship Table</h3>
            <p>Next.js/Typescript/Redux/Tailwind CSS/AWS Amplify</p>
          </a>

          <a
            target="_blank"
            href="https://main.d2zsxbeukf1g0n.amplifyapp.com/"
            className={styles.card}
          >
            <h3>Calculator</h3>
            <p>Angular/Typescript/AWS Amplify</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
