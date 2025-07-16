export class HomeEventBinder {
    constructor(homeView) {
        this.homeView = homeView;
        this.boundHandleClickTask = this.handleClickTask.bind(this);
    }

    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
    }

    async handleClickTask(e) {

    }

}