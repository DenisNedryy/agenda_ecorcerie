export class AuthEventBinder {
    constructor(authView) {
        this.authView = authView;
        this.boundHandleClickTask = this.handleClickTask.bind(this);
    }
 
    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
    }

    async handleClickTask(e) {

    }

}