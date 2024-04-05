document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesButton = document.getElementById("acceptCookies");
      const cookiesAccepted = localStorage.getItem("cookiesAccepted");
  
    if (!cookiesAccepted) {
      cookieBanner.style.display = "block";
    }
  
    acceptCookiesButton.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", true);
      cookieBanner.style.display = "none";
    });
  });
  