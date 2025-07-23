export class DailyPlanningCtrl {

    constructor(view, seoManager, eventBinder, dailyPlanningModel) {
        this.view = view;
        this.seoManager = seoManager;
        this.eventBinder = eventBinder;
        this.dailyPlanningModel = dailyPlanningModel;

        this.eventBinder.setController(this);
    }

    async show() {
        this.view.render();
        this.seoManager.setTitle('Ecorcerie Gestionnaire - Auth');
        this.eventBinder.addEventListeners();
    }

}