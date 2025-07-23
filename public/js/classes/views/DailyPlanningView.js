export class DailyPlanningView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
           <div class="dailyPlanning">
                <div class="dailyPlanning__services">
                <p>Services</p>
                    <div class="dailyPlanning__services__content">
                    <div class="service--morning">
                        <i class="fa-solid fa-mug-saucer"></i> <p>Morning</p>
                    </div>
                    <div class="service--afternoon">
                        <i class="fa-solid fa-sun"></i> <p>Afternoon</p>
                    </div>
                    <div class="service--evening">
                        <i class="fa-solid fa-cloud-moon"></i> <p>Evening</p>
                    </div>
                    </div>
                </div> 
           </div>
           `;
        }
    }
}