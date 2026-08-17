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
    label: 'AI Applications',
    category: 'Agentic AI Systems',
    color: '#00B2FF', // Electric Blue
    businessValue: 'Integrating machine learning and advanced AI models into operational workflows to drive intelligent automation.',
    techHighlight: 'LLM Orchestration, Vector Search, Tool Calling APIs',
    metrics: '70% Operational ROI',
  },
  {
    id: 'web',
    label: 'Web App Development',
    category: 'SaaS Platforms',
    color: '#8B5CF6', // Vibrant Purple
    businessValue: 'Scalable multi-tenant web applications, SaaS products, customer portals, and high-performance microservices.',
    techHighlight: 'Next.js App Router, React 18, RSC Architecture',
    metrics: '99.99% Uptime | Sub-400ms Load',
  },
  {
    id: 'sites',
    label: 'Website Development',
    category: 'Corporate Platforms',
    color: '#006492', // Lumina Primary
    businessValue: 'High-performance, scalable corporate platforms built on modern web architectures for optimal speed and SEO.',
    techHighlight: 'Modern Web Architecture, SEO Engine, Edge Distribution',
    metrics: '100/100 Lighthouse Performance',
  },
  {
    id: 'hosting',
    label: 'Maintenance & Hosting',
    category: 'Cloud Infrastructure',
    color: '#FFA4FB', // Soft Pink
    businessValue: 'Secure, 99.9% uptime cloud hosting and continuous maintenance protocols to ensure digital assets remain performant.',
    techHighlight: 'AWS / GCP Edge, Docker Containers, Automated CI/CD',
    metrics: '99.9% SLA Guarantee',
  },
  {
    id: 'data',
    label: 'Data Engineering',
    category: 'Operational Intelligence',
    color: '#00B2FF',
    businessValue: 'Real-time data ingestion pipelines, analytical data warehouses, and executive intelligence dashboards.',
    techHighlight: 'BigQuery, ClickHouse, Apache Kafka, PostgreSQL',
    metrics: '< 100ms Query Latency',
  },
  {
    id: 'mobile',
    label: 'Mobile Solutions',
    category: 'iOS & Android',
    color: '#8B5CF6',
    businessValue: 'Cross-platform mobile applications with native device integration and offline-first delta synchronization.',
    techHighlight: 'React Native, Biometric Auth, SQLite Delta Sync',
    metrics: '60 FPS Smooth UI',
  },
];

interface Props {
  activeNodeId?: string;
  onSelectNode?: (node: EcosystemNodeData) => void;
}

