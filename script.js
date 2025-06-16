
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

window.onload = () => {
  const ctx = document.getElementById('financeChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Salaire employé', 'Revenus entreprise', 'Bénéfice patron'],
        datasets: [{
          label: 'Montants (€)',
          data: [1, 15000, 5993],
          backgroundColor: ['#36a2eb', '#4bc0c0', '#ff6384']
        }]
      },
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
};
