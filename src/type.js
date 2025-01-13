"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
}) // Dream Coder|
  .move(-11)
  .type("Amazing ") // Amazing |Dream Coder
  .pause(1000)
  .move(null, { to: "END" }) // Amazing Dream Coder|
  .delete() // |
  .type("Front-end Engineer")
  .pause(1000)
  .delete()
  .go();
