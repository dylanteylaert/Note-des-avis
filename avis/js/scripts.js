window.onload = () => {

    // on récupére toutes les étoiles
    const stars = document.querySelectorAll(".la-star");

    // on récupére l'input
    const note = document.querySelector("#note");

    // on boucle sur les étoiles pour leur ajouter des écouteurs d'évènements
    for(star of stars){
        //on écoute le survol
        star.addEventListener("mouseover", function(){
            resetStars();
            this.style.color = "red"
            this.classList.add("las")
            this.classList.remove("lar")

            // l'élément précédent dans le DOM (de même niveau, balise soeur)
            let previousStar = this.previousElementSibling;

            while(previousStar){
                //on passe l'étoile qui précéde en rouge 
                previousStar.style.color = "red";
                previousStar.classList.add("las")
                previousStar.classList.remove("lar")
                //on récupère l'étoile qui la précéde
                previousStar = previousStar.previousElementSibling;
            }
        });

        
        //on écoute le clic
        star.addEventListener("click", function(){
            note.value = this.dataset.value;
        });

        star.addEventListener("mouseout", function(){
            resetStars(note.value)
        });
    }

    //repasse les étoile en noir
    function resetStars(note = 0){
        for(star of stars){
            if(star.dataset.value > note){
                star.style.color = "black";
                star.classList.add("lar")
                star.classList.remove("las")
            }else {
                star.style.color = "red";
                star.classList.add("las")
                star.classList.remove("lar")
            }
            
        }
    }
}