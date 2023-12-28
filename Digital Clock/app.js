const clock = document.getElementById("clock");

setInterval(() => {
  const todayDate = new Date();
  clock.innerHTML = todayDate.toLocaleTimeString()
}, 1000);
