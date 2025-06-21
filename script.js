document.getElementById("envoyerProblemeBtn").addEventListener("click", () => {
  const message = "Un utilisateur a signalé un problème !";
  const scriptURL = "https://script.google.com/macros/s/TON_URL_APPSCRIPT/exec"; // Remplace par ton lien

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({ message })
  })
  .then(() => alert("Merci, votre message a bien été envoyé !"))
  .catch(() => alert("Erreur lors de l'envoi"));
});
