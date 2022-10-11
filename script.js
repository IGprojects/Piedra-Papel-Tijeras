const pedra=document.getElementById("pedra");
const paper=document.getElementById("paper");
const tisores=document.getElementById("tisores");

const puntshuma=document.getElementById("punts_humano");
const puntsmaquina=document.getElementById("punts_maquina");



localStorage.setItem('phuma',0)
localStorage.setItem('pmaqina',0)


function butoclicat(event) {
    event.preventDefault();
    if(!event.target.classList.contains("seleccionat")){
        pedra.classList.remove("seleccionat");
        paper.classList.remove("seleccionat");
        tisores.classList.remove("seleccionat");
        event.target.classList.add('seleccionat');
    }else{
        event.target.classList.remove('seleccionat');
    }
}

function lluita(event){
    let phuma=0;
    let pmaqina=0;
    let final1=0;
    let final2=0;

    event.preventDefault();
    let resultat=Math.floor(Math.random() * 3)


    //0 piedra
    //1 papel 
    //2 tijeras

    if(resultat==0 && pedra.classList.contains("seleccionat")){alert("EMPAT");}
    else if(resultat==1 && paper.classList.contains("seleccionat")){alert("EMPAT");}
    else if(resultat==2 && tisores.classList.contains("seleccionat")){alert("EMPAT");}

    else if(resultat==1 && pedra.classList.contains("seleccionat")){alert("Pedra VS Paper \n Has Perdut!"); pmaqina++}
    else if(resultat==2 && pedra.classList.contains("seleccionat")){alert("Pedra VS Tisores \n Has Guanyat!"); phuma++}

    else if(resultat==0 && paper.classList.contains("seleccionat")){alert("Paper VS Pedra \n Has Guanyat!"); phuma++}
    else if(resultat==2 && paper.classList.contains("seleccionat")){alert("Paper VS Tisores \n Has Perdut!"); pmaqina++}

    else if(resultat==0 && tisores.classList.contains("seleccionat")){alert("Tisores VS Pedra \n Has Perdut!"); pmaqina++}
    else if(resultat==1 && tisores.classList.contains("seleccionat")){alert("Tisores VS Paper \n Has Guanyat!"); phuma++}


    final1=parseInt(localStorage.getItem('phuma')) + phuma;
    final2=parseInt(localStorage.getItem('pmaqina')) + pmaqina;

    puntshuma.innerText="Humano " + final1;
    puntsmaquina.innerText="Maquina " + final2;

    localStorage.setItem('phuma',final1)
    localStorage.setItem('pmaqina',final2)

    pedra.classList.remove("seleccionat");
    paper.classList.remove("seleccionat");
    tisores.classList.remove("seleccionat");

}