// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Count completed reviews with localStorage.
// This page only loads after the form is submitted, so each load = one more review.
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("review-count").textContent = reviewCount;
