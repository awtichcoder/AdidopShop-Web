// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
  initHeaderScroll()
})
// header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('main-header')
  const headerInner = document.getElementById('header-inner')
  const logo = document.getElementById('header-logo')

  if (!header || !headerInner || !logo) return

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      header.classList.remove('bg-transparent', 'text-white')
      header.classList.add('bg-white', 'text-black')
      headerInner.classList.replace('h-20', 'h-16')
      logo.classList.remove('brightness-0', 'invert')
    } else {
      header.classList.remove('bg-white', 'text-black')
      header.classList.add('bg-transparent', 'text-white')
      headerInner.classList.replace('h-16', 'h-20')
      logo.classList.add('brightness-0', 'invert')
    }
  })
}
