'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ServiceTopologyCanvasProps {
  activeServiceId?: string;
}

export const ServiceTopologyCanvas: React.FC<ServiceTopologyCanvasProps> = ({
  activeServiceId,
}) => {
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

      // Central Service Hub (Octahedron)
      const hubGeo = new THREE.OctahedronGeometry(1, 0);
      const hubMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      group.add(hubMesh);

      // Outer Nodes (Box geometry representing software modules)
      const nodePositions = [
        { x: -2.8, y: 1.5, z: 0 },
        { x: 2.8, y: 1.5, z: 0 },
        { x: -3.0, y: -1.5, z: 0 },
        { x: 3.0, y: -1.5, z: 0 },
        { x: 0, y: 3.0, z: -1 },
      ];

      const boxGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const boxMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });

      const linePositions: number[] = [];

      nodePositions.forEach((pos) => {
        const boxMesh = new THREE.Mesh(boxGeo, boxMat);
        boxMesh.position.set(pos.x, pos.y, pos.z);
        group.add(boxMesh);

        linePositions.push(0, 0, 0);
        linePositions.push(pos.x, pos.y, pos.z);
      });

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: brandColor,
        transparent: true,
        opacity: 0.2,
      });
      const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
      group.add(lineSegments);

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

        hubMesh.rotation.y = elapsedTime * 0.2;
        hubMesh.rotation.x = elapsedTime * 0.15;
        group.rotation.y = elapsedTime * 0.03 + mouse.x * 0.2;
        group.rotation.x = mouse.y * 0.15;

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
  }, [activeServiceId]);

  if (!hasWebGL) {
    return null;
  }

  return <div ref={containerRef} className="w-full h-full" />;
};
