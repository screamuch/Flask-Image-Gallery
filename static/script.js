function clicked_img(img) {
    console.log(img.src);

    var top = document.getElementById('top');
    var closeBtn = document.getElementById('close');

    top.src = img.src;
    top.hidden = false;
    closeBtn.hidden = false;

    var maxWidth = window.innerWidth * 0.95;
    var maxHeight = window.innerHeight * 0.95;

    var imgWidth = img.naturalWidth;
    var imgHeight = img.naturalHeight;

    if (imgWidth <= maxWidth && imgHeight <= maxHeight) {
        top.width = imgWidth;
        top.height = imgHeight;
    } else {
        var scale = Math.min(maxWidth / imgWidth, maxHeight / imgHeight);
        top.width = imgWidth * scale;
        top.height = imgHeight * scale;
    }
}

function do_close(event) {
    var top = document.getElementById('top');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('close');

    if (!event || event.target === overlay) {
        top.hidden = true;
        overlay.style.display = "none";
        closeBtn.hidden = true;
    }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
      do_close();
  }
});