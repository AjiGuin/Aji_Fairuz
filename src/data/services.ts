export interface Service {
  no: string;
  title: string;
  description: string;
}

// Editable service list. Cards render in this order.
export const services: Service[] = [
  {
    no: '01',
    title: '2D → 3D MODELING',
    description: 'Transforming technical 2D drawings into detailed and structured 3D models.',
  },
  {
    no: '02',
    title: 'TECHNICAL DRAWING',
    description:
      'Creating professional 2D technical drawings with dimensions, sections, details, and annotations.',
  },
  {
    no: '03',
    title: 'CAD REDRAWING',
    description:
      'Redrawing sketches, photos, or existing drawings into clean and organized CAD documentation.',
  },
  {
    no: '04',
    title: 'DRAWING MODIFICATION',
    description: 'Modifying and adapting existing drawings or designs according to specific requirements.',
  },
  {
    no: '05',
    title: 'DESIGN DEVELOPMENT',
    description:
      'Developing and refining mechanical designs to make them more detailed, structured, and suitable for fabrication.',
  },
];
