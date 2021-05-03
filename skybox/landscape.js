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
controls.maxDistance = 4;
camera.position.z = .02;

var shape = new THREE.BoxGeometry(2,2,2);

var topx = "1.jpg";
var left = "2.jpg";
var front = "3.jpg";
var right = "4.jpg";
var back = "5.jpg";
var bottom = "6.jpg";


var cubeMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(right), side: THREE.BackSide} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(left), side: THREE.BackSide} ), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(topx), side: THREE.BackSide} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(bottom), side: THREE.BackSide} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(front), side: THREE.BackSide} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(back), side: THREE.BackSide} ), // back side
];


var material = new THREE.MeshFaceMaterial(cubeMaterials);

var cube = new THREE.Mesh(shape, material);
scene.add(cube);

function volcano() {
    console.log("volcano clicked");
    console.log(topx, left, front, right, back, bottom);
    this.cubeMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v3.jpg'), side: THREE.BackSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v2.jpg'), side: THREE.BackSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v1.jpg'), side: THREE.BackSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v6.jpg'), side: THREE.BackSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v5.jpg'), side: THREE.BackSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('v4.jpg'), side: THREE.BackSide} ), // back side
    ];
    this.material = this.cubeMaterials;
    console.log(cubeMaterials, "material:", material);
    scene.remove(this.cube);
    this.cube = new THREE.Mesh(shape, material);
    scene.add(cube);
};
function lake() {
    console.log("lake clicked");
    this.cubeMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(right), side: THREE.BackSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(left), side: THREE.BackSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(topx), side: THREE.BackSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(bottom), side: THREE.BackSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(front), side: THREE.BackSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(back), side: THREE.BackSide} ), // back side
    ];
    this.material = this.cubeMaterials;
    scene.remove(this.cube);
    this.cube = new THREE.Mesh(shape, material);
    scene.add(cube);
};
function sky() {
    console.log("sky clicked");
    this.cubeMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s4.jpg'), side: THREE.BackSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s2.jpg'), side: THREE.BackSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s1.jpg'), side: THREE.BackSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s6.jpg'), side: THREE.BackSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s3.jpg'), side: THREE.BackSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('s5.jpg'), side: THREE.BackSide} ), // back side
    ];
    this.material = this.cubeMaterials;
    scene.remove(this.cube);
    this.cube = new THREE.Mesh(shape, material);
    scene.add(cube);
};
function desert() {
    console.log("desert clicked");
    this.cubeMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d3.jpg'), side: THREE.BackSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d5.jpg'), side: THREE.BackSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d1.jpg'), side: THREE.BackSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d6.jpg'), side: THREE.BackSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d4.jpg'), side: THREE.BackSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('d2.jpg'), side: THREE.BackSide} ), // back side
    ];
    this.material = this.cubeMaterials;
    scene.remove(this.cube);
    this.cube = new THREE.Mesh(shape, material);
    scene.add(cube);
};
function hills() {
    console.log("hills clicked");
    this.cubeMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h3.jpg'), side: THREE.BackSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h2.jpg'), side: THREE.BackSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h1.jpg'), side: THREE.BackSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h6.jpg'), side: THREE.BackSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h5.jpg'), side: THREE.BackSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('h4.jpg'), side: THREE.BackSide} ), // back side
    ];
    this.material = this.cubeMaterials;
    scene.remove(this.cube);
    this.cube = new THREE.Mesh(shape, material);
    scene.add(cube);
};
// function earth() {
//     console.log("earth clicked");
//     scene.remove(this.cube);
//     var earthoutside = new THREE.SphereGeometry(1.5,30,30);
//     var earthinside = new THREE.SphereGeometry(.8,30,30);
//     var core = new THREE.SphereGeometry(.5,30,30);
    
//     var sphereMaterials1 = [
//         new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('earth.jpg'), side: THREE.DoubleSide} )
//     ]
//     var material1 = new THREE.MeshFaceMaterial(sphereMaterials1);

//     var sphereMaterials2 = [
//         new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('magma.jpeg'), side: THREE.DoubleSide} )
//     ]
//     var material2 = new THREE.MeshFaceMaterial(sphereMaterials2);

//     outside = new THREE.Mesh(earthoutside, material1);
//     scene.add(outside);
//     inside = new THREE.Mesh(earthinside, material2);
//     scene.add(inside);
// };


var update = function() {

};

var render = function(){
    renderer.render(scene, camera);
};

var GameLoop = function(){
    requestAnimationFrame(GameLoop);
    update();
    render();
};
GameLoop();