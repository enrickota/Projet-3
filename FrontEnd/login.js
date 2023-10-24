const formulaireConnexion = document.querySelector(".formulaire-connexion");

formulaireConnexion.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const passWord = document.querySelector("#password").value;
    if (email !== "" && passWord !== "") {
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: passWord,
            }),
        })
            .then((reponse) => reponse.json())
            .then((data) => {
                if (data.token !== undefined) {
                    window.sessionStorage.setItem("user", data.token);
                    window.location.href = "./index.html";
                } else if (data.message !== undefined) {
                    const messageErreur = document.querySelector(".message-erreur");
                    messageErreur.style.display = "initial";
                    messageErreur.innerHTML = data.message;
                }
            });
    } else {
        const messageErreur = document.querySelector(".message-erreur");
        messageErreur.style.display = "initial";
    }
});
