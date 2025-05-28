const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close');
const links = sidebar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  sidebar.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  document.body.style.overflow = '';
});

links.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    document.body.style.overflow = '';
  });
});

//Skills
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".skill-bar .bar");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    bars.forEach(bar => {
      observer.observe(bar);
    });
  });