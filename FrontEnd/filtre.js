function filtres() {
    (async function () {
        const reponse = await fetch("http://localhost:5678/api/works");
        const projets = await reponse.json();

        const divFiltres = document.querySelector(".liste-filtres");
        const btnTous = document.createElement("button");
        divFiltres.appendChild(btnTous);
        btnTous.innerText = "Tous";
        btnTous.addEventListener("click", () => {
            projet(projets);
            const listeBtn = document.querySelectorAll("button");
            for (i = 0; i < listeBtn.length; i++) {
                listeBtn[i].style.backgroundColor = "white";
                listeBtn[i].style.color = "#1D6154";
                btnTous.style.backgroundColor = "#1D6154";
                btnTous.style.color = "white";
            }
        });
    })();

    (async function () {
        const reponse = await fetch("http://localhost:5678/api/works");
        const projets = await reponse.json();

        const divFiltres = document.querySelector(".liste-filtres");
        const btnObjet = document.createElement("button");
        divFiltres.appendChild(btnObjet);
        btnObjet.innerText = "Objets";
        btnObjet.addEventListener("click", () => {
            const objetFiltrer = projets.filter(function (h) {
                return h.categoryId === 1;
            });
            projet(objetFiltrer);
            const listeBtn = document.querySelectorAll("button");
            for (i = 0; i < listeBtn.length; i++) {
                listeBtn[i].style.backgroundColor = "white";
                listeBtn[i].style.color = "#1D6154";
                btnObjet.style.backgroundColor = "#1D6154";
                btnObjet.style.color = "white";
            }
        });
    })();

    (async function () {
        const reponse = await fetch("http://localhost:5678/api/works");
        const projets = await reponse.json();

        const divFiltres = document.querySelector(".liste-filtres");
        const btnAppartement = document.createElement("button");
        divFiltres.appendChild(btnAppartement);
        btnAppartement.innerText = "Appartements";
        btnAppartement.addEventListener("click", () => {
            const appartementFiltrer = projets.filter(function (h) {
                return h.categoryId === 2;
            });
            projet(appartementFiltrer);
            const listeBtn = document.querySelectorAll("button");
            for (i = 0; i < listeBtn.length; i++) {
                listeBtn[i].style.backgroundColor = "white";
                listeBtn[i].style.color = "#1D6154";
                btnAppartement.style.backgroundColor = "#1D6154";
                btnAppartement.style.color = "white";
            }
        });
    })();

    (async function () {
        const reponse = await fetch("http://localhost:5678/api/works");
        const projets = await reponse.json();

        const divFiltres = document.querySelector(".liste-filtres");
        const btnHotel = document.createElement("button");
        divFiltres.appendChild(btnHotel);
        btnHotel.innerText = "Hotels & restaurants";
        btnHotel.addEventListener("click", () => {
            const hotelFiltrer = projets.filter(function (h) {
                return h.categoryId === 3;
            });
            projet(hotelFiltrer);
            const listeBtn = document.querySelectorAll("button");
            for (i = 0; i < listeBtn.length; i++) {
                listeBtn[i].style.backgroundColor = "white";
                listeBtn[i].style.color = "#1D6154";
                btnHotel.style.backgroundColor = "#1D6154";
                btnHotel.style.color = "white";
            }
        });
    })();
}
