export class GouvernanteView {
  render() {
    const el = document.getElementById("root");
    if (el) {
      el.innerHTML = `
        <div class="box">
          <p>Gouvernante</p>
          <form>
            <div>
              <label>Insert a planning</label>
              <input type="file" name="planningGouvernante" id="f" accept=".pdf,.xlsx,.xls"/>
            </div>
          </form>

        <div class="gourvernante"></div>
        </div>`;
    }
  }

  renderGouvernante(data) {
    const el = document.querySelector(".gourvernante");
    if (el) {
      el.innerHTML = "";

      const title = document.createElement("h2");
      const date = new Date(data.date);

      title.textContent = date.toLocaleDateString('fr-FR');
      el.appendChild(title);
      const container = document.createElement("div");
      const header = document.createElement("ul");
      header.className = "gourvernante__header";
      header.innerHTML = `
      <li>Type</li>
      <li>N°</li>
      <li>name</li>
      <li>Phone</li>
      <li>Nb clients</li>
      <li>Source</li>
      <li>Extra</li>
      `;
      container.appendChild(header);
      const fiche = document.createElement("ul");
      fiche.className="gourvernante__fiches";
      const rooms = data.rooms;
      for (let i = 0; i < rooms.length; i++) {
        const li = document.createElement("li");
        li.className = `${rooms[i].type==="Checks-ins" ? "checksIn" : ""}`
        li.innerHTML = `
        <p>${rooms[i].type}</p>
        <p>${rooms[i].roomNum}</p>
        <p>${rooms[i].clientName}</p>
        <p>${rooms[i].clientPhone}</p>
        <p>${rooms[i].nbClient}</p>
        <p>${rooms[i].source}</p>
        <p>${rooms[i].extras}</p>
        `;
        fiche.appendChild(li);
      }
      container.appendChild(fiche);
      el.appendChild(container);
    }
  }
}
