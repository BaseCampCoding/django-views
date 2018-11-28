function main() {
    const searchSubmitButton = document.querySelector('#nav-view-submit');
    const searchShortcodeInput = document.querySelector('#nav-view-short-code-input');

    searchSubmitButton.addEventListener('click', () => {
        window.location = '/link/' + encodeURI(searchShortcodeInput.value);
    });
}

document.addEventListener('DOMContentLoaded', main);
