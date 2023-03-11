var container = document.querySelector('#container');


var panorama = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
panorama.addEventListener('progress', onProgressUpdate);
var panorama2 = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/road.jpg' );
panorama2.addEventListener('progress', onProgressUpdate);

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

infospot.addEventListener('click', function () {
    onButtonClick(panorama2);
});

var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}
