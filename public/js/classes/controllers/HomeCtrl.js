export class HomeCtrl {

    constructor(homeView, seoManager, homeEventBinder, dateHelper, taskHelper, modelAgendaPlanning, decompteEvent, composantAgendaRdv, taskServices) {
        this.homeView = homeView;
        this.seoManager = seoManager;
        this.homeEventBinder = homeEventBinder;
        this.dateHelper = dateHelper;
        this.taskHelper = taskHelper;
        this.modelAgendaPlanning = modelAgendaPlanning;
        this.decompteEvent = decompteEvent;
        this.composantAgendaRdv = composantAgendaRdv;
        this.taskServices = taskServices;
    }

    async show() {
        this.homeView.render();
        await this.showDecompteEvent();
        await this.show3NextRdvs();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Accueil');
        this.homeEventBinder.addEventListeners();
    }

    async showDecompteEvent() {
        const tasks = await this.getTasks();
        const events = this.taskHelper.getEvents(tasks);
        const eventsSortedByDate = this.dateHelper.sortTasksByDate(events);
        const nextEvent = this.taskHelper.getNextEvent(eventsSortedByDate);
        this.decompteEvent.render(nextEvent);
    }

    async show3NextRdvs() {
        const tasks = await this.getTasks();
        const rdvs = this.taskHelper.getRdvs(tasks);
        const rdvsSortedByDate = this.dateHelper.sortTasksByDate(rdvs);
        const first3Rdvs = this.taskHelper.get3FirstRdvs(rdvsSortedByDate);
        this.composantAgendaRdv.render(first3Rdvs);
    }

    async getTasks() {
        const res = await this.taskServices.getTasks();
        return res.data.tasks;
    }
}