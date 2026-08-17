'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const EngineeringCultureCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;

    const initFrameId = requestAnimationFrame(() => {
      try {
        const testCanvas = document.createElement('canvas');
        if (
          !window.WebGLRenderingContext ||
          (!testCanvas.getContext('webgl') && !testCanvas.getContext('experimental-webgl'))
        ) {
          setHasWebGL(false);
          return;
        }
      } catch {
        setHasWebGL(false);
        return;
      }

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
      camera.position.z = 5.5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const brandColor = new THREE.Color(0xe31e24);

      // Geometric Icosahedron Lattice
      const latticeGeo = new THREE.IcosahedronGeometry(2.5, 2);
      const latticeMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const latticeMesh = new THREE.Mesh(latticeGeo, latticeMat);
      group.add(latticeMesh);

      // Inner Core Mesh
      const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      group.add(innerMesh);

      // Mouse tracking
      const mouse = new THREE.Vector2(0, 0);
      const targetMouse = new THREE.Vector2(0, 0);

      const handleMouseMove = (event: MouseEvent) => {
        targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        latticeMesh.rotation.y = elapsedTime * 0.05 + mouse.x * 0.2;
        latticeMesh.rotation.x = elapsedTime * 0.03 + mouse.y * 0.15;
        innerMesh.rotation.z = -elapsedTime * 0.08;

        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize, { passive: true });
    });

    return () => {
      cancelAnimationFrame(initFrameId);
      cancelAnimationFrame(animId);
      if (scene) {
        scene.traverse((obj) => {
          if (
            obj instanceof THREE.Mesh ||
            obj instanceof THREE.Points ||
            obj instanceof THREE.Line ||
            obj instanceof THREE.LineSegments
          ) {
            obj.geometry?.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material?.dispose();
            }
          }
        });
      }
      if (renderer) {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return <div ref={containerRef} className="w-full h-full" />;
};
