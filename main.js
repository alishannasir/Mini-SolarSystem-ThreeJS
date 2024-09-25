import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,50,0)
camera.up.set(0,0,1)
camera.lookAt(0,0,0)
scene.add(camera);

const object =[]
const sphereGeometry = new THREE.SphereGeometry(1, 6, 6);
const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xffff00});
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
sunMesh.scale.set(15, 15, 15);
scene.add(sunMesh);
object.push(sunMesh);

const earthGeometry = new THREE.SphereGeometry(0.5, 10, 10);
const earthMaterial = new THREE.MeshPhongMaterial({ emissive: 0x112244});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.position.x = 2;
earthMesh.scale.set(0.5, 0.5, 0.5);
sunMesh.add(earthMesh);
object.push(earthMesh);

const moonGeometry = new THREE.SphereGeometry(0.4, 10, 10);
const moonMaterial = new THREE.MeshPhongMaterial({ emissive: "blue"});
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
moonMesh.position.x = 1;
moonMesh.scale.set(0.2, 0.2, 0.2);
earthMesh.add(moonMesh);
object.push(moonMesh);



{
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);
  }

  const canvas = document.querySelector('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0009;
    object.forEach((obj) => {
        obj.rotation.y = time;
      });
      renderer.render(scene, camera);

  }

  animate()

 

