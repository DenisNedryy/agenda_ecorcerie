export class HomeView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
            <div class="home">
                <div class="home__header bg_head"> 
                    <h2>Accueil</h2>
                </div>
                <div class="home__content bg_main"> 
                <div id="agenda-console"></div>
                <div id="agenda"> 
                    <img src="/public/assets/pictures/logos/logo_white.png"/>
                </div>
            </div>
            `;
        }
    }
} 