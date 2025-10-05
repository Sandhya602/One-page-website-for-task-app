// Smooth scroll to pricing section when CTA button is clicked
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', () => {
  const pricingSection = document.querySelector('.pricing');
  pricingSection.scrollIntoView({ behavior: 'smooth' });
});

