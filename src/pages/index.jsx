import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    <main>
      <Banner/>
      <Menu/>
      <Gallery/>
      <Contact/>
    </main>
      <Footer/>
  </div>
);

//Mobile menu toggle

  const navToggle = document.querySelector('.nav-btn');
  const mobileNav = document.querySelector('.rollout-nav');

  navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle('nav-closed');
  });

mobileNav.addEventListener('click', () => {
  mobileNav.classList.add('nav-closed');
});
