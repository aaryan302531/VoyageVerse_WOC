function filterDestinations() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const destinationCards = document.querySelectorAll('.card');

    destinationCards.forEach(card => {
      const destinationName = card.getAttribute('data-name').toLowerCase();
      if (destinationName.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }