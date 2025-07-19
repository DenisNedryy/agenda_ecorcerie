export class HomeAgendaRdv{
    

    render(){
        const el = document.querySelector(".home__bodyContainer__plannings__rdvs");
        if(el){
            el.innerHTML = "3 prochains rdvs";
        }
    }
}