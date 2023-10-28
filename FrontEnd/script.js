(async function () {
    const reponse = await fetch("http://localhost:5678/api/works");
    const projets = await reponse.json();
    const reponseCategorie = await fetch("http://localhost:5678/api/categories");
    const categories = await reponseCategorie.json();

    afficherImageGallerie(projets);
    filtres(categories, projets);
    suppressionsTravaux(projets);
})();

/**
 * AFFICHAGE DES IMAGES DANS LA PAGE INDEX
 * @param {{id: number, title: string, imageUrl: string, categoryId: number, userId: number, category:{id: number, name: string}}} projets
 */
function afficherImageGallerie(projets) {
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

/**
 * FILTRES
 * @param {{id: number, name: string}} categories
 * @param {{id: number, title: string, imageUrl: string, categoryId: number, userId: number, category:{id: number, name: string}}} projets
 */
function filtres(categories, projets) {
    const divFiltres = document.querySelector(".liste-filtres");
    const filtreComplet = [{ name: "Tous", id: 0 }, ...categories];
    for (let i = 0; i < filtreComplet.length; i++) {
        const categorie = filtreComplet[i];
        const btn = document.createElement("button");
        btn.innerText = categorie.name;
        divFiltres.appendChild(btn);
        btn.addEventListener("click", () => {
            const listeBtn = document.querySelectorAll(".liste-filtres button");
            for (let index = 0; index < listeBtn.length; index++) {
                listeBtn[index].style.backgroundColor = "white";
                listeBtn[index].style.color = "#1D6154";
            }
            btn.style.backgroundColor = "#1D6154";
            btn.style.color = "white";
            const filtreProjet = projets.filter((h) => {
                return h.categoryId === categorie.id;
            });
            if (categorie.id === 0) {
                return afficherImageGallerie(projets);
            }
            afficherImageGallerie(filtreProjet);
        });
    }
}

/**
 * PAGE INDEX UNE FOIS CONNECTER
 */
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

/**
 * PREMIERE MODAL
 */
function modal1() {
    let modal = null;

    const ouvrirModal = function (e) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.style.display = null;
        target.setAttribute("aria-hidden", "false");
        target.setAttribute("aria-modal", "true");
        modal = target;
        modal.addEventListener("click", fermerModal1);
        modal.querySelector(".btn-fermer").addEventListener("click", fermerModal1);
        modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation);
    };

    const fermerModal1 = function (e) {
        if (modal === null) return;
        e.preventDefault();
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");
        modal.removeEventListener("click", fermerModal1);
        modal.querySelector(".btn-fermer").removeEventListener("click", fermerModal1);
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

/**
 * DEUXIEME MODAL
 */
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
        modal1.setAttribute("aria-hidden", "true");
        modal1.removeAttribute("aria-modal");
        modal1.removeEventListener("click", fermerModal);
        modal1.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
        modal1.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation);
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");
        modal.removeEventListener("click", fermerModal);
        modal.querySelector(".btn-fermer").removeEventListener("click", fermerModal);
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

    (async function () {
        const reponseCategorie = await fetch("http://localhost:5678/api/categories");
        const categories = await reponseCategorie.json();
        const selectCategorie = document.querySelector("#categorie");
        for (let i = 0; i < categories.length; i++) {
            const option = document.createElement("option");
            option.setAttribute("value", categories[i].id);
            option.innerText = categories[i].name;
            selectCategorie.appendChild(option);
        }
        ("");
    })();
}

/**
 * AFFICHAGE DES IMAGES DANS LA MODAL
 * @param {{id: number, title: string, imageUrl: string, categoryId: number, userId: number, category:{id: number, name: string}}} projets
 * @returns
 */
function afficherImageModal(projets) {
    const gallerieImageModal = document.querySelector(".galerie-image");
    gallerieImageModal.innerHTML = "";
    const tab = [];
    for (let i = 0; i < projets.length; i++) {
        const imageProjet = projets[i].imageUrl;
        const div = document.createElement("div");
        const divImageprojet = document.createElement("img");
        const iconePoubelle = document.createElement("i");

        iconePoubelle.classList.add("fa-solid", "fa-trash-can");
        divImageprojet.src = imageProjet;
        div.appendChild(divImageprojet);
        div.appendChild(iconePoubelle);
        gallerieImageModal.appendChild(div);
        tab.push({ iconePoubelle, id: projets[i].id });
    }
    return tab;
}

