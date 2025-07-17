export class AuthCtrl {

    constructor(authView, seoManager, authEventBinder, authModel) {
        this.authView = authView;
        this.seoManager = seoManager;
        this.authEventBinder = authEventBinder;
        this.authModel = authModel;

        // Liaison : le EventBinder saura appeler le contrôleur
        this.authEventBinder.setController(this);
    }

    async show() {
        this.authView.render();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Auth');
        this.authEventBinder.addEventListeners();
    }

    async inscription(data) {
        try {
            const result = await this.authModel.inscription(data);
            if (result.ok) {
                this.authView.showSuccess("Registration successful");
                this.authView.isConnectionPage = true;
                this.authView.render();
            }

        } catch (error) {
            console.error("Erreur d'inscription :", error);
            this.authView.showError("Error during the registration.");
        }
    }
}