import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>React Vite Demo SEO</title>
        <meta name="description" content="React Vite Demo SEO" />
        <meta name="keywords" content="React, Vite, SEO" />
        <meta property="og:title" content="React Vite Demo SEO" />
        <meta property="og:description" content="React Vite Demo SEO" />
        <meta property="og:image" content={heroImg} />
      </Helmet>

      <section id="center">
        <h1>React Vite Demo SEO</h1>
        <p>This is a demo of SEO in React Vite</p>
      </section>
    </HelmetProvider>
  );
}

export default App;
