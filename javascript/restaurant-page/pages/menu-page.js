import '../src/styles.css' 
import cupImage from '../src/images/cup.png';

export default function loadMenupage(){
    const menuSection = document.createElement('div');
    const mainContent = document.querySelector("#content");
    menuSection.className = 'menu-section';

    menuSection.innerHTML = `
    <main class="item-grid">
        <div class="item-card">
            <div>
                <img class="item-img" src="${cupImage}" alt="Café Tres Leches iced coffee in plastic cup">
            </div>
            <div class="item-content">
                <h2>Café Tres Leches</h2>
                <p>This drink is for the sweet-toothed coffee drinker. 
                    Espresso-based with three kinds of milk.</p>
            </div>
        </div>
        <div class="item-card">
            <div>
                <img class="item-img" src="${cupImage}" alt="Café Tres Leches iced coffee in plastic cup">
            </div>
            <div class="item-content">
                <h2>Café Tres Leches</h2>
                <p>This drink is for the sweet-toothed coffee drinker. 
                    Espresso-based with three kinds of milk.</p>
            </div>
        </div>
        <div class="item-card">
            <div>
                <img class="item-img" src="${cupImage}" alt="Café Tres Leches iced coffee in plastic cup">
            </div>
            <div class="item-content">
                <h2>Café Tres Leches</h2>
                <p>This drink is for the sweet-toothed coffee drinker. 
                    Espresso-based with three kinds of milk.</p>
            </div>
        </div>
        <div class="item-card">
            <div>
                <img class="item-img" src="${cupImage}" alt="Café Tres Leches iced coffee in plastic cup">
            </div>
            <div class="item-content">
                <h2>Café Tres Leches</h2>
                <p>This drink is for the sweet-toothed coffee drinker. 
                    Espresso-based with three kinds of milk.</p>
            </div>
        </div>
    </main>
    `;
    mainContent.appendChild(menuSection);
}