import { EventCountdownModel } from "../models/EventCountdownModel.js";

export class DecompteEvents {
    constructor() {
        this.interval = null;
    }

    render(event) {
        const el = document.querySelector(".home__bodyContainer__plannings__events");

        if (!el || !event) return;

        const updateCountdown = () => {
            const countdown = new EventCountdownModel(event.date);
            const countDownObj = countdown.getCountdownParts();
            el.innerHTML = `
            <p>Next event</p>
            <p class="eventName">"${event.name}"</p>
            <div class="decompte">
                <div>
                    <div class="circle">${countDownObj.days}</div>
                    <p>Days</p>
                </div>

                <div>
                  <div class="circle">${countDownObj.hours}</div>
                  <p>Hours</p>
                </div>

                <div>
                 <div class="circle">${countDownObj.minutes}</div>
                 <p>Minutes</p>
                </div>

                <div>
                     <div class="circle">${countDownObj.seconds}</div>
                     <p>Seconds</p>
                </div>
                     
            <div>
            `;

            // `<p>Prochain event : <strong>${event.name}</strong><br>Dans ${countdown.toString()}</p>`;


        };

        // Initial render
        updateCountdown();

        // Clear previous interval if needed
        if (this.interval) clearInterval(this.interval);

        // Start live countdown
        this.interval = setInterval(() => {
            updateCountdown();
        }, 1000);
    }

    destroy() {
        // Appelle ceci si tu changes de page ou veux stopper le décompte
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
