document.getElementById('toggle-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('show');
})

var sidebarItemOrder = 0;
for (const li of document.getElementById('sidebar').getElementsByTagName('li')) {
    li.style.setProperty('--order', sidebarItemOrder++);
}
