$('.song button').on('mouseenter', function() {
  playTrack($(this));
}).on('mouseleave', function() {
  resetTrack($(this));
});

function loadTrack($button) { 
  // $button.removeClass().addClass('loading');
  // $('icon', $button).removeClass().addClass('icon-spinner animate-spin');
  // $('label', $button).text('Loading...');
  
  // console.log('Loading...');
  
  // audio.addEventListener('canplay', function() {
  //   console.log('Ready to play: ' + track);
    playTrack($button);
  // });
}

function playTrack($button) {
  $button.removeClass().addClass('playing');
  $('icon', $button).removeClass().addClass('icon-volume-up');
  $('label', $button).text('Playing Preview');

  var audio = $button.next('audio')[0];
  // audio.load();
  fadeInTrack(audio);
}

function resetTrack($button) {
  $button.removeClass().addClass('default');
  $('icon', $button).removeClass().addClass('icon-play');
  $('label', $button).text('Preview');

  var audio = $button.next('audio')[0];
  fadeOutTrack(audio);
}

function fadeInTrack(audio) {
  audio.volume = 0;
  audio.play();
  $(audio).stop().animate({volume: 1}, 1000);
}

function fadeOutTrack(audio) {
  $(audio).stop().animate({volume: 0}, 1000, function() {
    audio.pause();
  });
}
