export class AuthCtrl {

    constructor(authView, seoManager, authEventBinder) {
        this.authView = authView;
        this.seoManager = seoManager;
        this.authEventBinder = authEventBinder;
    } 

    async show() { 
        this.authView.render();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Auth');
        this.authEventBinder.addEventListeners();
    }
}