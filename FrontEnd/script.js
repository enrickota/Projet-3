(async function () {
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json();

    projet(projets);
})();

function projet(projets) {
    document.querySelector(".gallery").innerHTML = "";
    for (let i = 0; i < projets.length; i++) {
        const article = projets[i];
        const div = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = article.title;

        div.appendChild(figure);
        figure.appendChild(imageElement);
        figure.appendChild(nomElement);
    }
}
filtres();

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
