var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

window.addEventListener('resize', function(){
    var width=window.innerWidth;
    var height=window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z=45;

var stars = new THREE.SphereGeometry(200,60,60);
var sun = new THREE.SphereGeometry(4,60,60);
var earth = new THREE.SphereGeometry(1,30,30);
var moon = new THREE.SphereGeometry(.3,30,30);
var mercury = new THREE.SphereGeometry(.6, 30,30);
var venus = new THREE.SphereGeometry(.7, 30,30);
var mars = new THREE.SphereGeometry(.8, 30,30);
var jupiter = new THREE.SphereGeometry(2, 30,30);
var saturn = new THREE.SphereGeometry(1.5, 30,30);
var rings = new THREE.RingGeometry(1.75,2.5,32,8,20);
var uranus = new THREE.SphereGeometry(.9, 30,30);
var neptune = new THREE.SphereGeometry(.9, 30,30);
var pluto = new THREE.SphereGeometry(.3, 30,30);

var starsMaterials=[
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('milkyway.jpg'), side: THREE.DoubleSide} )
];
var sunMaterials=[
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('magma.jpeg'), side: THREE.DoubleSide} )
];
var earthMaterials=[
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('earth.jpg'), side: THREE.DoubleSide} )
];
var moonMaterials=[
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('moon.jpg'), side: THREE.DoubleSide} )
];
var saturnMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('saturn.png'), side: THREE.DoubleSide} )
];
var ringsMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('saturnrings.png'), side: THREE.DoubleSide} )
];
var marsMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('mars.jpg'), side: THREE.DoubleSide} )
];
var jupiterMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('jupiter.jpeg'), side: THREE.DoubleSide} )
];
var mercuryMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('mercury.jpeg'), side: THREE.DoubleSide} )
];
var venusMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('venus.jpg'), side: THREE.DoubleSide} )
];
var uranusMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('uranus.jpg'), side: THREE.DoubleSide} )
];
var neptuneMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('neptune.jpg'), side: THREE.DoubleSide} )
];
var plutoMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('pluto.jpg'), side: THREE.DoubleSide} )
];

var earthmaterial = new THREE.MeshFaceMaterial(earthMaterials);
var starsmaterial = new THREE.MeshFaceMaterial(starsMaterials);
var sunmaterial = new THREE.MeshFaceMaterial(sunMaterials);
var moonmaterial = new THREE.MeshFaceMaterial(moonMaterials);
var saturnmaterial = new THREE.MeshFaceMaterial(saturnMaterials);
var ringsmaterial = new THREE.MeshFaceMaterial(ringsMaterials);
var marsmaterial = new THREE.MeshFaceMaterial(marsMaterials);
var jupitermaterial = new THREE.MeshFaceMaterial(jupiterMaterials);
var mercurymaterial = new THREE.MeshFaceMaterial(mercuryMaterials);
var venusmaterial = new THREE.MeshFaceMaterial(venusMaterials);
var uranusmaterial = new THREE.MeshFaceMaterial(uranusMaterials);
var neptunematerial = new THREE.MeshFaceMaterial(neptuneMaterials);
var plutomaterial = new THREE.MeshFaceMaterial(plutoMaterials);

var sun1 = new THREE.Mesh(sun, sunmaterial);
scene.add(sun1);

var earth1 = new THREE.Mesh(earth, earthmaterial);
scene.add(earth1);
earth1.position.x = 17;
var stars1 = new THREE.Mesh(stars, starsmaterial);
scene.add(stars1);
var moon1 = new THREE.Mesh(moon, moonmaterial);
scene.add(moon1);
moon1.position.x = 19
var saturn1 = new THREE.Mesh(saturn, saturnmaterial);
scene.add(saturn1);
saturn1.position.x = -28;
saturn1.position.z = -28;
var rings1 = new THREE.Mesh(rings, ringsmaterial);
scene.add(rings1);
rings1.position.x = -28;
rings1.position.z = -28;
rings1.rotation.x = THREE.Math.degToRad( 87 );
var mars1 = new THREE.Mesh(mars, marsmaterial);
scene.add(mars1);
mars1.position.z = -18;
mars1.position.x = 10
var jupiter1 = new THREE.Mesh(jupiter, jupitermaterial);
scene.add(jupiter1);
jupiter1.position.z = 7;
jupiter1.position.x = -27
var mercury1 = new THREE.Mesh(mercury, mercurymaterial);
scene.add(mercury1);
mercury1.position.z = -7;
var venus1 = new THREE.Mesh(venus, venusmaterial);
scene.add(venus1);
venus1.position.z = 8;
venus1.position.x = -8
var uranus1 = new THREE.Mesh(uranus, uranusmaterial);
scene.add(uranus1);
uranus1.position.z = 31;
uranus1.position.x = 20;
var neptune1 = new THREE.Mesh(neptune, neptunematerial);
scene.add(neptune1);
neptune1.position.z = -32;
neptune1.position.x = 32;
var pluto1 = new THREE.Mesh(pluto, plutomaterial);
scene.add(pluto1);
pluto1.position.z = -10;
pluto1.position.x = -50;



var update = function() {
    earth1.rotation.y += 0.005;
    sun1.rotation.y += 0.002;
    moon1.rotation.y += 0.001;
    saturn1.rotation.y += 0.007;
    mars1.rotation.y += 0.0055;
    jupiter1.rotation.y += 0.009;
    mercury1.rotation.y += 0.004;
    venus1.rotation.y += 0.001;
    uranus1.rotation.y += 0.004;
    neptune1.rotation.y += 0.004;
    pluto1.rotation.y += 0.002;
};
//draw scene
var render = function(){
    renderer.render(scene, camera);
};
// run game loop (update, render, repeat)
var GameLoop = function(){
    requestAnimationFrame( GameLoop );
    update();
    render();
};
GameLoop();