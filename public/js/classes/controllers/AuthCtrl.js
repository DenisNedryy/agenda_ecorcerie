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
            console.log(result);
            if (result.ok) {
                this.authView.showSuccess("Registration successful");
            } else {
                this.authView.showError(result.data?.msg || "Something went wrong.");
            }

        } catch (error) {
            console.error("Erreur d'inscription :", error);
              this.authView.showError(result.data?.msg || "Something went wrong.");
        }
    }


        async connection(data) {
            console.log(data);
        try {
            const result = await this.authModel.connection(data);
            console.log(result);
            if (result.ok) {
                this.authView.showSuccess("Connection successful");
            } else {
                this.authView.showError(result.data?.msg || "Something went wrong.");
            }

        } catch (error) {
            console.error("Erreur d'inscription :", error);
              this.authView.showError(result.data?.msg || "Something went wrong.");
        }
    }
}