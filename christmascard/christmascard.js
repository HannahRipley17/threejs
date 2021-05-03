var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
});

controls=new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z=350;



var cardpiece = new THREE.BoxGeometry(250,200,1);

var cardTopMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccoutbottom.png'), side: THREE.DoubleSide} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccintop.png'), side: THREE.DoubleSide} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccouttop.png'), side: THREE.DoubleSide} ), // back side
];
var cardtopmaterial = new THREE.MeshFaceMaterial(cardTopMaterials);
var cardTopPiece = new THREE.Mesh(cardpiece, cardtopmaterial);
scene.add(cardTopPiece);


var cardBottomMaterials = [
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // right side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // left side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // top side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // bottom side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccinbottom.png'), side: THREE.DoubleSide} ), // front side
        new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ccoutbottom.png'), side: THREE.DoubleSide} ), // back side
];
var cardbottommaterial = new THREE.MeshFaceMaterial(cardBottomMaterials);
var cardBottomPiece = new THREE.Mesh(cardpiece, cardbottommaterial);
scene.add(cardBottomPiece);
cardBottomPiece.position.z = 100;
cardBottomPiece.position.y = -94;
cardBottomPiece.rotation.x = THREE.Math.degToRad( -93 );



var treeshape = new THREE.BoxGeometry(100,150,1);

var tree1Materials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.5} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.5} ), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.5} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.5} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('tree1.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ctreeback.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // back side
];
var tree1material = new THREE.MeshFaceMaterial(tree1Materials);
var tree1 = new THREE.Mesh(treeshape, tree1Materials);
scene.add(tree1);
tree1.position.z = 70;
tree1.position.x = -50;
tree1.position.y = -23;

var tree2Materials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.9} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.9} ), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.9} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.9} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('tree2.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ctreeback.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // back side
];
var tree2material = new THREE.MeshFaceMaterial(tree2Materials);
var tree2 = new THREE.Mesh(treeshape, tree2Materials);
scene.add(tree2);
tree2.position.z = 70;
tree2.position.x = 50;
tree2.position.y = -23;


var flapshape = new THREE.PlaneGeometry(92, 25);
var flapshapesmall = new THREE.PlaneGeometry(64, 25);


var flapMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('flap.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} )
];
var flapmaterial = new THREE.MeshFaceMaterial(flapMaterials);

var flap1 = new THREE.Mesh(flapshape, flapmaterial);
scene.add(flap1);
flap1.position.z = 81;
flap1.position.x = -50;
flap1.position.y = -35;
flap1.rotation.x = THREE.Math.degToRad( -60 );
var flap2 = new THREE.Mesh(flapshape, flapmaterial);
scene.add(flap2);
flap2.position.z = 81;
flap2.position.x = 50;
flap2.position.y = -35;
flap2.rotation.x = THREE.Math.degToRad( -60 );
var flap3 = new THREE.Mesh(flapshape, flapmaterial);
scene.add(flap3);
flap3.position.z = 81;
flap3.position.x = -50;
flap3.position.y = -11;
flap3.rotation.x = THREE.Math.degToRad( -60 );
var flap4 = new THREE.Mesh(flapshape, flapmaterial);
scene.add(flap4);
flap4.position.z = 81;
flap4.position.x = 50;
flap4.position.y = -11;
flap4.rotation.x = THREE.Math.degToRad( -60 );
var flap5 = new THREE.Mesh(flapshapesmall, flapmaterial);
scene.add(flap5);
flap5.position.z = 81;
flap5.position.x = -50;
flap5.position.y = 10;
flap5.rotation.x = THREE.Math.degToRad( -60 );
flap5.scale = .6;
var flap6 = new THREE.Mesh(flapshapesmall, flapmaterial);
scene.add(flap6);
flap6.position.z = 81;
flap6.position.x = 50;
flap6.position.y = 10;
flap6.rotation.x = THREE.Math.degToRad( -60 );


var mantleshape = new THREE.BoxGeometry(120, 20, 10);
var mantleMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // left side
    new THREE.MeshBasicMaterial( {color: 0x814846, side: THREE.DoubleSide} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('mantle.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('mantle.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // back side
];
var mantlematerial = new THREE.MeshFaceMaterial(mantleMaterials);
var mantle = new THREE.Mesh(mantleshape, mantlematerial);
scene.add(mantle);
mantle.position.z = 5;
mantle.position.y = 10;


var stockingshape = new THREE.PlaneGeometry(20,30);

var stocking1materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking1.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking1material = new THREE.MeshFaceMaterial(stocking1materials);
var stocking1 = new THREE.Mesh(stockingshape, stocking1material);
scene.add(stocking1);
stocking1.position.x = -52;
stocking1.position.y = 8;
stocking1.position.z = 12;

var stocking2materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking2.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking2material = new THREE.MeshFaceMaterial(stocking2materials);
var stocking2 = new THREE.Mesh(stockingshape, stocking2material);
scene.add(stocking2);
stocking2.position.x = -37;
stocking2.position.y = 8;
stocking2.position.z = 12;

var stocking3materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking3.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking3material = new THREE.MeshFaceMaterial(stocking3materials);
var stocking3 = new THREE.Mesh(stockingshape, stocking3material);
scene.add(stocking3);
stocking3.position.x = -23;
stocking3.position.y = 8;
stocking3.position.z = 12;

var stocking4materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking4.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking4material = new THREE.MeshFaceMaterial(stocking4materials);
var stocking4 = new THREE.Mesh(stockingshape, stocking4material);
scene.add(stocking4);
stocking4.position.x = -9;
stocking4.position.y = 7;
stocking4.position.z = 12;

var stocking5materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking5.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking5material = new THREE.MeshFaceMaterial(stocking5materials);
var stocking5 = new THREE.Mesh(stockingshape, stocking5material);
scene.add(stocking5);
stocking5.position.x = 6;
stocking5.position.y = 8;
stocking5.position.z = 12;

var stocking6materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking6.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking6material = new THREE.MeshFaceMaterial(stocking6materials);
var stocking6 = new THREE.Mesh(stockingshape, stocking6material);
scene.add(stocking6);
stocking6.position.x = 22;
stocking6.position.y = 7;
stocking6.position.z = 12;

var stocking7materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking7.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking7material = new THREE.MeshFaceMaterial(stocking7materials);
var stocking7 = new THREE.Mesh(stockingshape, stocking7material);
scene.add(stocking7);
stocking7.position.x = 37;
stocking7.position.y = 7;
stocking7.position.z = 12;

var stocking8materials = [ new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('stocking8.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ) ];
var stocking8material = new THREE.MeshFaceMaterial(stocking8materials);
var stocking8 = new THREE.Mesh(stockingshape, stocking8material);
scene.add(stocking8);
stocking8.position.x = 52;
stocking8.position.y = 7;
stocking8.position.z = 12;


var fireplaceshape = new THREE.BoxGeometry(120,20,20);
var fireplaceMaterials = [
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('fsides.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // right side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('fsides.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // left side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ftop.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // top side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // bottom side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('ffront.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // front side
    new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('blank.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.95} ), // back side
];
var fireplacematerial = new THREE.MeshFaceMaterial(fireplaceMaterials);
var fireplace = new THREE.Mesh(fireplaceshape, fireplacematerial);
scene.add(fireplace);
fireplace.position.y = -88;
fireplace.position.z = 10;



var update = function() {

};

var render = function() {
    renderer.render(scene, camera);

};

var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    update();
    render();
}
GameLoop();