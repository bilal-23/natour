const navigationCheckbox = document.querySelector('.navigation__checkbox');

const navLinkList = document.querySelector('.navigation__list');

navLinkList.addEventListener('click', function (e) {
    if ((e.target).classList.contains('navigation__link')) {
        navigationCheckbox.checked = false;
    }
})


//Reveal sections

// const allSections = document.querySelectorAll('.section')

// const revealSection = function (entries, observer) {
//     const [entry] = entries;
//     console.log(entry);

//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove("section--hidden");
//     sectionObserver.unobserve(entry.target)
// }
// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0.25,
// });

// allSections.forEach(section => {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden')
// })