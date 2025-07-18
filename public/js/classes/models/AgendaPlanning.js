export class AgendaPlanning {


    async getPlanning() {
        await this.fetchTasksFromApi();
        console.log(this.tasks);
        return this.sortTasksByDate(this.tasks);
    }

    // modal planning
    async getPlanningTasks() {
        await this.fetchTasksFromApi();
        return this.sortTasksByDate(this.tasks.filter((task) => task.type === "tasks"));
    }
    // modal planning
    async getPlanningCourses() {
        await this.fetchTasksFromApi();
        return this.sortTasksByDate(this.tasks.filter((task) => task.type === "courses"));
    }
    // modal planning
    async getPlanningRdvs() {
        await this.fetchTasksFromApi();
        return this.sortTasksByDate(this.tasks.filter((task) => task.type === "rdvs"));
    }
    // modal planning
    async getPlanningEvents() {
        await this.fetchTasksFromApi();
        return this.sortTasksByDate(this.tasks.filter((task) => task.type === "events"));
    }
    // modal planning
    async getPlanningProjets() {
        await this.fetchTasksFromApi();
        return this.sortTasksByDate(this.tasks.filter((task) => task.type === "projets"));
    }
}