document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle the display of the content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

document.getElementById('faq-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const content = item.querySelector('.faq-content').innerText.toLowerCase();
        if (content.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

