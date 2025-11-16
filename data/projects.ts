export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'ParaCheck',
    description:
      'Application mobile pour les parapentistes : sécurité, historiques de vols, suivi des compétences et plus encore !',
    logo: '/logos/paracheck.svg',
    link: 'https://github.com/Diego-PB/ParaCheck',
    slug: 'paraCheck',
  },
  {
    title: 'Dashboard IUT',
    description:
      'Dashboard utilisant des capteurs AM1107 : récupération et affichage de données de notre bâtiment d\'études via interface web.',
    logo: '/logos/AM107.jpg',
    link: 'https://github.com/IUT-Blagnac/SAE-ALT-S3-Dev-24-25-Dashboard_du_departement-Equipe-3A01',
    slug: 'dashboard',
  },
  /*
  {
    title: 'DailyBank',
    description:
      'Application de gestion bancaire personnelle avec fonctionnalités de suivi des dépenses, budgets et analyses financières.',
    logo: '/logos/dailybank.svg',
    link: 'https://github.com/RaphaLLamothe/dailybank',
    slug: 'dailybank',
  },
  */
];
