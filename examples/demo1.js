
import { AudioMatrix } from "../src/audioResource";

var myAudioResources = new AudioMatrix();

const options = {
  id: "shootSpin",
  srcPath: "audios/spinShoot.mp3",
  controls: true
}

var testMyAudio = myAudioResources.createAudioResource(options);
window.testMyAudio = testMyAudio;

var myPromiseCheck = testMyAudio.play();
myPromiseCheck.then( () => {
  alert('You are using auto play allowed browser version or you are lucky.')
})

myPromiseCheck.catch((e) => {
  console.info("Auto play is disabled by browser.");
})

testMyAudio.onended = function() {
  console.warn("The audio has ended");
};

setTimeout(() => {
  var myPromiseCheck = testMyAudio.play();
}, 5000);
