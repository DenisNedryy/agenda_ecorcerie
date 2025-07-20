export class AgendaCtrl {

    constructor(agendaView, seoManager, agendaEventBinder, authServices, weekView, agendaWeekEventBinder, taskServices, agendaWeekModel) {
        this.agendaView = agendaView;
        this.seoManager = seoManager;
        this.agendaEventBinder = agendaEventBinder;
        this.authServices = authServices;
        this.weekView = weekView;
        this.agendaWeekEventBinder = agendaWeekEventBinder;
        this.taskServices = taskServices;
        this.agendaWeekModel = agendaWeekModel;
    };

    async show() {
        this.agendaView.render();
        await this.authServices.init();
        const auth = await this.authServices.getAuth();
        const userSelected = await this.authServices.getUserById(this.authServices.userIdSelected);
        const tasksRes = await this.taskServices.getTasks();
        const tasks = tasksRes.data.tasks;
        const tasksFiltered = await this.agendaWeekModel.getTasksFiltered(auth, userSelected, tasks);
        const weekData = await this.agendaWeekModel.getAgendaPerWeek(tasksFiltered);

        // this.weekView.render(user, date);
        // besoin d'ajouter string navigation
        //                  object users & parameters
        //                  calendar

        const params = await this.authServices.getUsersStatus();
        params.bankHolidays = this.agendaWeekModel.bankHolidays;

        this.weekView.render(weekData, params);
        // mettre this.authServices.userIdSelected dans le renderViewWeek()
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Agenda');
    }
}