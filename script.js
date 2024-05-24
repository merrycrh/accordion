document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const content = this.nextElementSibling;

            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.display = 'none';
            });

            if (!isActive) {
                this.classList.add('active');
                content.style.display = 'block';
            } else {
                this.classList.remove('active');
                content.style.display = 'none';
            }
        });
    });
});
