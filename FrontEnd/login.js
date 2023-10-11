const formulaireConnexion = document.querySelector(".formulaire-connexion");

formulaireConnexion.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const passWord = document.querySelector("#password").value;
    if (email === "sophie.bluel@test.tld" && passWord === "S0phie") {
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
                window.sessionStorage.setItem("user", data.token);
                window.location.href = "./index.html";
            });
    } else {
        const messageErreur = document.querySelector(".message-erreur");
        messageErreur.style.display = "initial";
    }
});
