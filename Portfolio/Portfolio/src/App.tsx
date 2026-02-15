import Layout from './components/Layout/Layout';
import Hero from './components/Hero/AboutMe';
import AppPreview from './components/AppPreview/Project';
import Features from './components/Features/SkillsAndExperience';
import FighterVoting from './components/FighterVoting/Resume';
import TokenInfo from './components/TokenInfo/WidgetContact';

function App() {
  return (
    <Layout>
      <section id="about-me">
        <Hero />
      </section>
      <section id="projects">
        <AppPreview />
      </section>
      <section id="skills">
        <Features />
      </section>
      <section id="resume">
        <FighterVoting />
      </section>
      <section id="contact">
        <TokenInfo />
      </section>
    </Layout>
  );
}

export default App;