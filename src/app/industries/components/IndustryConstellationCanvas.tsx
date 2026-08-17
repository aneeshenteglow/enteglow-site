'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface IndustryConstellationCanvasProps {
  activeIndustryId?: string;
  onSelectIndustry?: (id: string) => void;
}

const DOMAIN_NODES = [
  { id: 'manufacturing', label: 'Manufacturing', color: 0xe31e24, angle: (0 / 9) * Math.PI * 2 },
  { id: 'logistics', label: 'Logistics', color: 0x00d2ff, angle: (1 / 9) * Math.PI * 2 },
  { id: 'healthcare', label: 'Healthcare', color: 0x10b981, angle: (2 / 9) * Math.PI * 2 },
  { id: 'finance', label: 'Fintech', color: 0xf59e0b, angle: (3 / 9) * Math.PI * 2 },
  { id: 'retail', label: 'Retail POS', color: 0xa855f7, angle: (4 / 9) * Math.PI * 2 },
  { id: 'construction', label: 'Construction', color: 0xf97316, angle: (5 / 9) * Math.PI * 2 },
  { id: 'agriculture', label: 'AgTech', color: 0x22c55e, angle: (6 / 9) * Math.PI * 2 },
  { id: 'education', label: 'EdTech', color: 0x3b82f6, angle: (7 / 9) * Math.PI * 2 },
  { id: 'enterprise', label: 'Enterprise', color: 0xe31e24, angle: (8 / 9) * Math.PI * 2 },
];

export const IndustryConstellationCanvas: React.FC<IndustryConstellationCanvasProps> = ({
  activeIndustryId,
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
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      // Central Enterprise Core Sphere
      const coreGeo = new THREE.IcosahedronGeometry(0.8, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xe31e24,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      group.add(coreMesh);

      // Outer Orbit Wireframe Ring
      const ringGeo = new THREE.TorusGeometry(3.5, 0.012, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2.5;
      group.add(ringMesh);

      // Domain Nodes
      const radius = 3.5;
      const nodeMeshes: { id: string; mesh: THREE.Mesh; initialAngle: number }[] = [];

      DOMAIN_NODES.forEach((node) => {
        const x = Math.cos(node.angle) * radius;
        const y = Math.sin(node.angle) * radius * 0.4;
        const z = Math.sin(node.angle) * radius * 0.8;

        const isCurrentActive = activeIndustryId === node.id;
        const sphereGeo = new THREE.SphereGeometry(isCurrentActive ? 0.22 : 0.14, 16, 16);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: node.color,
          transparent: true,
          opacity: isCurrentActive ? 0.95 : 0.6,
        });

        const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        mesh.position.set(x, y, z);
        group.add(mesh);
        nodeMeshes.push({ id: node.id, mesh, initialAngle: node.angle });
      });

      // Network Lines between nodes and central core
      const linePositions: number[] = [];
      nodeMeshes.forEach((item) => {
        // Line from core to node
        linePositions.push(0, 0, 0);
        linePositions.push(item.mesh.position.x, item.mesh.position.y, item.mesh.position.z);
      });

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xe31e24,
        transparent: true,
        opacity: 0.15,
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

        group.rotation.y = elapsedTime * 0.04 + mouse.x * 0.2;
        group.rotation.x = mouse.y * 0.15;
        coreMesh.rotation.z = elapsedTime * 0.1;

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
  }, [activeIndustryId]);

  if (!hasWebGL) {
    return null;
  }

  return <div ref={containerRef} className="w-full h-full" />;
};
