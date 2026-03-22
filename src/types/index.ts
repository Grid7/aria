export interface LocalizedString {
  en: string;
  ko: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  content: LocalizedString;
  author: string;
  date: string;
  category: LocalizedString;
  image?: string;
}

export type Category = 'AI Tools' | 'Productivity' | 'Automation' | 'Digital Workflow';
