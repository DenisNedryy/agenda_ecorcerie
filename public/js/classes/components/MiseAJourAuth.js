import { HOST } from "../../host.js";

export class MiseAJourAuth {
    constructor(authServices) {
        this.authServices = authServices;
    }

    async getAuthUser() {
        return await this.authServices.getAuth();
    }

    async init() {
        const user = await this.getAuthUser();
        if (user) {
            this.show(user);
        } else {
            this.showDefault();
        }
    }

    show(user) {
        console.log(user);
        const greetings = document.querySelector(".header__left--greetings");
        const avatar = document.querySelector(".header__right__profil img");
        const name = document.querySelector(".header__right__profil__text--name");

        if (greetings && avatar && name) {
            greetings.textContent = `Hello, ${user.name}`;
            avatar.src = `${HOST}/api/images/avatars/${user.img_url}`;
            name.textContent = user.name;
        }
    }

    showDefault() {
        const greetings = document.querySelector(".header__left--greetings");
        const avatar = document.querySelector(".header__right__profil img");
        const name = document.querySelector(".header__right__profil__text--name");
        const role = document.querySelector(".header__right__profil__text--role");
        if (greetings && avatar && name) {
            greetings.textContent = `Hello, Céline Dion`;
            avatar.src = `${HOST}/api/images/avatars/celine.jpg`;
            name.textContent = "Céline Dion";
            role.textContent = "Idole des hommes";
        }
    }


}