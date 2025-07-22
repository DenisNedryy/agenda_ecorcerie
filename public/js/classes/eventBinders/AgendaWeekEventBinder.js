export class AgendaWeekEventBinder {

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

        // navigation
        if (e.target.classList.contains("btn-today")) {
            this.controller.agendaWeekModel.stateDateMs = null;
            this.controller.show();
        }

        else if (e.target.classList.contains("previousWeek")) {
            this.controller.agendaWeekModel.agendaWeekTurnLeft();
            this.controller.show();
        }

        else if (e.target.classList.contains("nextWeek")) {
            this.controller.agendaWeekModel.agendaWeekTurnRight();
            this.controller.show();
        }

        // changement d'utilisateur
        else if (e.target.classList.contains('checkBox') || e.target.classList.contains("checkBox__user")) {
            const userId = e.target.closest(".checkBox").getAttribute("data-userId");
            const userRes = await this.controller.authServices.getUserById(userId);
            const user = userRes.data.user;
            this.controller.authServices.userIdSelected = user.id;
            this.controller.show();
        }

        // changement parameters
        else if (e.target.classList.contains('checkBoxParams') || e.target.classList.contains("checkBox__params")) {
            this.controller.agendaWeekModel.bankHolidays = !this.controller.agendaWeekModel.bankHolidays;
            this.controller.show();
        }

        // modal addTask
        else if (e.target.classList.contains("weekNumber")) {
            const date = e.target.getAttribute("data-date");
            this.controller.agendaWeekModel.modalAddDate = date;
            const modal = document.querySelector(".modalAddContainer .modal");
            modal.classList.remove("hidden");
        }

        else if (e.target.classList.contains("leaveModal")) {
            const modal = document.querySelector(".modalAddContainer .modal");
            modal.classList.add("hidden");
        }

        else if (e.target.classList.contains("btn-submit-addTask")) {
            e.preventDefault();
            const form = e.target.closest("form");
            const userIdSelected = this.controller.authServices.userIdSelected;
            const auth = this.controller.authServices.getAuth();
            const task = this.controller.agendaWeekModel.getTaskObj(form, userIdSelected, auth);
            if (task) {
                await this.controller.taskServices.createTask(task);
            }
            this.controller.show();
        }

        // focus modal 
        else if (e.target.classList.contains("task")) {
            const taskId = e.target.getAttribute("data-id");
            if (taskId !== undefined && (!e.target.classList.contains("bgJaune") && !e.target.classList.contains("bgBlack"))) {
                const taskRes = await this.controller.taskServices.readOneTask(taskId);
                const task = taskRes.data.tasks;
                this.controller.weekView.renderModalFocus(task);
                document.querySelector(".modalFocus").classList.remove("hidden");
            }
        }

        else if (e.target.classList.contains("task-leave")) {
            document.querySelector(".modalFocus").classList.add("hidden");
        }

        else if (e.target.classList.contains("task-delete")) {
            const taskId = e.target.closest(".modalContent").getAttribute("data-id");
            await this.controller.taskServices.deleteTask(taskId);
            this.controller.show();
        }

        else if (e.target.classList.contains("task-update")) {
            document.querySelector(".modalContent__footer").classList.remove("hidden");
        }

        else if (e.target.classList.contains("btn-updateTask")) {
            e.preventDefault();
            const taskId = e.target.closest(".modalContent").getAttribute("data-id");
            const form = e.target.closest("form");

            const data = {
                name: form.elements['name'].value || null,
                description: form.elements['description'].value || null,
                type: form.elements['type'].value || null
            }

            await this.controller.taskServices.updateTask(data, taskId);
            this.controller.show();
        }
    }


}