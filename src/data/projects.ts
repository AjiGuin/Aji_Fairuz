import project01 from '../assets/images/projects/project-01.jpg';
import project02 from '../assets/images/projects/project-02.jpg';
import project03 from '../assets/images/projects/project-03.jpg';
import project04 from '../assets/images/projects/project-04.jpg';
import project05 from '../assets/images/projects/project-05.jpg';

export interface Project {
  no: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  year: string;
  tools: string[];
}

// Placeholder projects — replace title, description, image, and tools per project.
// To swap an image, drop the new file into src/assets/images/projects/ and update the import below.
export const projects: Project[] = [
  {
    no: '01',
    title: 'PROJECT 1',
    category: 'Mechanical Design',
    description: 'Placeholder summary — replace with scope, process, and outcome of this work.',
    image: project01,
    imageAlt: 'Preview of project 1',
    year: '2025',
    tools: ['SolidWorks'],
  },
  {
    no: '02',
    title: 'PROJECT 2',
    category: 'Technical Drawing',
    description: 'Placeholder summary — replace with scope, process, and outcome of this work.',
    image: project02,
    imageAlt: 'Preview of project 2',
    year: '2025',
    tools: ['AutoCAD'],
  },
  {
    no: '03',
    title: 'PROJECT 3',
    category: '3D Modeling',
    description: 'Placeholder summary — replace with scope, process, and outcome of this work.',
    image: project03,
    imageAlt: 'Preview of project 3',
    year: '2025',
    tools: ['Autodesk Inventor'],
  },
  {
    no: '04',
    title: 'PROJECT 4',
    category: 'CAD Documentation',
    description: 'Placeholder summary — replace with scope, process, and outcome of this work.',
    image: project04,
    imageAlt: 'Preview of project 4',
    year: '2026',
    tools: ['Mastercam'],
  },
  {
    no: '05',
    title: 'PROJECT 5',
    category: 'Design Development',
    description: 'Placeholder summary — replace with scope, process, and outcome of this work.',
    image: project05,
    imageAlt: 'Preview of project 5',
    year: '2026',
    tools: ['CAD', 'CNC'],
  },
];
