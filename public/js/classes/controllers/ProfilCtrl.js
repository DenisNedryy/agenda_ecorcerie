export class ProfilCtrl {

    constructor(view, seoManager, eventBinder, authServices) {
        this.view = view;
        this.seoManager = seoManager;
        this.eventBinder = eventBinder;
        this.authServices = authServices;

        this.eventBinder.setController(this);
    }

    async show() {
        const data = await this.authServices.getAuth();
        this.view.render(data);
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Profil');
        this.eventBinder.addEventListeners();
    }
}