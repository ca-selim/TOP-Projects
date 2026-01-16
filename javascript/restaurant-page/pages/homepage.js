import '../src/styles.css' 
import heroCoffee from '../src/images/herocoffee3.png';

export default function loadHomepage(){
    const header = document.createElement('div');
    const mainContent = document.querySelector("#content");

    header.id = 'box';

    header.innerHTML = `
        <div id="hero">
        <div id="hero-text">
            <h1 style="color: #2C1F1A;">Discover Authentic Philippine Coffee</h1>
            <p style="color: #2C1F1A;">Handcrafted from premium Philippine beans. Fresh daily.</p>
            <button class="cta-button">Check the menu</button>
        </div>
        <img 
            class="hero-img" 
            src="${heroCoffee}" 
            alt="Freshly brewed Philippine coffee"
        >
        </div>
    `;

    mainContent.appendChild(header);
}