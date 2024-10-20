
    document.addEventListener('DOMContentLoaded', function() {
        const popup = document.querySelector('.pop-up');
        const supportButton = document.querySelector('.blue-button');

        
        supportButton.addEventListener('click', function() {
            popup.style.display = 'flex';
        });

        popup.addEventListener('click', function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

