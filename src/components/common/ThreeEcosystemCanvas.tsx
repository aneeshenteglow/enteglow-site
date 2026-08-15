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
    id: 'web',
    label: 'Web SaaS Platform',
    category: 'Cloud & Web',
    color: '#3B82F6', // Royal Blue
    businessValue: 'Scalable multi-tenant web applications with instant global deployment, sub-second latency, and enterprise RBAC.',
    techHighlight: 'Next.js App Router, React 18, RSC Architecture, Edge Caching',
    metrics: '99.99% Uptime | Sub-400ms FCP',
  },
  {
    id: 'mobile',
    label: 'Mobile Products',
    category: 'iOS & Android',
    color: '#06B6D4', // Cyan
    businessValue: 'Intuitive cross-platform field & client apps with offline-first synchronization and biometric security.',
    techHighlight: 'React Native, Flutter, SQLite Delta Sync, Native Modules',
    metrics: '60 FPS UI | Offline Queue Sync',
  },
  {
    id: 'desktop',
    label: 'Native Workstations',
    category: 'Desktop Engineering',
    color: '#10B981', // Emerald
    businessValue: 'High-performance desktop tools for heavy data processing, CAD, hardware interfaces, and zero-latency local operations.',
    techHighlight: 'Tauri, Rust Native Core, Electron, Local SQLite/DuckDB',
    metrics: '< 15MB Memory | Sub-10ms Input',
  },
  {
    id: 'ai',
    label: 'Agentic AI Swarms',
    category: 'AI & Automation',
    color: '#8B5CF6', // Violet
    businessValue: 'Autonomous AI agents that execute complex multi-step enterprise workflows, RAG search, and ERP automated actions.',
    techHighlight: 'LLM Orchestration, Vector DBs (Qdrant/Pinecone), Tool Calling',
    metrics: '70% Process Automation ROI',
  },
  {
    id: 'iot',
    label: 'IoT Telemetry Network',
    category: 'Connected Systems',
    color: '#F59E0B', // Amber Gold
    businessValue: 'Real-time telemetry ingestion, Modbus/PLC gateways, and predictive analytics for industrial and smart hardware.',
    techHighlight: 'MQTT Broker QoS 1, InfluxDB Time-Series, Edge Computing',
    metrics: '< 50ms Ingestion | 250+ Edge PLCs',
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

  useEffect(() => {
    if (activeNodeId) {
      const match = ECOSYSTEM_NODES.find((n) => n.id === activeNodeId);
      if (match) setSelectedNode(match);
    }
  }, [activeNodeId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL support
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
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf59e0b, 2.5, 30);
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x2563eb, 2, 30);
    blueLight.position.set(-5, 4, 2);
    scene.add(blueLight);

    // 3. Central Node (Business Engineering Core)
    const centralGroup = new THREE.Group();

    // Inner glowing sphere
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(coreMesh);

    // Outer wireframe ring
    const ringGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfcd34d,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    centralGroup.add(ringMesh);

    scene.add(centralGroup);

    // 4. Peripheral Product Nodes & Connections
    const nodePositions = [
      { id: 'web', x: -3.2, y: 1.5, z: 0.2 },
      { id: 'mobile', x: 3.2, y: 1.4, z: -0.2 },
      { id: 'desktop', x: -2.8, y: -1.7, z: 0.4 },
      { id: 'ai', x: 2.8, y: -1.6, z: -0.3 },
      { id: 'iot', x: 0, y: 2.8, z: -0.6 },
    ];

    const nodeMeshes: Array<{ mesh: THREE.Mesh; data: EcosystemNodeData }> = [];
    const particleSystems: THREE.Points[] = [];

    nodePositions.forEach((pos) => {
      const data = ECOSYSTEM_NODES.find((n) => n.id === pos.id)!;
      const group = new THREE.Group();
      group.position.set(pos.x, pos.y, pos.z);

      const colorHex = parseInt(data.color.replace('#', '0x'));

      // Node Sphere
      const sphereGeo = new THREE.SphereGeometry(0.48, 24, 24);
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

      // Outer Halo Ring
      const haloGeo = new THREE.RingGeometry(0.6, 0.65, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      group.add(haloMesh);

      scene.add(group);
      nodeMeshes.push({ mesh: sphereMesh, data });

      // Curved Connection Tube to Central Core
      const start = new THREE.Vector3(0, 0, 0);
      const end = new THREE.Vector3(pos.x, pos.y, pos.z);
      const mid = new THREE.Vector3(
        (start.x + end.x) / 2 + (pos.x > 0 ? 0.4 : -0.4),
        (start.y + end.y) / 2 + 0.3,
        (start.z + end.z) / 2 + 0.5
      );

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(40);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineDashedMaterial({
        color: colorHex,
        dashSize: 0.2,
        gapSize: 0.1,
        transparent: true,
        opacity: 0.45,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);

      // Particle pulses along curve
      const pCount = 12;
      const pPositions = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const pt = curve.getPoint(i / pCount);
        pPositions[i * 3] = pt.x;
        pPositions[i * 3 + 1] = pt.y;
        pPositions[i * 3 + 2] = pt.z;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: colorHex,
        size: 0.12,
        transparent: true,
        opacity: 0.85,
      });
      const pSystem = new THREE.Points(pGeo, pMat);
      scene.add(pSystem);
      particleSystems.push(pSystem);
    });

    // Background Subtle Particle Field
    const bgCount = 120;
    const bgGeo = new THREE.BufferGeometry();
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount * 3; i += 3) {
      bgPos[i] = (Math.random() - 0.5) * 20;
      bgPos[i + 1] = (Math.random() - 0.5) * 14;
      bgPos[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({
      color: 0x94a3b8,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
    });
    const bgParticles = new THREE.Points(bgGeo, bgMat);
    scene.add(bgParticles);

    // 5. Mouse Parallax & Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

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

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();


    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Core rotation
      centralGroup.rotation.y = elapsedTime * 0.4;
      ringMesh.rotation.x = elapsedTime * 0.3;
      ringMesh.rotation.z = elapsedTime * 0.2;

      // Pulse core scale
      const pulseScale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate peripheral nodes slightly
      nodeMeshes.forEach(({ mesh }, idx) => {
        mesh.rotation.y = elapsedTime * 0.5;
        const parent = mesh.parent;
        if (parent) {
          parent.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.002;
        }
      });

      // Camera parallax
      targetX += (mouseX * 0.8 - targetX) * 0.05;
      targetY += (mouseY * 0.8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
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
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectNode]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-dark opacity-80" />
        <div className="relative z-10 text-center space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mx-auto text-gold-400 font-bold text-xl">
            3D
          </div>
          <h3 className="text-xl font-bold text-white">System Architecture Convergence</h3>
          <p className="text-sm text-slate-300">
            Connected Desktop Apps, Web SaaS Platforms, Mobile Products, AI Agents, and IoT Infrastructure.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px]">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Interactive Node HUD Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm glass-card-dark p-4 rounded-2xl border border-slate-700/80 shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gold-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: selectedNode.color }} />
            {selectedNode.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400">Interactive 3D Node</span>
        </div>
        <h4 className="text-base font-bold text-white flex items-center justify-between">
          <span>{selectedNode.label}</span>
        </h4>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedNode.businessValue}</p>

        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-400">{selectedNode.metrics}</span>
          <span className="text-gold-400 font-bold hover:underline cursor-pointer" onClick={() => onSelectNode?.(selectedNode)}>
            View Spec →
          </span>
        </div>
      </div>

      {/* Helper instruction */}
      <div className="absolute top-4 right-4 hidden sm:block text-[11px] font-mono text-slate-400 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800">
        ✦ Drag camera • Click nodes to inspect
      </div>
    </div>
  );
};
