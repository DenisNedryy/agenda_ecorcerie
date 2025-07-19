export class AgendaCtrl {

    constructor(agendaView, seoManager, agendaEventBinder, authServices) {
        this.agendaView = agendaView;
        this.seoManager = seoManager;
        this.agendaEventBinder = agendaEventBinder;
        this.authServices = authServices;
    };

    async show() {
        this.agendaView.render();
        await this.authServices.init();
        // mettre this.authServices.userIdSelected dans le renderViewWeek()
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Agenda');
    }
}