const header = document.getElementById('header');
const nav = document.getElementById('navigation');



header.style.float = "right";
nav.style.position = "absolute";
nav.style.top = "50%";
nav.style.left = "50%";
nav.style.transform = "translate(-50%, -50%)";


const img2 = document.createElement("img");
img2.src = "dom.jpg";
document.body.appendChild(img2);
img2.style.position = "fixed";
img2.style.left = "0";
img2.style.bottom = "0";

/*-----------TASK 1.2 ---------- */

function getDay(dateStr) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateStr);
  return days[date.getDay()];
}

const p = document.createElement("p")
p.textContent = "Today Is : " + getDay("2025-07-08");
document.body.appendChild(p);
p.style.color = "red";





