export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  competences?: string[];
  fullDescription?: string;
  gallery?: string[];
  technologies?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    title: 'ParaCheck',
    description:
      'Application mobile pour les parapentistes : sécurité, historiques de vols, suivi des compétences et plus encore !',
    logo: '/logos/paracheck.svg',
    link: 'https://github.com/Diego-PB/ParaCheck',
    slug: 'paraCheck',
    competences: ['realiser', 'optimiser', 'collaborer'],
    fullDescription:
      'ParaCheck est une application mobile complète dédiée aux parapentistes. Elle permet de tracker les vols, d\'analyser les conditions météorologiques, de gérer l\'historique des sorties et de suivre l\'évolution des compétences en temps réel.',
    gallery: [
      '/project-images/paracheck-1.jpg',
      '/project-images/paracheck-2.jpg',
    ],
    technologies: ['React Native', 'Firebase', 'Expo'],
    features: [
      'Suivi GPS en temps réel',
      'Historique des vols détaillé',
      'Gestion des compétences',
      'Alertes météo intelligentes',
    ],
  },
  {
    title: 'Dashboard IUT',
    description:
      'Dashboard utilisant des capteurs AM1107 : récupération et affichage de données de notre bâtiment d\'études via interface web.',
    logo: '/logos/AM107.jpg',
    link: 'https://github.com/IUT-Blagnac/SAE-ALT-S3-Dev-24-25-Dashboard_du_departement-Equipe-3A01',
    slug: 'dashboard',
    competences: ['realiser', 'gerer', 'conduire'],
    fullDescription:
      'Développement d\'un dashboard Power BI pour visualiser les données collectées par des capteurs IoT dans le bâtiment pédagogique. Ce projet démontre la réchauffement climatique et les écarts de température entre les salles.',
    gallery: [
      '/project-images/dashboard-1.jpg',
      '/project-images/dashboard-2.jpg',
    ],
    technologies: ['Power BI', 'DAX', 'SQL Server', 'Excel'],
    features: [
      'Visualisations interactives',
      'Filtres dynamiques et segments',
      'Calculs KPI en temps réel',
      'Graphiques de tendance avancés',
    ],
  },
  {
    title: 'CloudSync Pro',
    description:
      'Plateforme de synchronisation cloud avec chiffrement E2E, permettant le partage sécurisé de fichiers et la collaboration en équipe.',
    logo: '/logos/paracheck.svg',
    link: 'https://github.com/example/cloudsync-pro',
    slug: 'cloudsync',
    competences: ['realiser', 'administrer', 'collaborer'],
    fullDescription:
      'CloudSync Pro est une solution complète de gestion et synchronisation de fichiers cloud avec architecture serverless. Elle intègre un système de permissions avancé, des versioning automatiques et un tableau de bord temps réel pour le monitoring des équipes.',
    gallery: [
      '/project-images/cloudsync-1.jpg',
      '/project-images/cloudsync-2.jpg',
    ],
    technologies: ['Node.js', 'AWS Lambda', 'PostgreSQL', 'React'],
    features: [
      'Chiffrement bout-à-bout',
      'Synchronisation temps réel',
      'Gestion des permissions granulaires',
      'Historique versionné complet',
      'API REST complète',
    ],
  },
  {
    title: 'Analytics Engine',
    description:
      'Moteur d\'analyse de données temps réel pour la visualisation et le reporting automatisé d\'événements métier complexes.',
    logo: '/logos/AM107.jpg',
    link: 'https://github.com/example/analytics-engine',
    slug: 'analytics',
    competences: ['realiser', 'optimiser', 'gerer'],
    fullDescription:
      'Analytics Engine est un système de traitement et visualisation de données en temps réel permettant l\'analyse instantanée de millions d\'événements. Il fournit des dashboards customisables, des alertes intelligentes et des exports automatisés pour la prise de décision rapide.',
    gallery: [
      '/project-images/analytics-1.jpg',
      '/project-images/analytics-2.jpg',
    ],
    technologies: ['Apache Kafka', 'Elasticsearch', 'Grafana', 'TypeScript'],
    features: [
      'Traitement temps réel de 1M+ events/sec',
      'Dashboards dynamiques et customisables',
      'Alertes intelligentes avec ML',
      'Export multi-formats automatisé',
      'Intégration API Webhooks',
    ],
  },
];
