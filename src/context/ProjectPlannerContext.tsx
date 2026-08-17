'use client';

import React, { createContext, useContext, useState } from 'react';
import { ProjectPlannerModal } from '@/components/common/ProjectPlannerModal';

interface ProjectPlannerContextType {
  isOpen: boolean;
  openPlanner: () => void;
  closePlanner: () => void;
}

const ProjectPlannerContext = createContext<ProjectPlannerContextType>({
  isOpen: false,
  openPlanner: () => {},
  closePlanner: () => {},
});

export const ProjectPlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPlanner = () => setIsOpen(true);
  const closePlanner = () => setIsOpen(false);

  return (
    <ProjectPlannerContext.Provider value={{ isOpen, openPlanner, closePlanner }}>
      {children}
      <ProjectPlannerModal isOpen={isOpen} onClose={closePlanner} />
    </ProjectPlannerContext.Provider>
  );
};

export const useProjectPlanner = () => useContext(ProjectPlannerContext);
