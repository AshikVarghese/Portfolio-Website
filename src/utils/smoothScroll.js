export function smoothScroll(hash, offset = 0) {
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });

  history.pushState(null, "", hash);
}
