export class AgendaWeek {

    // modal week
    agendaWeekTurnLeft() {
        this.stateDateMs -= 60 * 60 * 24 * 7 * 1000;
        const date = new Date(this.stateDateMs);
        return `${date.getFullYear()}-${this.getFormatForNumbersWidhtZeroBefore(date.getMonth())}-${this.getFormatForNumbersWidhtZeroBefore(date.getDate())}`;
    }

    // modal week
    agendaWeekTurnRight() {
        this.stateDateMs += 60 * 60 * 24 * 7 * 1000;
        const date = new Date(this.stateDateMs);
        return `${date.getFullYear()}-${this.getFormatForNumbersWidhtZeroBefore(date.getMonth())}-${this.getFormatForNumbersWidhtZeroBefore(date.getDate())}`;
    }

    // modal week
    // récupère tasks trié et en string
    // vérifie si string et si non convertie en string
    // reconvertie en DATE
    // récupère le jour de la semaine
    // recalcule le jour actuel
    // récupère le jour en lettre de la semaine
    // récupère les dates des fetes par rapport à pacques
    // créer un tableau des jours fériés (fêtes)
    // itères sur les jours de la semaine
    // ajoute les jours pour les poubelles
    // ajoute les jours fériés dans la semaine
    // ajoute les tasks dans la semaine

    async getAgendaPerWeek(date = false) {
        await this.fetchTasksFromApi();
        if (date === false) {
            const currentDate = new Date();
            this.stateDateMs = currentDate.getTime();
            date = `${currentDate.getFullYear()}-${this.getFormatForNumbersWidhtZeroBefore(currentDate.getMonth())}-${this.getFormatForNumbersWidhtZeroBefore(currentDate.getDate())}`;
        }

        if (typeof date !== 'string') {
            date = this.convertDateToSTring(date);
        }

        const dateArray = date.split('-').map(Number);
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        const dateSelected = new Date(year, month, day);

        let dayOfWeek = dateSelected.getDay();
        dayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
        const lundiMs = dateSelected.getTime() - ((dayOfWeek - 1) * 24 * 60 * 60 * 1000);

        const weekDayTasks = [];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        const paques = this.calculerPaques(year);
        const lundiPaques = this.ajouterJours(paques, 1);
        const ascension = this.ajouterJours(paques, 39);
        const pentecote = this.ajouterJours(paques, 50);

        const joursFeries = [
            { type: 'jours férié', name: 'Jour de l’an', date: new Date(year + 1, 0, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Lundi de Pâques', date: lundiPaques, bg: 'bgRed' },
            { type: 'jours férié', name: 'Fête du Travail', date: new Date(year, 4, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Victoire 1945', date: new Date(year, 4, 8), bg: 'bgRed' },
            { type: 'jours férié', name: 'Ascension', date: ascension, bg: 'bgRed' },
            { type: 'jours férié', name: 'Pentecôte', date: pentecote, bg: 'bgRed' },
            { type: 'jours férié', name: 'Fête Nationale', date: new Date(year, 6, 14), bg: 'bgRed' },
            { type: 'jours férié', name: 'Assomption', date: new Date(year, 7, 15), bg: 'bgRed' },
            { type: 'jours férié', name: 'Toussaint', date: new Date(year, 10, 1), bg: 'bgRed' },
            { type: 'jours férié', name: 'Armistice', date: new Date(year, 10, 11), bg: 'bgRed' },
            { type: 'jours férié', name: 'Noël', date: new Date(year, 11, 25), bg: 'bgRed' },
            { type: 'jours férié', name: 'Pâques', date: paques, bg: 'bgRed' }
        ];

        for (let i = 0; i < 7; i++) {
            const dayDateMs = lundiMs + (i * 24 * 60 * 60 * 1000);
            const dayDate = new Date(dayDateMs);
            const dayYear = dayDate.getFullYear();
            const dayMonth = dayDate.getMonth();
            const dayDateNum = dayDate.getDate();

            const tasksByDay = [];

            const dayDay = dayDate.getDay();
            if (dayDay === 2) tasksByDay.push({
                bg: "bgJaune",
                color: 'colorBlack',
                type: 'tasks',
                name: 'Poubelles plastiques/cartons',
                date,
                year: dayYear,
                month: this.getFormatForNumbersWidhtZeroBefore(dayMonth + 1),
                dateNum: this.getFormatForNumbersWidhtZeroBefore(dayDateNum),
                dayLetter: dayDay
            });

            if (dayDay === 5) tasksByDay.push({
                bg: "bgBlack",
                color: 'colorWhite',
                type: 'tasks',
                name: 'Poubelles ménagères',
                date,
                year: dayYear,
                month: this.getFormatForNumbersWidhtZeroBefore(dayMonth + 1),
                dateNum: this.getFormatForNumbersWidhtZeroBefore(dayDateNum),
                dayLetter: dayDay
            });

            if (this.fetes) {
                for (let jf of joursFeries) {
                    if (dayDate.getTime() === jf.date.getTime()) {
                        tasksByDay.push(jf);
                    }
                }
            }

            const weekDays = {
                year: dayYear,
                month: dayMonth + 1,
                dayDateNum,
                isFetes: this.fetes,
                isCurrentDay: (currentYear === dayYear && currentMonth === dayMonth && currentDay === dayDateNum)
            };

            for (let task of this.tasks) {
                const [taskYear, taskMonth, taskDay] = task.date.split('-').map(Number);
                if (
                    taskYear === dayYear &&
                    taskMonth === dayMonth + 1 &&
                    taskDay === dayDateNum
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
                        month: this.getFormatForNumbersWidhtZeroBefore(taskMonth),
                        dateNum: this.getFormatForNumbersWidhtZeroBefore(taskDay),
                        dayLetter: dayDay
                    });
                }
            }

            weekDayTasks.push({ tasksByDay, weekDays });
        }
        return {
            dateSelected: { year: year, month: month + 1, dateDate: day },
            weekDays: weekDayTasks
        };
    }
}