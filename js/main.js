function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floatingButton');
  $floatingButton.addEventListener('click', () => {
    console.log('????');
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

const options = {
  threshold: 0.5,
};

// 화면 이동을 감지하는 observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skill__text');
scrollReveal.reveal('.home__img, .about__data, .skill__img', { delay: 400 });
scrollReveal.reveal('.skill__data, .work__link, .contact__input', {
  interval: 200,
});

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('KEEP CODING<br />')
  .type('<strong>MEET</strong><br />')
  .type('<strong class="home_title-color">THE NEW WORLD</strong>')
  .go();

// Email Client
const $contactForm = document.getElementById('contactForm');
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = $contactForm.name.value;
  const subject = $contactForm.subject.value;
  const message = $contactForm.message.value;
  const to = 'emily.eunji.chung@gmail.com';

  location.href = `mailto:${to}?subject=${subject}&body=${message} From ${name} :`;
});
