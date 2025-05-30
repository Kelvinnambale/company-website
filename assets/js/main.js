/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      // Keep loading overlay visible for 30 seconds (30000 ms) before hiding
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 300000);
    }
  });
  