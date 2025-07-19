// // controllers
// import { DailyPlanningCtrl } from "./classes/controllers/DailyPlanningCtrl.js";
// import { HomeCtrl } from "/public/js/classes/controllers/HomeCtrl.js";
// import { RestaurantsCtrl } from "/public/js/classes/controllers/RestaurantsCtrl.js";
// import { ConnexionCtrl } from "/public/js/classes/controllers/ConnexionCtrl.js";
// import { TasksCtrl } from "./classes/controllers/TasksCtrl.js";
// import { CoursesCtrl } from "./classes/controllers/CoursesCtrl.js";
// import { EventsCtrl } from "./classes/controllers/EventsCtrl.js";
// import { ProjectsCtrl } from "./classes/controllers/ProjectsCtrl.js";
// import { RdvsCtrl } from "./classes/controllers/RdvsCtrl.js";
// import { AuthCtrl } from "./classes/controllers/AuthCtrl.js";

// // views
// import { DailyPlanningView } from "./classes/views/DailyPlanningView.js";
// import { HomeView } from "./classes/views/HomeView.js";
// import { RestaurantsView } from "./classes/views/RestaurantsView.js";
// import { ConnexionView } from "/public/js/classes/views/ConnexionView.js";
// import { UtilsView } from "./classes/views/UtilsView.js";
// import { TasksView } from "./classes/views/TasksView.js";
// import { CoursesView } from "./classes/views/CoursesView.js";
// import { EventsView } from "./classes/views/EventsView.js";
// import { ProjectsView } from "./classes/views/ProjectsView.js";
// import { RdvsView } from "./classes/views/RdvsView.js";
// import { AgendaView } from "./classes/views/AgendaView.js";
// import { AuthView } from "./classes/views/AuthView.js";

// // eventBinders
// import { DailyPlanningEventBinder } from "./classes/EventsBinder/DailyPlanningEventBinder.js";
// import { ConnexionEventBinder } from "./classes/EventsBinder/ConnexionEventBinder.js";
// import { HomeEventBinder } from "./classes/EventsBinder/HomeEventBinder.js";
// import { AuthEventBinder } from "./classes/EventsBinder/AuthEventBinder.js";

// // core
// import { NavHighLighter } from "./classes/core/NavHighLighter.js";
// import { NavigationManager } from "./classes/core/NavigationManager.js";
// import { NavigationEventBinder } from "./classes/core/NavigationEventBinder.js";
// import { SEOManager } from "./classes/core/SEOManager.js";

// // models
// import { DailyPlanningModel } from "./classes/models/dailyPlanningModel.js";
// import { Agenda_model } from "./classes/models/AgendaModel.js";

// const seoManager = new SEOManager();

// const dailyPlanningView = new DailyPlanningView();
// const homeView = new HomeView();
// const restaurantsView = new RestaurantsView();
// const connexionView = new ConnexionView();
// const utilsView = new UtilsView();
// const tasksView = new TasksView();
// const coursesView = new CoursesView();
// const eventsView = new EventsView();
// const projectsView = new ProjectsView();
// const rdvsView = new RdvsView();
// const agendaView = new AgendaView();
// const authView = new AuthView();

// const dailyPlanningModel = new DailyPlanningModel();
// const agendaModel = new Agenda_model();

// const dailyPlanningEventBinder = new DailyPlanningEventBinder(dailyPlanningModel, dailyPlanningView);
// const connexionEventBinder = new ConnexionEventBinder(connexionView, utilsView);
// const homeEventBinder = new HomeEventBinder(agendaModel, homeView, agendaView);
// const authEventBinder = new AuthEventBinder(authView, utilsView);

// const dailyPlanningCtrl = new DailyPlanningCtrl(dailyPlanningView, seoManager, dailyPlanningEventBinder);
// const homeCtrl = new HomeCtrl(homeView, agendaView, agendaModel, seoManager, homeEventBinder);
// const restaurantsctrl = new RestaurantsCtrl(restaurantsView, seoManager);
// const connexionCtrl = new ConnexionCtrl(connexionView, seoManager, connexionEventBinder);
// const tasksCtrl = new TasksCtrl(tasksView, seoManager);
// const coursesCtrl = new CoursesCtrl(coursesView, seoManager);
// const eventsCtrl = new EventsCtrl(eventsView, seoManager);
// const projectsCtrl = new ProjectsCtrl(projectsView, seoManager);
// const rdvsCtrl = new RdvsCtrl(rdvsView, seoManager);
// const authCtrl = new AuthCtrl(authView, seoManager, authEventBinder);

// const routes = {
//     "auth": authCtrl,
//     "connexion": connexionCtrl,
//     "home": homeCtrl,
//     "daily-planning": dailyPlanningCtrl,
//     "restaurants": restaurantsctrl,
//     "tasks": tasksCtrl,
//     "courses": coursesCtrl,
//     "events": eventsCtrl,
//     "projects": projectsCtrl,
//     "rdvs": rdvsCtrl
// };

// const navHighLighter = new NavHighLighter();
// const navigationManager = new NavigationManager(routes, navHighLighter);
// navigationManager.init();

// const navigationEventBinder = new NavigationEventBinder(navigationManager);
// navigationEventBinder.bindClickLinks();

// composants
import { DecompteEvents } from "./classes/components/DecompteEvents.js";
import { HomeAgendaRdv } from "./classes/components/HomeAgendaRdv.js";

// utils
import { DateHelper } from "./classes/utils/DateHelper.js";

// services
import { UserServices } from "./classes/services/UserServices.js";
import { TaskServices } from "./classes/services/TaskServices.js";

// core
import { NavHighLighter } from "./classes/core/NavHighLighter.js";
import { NavigationManager } from "./classes/core/NavigationManager.js";
import { NavigationEventBinder } from "./classes/core/NavigationEventBinder.js";
import { SEOManager } from "./classes/core/SEOManager.js";

// models
import { AuthModel } from "./classes/models/AuthModel.js";
import { AgendaPlanning } from "./classes/models/AgendaPlanning.js";

// views
import { HomeView } from "./classes/views/HomeView.js";
import { AuthView } from "./classes/views/AuthView.js";

// ctrls
import { HomeCtrl } from "/public/js/classes/controllers/HomeCtrl.js";
import { AuthCtrl } from "./classes/controllers/AuthCtrl.js";

// eventBinder
import { HomeEventBinder } from "./classes/eventBinders/homeEventBinder.js";
import { AuthEventBinder } from "./classes/eventBinders/AuthEventBinder.js";

const seoManager = new SEOManager();
const userServices = new UserServices();
const taskServices = new TaskServices();

const dateHelper = new DateHelper();
const agendaPlanning = new AgendaPlanning();

const decompteEvents = new DecompteEvents();
const homeAgendaRdv = new HomeAgendaRdv();

const homeView = new HomeView();
const homeEventBinder = new HomeEventBinder(homeView);
const homeCtrl = new HomeCtrl(homeView, seoManager, homeEventBinder, dateHelper, agendaPlanning, decompteEvents, homeAgendaRdv);

const authView = new AuthView();
const authModel = new AuthModel(userServices);
const authEventBinder = new AuthEventBinder(authView);
const authCtrl = new AuthCtrl(authView, seoManager, authEventBinder, authModel);

const routes = {
    "home": homeCtrl,
    "auth": authCtrl
}

const navHighLighter = new NavHighLighter();
const navigationManager = new NavigationManager(routes, navHighLighter);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindClickLinks(); 