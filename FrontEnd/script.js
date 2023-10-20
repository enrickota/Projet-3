/***********INTRODUCTION DE MES IMAGES DYNAMIQUEMENT**********/
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
        figure.id = article.id;
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = article.title;

        div.appendChild(figure);
        figure.appendChild(imageElement);
        figure.appendChild(nomElement);
    }
}

/*********INTRODUCTION DES IMAGES SUR LA MODAL**********/
(async function () {
    const reponseProjet = await fetch("http://localhost:5678/api/works");
    const projets = await reponseProjet.json();
    const galleriImageModal = document.querySelector(".galerie-image");
    for (let i = 0; i < projets.length; i++) {
        const imageProjet = projets[i].imageUrl;
        const div = document.createElement("div");
        const divImageprojet = document.createElement("img");
        const figure = document.querySelectorAll(".gallery figure");
        const iconePoubelle = document.createElement("i");
        iconePoubelle.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const iconeElement = projets[i].id;
            let monToken = sessionStorage.getItem("user");
            let response = await fetch(`http://localhost:5678/api/works/${iconeElement}`, {
                method: "DELETE",
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${monToken}`,
                },
            });
            figure.remove();
        });
        iconePoubelle.classList.add("fa-solid", "fa-trash-can");
        divImageprojet.src = imageProjet;
        div.appendChild(divImageprojet);
        div.appendChild(iconePoubelle);
        galleriImageModal.appendChild(div);
    }
})();

filtres();
indexConnecter();
modal();
modal2();
