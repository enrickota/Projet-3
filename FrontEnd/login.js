const formulaireConnexion = document.querySelector(".formulaire-connexion");

formulaireConnexion.addEventListener("submit", (event) => {
    event.preventDefault();

    const avis = {
        email: event.target.querySelector("[name=email").value,
        motDePasse: event.target.querySelector("[name=mot-de-passe").value,
    };

    const chargeUtile = JSON.stringify(avis);
    fetch("https://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile,
    });
});
