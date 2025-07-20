export class WeekView {

    constructor() {
        this.yearMonth = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre"
        ];

        this.weekDays = [
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
            "dimanche",
        ]
    }

    renderNavigation(date) {
        const el = document.querySelector(".agendaContent__header");
        if (el) {
            el.innerHTML = `
                  <div class="btn">Today</div>
                  <div class="agendaContent__header--iconsContainer">
                    <i class="fa-solid fa-angle-left"></i> <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <p>${this.yearMonth[Number(date.month) - 1]} ${date.year}</p>
            `;
        }
    }

    renderParameters(params) {
        const el = document.querySelector(".agendaContent__body__left");
        if (el) {

            const userTitle = document.createElement("p");
            userTitle.className = "agendaContent__body__left--category";
            userTitle.textContent = "Users";

            const ul = document.createElement("ul");
            const users = params.filter((param) => param.name);
            for (let i = 0; i < users.length; i++) {
                const li = document.createElement("li");
                const check = document.createElement("div");
                check.className = "checkBox";
                if (users[i].isSelected) {
                    const i = document.createElement("i");
                    i.className = "fa-solid fa-check";
                    check.appendChild(i);
                }
                const name = document.createElement("p");
                name.textContent = users[i].name;
                li.appendChild(check);
                li.appendChild(name);
                ul.appendChild(li);
            };
            el.appendChild(userTitle);
            el.appendChild(ul);

            const paramTitle = document.createElement("p");
            paramTitle.className = "agendaContent__body__left--category";
            paramTitle.textContent = "Params";

            const paramUl = document.createElement("ul");

            const bank = document.createElement("li");
            const bankBox = document.createElement("div");
            bankBox.className = "checkBox";
            if (params.bankHolidays) {
                const i = document.createElement("i");
                i.className = "fa-solid fa-check";
                bankBox.appendChild(i);
            }
            const bankPara = document.createElement("p");
            bankPara.textContent = "Bank Holidays";
            bank.appendChild(bankBox);
            bank.appendChild(bankPara);
            paramUl.appendChild(bank);

            const birth = document.createElement("li");
            const birthBox = document.createElement("div");
            birthBox.className = "checkBox";

            const birthPara = document.createElement("p");
            birthPara.textContent = "BirthDays";
            birth.appendChild(birthBox);
            birth.appendChild(birthPara);
            paramUl.appendChild(birth);

            el.appendChild(paramTitle);
            el.appendChild(paramUl);
        }
    }

    renderCalendar(data) {
        const el = document.querySelector(".agendaContent__body__right");
        if (el) {

            data.forEach((cell, index) => {
                const containerSupreme = document.createElement("div");
                containerSupreme.className = "dayFiche";

                const titleContainer = document.createElement("div");
                titleContainer.className = "dayFiche--title";
                const day = document.createElement("p");
                day.textContent = this.weekDays[index];
                const number = document.createElement("p");
                number.textContent = cell.dayNumber;
                titleContainer.appendChild(day);
                titleContainer.appendChild(number);
                containerSupreme.appendChild(titleContainer);

                const ul = document.createElement("ul");
                for (let i = 0; i < 20; i++) {
                    const li = document.createElement("li");
                    if(data[index].tasksByDay[i]){
                        li.textContent = data[index].tasksByDay[i].name;
                    }
                    ul.appendChild(li);
                }
                // cell.tasksByDay.forEach((cell2) => {
                //     const li = document.createElement("li");
                //     li.textContent = cell2.name;
                //     ul.appendChild(li);
                // });
                containerSupreme.appendChild(ul);
                el.appendChild(containerSupreme);
            });


        }
    }


    render(data, params) {
        const el = document.querySelector(".agendaContent");
        if (el) {
            el.innerHTML = `               
                    <div class="agendaContent__header">
                        <!-- mettre la navigation -->
                    </div>

                    <div class="agendaContent__body">
                        <div class="agendaContent__body__left">
                            <!-- mettre les parametres -->
                        </div>

                        <div class="agendaContent__body__right">
                            <!-- mettre le calendar -->
                        </div>
                    </div>
            `;

            this.renderNavigation(data.dateSelected);
            this.renderParameters(params);
            this.renderCalendar(data.weekDays);

        }
    }
}



