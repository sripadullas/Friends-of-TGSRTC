
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelectorAll('.nav-links a');
  nav.forEach(a => {
    if(a.href === location.href || location.href.endsWith(a.getAttribute('href'))){
      a.style.color = '#00e6ff';
    }
  });
  // Simple contact form handler (dummy)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! The form is a demo — to make it live, wire it to a backend or use Formspree/Netlify forms.');
      form.reset();
    });
  }
});
