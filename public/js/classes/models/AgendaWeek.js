export class AgendaWeek {

    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.stateDateMs = null;
        this.bankHolidays = true;
    }

    // modal week
    agendaWeekTurnLeft() {
        this.stateDateMs -= 60 * 60 * 24 * 7 * 1000;
        const date = new Date(this.stateDateMs);
        return `${date.getFullYear()}-${this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getMonth())}-${this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getDate())}`;
    }

    // modal week
    agendaWeekTurnRight() {
        this.stateDateMs += 60 * 60 * 24 * 7 * 1000;
        const date = new Date(this.stateDateMs);
        return `${date.getFullYear()}-${this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getMonth())}-${this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getDate())}`;
    }

    async getTasksFiltered(auth, userSelected, tasks) {
        const myTasksProvisoire = tasks.filter((task) => task.user_id === userSelected.id ? userSelected.id : auth.id);
        let myTasks = myTasksProvisoire.map((task) => {

            const myDate = new Date(task.date);
            const year = myDate.getFullYear();
            const month = this.dateHelper.getFormatForNumbersWidhtZeroBefore(myDate.getMonth() + 1);
            const date = this.dateHelper.getFormatForNumbersWidhtZeroBefore(myDate.getDate());
            return {
                ...task,
                date: `${year}-${month}-${date}`
            }
        });
        return myTasks;
    }

    setCurrentDateMsState() {
        const currentDate = new Date();
        this.stateDateMs = currentDate.getTime();
    }

    async getAgendaPerWeek(tasks, date = false) {

        date = date ? date : new Date();

        let currentWeekDayNumber = date.getDay();
        currentWeekDayNumber = (currentWeekDayNumber === 0) ? 7 : currentWeekDayNumber;
        const lundiMs = date.getTime() - ((currentWeekDayNumber - 1) * 24 * 60 * 60 * 1000);

        const weekDayTasks = [];
        const currentYear = date.getFullYear();
        const currentMonth = this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getMonth() + 1);

        const currentDay = this.dateHelper.getFormatForNumbersWidhtZeroBefore(date.getDate());

        const paques = this.dateHelper.calculerPaques(currentYear);
        const lundiPaques = this.dateHelper.ajouterJours(paques, 1);
        const ascension = this.dateHelper.ajouterJours(paques, 39);
        const pentecote = this.dateHelper.ajouterJours(paques, 50);

        const joursFeries = [
            { type: 'jours férié', name: 'Jour de l’an', date: new Date(currentYear + 1, 0, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Lundi de Pâques', date: lundiPaques, bg: 'bgRed' },
            { type: 'jours férié', name: 'Fête du Travail', date: new Date(currentYear, 4, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Victoire 1945', date: new Date(currentYear, 4, 8), bg: 'bgRed' },
            { type: 'jours férié', name: 'Ascension', date: ascension, bg: 'bgRed' },
            { type: 'jours férié', name: 'Pentecôte', date: pentecote, bg: 'bgRed' },
            { type: 'jours férié', name: 'Fête Nationale', date: new Date(currentYear, 6, 14), bg: 'bgRed' },
            { type: 'jours férié', name: 'Assomption', date: new Date(currentYear, 7, 15), bg: 'bgRed' },
            { type: 'jours férié', name: 'Toussaint', date: new Date(currentYear, 10, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Armistice', date: new Date(currentYear, 10, 11), bg: 'bgRed' },
            { type: 'jours férié', name: 'Noël', date: new Date(currentYear, 11, 25), bg: 'bgRed' },
            { type: 'jours férié', name: 'Pâques', date: paques, bg: 'bgRed' }
        ];

        for (let i = 0; i < 7; i++) {
            const dayDateMs = lundiMs + (i * 24 * 60 * 60 * 1000);
            const dayDate = new Date(dayDateMs);
            const dayYear = dayDate.getFullYear();
            const dayMonth = this.dateHelper.getFormatForNumbersWidhtZeroBefore(dayDate.getMonth() + 1);
            const dayDateNum = this.dateHelper.getFormatForNumbersWidhtZeroBefore(dayDate.getDate());


            const tasksByDay = [];

            const dayDay = dayDate.getDay();
            if (dayDay === 2) tasksByDay.push({
                bg: "bgJaune",
                color: 'colorBlack',
                type: 'tasks',
                name: 'Poubelles plastiques/cartons',
                date,
                year: dayYear,
                month: dayMonth,
                dateNum: dayDateNum,
                dayLetter: dayDay
            });

            if (dayDay === 5) tasksByDay.push({
                bg: "bgBlack",
                color: 'colorWhite',
                type: 'tasks',
                name: 'Poubelles ménagères',
                date,
                year: dayYear,
                month: dayMonth,
                dateNum: dayDateNum,
                dayLetter: dayDay
            });

            if (this.bankHolidays) {
                for (let jf of joursFeries) {
                    if (dayDate.getTime() === jf.date.getTime()) {
                        tasksByDay.push(jf);
                    }
                }
            }

            const weekDays = {
                dayNumber: dayDate.getDay(),
                year: dayYear,
                month: dayMonth,
                dayDateNum,
                bankHolidays: this.bankHolidays,
                isCurrentDay: (currentYear === dayYear && currentMonth === dayMonth && currentDay === dayDateNum)
            };

            for (let task of tasks) {
                let myDate = this.dateHelper.convertDateToSTring(task.date);
                const [taskYear, taskMonth, taskDay] = myDate.split('-').map(Number);

                if (
                    Number(taskYear) === Number(dayYear) &&
                    Number(taskMonth+1) === Number(dayMonth) &&
                    Number(taskDay) === Number(dayDateNum)
                ) {
                    tasksByDay.push({
                        id: task.id,
                        author_id: task.author_id || null,
                        owner_id: task.owner_id || null,
                        type: task.type,
                        name: task.name,
                        description: task.description,
                        date,
                        year: dayYear,
                        month: taskMonth,
                        dateNum: taskDay,
                        dayLetter: dayDay
                    });
                }
            }

            weekDayTasks.push({ tasksByDay, weekDays });
        }

        return {
            dateSelected: { year: currentYear, month: currentMonth, dateDate: currentDay },
            weekDays: weekDayTasks
        };
    }
}