let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').innerHTML = "I'm Dom. Welcome to the streets!";

  // Part 2
document.body.style.backgroundColor = "#833b24";

  // Part 3
  const list = document.getElementById("favorite-things");
  list.removeChild(list.lastElementChild);

  // Part 4
  const elements = document.getElementsByClassName("special-title");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "2rem";
  }

  // Part 5
  let chicagoItem = document.querySelector("#past-races li:nth-child(4)");
  chicagoItem.parentNode.removeChild(chicagoItem);

  // Part 6
  const newElement = document.createElement("li");
  newElement.innerHTML = "Boston";

  // Part 7
  const blogPost = document.createElement("div");
  blogPost.className = "blog-post purple";

  const heading = document.createElement("h1");
  heading.innerHTML = "Boston";

  const paragraph = document.createElement("p");
  paragraph.innerHTML = "You're Like The Justin Timberlake Of Japan, Right?";

  blogPost.appendChild(heading);
  blogPost.appendChild(paragraph);

  blogPost.appendChild(heading);
  blogPost.appendChild(paragraph);

  document.querySelector(".main").appendChild(blogPost);

  // Part 8
  document.getElementById("quote-title").addEventListener("click", randomQuote);

  // Part 9
  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach(function (element) {
    element.addEventListener("mouseout", function () {
      element.classList.toggle("purple");
    });

    element.addEventListener("mouseenter", function () {
      element.classList.toggle(".red");
    });
  });
});
