import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';



  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  const drinks = json.data;
  console.log(drinks);

  

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header/>
    <main>
      <Banner/>
      <Menu drinks={drinks} />
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

//posluchač události pro každý formulář
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
  
    const id = event.target.dataset.id
    fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    body: JSON.stringify([{ op: "replace", path: "/ordered", value: true }])
  })
    .then(response => response.json())
    .then(data => {
      console.log("Odpověď API:", data);
      window.location.reload(); // Obnovení stránky
    })
    .catch(error => console.error("Chyba při objednávání:", error));
  
  
  
  });
});
