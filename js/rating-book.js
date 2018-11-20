function getRandomIdNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

var score = document.querySelectorAll(".puntuacion");


score.forEach(element => {
    var ratingForm = document.createElement('div');
    ratingForm.innerHTML =
    '<form class="rating" id="'+getRandomIdNumber(1,50)+'">\
    <label>\
      <input type="radio" name="stars" value="1" />\
      <i class="fas fa-star"></i>\
    </label>\
    <label>\
      <input type="radio" name="stars" value="2" />\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
    </label>\
    <label>\
      <input type="radio" name="stars" value="3" />\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
    </label>\
    <label>\
      <input type="radio" name="stars" value="4" />\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
    </label>\
    <label>\
      <input type="radio" name="stars" value="5" />\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
      <i class="fas fa-star"></i>\
    </label>\
  </form>';
    element.appendChild(ratingForm);
});