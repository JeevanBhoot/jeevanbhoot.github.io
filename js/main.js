const sceneSurface = document.querySelector(".scene-surface");

if (sceneSurface && window.matchMedia("(pointer:fine)").matches) {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMove = (event) => {
    const rect = sceneSurface.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = clamp((x - 0.5) * 4, -4, 4);
    const tiltY = clamp((0.5 - y) * 4, -4, 4);
    sceneSurface.style.setProperty("--tilt-x", `${tiltX}deg`);
    sceneSurface.style.setProperty("--tilt-y", `${tiltY}deg`);
  };

  const reset = () => {
    sceneSurface.style.setProperty("--tilt-x", "0deg");
    sceneSurface.style.setProperty("--tilt-y", "0deg");
  };

  sceneSurface.addEventListener("pointermove", handleMove);
  sceneSurface.addEventListener("pointerleave", reset);
}
