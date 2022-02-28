export const showGrid = (full: boolean, grid: HTMLDivElement, arrow: HTMLDivElement) => {
    if (full) {
        if (grid.style.display !== "block") {
            grid.style.display = "block";
            grid.style.opacity = "1";
            grid.style.maxHeight = grid.scrollHeight + "px";
            arrow.classList.add("active");
        } else {
            grid.style.opacity = "0";
            grid.style.maxHeight = "0px";
            arrow.classList.remove("active");
            setTimeout(() => {
                grid.style.display = "none";
            }, 400);
        }
    } else {
        grid.style.display = "block";
        grid.style.opacity = "1";
        grid.style.maxHeight = grid.scrollHeight + "px";
        arrow.classList.add("active");
    }
};
