export function convertToPixels(length) {
    const div = document.createElement('div');
    div.style.width = length;
    div.style.height = '0px';
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const pixels = parseInt(getComputedStyle(div).width);
    document.body.removeChild(div);
    return pixels;
  }