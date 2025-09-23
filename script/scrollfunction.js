function scrollAnimate(options) {
  const {
    selector,
    heightStart = 1,
    heightEnd = 0.2,
    from = {},
    to = {},
    easing = t => t
  } = options;

  const elements = document.querySelectorAll(selector);

  function animate() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progresso entre 0 e 1
      let progress = (windowHeight * heightStart - rect.top) / (windowHeight * heightEnd);
      progress = Math.min(Math.max(progress, 0), 1);

      // aplicar easing
      const eased = easing(progress);

      // array para acumular transforms
      const transformParts = [];

      // interpolar cada propriedade
      Object.keys(from).forEach(prop => {
        const start = from[prop];
        const end = to[prop];

        if (typeof start === "number" && typeof end === "number") {
          const value = start + (end - start) * eased;

          switch (prop) {
            case "opacity":
              el.style.opacity = value;
              break;
            case "transformY":
              transformParts.push(`translateY(${value}px)`);
              break;
            case "transformX":
              transformParts.push(`translateX(${value}px)`);
              break;
            case "rotate":
              transformParts.push(`rotate(${value}deg)`);
              break;
            case "scale":
              transformParts.push(`scale(${value})`);
              break;
            case "borderRadius":
              el.style.borderRadius = `${value}px`;
              break;
            default:
              el.style[prop] = `${value}px`;
          }
        }
      });

      if (transformParts.length) {
        el.style.transform = transformParts.join(" ");
      }
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}




/* scrollAnimate({
  selector: ".todo",
  heightStart: 0.5,
  heightEnd: 0.2,
  from: { opacity: 0, transformY: 50, borderRadius: 0, width:300 },
  to:   { opacity: 1, transformY: 0, borderRadius: 30, width: 100 },
}); */