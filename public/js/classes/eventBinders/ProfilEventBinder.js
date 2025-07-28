export class ProfilEventBinder {
    constructor(profilView) {
        this.profilView = profilView;
        this.boundHandleClickTask = this.handleClickTask.bind(this);
        this.boundHandleChangeTask = this.handleChangeTask.bind(this);
    }

    setController(controller) {
        this.controller = controller;
    }

    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
        document.removeEventListener('change', this.boundHandleChangeTask);
        document.addEventListener('change', this.boundHandleChangeTask);
    }

    async handleClickTask(e) {
        if (e.target.classList.contains("profilUpdate-name")) {
            this.controller.profilFormView.renderName();
            this.addEventListeners();
        }
        else if (e.target.classList.contains("profilUpdate-password")) {
            this.controller.profilFormView.renderPassword();
            this.addEventListeners();
        }
        else if (e.target.classList.contains("profilUpdate-role")) {
            this.controller.profilFormView.renderRole();
            this.addEventListeners();
        }

        else if (e.target.classList.contains("btn-profil-name")) {
            e.preventDefault();
            console.log("let's submit profil name");
        }

        else if (e.target.classList.contains("btn-profil-password")) {
            e.preventDefault();
            console.log("let's submit profil password");
        }

        else if (e.target.classList.contains("btn-profil-role")) {
            e.preventDefault();
            console.log("let's submit profil role");
        }
    }

    async handleChangeTask(e) {
        if (e.target.id === "img-avatar") {
            const inputEl = e.target;
            const imgPreview = document.querySelector(".avatar-preview");
            imgPreview.src = URL.createObjectURL(inputEl.files[0]);
            const formData = new FormData();
            formData.append("img_url", inputEl.files[0]);
            await this.controller.authServices.updateUser(formData);
            this.controller.miseAJourAuth.init();
            this.controller.show();
        }
    }

}