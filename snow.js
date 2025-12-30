const snowContainer = document.getElementById('snow-container');
const snowflakesCount = 50;

for (let i = 0; i < snowflakesCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random() * 12 + 8) + 'px';
  snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
  snowflake.textContent = '❄';
  snowContainer.appendChild(snowflake);
}
