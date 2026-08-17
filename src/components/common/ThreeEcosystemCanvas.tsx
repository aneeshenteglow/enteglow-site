'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export interface EcosystemNodeData {
  id: string;
  label: string;
  category: string;
  color: string;
  businessValue: string;
  techHighlight: string;
  metrics: string;
}

export const ECOSYSTEM_NODES: EcosystemNodeData[] = [
  {
    id: 'ai',
    label: 'AI & Agentic Systems',
    category: 'Agentic AI',
    color: '#E31E24',
    businessValue: 'Embedding agentic intelligence and predictive models into enterprise workflows.',
    techHighlight: 'LLM Orchestration, Vector Search, Tool Calling APIs',
    metrics: '70% Operational ROI',
  },
  {
    id: 'web',
    label: 'Web SaaS Platforms',
    category: 'SaaS Platforms',
    color: '#FFB4AB',
    businessValue: 'Scalable multi-tenant architectures engineered for high availability and sub-second latency.',
    techHighlight: 'Next.js App Router, React 18, RSC Architecture',
    metrics: '99.99% Uptime',
  },
  {
    id: 'sites',
    label: 'Website Engineering',
    category: 'Digital Enterprise',
    color: '#E31E24',
    businessValue: 'High-performance, scalable corporate platforms built on modern web architectures.',
    techHighlight: 'Modern Web Architecture, Edge Distribution',
    metrics: '100/100 Lighthouse',
  },
  {
    id: 'hosting',
    label: 'Maintenance & Cloud',
    category: 'Cloud Infrastructure',
    color: '#8B1216',
    businessValue: 'Modernization, migration, and ongoing maintenance of mission-critical cloud environments.',
    techHighlight: 'AWS / GCP Cloud Native, Kubernetes, CI/CD Pipelines',
    metrics: '99.9% SLA Guarantee',
  },
];

interface Props {
  activeNodeId?: string;
  onSelectNode?: (node: EcosystemNodeData) => void;
}

export const ThreeEcosystemCanvas: React.FC<Props> = ({ onSelectNode }) => {
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
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5.5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const brandColor = new THREE.Color(0xe31e24);

      // --- 1. Abstract Tech Ring Wireframe Geometry ---
      const torusGeo = new THREE.TorusGeometry(3.2, 0.015, 12, 60);
      const torusMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      torusMesh.rotation.x = Math.PI / 3;
      scene.add(torusMesh);

      const icoGeo = new THREE.IcosahedronGeometry(2.4, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.04,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      scene.add(icoMesh);

      // --- 2. Interactive Digital Network Particles ---
      const particleCount = 130;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const particles = new THREE.BufferGeometry();

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 11;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 11;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 11;

        velocities[i * 3] = (Math.random() - 0.5) * 0.004;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
      }

      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: brandColor,
        size: 0.06,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      // --- 3. Dynamic Node Lines ---
      const lineMaterial = new THREE.LineBasicMaterial({
        color: brandColor,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
      });

      const lineGeometry = new THREE.BufferGeometry();
      const maxLineSegments = particleCount * 10;
      const linePositions = new Float32Array(maxLineSegments * 6);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

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

        // Rotate wireframe shapes
        torusMesh.rotation.z = elapsedTime * 0.08;
        torusMesh.rotation.y = elapsedTime * 0.05 + mouse.x * 0.2;
        icoMesh.rotation.x = elapsedTime * 0.04;
        icoMesh.rotation.y = elapsedTime * 0.06 + mouse.y * 0.2;

        const posArr = particleSystem.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          posArr[i * 3] += velocities[i * 3];
          posArr[i * 3 + 1] += velocities[i * 3 + 1];
          posArr[i * 3 + 2] += velocities[i * 3 + 2];

          if (Math.abs(posArr[i * 3]) > 5.5) velocities[i * 3] *= -1;
          if (Math.abs(posArr[i * 3 + 1]) > 5.5) velocities[i * 3 + 1] *= -1;
          if (Math.abs(posArr[i * 3 + 2]) > 5.5) velocities[i * 3 + 2] *= -1;
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.rotation.y = elapsedTime * 0.03 + mouse.x * 0.15;
        particleSystem.rotation.x = mouse.y * 0.15;
        lines.rotation.y = particleSystem.rotation.y;
        lines.rotation.x = particleSystem.rotation.x;

        let lineIdx = 0;
        const maxIndices = linePositions.length;
        for (let i = 0; i < particleCount && lineIdx < maxIndices; i++) {
          for (let j = i + 1; j < particleCount && lineIdx < maxIndices; j++) {
            const dx = posArr[i * 3] - posArr[j * 3];
            const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
            const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < 5.5) {
              linePositions[lineIdx++] = posArr[i * 3];
              linePositions[lineIdx++] = posArr[i * 3 + 1];
              linePositions[lineIdx++] = posArr[i * 3 + 2];
              linePositions[lineIdx++] = posArr[j * 3];
              linePositions[lineIdx++] = posArr[j * 3 + 1];
              linePositions[lineIdx++] = posArr[j * 3 + 2];
            }
          }
        }
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineIdx / 3);

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
  }, [onSelectNode]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 glass-panel rounded text-on-surface">
        <h3 className="text-xl font-headline font-bold text-primary">EnteGlow Engineering System</h3>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full" />;
};
