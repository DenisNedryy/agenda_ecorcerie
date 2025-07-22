export class AgendaEventBinder {

    constructor(view) {
        this.view = view;
        this.boundHandleClickTask = this.handleClickTask.bind(this);
    }

    setController(controller) {
        this.controller = controller;
    }

    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
    }

    async handleClickTask(e) {
        if (e.target.classList.contains("weekView") || e.target.classList.contains("weekViewi") || e.target.classList.contains("weekViewPara")) {
            this.controller.show();
        }

        else if (e.target.classList.contains("yearView") || e.target.classList.contains("yearViewi") || e.target.classList.contains("yearViewPara")) {
            const dateMs = this.controller.agendaWeekModel.stateDateMs;
            const date = new Date(dateMs);
            console.log(this.controller.agendaYear)
            const year = date.getFullYear();
            this.controller.agendaYearModel.stateYear = year;
            const data = this.controller.agendaYearModel.getAgendaPerYear(year);
            this.controller.yearView.render(data);
        }

        else if (e.target.classList.contains("planningView") || e.target.classList.contains("planningViewi") || e.target.classList.contains("planningViewPara")) {
            this.controller.planningView.render();
        }
    }


}