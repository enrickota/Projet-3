//******PAGE INDEX UNE FOIS CONNECTER********/
function indexConnecter() {
    if (window.sessionStorage.getItem("user")) {
        const filtres = document.querySelector(".liste-filtres");
        filtres.style.display = "none";
        const titrePortfolio = document.querySelector("#portfolio h2");
        titrePortfolio.style.marginBottom = "3.7em";
        const barreNoir = document.querySelector(".barre-noir");
        barreNoir.style.display = "block";
        barreNoir.style.display = "flex";
        barreNoir.style.justifyContent = "center";
        barreNoir.style.alignItems = "center";
        barreNoir.style.gap = "10px";
        const lienLogin = document.querySelector(".lien-login");
        lienLogin.innerText = "logout";
        const btnModifier = document.querySelector(".btn-modifier");
        btnModifier.style.display = "initial";
        const divProjetLogin = document.querySelector(".div-projet-login");
        divProjetLogin.style.marginLeft = "100px";
    }
}

/*********PREMIERE MODAL*********/
function modal() {
    let modal = null;

    const ouvrirModal = function (e) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.style.display = null;
        target.setAttribute("aria-hidden", "false");
        target.setAttribute("aria-modal", "true");
        modal = target;
        modal.addEventListener("click", fermerModal);
        modal.querySelector(".btn-fermer").addEventListener("click", fermerModal);
        modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation);
    };

    const fermerModal = function (e) {
        if (modal === null) return;
        e.preventDefault();
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");
        modal.removeEventListener("click", fermerModal);
        modal.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
        modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
        modal = null;
    };

    const stopPropagation = function (e) {
        e.stopPropagation();
    };

    document.querySelectorAll(".btn-modifier").forEach((a) => {
        a.addEventListener("click", ouvrirModal);
    });
}

/*********DEUXIEME MODAL*********/
function modal2() {
    let modal = null;

    const ouvrirModal = function (e) {
        e.preventDefault();
        const target = document.querySelector("#modal2");
        target.style.display = null;
        target.setAttribute("aria-hidden", "false");
        target.setAttribute("aria-modal", "true");
        modal = target;
        modal.addEventListener("click", fermerModal);
        modal.querySelector(".btn-fermer").addEventListener("click", fermerModal);
        modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation);
    };

    const fermerModal = function (e) {
        if (modal === null) return;
        e.preventDefault();
        const modal1 = document.querySelector("#modal1");
        modal1.style.display = "none";
        modal.style.display = "none";
        modal1.setAttribute("aria-hidden", "true");
        modal.setAttribute("aria-hidden", "true");
        modal1.removeAttribute("aria-modal");
        modal.removeAttribute("aria-modal");
        modal1.removeEventListener("click", fermerModal);
        modal.removeEventListener("click", fermerModal);
        modal1.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
        modal.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
        modal1.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
        modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
        modal = null;
    };

    const btnRetour = document.querySelector(".btn-retour");
    btnRetour.addEventListener("click", () => {
        const modal2 = document.querySelector("#modal2");
        modal2.style.display = "none";
        modal2.setAttribute("aria-hidden", "true");
        modal2.removeAttribute("aria-modal");
        modal2.removeEventListener("click", fermerModal);
        modal2.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
        modal2.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
    });

    const stopPropagation = function (e) {
        e.stopPropagation();
    };

    document.querySelectorAll(".btn-ajouter").forEach((a) => {
        a.addEventListener("click", ouvrirModal);
    });
}
