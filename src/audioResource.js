
export class AudioMatrix {

  audios = [];
  logs = false;

  constructor() {
    !this.logs || console.info('Audio resopurce constructed.');
    !this.logs || console.info('Create event for fix buffering on oldies browsers.');
    window.addEventListener('click', this.cheker, false);
  }

  cheker = () => {

    this.audios.forEach((audioELement) => {
      audioELement.play();
      audioELement.pause();
    });

    window.removeEventListener('click', this.cheker);

  }

  getSoundById = function(id) {

    audios.forEach(element => {

      console.log(element.id)

      if (id == element.id) {
        console.log('Found', element.id)
        return element;
      }

    });
  }

  createAudioResource = function(options) {

    if (typeof options == "object" && typeof options.length == 'undefined') {

      var sound      = document.createElement('audio');
      sound.id       = options.id;
      if (options.controls) sound.controls = 'controls';

      sound.src      = options.srcPath;
      sound.type     = options.myneType | 'audio/mpeg';

      sound.onabort = function() {
        console.warn("Video load aborted");
      };

      this.audios.push(sound);
      !this.logs || console.info('Audio resopurce created with option -> ', options);

      if (options.parent) {
        options.parent.appendChild(sound);
        return sound;
      }

      // default
      document.getElementById('audioResource').appendChild(sound);
      return sound;
    } else if (typeof options.length !== 'undefined') {
      
      return options.map( (option) => {
      var sound      = document.createElement('audio');
      sound.id       = option.id;
      if (option.controls) sound.controls = 'controls';

      sound.src      = option.srcPath;
      sound.type     = option.myneType || 'audio/mpeg';

      this.audios.push(sound);
      !this.logs | console.info('Audio resopurce created with option -> ', option);

      if (option.parent) {
        option.parent.appendChild(sound);
        return sound;
      }

      // default
      document.getElementById('audioResource').appendChild(sound);
      return sound;

    });

    }

  }

}