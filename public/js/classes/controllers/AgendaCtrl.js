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

        this.agendaWeekEventBinder.setController(this);
    };

    async show() { 
        this.agendaView.render();
        console.log(this.authServices.userIdSelected);
        await this.authServices.init();
        this.agendaWeekModel.setCurrentDateMsState();
        const auth = await this.authServices.getAuth();
        const userSelectedRes = await this.authServices.getUserById(this.authServices.userIdSelected);
        const userSelected = userSelectedRes.data.user;
        const tasksRes = await this.taskServices.getTasks();
        const tasks = tasksRes.data.tasks;
        const tasksFiltered = await this.agendaWeekModel.getTasksFiltered(auth, userSelected, tasks);
        const date = new Date(this.agendaWeekModel.stateDateMs);
        const weekData = await this.agendaWeekModel.getAgendaPerWeek(tasksFiltered, date);

        const params = await this.authServices.getUsersStatus(); 
        params.bankHolidays = this.agendaWeekModel.bankHolidays;

        this.weekView.render(weekData, params);
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Agenda');

        this.agendaWeekEventBinder.addEventListeners();
    }
}