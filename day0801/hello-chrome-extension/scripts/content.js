
let heading = document.querySelector('h1');

// `document.querySelector` may return null if the selector doesn't match anything.
if (heading) {
    const badge = document.createElement('p');
    badge.classList.add('h3', 'text-center');
    badge.textContent = '💯';

    heading.insertAdjacentElement('afterend', badge);
}
