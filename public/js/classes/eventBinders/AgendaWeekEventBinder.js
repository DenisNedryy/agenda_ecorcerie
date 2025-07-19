export class AgendaWeekEventBinder {

    constructor(view) {
        this.view = view;
        this.boundHandleClickTask = this.handleClickTask.bind(this);
    }

    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
    }

    async handleClickTask(e) {
    }


}