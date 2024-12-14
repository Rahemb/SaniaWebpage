// Dropdown-meny for mobil
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function (e) {
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                e.preventDefault();
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Lukk dropdown når man klikker utenfor
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});
