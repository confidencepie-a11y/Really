// Assets / Accounts toggle
const segButtons = document.querySelectorAll('.seg-btn');
segButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    segButtons.forEach(b => b.classList.toggle('active', b === btn));
    document.getElementById('assets').classList.toggle('hidden', btn.dataset.tab !== 'assets');
    document.getElementById('accounts').classList.toggle('hidden', btn.dataset.tab !== 'accounts');
  });
});

// Bottom nav active state
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.toggle('active', b === btn));
  });
});
