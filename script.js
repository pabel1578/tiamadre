document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("h1");
  
    // Animación del mensaje
    const screenWidth = window.innerWidth;
    let currentPosition = screenWidth;
  
    function moveMessage() {
      currentPosition -= 2; // Ajustamos la velocidad del movimiento
      message.style.left = currentPosition + "px";
      if (currentPosition < -message.offsetWidth) {
        currentPosition = screenWidth;
      }
    }
  
    setInterval(moveMessage, 10);
  });
  