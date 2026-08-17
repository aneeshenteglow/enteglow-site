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

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const brandColor = new THREE.Color(0xe31e24);
    const particleCount = 250;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const particles = new THREE.BufferGeometry();

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      velocities[i * 3] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: brandColor,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: brandColor,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      const posArr = particleSystem.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i * 3];
        posArr[i * 3 + 1] += velocities[i * 3 + 1];
        posArr[i * 3 + 2] += velocities[i * 3 + 2];

        if (Math.abs(posArr[i * 3]) > 6) velocities[i * 3] *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 6) velocities[i * 3 + 2] *= -1;
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.rotation.y += 0.001 + mouse.x * 0.01;
      particleSystem.rotation.x += mouse.y * 0.01;
      lines.rotation.y = particleSystem.rotation.y;
      lines.rotation.x = particleSystem.rotation.x;

      let lineIdx = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 2.5) {
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
      lineGeometry.setDrawRange(0, lineIdx);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.Line) {
          obj.geometry?.dispose();
        }
      });
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
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
