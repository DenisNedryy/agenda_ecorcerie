

export class DailyPlanningModel {
    constructor(tasksPlanningData) {
        this.tasksPlanningData = tasksPlanningData;
        this.isPlanningStarted = false;
        this.planning = {};
        this.isFinished = true;
    }

    toggleTask(index) {
        this.planning[index].isDone = !this.planning[index].isDone;
    }

    checkIfisFinished() {
        this.isFinished = true;
        for (let i = 0; i < this.planning.length; i++) {
            if (!this.planning[i].isDone) {
                this.isFinished = false;
                break;
            }
        }
    }

    init() {
        this.planning = tasksPlanningData;
    }


}