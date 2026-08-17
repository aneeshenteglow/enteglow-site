'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

export interface EcosystemNodeData {
  id: string;
  label: string;
  shortDesc: string;
  category: string;
  color: string;
  icon: string;
  businessValue: string;
  techHighlight: string;
  metrics: string;
  orbitIndex: number; // 0 = Inner, 1 = Middle, 2 = Outer
  initialAngle: number; // Angle in radians
  speed: number; // Orbital speed multiplier
}

export const ECOSYSTEM_NODES: EcosystemNodeData[] = [
  {
    id: 'ai-ml',
    label: 'AI & ML',
    shortDesc: 'Intelligent automation and predictive systems',
    category: 'Agentic AI',
    color: '#E31E24',
    icon: 'psychology',
    businessValue: 'Embedding agentic intelligence, LLMs, and predictive models into business workflows.',
    techHighlight: 'LLM Orchestration, Vector DBs, RAG, PyTorch',
    metrics: '70% Process Automation',
    orbitIndex: 0,
    initialAngle: 0,
    speed: 0.10,
  },
  {
    id: 'web-apps',
    label: 'Web Applications',
    shortDesc: 'Scalable business platforms',
    category: 'Web Platforms',
    color: '#FFB4AB',
    icon: 'web',
    businessValue: 'High-availability web applications built for heavy operational workflows.',
    techHighlight: 'Next.js App Router, React 18, TypeScript, Tailwind',
    metrics: '99.99% Uptime',
    orbitIndex: 1,
    initialAngle: 0.8,
    speed: -0.06,
  },
  {
    id: 'websites',
    label: 'Website Development',
    shortDesc: 'High-performance digital presence',
    category: 'Enterprise Web',
    color: '#E31E24',
    icon: 'language',
    businessValue: 'Conversion-focused corporate platforms with edge rendering & fast page loads.',
    techHighlight: 'Static & Server Rendering, Edge CDNs, Motion Graphics',
    metrics: '100/100 Lighthouse Score',
    orbitIndex: 2,
    initialAngle: 1.5,
    speed: 0.04,
  },
  {
    id: 'mobile',
    label: 'Mobile',
    shortDesc: 'Field and customer applications',
    category: 'Mobile Systems',
    color: '#FF897D',
    icon: 'smartphone',
    businessValue: 'Native iOS & Android apps designed for field teams and seamless user experiences.',
    techHighlight: 'React Native, Swift, Kotlin, Offline Sync',
    metrics: '4.9 Star User Rating',
    orbitIndex: 1,
    initialAngle: 2.4,
    speed: -0.06,
  },
  {
    id: 'saas',
    label: 'SaaS Platforms',
    shortDesc: 'Multi-tenant cloud products',
    category: 'SaaS Engineering',
    color: '#E31E24',
    icon: 'cloud_done',
    businessValue: 'End-to-end multi-tenant subscription software platforms built for scale.',
    techHighlight: 'Multi-Tenant Auth, Billing, Microfrontends, REST/gRPC',
    metrics: '10x Scaling Capacity',
    orbitIndex: 0,
    initialAngle: 2.1,
    speed: 0.10,
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    shortDesc: 'DevOps & cloud architectures',
    category: 'Cloud & DevOps',
    color: '#8B1216',
    icon: 'cloud_sync',
    businessValue: 'Reliable cloud infrastructure, automated CI/CD pipelines, and zero-downtime ops.',
    techHighlight: 'AWS, GCP, Kubernetes, Terraform, Docker',
    metrics: '99.9% SLA Guarantee',
    orbitIndex: 1,
    initialAngle: 4.0,
    speed: -0.06,
  },
  {
    id: 'iot',
    label: 'IoT Applications',
    shortDesc: 'Connected devices and telemetry',
    category: 'IoT & Telemetry',
    color: '#E31E24',
    icon: 'sensors',
    businessValue: 'Real-time telemetry ingestion and remote hardware monitoring at scale.',
    techHighlight: 'MQTT, WebSockets, Embedded C++, Edge AI',
    metrics: '<50ms Latency',
    orbitIndex: 2,
    initialAngle: 3.6,
    speed: 0.04,
  },
  {
    id: 'backend',
    label: 'API & Backend',
    shortDesc: 'High-throughput microservices',
    category: 'Backend Core',
    color: '#FFB4AB',
    icon: 'api',
    businessValue: 'Resilient APIs and distributed services with security and peak performance.',
    techHighlight: 'Node.js, Go, Python, GraphQL, Redis, Postgres',
    metrics: '10k+ Req/sec',
    orbitIndex: 0,
    initialAngle: 4.2,
    speed: 0.10,
  },
  {
    id: 'data-eng',
    label: 'Data Engineering',
    shortDesc: 'Data pipelines and analytics',
    category: 'Data & Analytics',
    color: '#E31E24',
    icon: 'database',
    businessValue: 'Automated ETL pipelines, real-time analytics, and data warehouse integration.',
    techHighlight: 'BigQuery, Snowflake, Apache Spark, dbt, Airflow',
    metrics: '99.9% Data Freshness',
    orbitIndex: 1,
    initialAngle: 5.4,
    speed: -0.06,
  },
  {
    id: 'enterprise',
    label: 'Enterprise Software',
    shortDesc: 'Legacy modernization & ERPs',
    category: 'Enterprise Systems',
    color: '#8B1216',
    icon: 'domain',
    businessValue: 'Custom enterprise resource platforms replacing legacy operational friction.',
    techHighlight: 'Modular Architecture, ERP/CRM Integrations, IAM',
    metrics: '100% IP Ownership',
    orbitIndex: 2,
    initialAngle: 5.6,
    speed: 0.04,
  },
];

