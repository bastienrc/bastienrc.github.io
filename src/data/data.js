export const DataIdentity = {
  fullname: 'Sébastien Colbert',
  info: '39 ans, Permis B, Voiture',
  posteSearch: 'Développeur Web',
  address: '4 Avenue Charles de Gaulle',
  cp: '62200',
  ville: 'Boulogne-sur-mer',
  mail: 'colbertsebastien@gmail.com',
  site: 'sebastiencolbert.fr',
  networks: {
    freecodecamp: 'https://www.freecodecamp.org/bastienrc',
    github: 'https://github.com/bastienrc',
    viadeo: 'http://fr.viadeo.com/fr/profile/sebastien.colbert',
    codepen: 'https://codepen.io/bastienrc',
    linkedin: 'https://www.linkedin.com/in/sebastiencolbert',
    twitter: 'https://twitter.com/bastienrc'
  }
}

export const DataExperiences = [
  {
    id: 1,
    Entreprise: "Speedphone's",
    Periode: '2019',
    Ville: 'Boulogne-sur-mer',
    Poste: 'Développeur Web',
    Resume: 'Développement du site de la société avec le framework Symfony.',
    Visible: true
  },
  {
    id: 2,
    Entreprise: 'Lycée Cazin',
    Periode: '2018-2019',
    Ville: 'Boulogne-sur-mer',
    Poste: 'Technicien de maintenance informatique',
    Resume: "Assistance au personnel enseignant à l'usage du matériel informatique et dépannage.",
    Visible: true
  },
  {
    id: 3,
    Entreprise: 'Acean division Sacel',
    Periode: '2010-2011',
    Ville: 'Saint Léonard',
    Poste: 'Agent',
    Resume: 'Vérification de la conformité des smartphones avec un appareil de diagnostic.',
    Visible: true
  },
  {
    id: 4,
    Entreprise: 'Satisfair',
    Periode: '2008',
    Ville: 'Samer',
    Poste: 'Technicien réseau',
    Resume: 'Développement web frontend principalement.',
    Visible: true
  },
  {
    id: 5,
    Entreprise: 'Corrue et Deseille',
    Periode: '2008',
    Ville: 'Boulogne-sur-mer',
    Poste: 'Développeur Web',
    Resume: 'Développement du site de l\'entreprise en HTML et CSS pour le frontend. Le Backend a été développé en PHP avec le framework Symfony.',
    Visible: false
  }
]

export const DataCompetences = [
  {
    groupName: 'Systèmes d’exploitation',
    list: [
      { label: 'Gnu/Linux Debian', level: 3 },
      { label: 'Windows', level: 2 }
    ]
  },
  {
    groupName: 'Bureautique et Multimédia',
    list: [
      { label: 'Inkscape', level: 3 },
      { label: 'Gimp', level: 2 },
      { label: 'LibreOffice', level: 2 },
      { label: 'Scribus', level: 1 }
    ]
  },
  {
    groupName: 'Développement',
    list: [
      { label: 'HTML5', level: 3 },
      { label: 'CSS3', level: 3 },
      { label: 'Javascript (ES6)', level: 2 },
      { label: 'PHP', level: 1 }
    ]
  }
]

export const DataFormations = [
  {
    periode: '2020',
    diplome: 'Titre professionnel « Développeur Web et Web mobile »',
    option: '',
    ets: 'Simplon Boulogne-sur-mer'
  },
  {
    periode: '2008',
    diplome: 'Licence Professionnelle « Réseaux et Systèmes de Communication »',
    option: "Option Conception et Développement d'applications réseau",
    ets: 'IUT de Calais'
  },
  {
    periode: '2007',
    diplome: 'DEUST Bureautique Communication et MultiMédia',
    option: 'Option Technicien Multimédia',
    ets: 'CUEEP Littoral de Boulogne-sur-mer'
  }
]

export const DataHobbies = [
  'Japonais',
  'Cinéma',
  'Jeux vidéos',
  'Littérature'
]
