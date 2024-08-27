// Function to save the page's scroll position in localStorage
function saveScrollPosition() {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition);
}

// Function to restore the page's scroll position from localStorage
function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
}

// Call the restoreScrollPosition function when the page loads
window.addEventListener('load', () => {
    restoreScrollPosition();
});

// Save the scroll position before the page is closed or reloaded
window.addEventListener('beforeunload', () => {
    saveScrollPosition();
});
