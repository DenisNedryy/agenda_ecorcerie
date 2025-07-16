export class HomeCtrl {

    constructor(homeView, seoManager, homeEventBinder) {
        this.homeView = homeView;
        this.seoManager = seoManager;
        this.homeEventBinder = homeEventBinder;
    }

    async show() {
        this.homeView.render();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Accueil');
        this.homeEventBinder.addEventListeners();
    }
}