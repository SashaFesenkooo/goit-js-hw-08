import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(VIDEO_CURRENT_TIME, seconds);
}

const time = +localStorage.getItem(VIDEO_CURRENT_TIME);

player.setCurrentTime(time);