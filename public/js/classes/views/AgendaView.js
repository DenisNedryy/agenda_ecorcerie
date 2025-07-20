export class AgendaView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
            <div class="agenda">
                <div class="agenda__viewSelection">
                    <p class="agenda__viewSelection--title">Views</p>
                    <ul class="agenda__viewSelection__viewContainer">
                        <li><i class="fa-solid fa-calendar-week"></i><p>Week</p></li>
                        <li><i class="fa-solid fa-calendar-days"></i><p>Year</p></li>
                        <li><i class="fa-solid fa-rectangle-list"></i><p>Planning</p></li>
                    </ul>
                </div>
                <div class="agendaContent"></div>
            </div>
            `
        }
    }
}