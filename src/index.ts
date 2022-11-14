import * as THREE from "three";

// シーンの準備
const scene = new THREE.Scene();

// カメラの準備
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

//         // レンダラーの準備
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//         // ライトの準備
const directionalLight = new THREE.DirectionalLight("#ffff33", 1);
directionalLight.position.set(0, 10, 10);
scene.add(directionalLight);
//
//         // 立方体の準備
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const box = new THREE.Mesh(geometry, material);
box.position.z = -5;
scene.add(box);

//         // アニメーションループの開始
function animate() {
	requestAnimationFrame(animate);
	box.rotation.x += 0.01;
	box.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();

