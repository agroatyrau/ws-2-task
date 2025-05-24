document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const sumDisplay = document.getElementById('sumDisplay');

    let currentSum = 0;

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Toggle the 'selected' class
            box.classList.toggle('selected');

            // Recalculate the sum
            currentSum = 0;
            boxes.forEach(b => {
                if (b.classList.contains('selected')) {
                    currentSum += parseInt(b.dataset.value, 10);
                }
            });

            // Update the sum display
            sumDisplay.textContent = currentSum;
        });
    });
});
