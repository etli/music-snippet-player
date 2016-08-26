var $playButton = $('#play-button');
var audio = new Audio('music/before-the-fall.wav');

$playButton.on('mouseover', function() {
  loadTrack($(this));
});

$playButton.on('mouseout', function() {
  resetTrack($(this));
});

function loadTrack($button) {
  $button.removeClass().addClass('loading');
  $('icon', $button).removeClass().addClass('icon-spinner animate-spin');
  $('label', $button).text('Loading...');

  audio.load();
  console.log('Loading...');

  audio.addEventListener('canplay', function() {
    console.log('Ready to play');
    playTrack($button);
  });
}

function playTrack($button) {
  $button.removeClass().addClass('playing');
  $('icon', $button).removeClass().addClass('icon-volume-up');
  $('label', $button).text('Playing Preview');

  audio.play();
}

function resetTrack($button) {
  $button.removeClass().addClass('default');
  $('icon', $button).removeClass().addClass('icon-play');
  $('label', $button).text('Preview');

  audio.pause();
}
