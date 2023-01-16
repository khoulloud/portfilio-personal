// Récupère le formulaire
const form = document.querySelector('form');

// Ajoute un écouteur d'événement pour gérer la soumission du formulaire
form.addEventListener('submit', e => {
  e.preventDefault();

  // Récupère les données du formulaire
  const data = new FormData(form);

  // Envoie les données au script serveur
  fetch('/send-form', {
    method: 'POST',
    body: data
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});