export const ThreeEcosystemCanvas: React.FC<Props> = ({ activeNodeId, onSelectNode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [selectedNode, setSelectedNode] = useState<EcosystemNodeData>(ECOSYSTEM_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<EcosystemNodeData | null>(null);

  useEffect(() => {
    if (activeNodeId) {
      const match = ECOSYSTEM_NODES.find((n) => n.id === activeNodeId);
      if (match) setSelectedNode(match);
    }
  }, [activeNodeId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement('canvas');
      if (!window.WebGLRenderingContext || (!testCanvas.getContext('webgl') && !testCanvas.getContext('experimental-webgl'))) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lumina Lighting (Electric Blue & Purple Lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const electricLight = new THREE.PointLight(0x00b2ff, 3.0, 40);
    electricLight.position.set(-4, 3, 4);
    scene.add(electricLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 3.0, 40);
    purpleLight.position.set(4, -3, 4);
    scene.add(purpleLight);

    // 3. Central Core Node
    const centralGroup = new THREE.Group();

    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00b2ff,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(coreMesh);

    const ringGeo = new THREE.IcosahedronGeometry(1.35, 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00b2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    centralGroup.add(ringMesh);

    scene.add(centralGroup);

    // 4. System Nodes & Bezier Connections
    const nodePositions = [
      { id: 'ai', x: -3.0, y: 1.5, z: 0.2 },
      { id: 'web', x: 3.0, y: 1.5, z: -0.2 },
      { id: 'sites', x: -3.2, y: -1.4, z: 0.3 },
      { id: 'hosting', x: 3.2, y: -1.4, z: -0.3 },
      { id: 'data', x: 0, y: 2.7, z: -0.4 },
      { id: 'mobile', x: 0, y: -2.7, z: 0.4 },
    ];

    const nodeMeshes: Array<{ group: THREE.Group; mesh: THREE.Mesh; data: EcosystemNodeData }> = [];

    nodePositions.forEach((pos) => {
      const data = ECOSYSTEM_NODES.find((n) => n.id === pos.id) || ECOSYSTEM_NODES[0];
      const group = new THREE.Group();
      group.position.set(pos.x, pos.y, pos.z);

      const colorHex = parseInt((data.color || '#00B2FF').replace('#', '0x'));

      const sphereGeo = new THREE.SphereGeometry(0.45, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.7,
      });
      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
      sphereMesh.userData = { id: data.id, nodeData: data };
      group.add(sphereMesh);

      const haloGeo = new THREE.RingGeometry(0.55, 0.6, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      group.add(haloMesh);

      scene.add(group);
      nodeMeshes.push({ group, mesh: sphereMesh, data });

      // Curved Connection Line
      const start = new THREE.Vector3(0, 0, 0);
      const end = new THREE.Vector3(pos.x, pos.y, pos.z);
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2 + (pos.x > 0 ? 0.3 : -0.3),
        (start.y + end.y) / 2 + 0.2,
        (start.z + end.z) / 2 + 0.3
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(30);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineDashedMaterial({
        color: colorHex,
        dashSize: 0.2,
        gapSize: 0.1,
        transparent: true,
        opacity: 0.4,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);
    });

    // Background Particle Field
    const bgCount = 120;
    const bgGeo = new THREE.BufferGeometry();
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount * 3; i += 3) {
      bgPos[i] = (Math.random() - 0.5) * 16;
      bgPos[i + 1] = (Math.random() - 0.5) * 12;
      bgPos[i + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({
      color: 0x00b2ff,
      size: 0.05,
      transparent: true,
      opacity: 0.35,
    });
    const bgParticles = new THREE.Points(bgGeo, bgMat);
    scene.add(bgParticles);

    // Mouse Parallax & Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 1.2;
      mouseY = -(y / rect.height) * 1.2;

      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (intersects.length > 0) {
        const hitData = intersects[0].object.userData.nodeData as EcosystemNodeData;
        if (hitData) setHoveredNode(hitData);
      } else {
        setHoveredNode(null);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (intersects.length > 0) {
        const hitData = intersects[0].object.userData.nodeData as EcosystemNodeData;
        if (hitData) {
          setSelectedNode(hitData);
          if (onSelectNode) onSelectNode(hitData);
        }
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      centralGroup.rotation.y = elapsedTime * 0.3;
      ringMesh.rotation.x = elapsedTime * 0.2;
      ringMesh.rotation.z = elapsedTime * 0.15;

      nodeMeshes.forEach(({ mesh }, idx) => {
        mesh.rotation.y = elapsedTime * 0.4;
        if (mesh.parent) {
          mesh.parent.position.y = nodePositions[idx].y + Math.sin(elapsedTime * 1.5 + idx) * 0.04;
        }
      });

      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
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
      <div className="w-full h-full flex flex-col items-center justify-center p-8 glass-card rounded-2xl text-on-surface">
        <h3 className="text-xl font-headline font-bold text-electric-blue">Software Architecture Engine</h3>
        <p className="text-sm text-on-surface-variant mt-2 text-center">
          AI Applications, Web SaaS Platforms, Corporate Websites, and Cloud Infrastructure.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[480px]">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {hoveredNode && (
        <div className="absolute top-4 left-4 glass-panel px-4 py-2.5 rounded-xl shadow-xl pointer-events-none">
          <span className="text-xs font-label-md uppercase tracking-wider text-vibrant-purple block font-bold">
            {hoveredNode.category}
          </span>
          <span className="text-sm font-bold text-on-surface block font-headline">{hoveredNode.label}</span>
          <span className="text-xs text-on-surface-variant block">{hoveredNode.techHighlight}</span>
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm glass-panel p-5 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-surface-container-high pb-2 mb-2">
          <span className="inline-flex items-center gap-2 text-xs font-label-md font-bold text-electric-blue uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: selectedNode.color }} />
            {selectedNode.category}
          </span>
          <span className="text-xs text-outline font-label-md uppercase">3D Node</span>
        </div>
        <h4 className="text-base font-headline font-bold text-on-surface">{selectedNode.label}</h4>
        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{selectedNode.businessValue}</p>
        <div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between text-xs font-label-md">
          <span className="text-outline">{selectedNode.metrics}</span>
          <button
            type="button"
            onClick={() => onSelectNode?.(selectedNode)}
            className="text-electric-blue font-bold hover:underline cursor-pointer bg-transparent border-0 p-0 uppercase"
          >
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
};
