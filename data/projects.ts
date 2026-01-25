export interface Project {
  title: string;
  description: string;
  coverImage: string;
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
    coverImage: '/project-images/paracheck-cover.jpg',
    link: 'https://github.com/Diego-PB/ParaCheck',
    slug: 'paraCheck',
    competences: ['realiser', 'optimiser', 'collaborer', 'gerer'],
    fullDescription:
      'ParaCheck est une application mobile complète dédiée aux parapentistes. Elle permet de tracker les vols, d\'analyser les conditions météorologiques, de gérer l\'historique des sorties et de suivre l\'évolution des compétences en temps réel.',
    gallery: [
      '/project-images/paracheck-1.jpg',
      '/project-images/paracheck-2.jpg',
    ],
    technologies: ['Dart', 'Flutter', 'Git'],
    features: [
      'Pré-vol checklist',
      'Post-vol formulaire',
      'Gestion des compétences',
      'Gestion des historiques de vol',
      'Gestion des sites de vol',
      'Export des données',
    ],
  },
  {
    title: 'Dashboard IoT',
    description:
      'Interface web de visualisation des données captées par des capteurs AM107 dans le bâtiment de l\'IUT.',
    coverImage: '/project-images/dashboard-cover.jpg',
    link: 'https://github.com/IUT-Blagnac/SAE-ALT-S3-Dev-24-25-Dashboard_du_departement-Equipe-3A01',
    slug: 'dashboard',
    competences: ['realiser', 'gerer', 'conduire', 'administrer'],
    fullDescription:
      'Développement d\'un dashboard web pour visualiser en temps réel les données collectées par des capteurs IoT AM107 déployés dans le département informatique de l\'IUT de Blagnac. Le projet permet de monitorer la température, l\'humidité et la qualité de l\'air des différentes salles et les entrées et sorties.',
    gallery: [
      '/project-images/dashboard-1.jpg',
      '/project-images/dashboard-2.jpg',
    ],
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript', 'mosquitto MQTT', 'Node-RED', 'AM107', 'TimeScaleDB', 'Docker', 'Nginx'],
    features: [
      'Visualisation des données des capteurs en temps réel',
      'Historique des données',
      'Mise à jour automatique des données',
    ],
  },
  {
    title: 'Jeu 3D Bomberman',
    description:
      'Jeu Bomberman en 3D développé avec des graphismes immersifs et un gameplay multijoueur explosif !',
    coverImage: '/project-images/bomberman-cover.jpg',
    link: 'https://github.com/AidanCristini/bomberman3d_godot',
    slug: 'bomberman',
    competences: ['realiser', 'optimiser', 'collaborer', 'conduire'],
    fullDescription:
      'Recréation du classique Bomberman en environnement 3D avec le moteur Godot. Le jeu propose des niveaux dynamiques, des power-ups variés et un mode multijoueur local pour des parties endiablées entre amis.',
    gallery: [
      '/project-images/bomberman-1.jpg',
      '/project-images/bomberman-2.jpg',
    ],
    technologies: ['Godot', 'GDScript', '3D Modeling'],
    features: [
      'Graphismes 3D immersifs',
      'Mode multijoueur local',
      'Power-ups variés',
      'Niveaux aléatoires',
      'Contrôles fluides',
      
    ],
  },
];
