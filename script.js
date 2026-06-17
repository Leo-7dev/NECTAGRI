document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Défilement Fluide pour la Navigation
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-links a, .btn-main');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // On vérifie que le lien commence bien par un '#' pour l'ancrage interne
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calcule la hauteur du menu pour ne pas cacher le titre de la section
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // 2. Gestion Interactive du Formulaire
    // ==========================================
    const contactForm = document.querySelector('.form-container form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Récupération des données saisies par l'utilisateur
            const clientName = document.getElementById('name').value;
            const clientEmail = document.getElementById('email').value;

            // Création d'un message de succès visuel sous le bouton
            const successMessage = document.createElement('p');
            successMessage.style.color = '#27ae60'; // Vert pour le succès
            successMessage.style.fontWeight = 'bold';
            successMessage.style.marginTop = '15px';
            successMessage.style.textAlign = 'center';
            successMessage.innerText = `Merci ${clientName} ! Votre message a bien été envoyé au comité Nectagri.`;

            // Ajoute le message dans le formulaire
            contactForm.appendChild(successMessage);

            // Réinitialise (vide) les champs du formulaire après l'envoi
            contactForm.reset();

            // Supprime le message de confirmation automatiquement après 5 secondes
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});

