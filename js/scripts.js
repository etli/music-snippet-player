var audio = new Audio('music/before-the-fall.wav');

$('.song button').on('mouseenter', function() {
  loadTrack($(this));
}).on('mouseleave', function() {
  resetTrack($(this));
});

function loadTrack($button) {
  var track = $button.attr('data-audio-src');

  // $button.removeClass().addClass('loading');
  // $('icon', $button).removeClass().addClass('icon-spinner animate-spin');
  // $('label', $button).text('Loading...');

  audio.src = track;
  audio.load();
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

  fadeInTrack();
}

function resetTrack($button) {
  $button.removeClass().addClass('default');
  $('icon', $button).removeClass().addClass('icon-play');
  $('label', $button).text('Preview');

  fadeOutTrack();
}

var fadeInOutLoop = undefined;

function fadeInTrack() {
  var v = 0;
  audio.play();

  if (fadeInOutLoop) clearInterval(fadeInOutLoop);
  fadeInOutLoop = setInterval(function() {
    if (v >= 1) {
      clearInterval(fadeInOutLoop);
      return;
    }
    audio.volume = v;
    v += 0.1;
  }, 100);
}

function fadeOutTrack() {
  var v = 1;

  if(fadeInOutLoop) clearInterval(fadeInOutLoop);
  fadeInOutLoop = setInterval(function() {
    if (v <= 0) {
      clearInterval(fadeInOutLoop);
      audio.pause();
      return;
    }
    audio.volume = v;
    v -= 0.1;
  }, 100);
}
