document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => zoomIn(img))
    img.addEventListener('mouseout', () => zoomOut(img))
})

function zoomIn(img) {
    img.style.transform = 'scale(1.2)'
}

function zoomOut(img) {
    img.style.transform = 'scale(1)'
}