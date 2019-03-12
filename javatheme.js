function setPosition(sprite) {
  var e = document.getElementById(sprite.element);
  e.style.left = sprite.x + 'px';
  e.style.top = sprite.y + 'px';
}


function createSprite(element, x, y, w, h) {
  var result = new Object();
  result.element = element;
  result.x = x;
  result.y = y;
  result.w = w;
  result.h = h;
  return result;
}

var rocket = createSprite('ROCKET', 250, 460, 20, 20);