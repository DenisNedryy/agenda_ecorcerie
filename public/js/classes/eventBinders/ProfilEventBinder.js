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
            const form = e.target.closest("form");
            const name = form.elements['name'].value;
            const formData = new FormData();
            formData.append("name", name);
            const res = await this.controller.authServices.updateUser(formData);
            await this.controller.show();
            await this.controller.miseAJourAuth.init();
        }

        else if (e.target.classList.contains("btn-profil-password")) {
            e.preventDefault();
            const form = e.target.closest("form");
            const oldPassword = form.elements['password-old'].value;
            const newPassword = form.elements['password-new'].value;
            const passwordConfirmation = form.elements['password-confirmation'].value;

            const formData = new FormData();
            formData.append("oldPassword", oldPassword);
            formData.append("newPassword", newPassword);
            formData.append("passwordConfirmation", passwordConfirmation);
            const res = await this.controller.authServices.updatePassword(formData);
            console.log(res);
            await this.controller.miseAJourAuth.init();
            await this.controller.show();
        }

        else if (e.target.classList.contains("btn-profil-role")) {
            e.preventDefault();
            const form = e.target.closest("form");
            const role = form.elements['role'].value;
            const formData = new FormData();
            formData.append("role", role);
            const res = await this.controller.authServices.updateUser(formData);
            await this.controller.miseAJourAuth.init();
            await this.controller.show();
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