var $playButton = $('#play-button');

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

  setTimeout(function() {
    playTrack($button);
  }, 500);
}

function playTrack($button) {
  $button.removeClass().addClass('playing');
  $('icon', $button).removeClass().addClass('icon-volume-up');
  $('label', $button).text('Playing Preview');
}

function resetTrack($button) {
  $button.removeClass().addClass('default');
  $('icon', $button).removeClass().addClass('icon-play');
  $('label', $button).text('Preview');
}
