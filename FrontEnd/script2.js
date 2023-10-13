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