/**
 * SUPPRESSION DES TRAVAUX DANS LA MODAL
 * @param {{id: number, title: string, imageUrl: string, categoryId: number, userId: number, category:{id: number, name: string}}} projets
 */
function suppressionsTravaux(projets) {
    const icone = afficherImageModal(projets);
    for (let i = 0; i < icone.length; i++) {
        icone[i].iconePoubelle.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const iconeElement = icone[i].id;
            let monToken = sessionStorage.getItem("user");
            const options = {
                method: "DELETE",
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${monToken}`,
                },
            };
            fetch(`http://localhost:5678/api/works/${iconeElement}`, options);

            const reponse = await fetch("http://localhost:5678/api/works");
            const projets = await reponse.json();
            afficherImageGallerie(projets);
            suppressionsTravaux(projets);
        });
    }
}

/**
 * AFFICHAGE DE LA PHOTO SUR LA MODAL2 APRES CHOIX
 */
function afficherImageModal2() {
    let file = document.querySelector("#filInput").files;
    let conteneurPhoto = document.querySelector("#conteneur-photo");
    conteneurPhoto.removeAttribute("src");
    if (file.length > 0) {
        let fileReader = new FileReader();
        fileReader.onload = function (event) {
            const icone = document.querySelector(".conteneur-choix-photo i");
            icone.style.display = "none";
            const label = document.querySelector(".conteneur-choix-photo label");
            label.style.display = "none";
            const p = document.querySelector(".conteneur-choix-photo p");
            p.style.display = "none";
            const conteneur = document.querySelector(".conteneur-choix-photo");
            conteneur.style.padding = "0px";
            conteneur.style.display = "flex";
            conteneur.style.justifyContent = "center";
            conteneurPhoto.setAttribute("src", event.target.result);
            conteneurPhoto.classList.add("ajustement-photo");
        };
        fileReader.readAsDataURL(file[0]);
    } else {
        const icone = document.querySelector(".conteneur-choix-photo i");
        icone.style.display = "inherit";
        const label = document.querySelector(".conteneur-choix-photo label");
        label.style.display = "inherit";
        const p = document.querySelector(".conteneur-choix-photo p");
        p.style.display = "inherit";
        const conteneur = document.querySelector(".conteneur-choix-photo");
        conteneur.style.padding = "25px";
        conteneur.style.flexDirection = "column";
        conteneurPhoto.classList.remove("ajustement-photo");
    }
}
/**
 * AJOUTER UN PROJET À L'API
 */
function ajouterProjet() {
    const form = document.querySelector("#form-ajout-projet");
    const image = document.querySelector("#filInput");
    const titre = document.querySelector("#titre");
    const categorie = document.querySelector("#categorie");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (image.value === "" || titre.value === "") {
            const messageErreur = document.querySelector(".message-erreur-modal2");
            const hr = document.querySelector("#modal2 hr");
            messageErreur.style.display = "initial";
            hr.style.marginTop = "0px";
        } else {
            const formData = new FormData();
            formData.append("image", image.files[0]);
            formData.append("title", titre.value);
            formData.append("category", categorie.value);
            let monToken = sessionStorage.getItem("user");
            const options = {
                method: "POST",
                headers: { Authorization: `Bearer ${monToken}` },
                body: formData,
            };
            await fetch("http://localhost:5678/api/works", options);

            const reponse = await fetch("http://localhost:5678/api/works");
            const projets = await reponse.json();
            afficherImageGallerie(projets);
            suppressionsTravaux(projets);

            titre.value = "";
        }
    });
}
/**
 * VALIDATION DU BOUTON VALIDER UNE FOIS FORMULAIRE REMPLI
 */
function validationBtnValider() {
    const image = document.querySelector("#filInput");
    const titre = document.querySelector("#titre");
    const btn = document.querySelector(".btn-valider");
    if (titre.value != "" && image.value != "") {
        btn.style.backgroundColor = "#1D6154";
        btn.style.cursor = "pointer";
    } else {
        btn.style.backgroundColor = "#A7A7A7";
        btn.style.cursor = "initial";
    }
}
indexConnecter();
modal1();
modal2();
ajouterProjet();
validationBtnValider();
