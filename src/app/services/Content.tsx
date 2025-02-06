import { Card } from './Card';
import Transport from '@/components/lotties/Transport';
import Packaging from '@/components/lotties/Packaging';
import { Hammer, Shield, Archive, Truck } from 'lucide-react';

const services = [
  {
    title: "Transport d'Art",
    id: 'transport',
    description:
      "Nous assurons un transport d'œuvres d'art sécurisé et personnalisé, conscients de la valeur monétaire et sentimentale unique de chaque pièce. Nos véhicules adaptés et géolocalisés garantissent une prise en charge optimale, de l'enlèvement à la livraison. Que ce soit en transport dédié ou en groupage, nous élaborons des solutions sur mesure pour répondre à vos besoins spécifiques.",
    image: '/images/services/camion.png',
    svg: <Transport />,
    icon: Truck,
  },
  {
    title: 'Emballage sur Mesure',
    id: 'conditionnement',
    description:
      "L'emballage est crucial pour la protection des œuvres durant le transport. Chez LDV ART, nous utilisons des matériaux de haute qualité, adaptés à chaque type d'œuvre, assurant ainsi leur préservation optimale pendant le transport et le stockage. Notre expertise garantit que chaque pièce est conditionnée avec le plus grand soin.",
    image: '/images/services/packaging.png',
    svg: <Packaging />,
    icon: Archive,
  },
  {
    title: 'Assurance & Rapports',
    id: 'assurance',
    description:
      "Reconnaissant l'unicité et la valeur inestimable de vos biens, LDV ART offre une assurance 'fine art' complète. Sur demande, nous assurons vos œuvres à leur juste valeur. Nos équipes utilisent des outils de pointe pour réaliser des constats d'état détaillés à l'enlèvement et à la livraison, garantissant ainsi l'intégrité de vos biens tout au long du processus.",
      image: '/images/services/camion.png',
      svg: null,
    icon: Shield,
  },
  {
    title: 'Régie',
    id: 'regie',
    description:
      "La régie d'exposition est un élément clé pour mettre en valeur votre art. Nous offrons des services complets, de la planification à l'exécution, pour assurer que votre exposition soit un succès. Notre équipe expérimentée gère tous les aspects logistiques, de la manipulation délicate des œuvres à leur installation parfaite, en passant par la coordination avec les lieux d'exposition.",
      image: '/images/services/camion.png',
      svg: null,
    icon: Hammer,
  },
  {
    title: 'Stockage Sécurisé',
    id: 'stockage',
    description:
      "Notre entrepôt privé, spécialement conçu pour l'art, offre un environnement sécurisé et contrôlé pour le stockage de vos œuvres. Que ce soit pour une courte durée ou un entreposage à long terme, nos installations garantissent des conditions optimales de conservation, protégeant vos pièces contre les dommages et les fluctuations environnementales.",
      image: '/images/services/camion.png',
      svg: null,
    icon: Archive,
  },
  {
    title: 'Manutention Spécialisée',
    id: 'manutention',
    description:
      "La manutention d'œuvres d'art exige une expertise et un soin particuliers. Notre équipe de professionnels formés assure une manipulation minutieuse de vos pièces à chaque étape, de la prise en charge initiale à l'installation finale. Nous utilisons des techniques et des équipements spécialisés pour garantir la sécurité et l'intégrité de chaque œuvre, quelle que soit sa taille ou sa fragilité.",
      image: '/images/services/camion.png',
      svg: null,
    icon: Hammer,
  },
];

export const Content = () => {
  return (
    <div className='grid grid-cols-1 gap-12 md:gap-16'>
      {services.map((service, index) => (
        <Card
          key={service.title}
          index={index}
          title={service.title}
          description={service.description}
          id={service.id}
          image={service.image}
          svg={service.svg}
          icon={service.icon}
        />
      ))}
    </div>
  );
};
