function animateCard(element) {
  element.style.transform = 'scale(1.05)';
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 300);
}

function toggleInfo(clickedElement) {
  const characters = document.querySelectorAll('.character');

  characters.forEach(character => {
    const info = character.querySelector('.character-info');

    if (character === clickedElement) {
      const isOpen = character.classList.contains('open');

      if (isOpen) {
        character.classList.remove('open');
        info.style.maxHeight = '0';
        info.style.opacity = '0';
      } else {
        character.classList.add('open');
        info.style.maxHeight = info.scrollHeight + 'px';
        info.style.opacity = '1';
        character.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      character.classList.remove('open');
      if (info) {
        info.style.maxHeight = '0';
        info.style.opacity = '0';
      }
    }
  });
}

function toggleList(header) {
  const section = header.parentElement;
  section.classList.toggle('open');

  if (section.classList.contains('open')) {
    header.innerHTML = "Anggota Trinity Seven ▲";
  } else {
    header.innerHTML = "Anggota Trinity Seven ▼";
  }
}

