import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facile à utiliser',
    imgSrc: '/img/scanner.png',
    description: (
      <p>
<b>Scan de Code-barres </b>: 
Le système enregistre rapidement les repas en 
scannant le numéro d'admission et le type de lait.<br/>

<b>Remplissage Automatique </b>: 
Le formulaire est rempli automatiquement avec les infos clés, 
réduisant les erreurs et gagnant du temps.
      </p>
    ),
  },

  {
    title: 'Génération de Code-barres pour tracer',
    imgSrc: '/img/bibrun.png',
    description: (
    <p> 
    Chaque repas reçoit <b>un ID unique</b> converti en code-barres, permettant 
    aux professionnels de santé de suivre ou tracer facilement les enregistrements, 
    avec toutes les informations necessaires et l'infirmière qui a enregistré l'événement.
    </p>
    ),
  },
  {
    title: 'Accessible en Réseau',
    imgSrc: '/img/easyacess.png',
    description: (
      <p>
       Le système, accessible sur tout le réseau de l'hôpital, permet une utilisation 
       facile et fluide par l'ensemble du personnel médical.
      </p>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} alt={title} role="img" width='270px' height='270px'/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

 

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
