import { Fragment, useEffect } from 'react';
import Introduction from './fragment/introduction/Introduction';
import Header from './fragment/header/Header';
import Presentation from './fragment/presentation/Presentation';
import Skills from './fragment/skills/Skills';
import Projects from './fragment/projects/Projects';
import Footer from './fragment/footer/Footer';
import Contact from './fragment/contact/Contact';

function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <Introduction />
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
