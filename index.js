  $("img").each(function() {
    const element = $(this);
    const throwableElement = element.clone();
    element.css("visibility", "hidden");
    throwableElement.css("z-index", 2147483647);
    throwableElement.insertBefore(element);
    throwableElement.throwable({
      bounce: 0.5,
      damping: 50,
      collisionDetection: false
    });
  });

  document.body.style.cursor = `url("https://kay-is.github.io/undefined-gooselet/goose.png"), default`;
  const honk = new Audio(
    "https://kay-is.github.io/undefined-gooselet/honk.mp3"
  );
  document.oncontextmenu = () => {
    honk.play();
    return false;
  };

  document.oncontextmenu();
