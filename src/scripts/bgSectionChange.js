const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const parentSection = document.querySelector(".section-bg-3");

btn1.addEventListener("mouseenter", () => {
    parentSection.style.backgroundColor = "#FFD700";
    parentSection.style.backgroundImage = "none"; 
    parentSection.style.backgroundRepeat = "no-repeat"; 
  });
  
  btn1.addEventListener("mouseleave", () => {
    parentSection.style.backgroundColor = "#e3e3e3";
    parentSection.style.backgroundRepeat = "no-repeat"; 
  });
btn2.addEventListener("mouseenter", () => {
    parentSection.style.backgroundColor = "#4169E1"; 
    parentSection.style.backgroundImage = "none"; 
    parentSection.style.backgroundRepeat = "no-repeat";
});

btn2.addEventListener("mouseleave", () => {
    parentSection.style.backgroundColor = "#e3e3e3";
    parentSection.style.backgroundRepeat = "no-repeat"; 
});

btn3.addEventListener("mouseenter", () => {
    parentSection.style.backgroundColor = "#DC143C"; 
    parentSection.style.backgroundImage = "none"; 
    parentSection.style.backgroundRepeat = "no-repeat"; 
});

btn3.addEventListener("mouseleave", () => {
    parentSection.style.backgroundColor = "#e3e3e3";
    parentSection.style.backgroundRepeat = "no-repeat"; 
});
