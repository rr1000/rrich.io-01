document.addEventListener('DOMContentLoaded', function() {
    const dateElements = document.querySelectorAll('.post-date');

    dateElements.forEach(el => {
        const postTimestamp = parseInt(el.getAttribute('data-date')) * 1000; // Convert to milliseconds
        const postDate = new Date(postTimestamp);
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - postDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        el.textContent = `${diffDays} days ago`;
    });
});

const hoverAreas = document.getElementsByClassName('hoverArea');
const tooltips = document.getElementsByClassName('tooltip');

Array.from(hoverAreas).forEach((hoverArea, index) => {
  const tooltip = tooltips[index];

  hoverArea.addEventListener('mousemove', (e) => {
    const rect = hoverArea.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = e.clientX - rect.left;
    let top = e.clientY - rect.top;

    // Adjust the tooltip position if it goes off the right edge of the screen
    if (e.clientX + tooltipRect.width > window.innerWidth) {
        left = window.innerWidth - tooltipRect.width - rect.left;
    }

    // Adjust the tooltip position if it goes off the bottom edge of the screen
    if (e.clientY + tooltipRect.height > window.innerHeight) {
        top = window.innerHeight - tooltipRect.height - rect.top;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.classList.remove('hidden');
    tooltip.classList.remove('opacity-0');
  });

  hoverArea.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
    tooltip.classList.add('opacity-0');
  });
});
