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
indexConnecter();

(async function () {
    const reponseProjet = await fetch("http://localhost:5678/api/works");
    const projets = await reponseProjet.json();
    const galleriImageModal = document.querySelector(".galerie-image");
    for (let i = 0; i < projets.length; i++) {
        const imageProjet = projets[i].imageUrl;
        const divImageprojet = document.createElement("img");
        divImageprojet.src = imageProjet;
        galleriImageModal.appendChild(divImageprojet);
    }
})();
