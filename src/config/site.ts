import portrait from '../assets/images/portrait/portrait.jpg';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  display: string;
}

// Central site configuration.
// Edit values here to update name, bio, portrait, links, and metadata.
// Components must read from this file — never hardcode these values.
export const site = {
  name: 'AJI FAIRUS',
  role: 'Engineering Drawing Graduate',
  school: 'SMK Negeri 1 Cilegon',
  grade: 'Graduate',
  major: 'Engineering Drawing',
  bio: 'I am a graduate of SMK Negeri 1 Cilegon, majoring in Engineering Drawing. I have a strong dedication to learning and a solid foundation in mechanical component design using Autodesk Inventor, AutoCAD, and SolidWorks, as well as basic machining process simulation using Mastercam. I am committed to developing my technical skills and ready to contribute professionally and responsibly in an industrial work environment.',
  portrait,
  portraitAlt: 'Monochrome editorial portrait of Aji Fairus',
  nav: [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ] as NavLink[],
  socials: {
    email: { label: 'Email', href: 'mailto:ajifairuszs456@gmail.com', display: 'ajifairuszs456@gmail.com' },
    whatsapp: { label: 'WhatsApp', href: 'https://wa.me/6282123062825', display: '+62 821-2306-2825' },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aji-fairuz', display: 'linkedin.com/in/aji-fairuz' },
    instagram: { label: 'Instagram', href: 'https://www.instagram.com/fairuzaji_', display: '@fairuzaji_' },
    website: { label: 'Website', href: 'https://aji-fairuz.ajifairuzs456.workers.dev', display: 'aji-fairuz.ajifairuzs456.workers.dev' },
  } as Record<'email' | 'whatsapp' | 'linkedin' | 'instagram' | 'website', SocialLink>,
  meta: {
    title: 'Aji Fairus — Mechanical Engineering Design',
    description:
      'Aji Fairus, Grade 11 Mechanical Engineering Design student at SMK Negeri 1 Cilegon. 2D/3D CAD, technical drawing, Autodesk Inventor, AutoCAD, SolidWorks, Mastercam.',
  },
};

export type SiteConfig = typeof site;
