import { site } from '../config/site';

export interface ContactMethod {
  id: string;
  label: string;
  href: string;
  display: string;
  hint: string;
}

// Editable contact list. URLs come from the central site config —
// to change a link, edit src/config/site.ts once.
export const contactMethods: ContactMethod[] = [
  {
    id: 'email',
    label: site.socials.email.label,
    href: site.socials.email.href,
    display: site.socials.email.display,
    hint: 'Fastest for project inquiries',
  },
  {
    id: 'whatsapp',
    label: site.socials.whatsapp.label,
    href: site.socials.whatsapp.href,
    display: site.socials.whatsapp.display,
    hint: 'Chat for quick questions',
  },
  {
    id: 'linkedin',
    label: site.socials.linkedin.label,
    href: site.socials.linkedin.href,
    display: site.socials.linkedin.display,
    hint: 'Professional profile',
  },
  {
    id: 'instagram',
    label: site.socials.instagram.label,
    href: site.socials.instagram.href,
    display: site.socials.instagram.display,
    hint: 'Work-in-progress snapshots',
  },

];
