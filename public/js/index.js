// composants
import { DecompteEvents } from "./classes/components/DecompteEvents.js";
import { HomeAgendaRdv } from "./classes/components/HomeAgendaRdv.js";
import { WeekView } from "./classes/components/WeekView.js";

// utils
import { DateHelper } from "./classes/utils/DateHelper.js";
import { TaskHelper } from "./classes/utils/TaskHelper.js";

// services
import { UserServices } from "./classes/services/UserServices.js";
import { TaskServices } from "./classes/services/TaskServices.js";
import { AuthServices } from "./classes/services/AuthServices.js";

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
import { AgendaView } from "./classes/views/AgendaView.js";

// ctrls
import { HomeCtrl } from "/public/js/classes/controllers/HomeCtrl.js";
import { AuthCtrl } from "./classes/controllers/AuthCtrl.js";
import { AgendaCtrl } from "./classes/controllers/AgendaCtrl.js";

// eventBinder
import { HomeEventBinder } from "./classes/eventBinders/homeEventBinder.js";
import { AuthEventBinder } from "./classes/eventBinders/AuthEventBinder.js";
import { AgendaEventBinder } from "./classes/eventBinders/AgendaEventBinder.js";
import { AgendaWeekEventBinder } from "./classes/eventBinders/AgendaWeekEventBinder.js";

const seoManager = new SEOManager();
const userServices = new UserServices();
const authServices = new AuthServices(userServices);
const taskServices = new TaskServices();

const dateHelper = new DateHelper();
const taskHelper = new TaskHelper();
const agendaPlanning = new AgendaPlanning();

const decompteEvents = new DecompteEvents();
const homeAgendaRdv = new HomeAgendaRdv();

const homeView = new HomeView();
const homeEventBinder = new HomeEventBinder(homeView);
const homeCtrl = new HomeCtrl(homeView, seoManager, homeEventBinder, dateHelper, taskHelper, agendaPlanning, decompteEvents, homeAgendaRdv, taskServices);

const authView = new AuthView();
const authModel = new AuthModel(userServices);
const authEventBinder = new AuthEventBinder(authView);
const authCtrl = new AuthCtrl(authView, seoManager, authEventBinder, authModel);

const agendaView = new AgendaView();
const weekView = new WeekView();
const agendaEventBinder = new AgendaEventBinder(agendaView);
const agendaWeekEventBinder = new AgendaWeekEventBinder(weekView);
const agendaCtrl = new AgendaCtrl(agendaView, seoManager, agendaEventBinder, authServices);

const routes = {
    "home": homeCtrl,
    "auth": authCtrl,
    "agenda": agendaCtrl
}

const navHighLighter = new NavHighLighter();
const navigationManager = new NavigationManager(routes, navHighLighter);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindClickLinks(); 