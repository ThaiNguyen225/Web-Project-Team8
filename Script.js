function chooseAll(checkAllBox) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = checkAllBox.checked;
    });
}
