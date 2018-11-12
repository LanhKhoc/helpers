/**
 * NOTE:
 * - client, screen => W3C Recommendation
 * - offset, page => W3C Working Draft
 */
const getMousePosition = (evt) => {
  const pageX = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  const pageY = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop;

  const rect = evt.target.getBoundingClientRect();
  const offsetX = evt.clientX - rect.left;
  const offsetY = evt.clientY - rect.top;

  return {
    client: { x: evt.clientX, y: evt.clientY }, // Relative to the viewport
    screen: { x: evt.screenX, y: evt.screenY }, // Relative to the physical screen
    offset: { x: offsetX,     y: offsetY },     // Relative to the event target
    page:   { x: pageX,       y: pageY }        // Relative to the html document
  };
}