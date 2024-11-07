const images = document.querySelectorAll('.image');

let draggedElement = null;

images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        e.target.classList.add("dragging");
    });

    image.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
        e.preventDefault();
        e.preventDefault();
        if (draggedElement && draggedElement !== e.target) {
            const parent = e.target.parentNode;
            parent.insertBefore(draggedElement, e.target.nextSibling);
        }
        draggedElement.classList.remove("dragging");
        draggedElement = null;
    });

    image.addEventListener("dragend", () => {
        if (draggedElement) {
            draggedElement.classList.remove("dragging");
            draggedElement = null;
        }
    });
});

