
    // Typing Animation
    const typingText = document.querySelector('.typing-animation');
    const textArray = ['A Student of Software and Game Development', 'An Interactive Designer', 'A Creative Thinker'];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
      if (charIndex < textArray[index].length && !isDeleting) {
        currentText += textArray[index][charIndex];
        charIndex++;
      } else if (charIndex === textArray[index].length) {
        isDeleting = true;
      } else if (charIndex > 0 && isDeleting) {
        currentText = currentText.slice(0, -1);
        charIndex--;
      } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
      }

      typingText.textContent = currentText;
      setTimeout(typeEffect, isDeleting ? 100 : 200);
    }

    typeEffect();
 