interface Props {
  activeNodeId?: string;
  onSelectNode?: (node: EcosystemNodeData | null) => void;
}

interface NodeScreenPos {
  id: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  visible: boolean;
  depth: number; // Z position
  inProtectionZone: boolean; // True if node overlaps hero text region
}

// Widened 3D Elliptical Orbits to sweep around text perimeter
const ORBIT_CONFIGS = [
  { radiusX: 3.4, radiusY: 2.2, tiltX: 0.40, tiltZ: 0.20 }, // Orbit 0: Inner
  { radiusX: 5.2, radiusY: 3.2, tiltX: -0.30, tiltZ: -0.25 }, // Orbit 1: Middle
  { radiusX: 6.8, radiusY: 4.2, tiltX: 0.15, tiltZ: -0.35 }, // Orbit 2: Outer
];

export const ThreeEcosystemCanvas: React.FC<Props> = ({ onSelectNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [nodePositions, setNodePositions] = useState<NodeScreenPos[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Hover ref for immediate access inside 60fps animation loop
  const hoveredNodeRef = useRef<string | null>(null);
  useEffect(() => {
    hoveredNodeRef.current = hoveredNodeId;
  }, [hoveredNodeId]);

  // Responsive breakpoint check
  useEffect(() => {
    const checkResponsive = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };
    checkResponsive();
    window.addEventListener('resize', checkResponsive, { passive: true });
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  // Filter nodes according to screen size
  const visibleNodes = useMemo(() => {
    if (isMobile) {
      return ECOSYSTEM_NODES.filter((n) => ['ai-ml', 'web-apps', 'mobile', 'cloud'].includes(n.id));
    }
    if (isTablet) {
      return ECOSYSTEM_NODES.filter((n) =>
        ['ai-ml', 'web-apps', 'mobile', 'saas', 'cloud', 'data-eng'].includes(n.id)
      );
    }
    return ECOSYSTEM_NODES;
  }, [isMobile, isTablet]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.z = 8.5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const brandColor = new THREE.Color(0xe31e24);

      // --- 1. Subtle Central Core ---
      const coreGroup = new THREE.Group();
      scene.add(coreGroup);

      const coreGeo = new THREE.IcosahedronGeometry(0.5, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        wireframe: false,
        transparent: true,
        opacity: 0.20,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreGroup.add(coreMesh);

      const shellGeo = new THREE.IcosahedronGeometry(0.8, 1);
      const shellMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const shellMesh = new THREE.Mesh(shellGeo, shellMat);
      coreGroup.add(shellMesh);

      const coreLight = new THREE.PointLight(0xe31e24, 0.6, 10);
      coreGroup.add(coreLight);

      // --- 2. Render 3D Elliptical Orbit Rings ---
      ORBIT_CONFIGS.forEach((orbitConf, index) => {
        const curvePoints: THREE.Vector3[] = [];
        const segments = 128;
        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          const rx = orbitConf.radiusX;
          const ry = orbitConf.radiusY;

          const x0 = rx * Math.cos(theta);
          const y0 = ry * Math.sin(theta) * Math.cos(orbitConf.tiltX);
          const z0 = ry * Math.sin(theta) * Math.sin(orbitConf.tiltX);

          const x = x0 * Math.cos(orbitConf.tiltZ) - y0 * Math.sin(orbitConf.tiltZ);
          const y = x0 * Math.sin(orbitConf.tiltZ) + y0 * Math.cos(orbitConf.tiltZ);
          const z = z0;

          curvePoints.push(new THREE.Vector3(x, y, z));
        }

        const ringGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const ringMat = new THREE.LineBasicMaterial({
          color: index === 0 ? brandColor : 0xffffff,
          transparent: true,
          opacity: index === 0 ? 0.12 : 0.06,
          blending: THREE.AdditiveBlending,
        });
        const ringLine = new THREE.LineLoop(ringGeo, ringMat);
        scene.add(ringLine);
      });

      // --- 3. Ambient Starfield Particle Cloud ---
      const particleCount = 70;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 16;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: brandColor,
        size: 0.04,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // --- 4. Dynamic Connector Lines ---
      const maxLines = visibleNodes.length;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
      });
      const connectorLines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(connectorLines);

      // Map to track interpolated line colors per node
      const currentLineColorsMap: Map<string, THREE.Color> = new Map();

      // Dynamic Node 3D Spheres
      const nodeMeshesMap: Map<string, THREE.Mesh> = new Map();
      visibleNodes.forEach((node) => {
        const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(node.color),
          transparent: true,
          opacity: 0.5,
        });
        const mesh = new THREE.Mesh(nodeGeo, nodeMat);
        scene.add(mesh);
        nodeMeshesMap.set(node.id, mesh);
        currentLineColorsMap.set(node.id, new THREE.Color('#38181A'));
      });

      // Mouse tracking for subtle parallax
      const mouse = new THREE.Vector2(0, 0);
      const targetMouse = new THREE.Vector2(0, 0);
      const handleMouseMove = (e: MouseEvent) => {
        targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const clock = new THREE.Clock();
      const nodeAngles: Map<string, number> = new Map();
      const nodeSpeedFactors: Map<string, number> = new Map();

      visibleNodes.forEach((node) => {
        nodeAngles.set(node.id, node.initialAngle);
        nodeSpeedFactors.set(node.id, 1.0);
      });

      // --- Animation Loop ---
      const animate = () => {
        animId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Parallax damping
        mouse.x += (targetMouse.x - mouse.x) * 0.03;
        mouse.y += (targetMouse.y - mouse.y) * 0.03;
        camera.position.x = mouse.x * 0.3;
        camera.position.y = mouse.y * 0.2;
        camera.lookAt(0, 0, 0);

        const currentHoveredId = hoveredNodeRef.current;
        const hasHover = Boolean(currentHoveredId);

        // Dynamic core illumination lerp
        const targetCoreOpacity = hasHover ? 0.85 : 0.20;
        const targetLightIntensity = hasHover ? 2.5 : 0.6;
        coreMat.opacity += (targetCoreOpacity - coreMat.opacity) * 0.08;
        coreLight.intensity += (targetLightIntensity - coreLight.intensity) * 0.08;

        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
        coreMesh.scale.set(pulse, pulse, pulse);
        shellMesh.rotation.y = elapsedTime * 0.15;
        shellMesh.rotation.x = elapsedTime * 0.1;
        particleSystem.rotation.y = elapsedTime * 0.015;

        const currentScreenPositions: NodeScreenPos[] = [];

        // Update positions of all visible service nodes
        visibleNodes.forEach((node, idx) => {
          const orbitConf = ORBIT_CONFIGS[node.orbitIndex];
          const mesh = nodeMeshesMap.get(node.id);
          if (!mesh) return;

          const isHovered = currentHoveredId === node.id;

          // CONTINUOUS ORBITAL TRAJECTORY MATH (NO JUMPS OR RE-CALCULATIONS):
          // Smoothly lerp speed factor (1.0 = normal, 0.20 = gentle crawl on hover)
          const targetSpeedFactor = isHovered ? 0.20 : 1.0;
          const currentSpeedFactor = nodeSpeedFactors.get(node.id) ?? 1.0;
          const nextSpeedFactor = currentSpeedFactor + (targetSpeedFactor - currentSpeedFactor) * 0.05;
          nodeSpeedFactors.set(node.id, nextSpeedFactor);

          let angle = nodeAngles.get(node.id) || 0;
          if (!prefersReducedMotion) {
            angle += node.speed * delta * nextSpeedFactor;
            nodeAngles.set(node.id, angle);
          }

          // Calculate 3D position along continuous trajectory
          const rx = orbitConf.radiusX * (isMobile ? 0.65 : isTablet ? 0.85 : 1.0);
          const ry = orbitConf.radiusY * (isMobile ? 0.65 : isTablet ? 0.85 : 1.0);

          const x0 = rx * Math.cos(angle);
          const y0 = ry * Math.sin(angle) * Math.cos(orbitConf.tiltX);
          const z0 = ry * Math.sin(angle) * Math.sin(orbitConf.tiltX);

          const x = x0 * Math.cos(orbitConf.tiltZ) - y0 * Math.sin(orbitConf.tiltZ);
          const y = x0 * Math.sin(orbitConf.tiltZ) + y0 * Math.cos(orbitConf.tiltZ);
          const z = z0;

          mesh.position.set(x, y, z);

          // Smoothly lerp 3D Mesh Scale inside Three.js
          const targetScale = isHovered ? 1.6 : 1.0;
          mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

          // Smoothly lerp Line Connector Colors in WebGL
          const currColor = currentLineColorsMap.get(node.id) || new THREE.Color('#38181A');
          const targetColor = isHovered ? new THREE.Color('#E31E24') : new THREE.Color('#38181A');
          currColor.lerp(targetColor, 0.08);
          currentLineColorsMap.set(node.id, currColor);

          // Update Radial Connector Line Buffer
          const posIdx = idx * 6;
          linePositions[posIdx] = 0;
          linePositions[posIdx + 1] = 0;
          linePositions[posIdx + 2] = 0;
          linePositions[posIdx + 3] = x;
          linePositions[posIdx + 4] = y;
          linePositions[posIdx + 5] = z;

          lineColors[posIdx] = currColor.r;
          lineColors[posIdx + 1] = currColor.g;
          lineColors[posIdx + 2] = currColor.b;
          lineColors[posIdx + 3] = currColor.r;
          lineColors[posIdx + 4] = currColor.g;
          lineColors[posIdx + 5] = currColor.b;

          // Project 3D vector to Screen Percentage (0-100)
          const tempVec = mesh.position.clone();
          tempVec.project(camera);

          const screenX = ((tempVec.x + 1) / 2) * 100;
          const screenY = ((-tempVec.y + 1) / 2) * 100;

          // Content Protection Zone Bounding Check
          const inProtectionZone =
            Math.abs(screenX - 50) < 26 && Math.abs(screenY - 42) < 20;

          currentScreenPositions.push({
            id: node.id,
            x: screenX,
            y: screenY,
            visible: tempVec.z < 1.0,
            depth: tempVec.z,
            inProtectionZone,
          });
        });

        connectorLines.geometry.attributes.position.needsUpdate = true;
        connectorLines.geometry.attributes.color.needsUpdate = true;

        setNodePositions(currentScreenPositions);

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
            obj instanceof THREE.LineSegments ||
            obj instanceof THREE.LineLoop
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
  }, [visibleNodes, isMobile, isTablet]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 glass-panel rounded text-on-surface">
        <h3 className="text-xl font-headline font-bold text-primary">EnteGlow Engineering System</h3>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden select-none">
      {/* Subtle Central Brand Label Overlay (Behind Text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 text-center opacity-30">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-deep/40 border border-primary/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="text-[9px] font-mono tracking-widest text-primary/70 uppercase font-semibold">
            Enteglow Core
          </span>
        </div>
      </div>

      {/* Screen-Space Projected HTML Service Node Badges */}
      {nodePositions.map((pos) => {
        const node = visibleNodes.find((n) => n.id === pos.id);
        if (!node || !pos.visible) return null;

        const isHovered = hoveredNodeId === node.id;
        const isProtected = pos.inProtectionZone && !isHovered;

        return (
          <div
            key={node.id}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              zIndex: isHovered ? 50 : isProtected ? 5 : Math.round((1 - pos.depth) * 20) + 10,
            }}
            /* REMOVED transition-all FROM POSITION WRAPPER TO PREVENT CSS TRANSITION CONFLICT WITH 60FPS JS COORDINATES */
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${
              isProtected ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'
            }`}
            onMouseEnter={() => {
              setHoveredNodeId(node.id);
              if (onSelectNode) onSelectNode(node);
            }}
            onMouseLeave={() => {
              setHoveredNodeId(null);
              if (onSelectNode) onSelectNode(null);
            }}
          >
            {/* Stable Hit Target Box & Floating Badge Container */}
            <div className="relative p-1">
              <div
                className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-transform duration-300 ease-out transition-opacity duration-300 backdrop-blur-sm ${
                  isHovered
                    ? 'bg-primary/25 border border-primary text-on-surface scale-110 shadow-[0_0_20px_rgba(227,30,36,0.5)] opacity-100'
                    : isProtected
                    ? 'bg-surface-deep/30 border border-glass-border/20 text-on-surface-variant/40 scale-85 opacity-15 blur-[0.5px]'
                    : 'bg-surface-deep/50 border border-glass-border/40 text-on-surface-variant/70 hover:border-primary/50 hover:text-on-surface hover:scale-105 hover:opacity-100 opacity-45'
                }`}
              >
                {/* Node Icon */}
                <span
                  className={`material-symbols-outlined text-[14px] transition-colors duration-300 ${
                    isHovered
                      ? 'text-primary'
                      : isProtected
                      ? 'text-on-surface-variant/30'
                      : 'text-on-surface-variant/70 group-hover:text-primary'
                  }`}
                >
                  {node.icon}
                </span>

                {/* Service Label */}
                <span className="text-[11px] font-medium tracking-wide whitespace-nowrap">
                  {node.label}
                </span>

                {/* Pulse Indicator on Hover */}
                {isHovered && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-0.5" />
                )}
              </div>
            </div>

            {/* Contextual Description Popover Card */}
            {isHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3.5 rounded-xl glass-panel border border-primary/40 shadow-2xl bg-surface-deep/95 backdrop-blur-xl z-50 text-left pointer-events-none animate-fadeIn">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    {node.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {node.category}
                  </span>
                </div>
                <p className="text-xs font-medium text-on-surface mb-2 leading-snug">
                  {node.shortDesc}
                </p>
                <div className="pt-2 border-t border-glass-border/40 text-[11px] text-on-surface-variant space-y-1">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant/70">Key Metric:</span>
                    <span className="font-semibold text-primary">{node.metrics}</span>
                  </div>
                  <div className="text-[10px] font-mono text-on-surface-variant/80 truncate">
                    {node.techHighlight}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
