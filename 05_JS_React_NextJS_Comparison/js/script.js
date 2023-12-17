document.addEventListener('DOMContentLoaded', function() {
    const colorSelector = document.getElementById('colorSelector');
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Orange'];

    // Populate the select element with color options
    colors.forEach(color => {
        let option = document.createElement('option');
        option.value = color.toLowerCase();
        option.textContent = color;
        colorSelector.appendChild(option);
    });

    // Event listener for the select element
    colorSelector.addEventListener('change', function() {
        document.body.style.backgroundColor = this.value;
    });
});