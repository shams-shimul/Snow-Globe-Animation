const snowGlobe = document.querySelector(".snow-globe");
const snowGlobeWithBase = document.querySelector("main");
let count = 0;
const fontSizes = ["12px", "16px", "20px", "24px"];
function createSnowflake() {
  /* 
  Challenge:
  1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
  2. See index.css
  */
  ++count;

  const snowflake = document.createElement("span");
  snowflake.classList.add("snowflake");
  snowflake.innerHTML = count % 25 === 0 ? "☃️" : "❄️";

  const posX = Math.floor(
    Math.random() * (snowGlobe.getBoundingClientRect().width + 100)
  );
  snowflake.style.left = `${posX - 150}px`;
  snowflake.style.fontSize = fontSizes[Math.floor(Math.random() * 4)];

  const duration = (Math.floor(Math.random() * 4) + 2) * 1000; //between 2s and 5s (both inclusive)
  snowflake.style.animationDuration = `${duration}ms`;

  snowGlobe.appendChild(snowflake);

  // removing the snowflake after the animation duration ends
  setTimeout(() => {
    snowflake.remove();
  }, duration);
}

// setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/
const button = document.querySelector("button");
const buttonBG = document.querySelector("button span");
document.querySelector("button").addEventListener("click", e => {
  console.log("EVENT HANDLER TRIGGERED");
  const intervalID = setInterval(createSnowflake, 100);

  snowGlobeWithBase.classList.add("shake"); // shake effect
  button.disabled = true;
  buttonBG.classList.add("regain");

  // After 20s, stop the snowflake animation
  setTimeout(() => {
    clearInterval(intervalID);
    button.disabled = false;
    snowGlobeWithBase.classList.remove("shake");
    buttonBG.classList.remove("regain");
  }, 20000);
});
