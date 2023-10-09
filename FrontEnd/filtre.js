function filtres() {
    (async function () {
        const reponseProjet = await fetch("http://localhost:5678/api/works");
        const projets = await reponseProjet.json();
        const reponseCategorie = await fetch("http://localhost:5678/api/categories");
        const categories = await reponseCategorie.json();

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
                    return projet(projets);
                }
                projet(filtreProjet);
            });
        }
    })();
}
