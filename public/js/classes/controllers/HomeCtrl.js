export class HomeCtrl {

    constructor(homeView, seoManager, homeEventBinder, dateHelper, modelAgendaPlanning, decompteRdv, composantAgendaRdv) {
        this.homeView = homeView;
        this.seoManager = seoManager;
        this.homeEventBinder = homeEventBinder;
        this.dateHelper = dateHelper;
        this.modelAgendaPlanning = modelAgendaPlanning;
        this.decompteRdv = decompteRdv;
        this.composantAgendaRdv = composantAgendaRdv;
    }

    async show() {
        this.homeView.render();
        this.decompteRdv.render();
        // peut être passer une valeur , comme les tasks filtrés
        this.composantAgendaRdv.render();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Accueil');
        this.homeEventBinder.addEventListeners();
    }
}