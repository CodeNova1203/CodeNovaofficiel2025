
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
    setTimeout(() => {
        menu.style.display = 'none';
    }, 3000);
}
