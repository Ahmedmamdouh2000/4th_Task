document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            button.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            button.textContent = '-';
        }
    });
});
