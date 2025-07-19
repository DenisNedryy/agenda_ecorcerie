export class DecompteEvents{
    
    render(){
        const el = document.querySelector(".home__bodyContainer__plannings__events");
        if(el){
            el.innerHTML = "Decompte des events";
        }
    }
}