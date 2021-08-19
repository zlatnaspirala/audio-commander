# audio-commander

For creating html5 audios from code fix system for using `audio.play()` from code. This is also npm package.

## Demo1 - Create single Audio element

```js

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
```

## Demo2 - Create multi Audio elements also use options like Array
Play every 5 seconds:
```js

import { AudioMatrix } from "../src/audioResource";

var myAudioResources = new AudioMatrix();

const audioOption1 = {
  id: "shootSpin",
  srcPath: "audios/spinShoot.mp3",
  controls: true
}

const audioOption2 = {
  id: "shootSpin2",
  srcPath: "audios/spinShoot.mp3",
  controls: true
}

let options = [
  audioOption1,
  audioOption2
]

var testMyAudio = myAudioResources.createAudioResource(options);
window.testMyAudio = testMyAudio;

var myPromiseCheck = testMyAudio[0].play();
myPromiseCheck.then( () => {
  alert('You are using auto play allowed browser version or you are lucky.')
})

myPromiseCheck.catch((e) => {
  console.info("Auto play is disabled by browser.");
})

// testMyAudio[0].onerror = function() { console.error("error audio")}

testMyAudio[0].onended = function() {
  console.warn("The audio has ended");
};

setInterval (()=> {

  if (testMyAudio[0].paused == false) return;

  var test1 = testMyAudio[0].play();

  test1.then(()=> {
    console.warn("played")
  })

  test1.catch(()=>{
    console.warn("Something wrong.")
  })

}, 100)

```