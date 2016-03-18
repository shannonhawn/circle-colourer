var $ball = $('.ball');
var $html = $('html');
var $input = $('form');
var $picker = $('picker');

$picker.on('change', function () {
  var newBall = $('<div>');
});

$ball.css('background-color', $input.val());
