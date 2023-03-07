import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { DialogContentText, DialogTitle, IconButton } from "@mui/material";
import styles from "../../styles/BusinessCard.module.css";
// import Carousel from "react-material-ui-carousel";



function BusinessCard() {
  const [open, setOpen] = useState(false);
  const [objetSelectionne, setObjetSelectionne] = useState(null);
  

  const handleClickOpen = (objet) => {
    setOpen(true);
    setObjetSelectionne(objet);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const array = [
    {
      title: "Conseiller de vente Comptoir",
      desc: "Il accueille, renseigne et oriente la clientèle de professionnels et de particuliers en vue de la fidéliser et la développer. Il veille à tous les éléments qui font la qualité de l’accueil et l’image de l’entreprise : disponibilité, tenue vestimentaire, propreté et rangement de son environnement de travail.Ilréalise, dans le respect des procédures internes, les activités attachées à la vente (devis, bons de livraison, facture et encaissements) et à l’approvisionnement. Il participe à l’animation commerciale du point de vente, aux promotions, à la mise à jour de la documentation.Ilcontribue, par son dynamisme commercial, au résultat du magasin. Il assure, en responsabilité partagée avec les autres vendeurs, la prise en charge et le suivi des clients. Il doit être autonome et est responsable de la qualité du service apporté au client.Ilrend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/18/MET_IMAGE_11_1666279908.jpg",
    },
    {
      title: "Conseiller de vente libre-service",
      desc: "Le conseiller de vente (libre-service) anime et gère sa surface de vente (LS ou linéaire). Il veille à tous les éléments d’ambiance qui contribuent à l’attractivité de la surface de vente : éclairage, température, signalisation, affiches, PLV, ILV… Il fait remonter les informations et/ou met en œuvre les actions correctives xn--ncessaires-b7a.Ilrenseigne, argumente et conseille le client dans ses achats pour conclure les ventes dans un esprit gagnant/gagnant.Il contribue, par son dynamisme commercial, au résultat du magasin.Ildoit être autonome et est responsable de la bonne gestion et tenue de sa surface de vente ainsi que de la qualité de la prise en charge des clients.Ilrendcompe à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/8c/MET_IMAGE_12_1666279994.jpg",
    },
    {
      title: "Vendeur salle d'exposition",
      desc: "Le vendeur Salle d’Expo anime et gère sa surface de vente. Il veille à tous les éléments d’ambiance qui contribuent à l’attractivité de la salle d’exposition : éclairage, température, présentoirs, étiquetage, décoration …. Il fait remonter les informations et/ou met en œuvre les actions correctives nécessaires. Il accueille et renseigne les clients en utilisant tous les moyens à sa disposition pour présenter les produits (expo, catalogue, fiches produits…).Il met en œuvre les principes fondamentaux de la technique de vente (écoute, identification du besoin, propositions, argumentation…) pour conclure la vente dans un esprit gagnant/gagnant.Il contribue, par son dynamisme commercial, au résultat du magasin.Ildoit être autonome et est responsable de la bonne gestion et tenue de sa surface de vente ainsi que de la qualité de la prise en charge des clients.Ilrend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/03/MET_IMAGE_13_1666280105.jpg",
    },
    {
      title: "Attaché technico-commercial",
      desc: "Dans le cadre de la politique commerciale de l’entreprise, l’Attaché Technico-Commercial suit et développe son portefeuille client (chiffre d’affaires, prospect, marge) sur une zone définie (en fonction de critères internes). Il connaît, actualise le potentiel, l’objectif, l’encours, les affaires, remises de prix de chacun de ses clients.Celui-ci intervient en collaboration avec les conseillers vendeurs des points de vente. Il participe à la préparation et à la réalisation des opérations et animations commerciales. Il négocie ponctuellement les tarifs avec lesfournisseurs.Ilorganise en autonomie son activité (prospection, visite clientèle…) pour atteindre les objectifs commerciaux qui lui ont été fixés par son responsable. Il travaillà partir de consignes générales et rend compte régulièrement (fréquence déterminée en interne), par écrit ou oral, à son responsable.",
      image: "https://uploads.gedimat.fr/EMPLOI/f1/MET_IMAGE_14_1666280229.jpg",
    },
    {
      title: "Magasinier Vendeur",
      desc: "Le magasinier vendeur assure la réception, le stockage, la préparation et la distribution des marchandises. En fonction des procédures internes, il contrôle et remplit les documents commerciaux liés à son activité (bons de livraison, bons de commandes, bons de pré-réception…).Il accueille et sert les clients qui viennent dans la cour, les fait patienter en période d’affluence en faisant respecter par les clients les circuits de circulation établis entre la zone chaude et la zone froide.Celui-ci veille à l’image qu’il contribue à donner de l’entreprise : tenue, politesse, attitude générale face au client.Celui-ci participe également, par son activité au bon rangement et à l’attractivité de la cour.En fonction de la configuration du poste, il a une mission de conseil et de vente.Ilagit selon les consignes de son responsable hiérarchique.",
      image: "https://uploads.gedimat.fr/EMPLOI/ed/MET_IMAGE_15_1666280380.jpg",
    },
    {
      title: "Magasinier Cariste",
      desc: "Avec un engin de manutention, le magasinier cariste assure la réception, le déchargement et le stockage des produits et effectue également la préparation et la distribution des marchandises (chargement). Il réceptionne (vérification du bon de livraison), décharge et range les produits des familles qui lui sont xn--affectes-g1a.Iaccueille et sert les clients qui viennent dans la cour, les fait patienter en période d’affluence en faisant respecter par les clients les circuits de circulation établis entre la zone chaude et la zone froide. Celui-ci veille à l’image qu’il contribue à donner de l’entreprise : tenue, politesse, attitude générale face au client. Il participe par son activité au bon rangement et à l’attractivité de la courIlrend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de sonxn--activit-hya.Ilagit selon les consignes de son responsable hiérarchique.",
      image: "https://uploads.gedimat.fr/EMPLOI/94/MET_IMAGE_16_1666280435.jpg",
    },
    {
      title: "Chauffeur Livreur (PL)",
      desc: "Le chauffeur livreur transporte et livre les produits destinés aux clients ou aux différents sites. Par sa fonction, Il veille à tous les éléments qui, à travers son activité, contribuent à la bonne image de l’entreprise et la qualité du service : prévient des éventuels retards, adopte une attitude commerciale avec le client, fait remonter les informations venant des clients, de la concurrence, les chantiers repérés lors de ses tournées…Par sa fonction, il assure l’entretien quotidien de son véhicule : propreté et vérifications techniques (camion, grues et autres équipements) et est responsable de la qualité du chargement de son véhicule et du bon acheminement des produits. Il agit selon les consignes précises transmises par le responsable deslivraisons.Il rend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/30/MET_IMAGE_17_1666280483.jpg",
    },
    {
      title: "Responsable Libre-service",
      desc: "Le responsable LS (chef magasin) organise et veille à la bonne exécution des activités confiées au personnel du LS, tout en participant aux activités opérationnelles quotidiennes. Il organise les inventaires tournants et prépare l’inventaire de fin dxn--anne-dpa.Ilanime le LS, relaie les consignes du responsable d’agence auprès de son équipe. Il motive son équipe et favorise l’implication des vendeurs dans la vie quotidienne du LS ; il réalise les entretiens annuels avec les personnels dont il a la responsabilité.Garant de la bonne organisation et du bon fonctionnement du LS, il met en cohérence les moyens humains et matériel à sa disposition et les activités à réaliser. Il participe à toutes les opérations de réception et au rangement des produits. Le cas échéant il gère les difficultés et petits litiges liés à la réception des marchandises. En cas de litige grave, il transmet au responsable d’agence.Ilrend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/ae/MET_IMAGE_18_1666280517.jpg",
    },
    {
      title: "Responsable de cour",
      desc: "Le Responsable de cour organise et veille à la bonne exécution des activités confiées au personnel de la cour, tout en participant aux activités opérationnelles quotidiennes. Il organise l’activité des magasiniers, en fonction des moyens humains disponibles, et des travaux à xn--raliser-bya.Ilrelaie les consignes du responsable d’agence auprès du personnel de la cour.Garant de la bonne organisation et du bon fonctionnement de la cour, il met en cohérence les moyens humains et matériel à sa disposition et les activités à réaliser. Il transmet et fait respecter les consignes de travail et de sécurité : bon emploi des engins de manutention, accès des portes de secours, extincteurs dégagés, port des équipements de sécurité…Il rend compte à son hiérarchique des problèmes ou difficultés rencontrées dans les différents volets de son activité.",
      image: "https://uploads.gedimat.fr/EMPLOI/8d/MET_IMAGE_19_1666280566.jpg",
    },
    {
      title: "Responsable transport",
      desc: "Le responsable transport organise l’acheminement des produits destinés aux clients ou sur les différents sites et supervise l’ensemble des opérations logistiques dans un objectif de qualité de service, d’optimisation des coûts et des délais. Sa mission permet la coordination de l’activité des chauffeurs, en supervisant les opérations de chargement/déchargement.Le cas échéant, il négocie les conditions tarifaires avec les transporteurs extérieurs. Il traite les litiges avec les transporteurs, les fournisseurs (émission de réserve…), ainsi que les réclamations clients liées au transport.Il gère le planning des chauffeurs et assure le management des équipes de chauffeurs. Le responsable transport fait part des besoins en recrutement, le cas échéant assure celui-ci et veille également à la bonne formation de ses  xn--quipes-9ua.Ilagit en autonomie en respect des consignes générales de la direction.",
      image: "https://uploads.gedimat.fr/EMPLOI/1a/MET_IMAGE_20_1666280636.jpg",
    },
    {
      title: "Responsable d'agence / de dépôt",
      desc: "Dans le cadre de la politique globale du groupe auquel il appartient, il optimise la gestion et le développement commercial de son point de vente. Il organise l’activité et le suivi tout en participant aux activités opérationnelles de vente.Interlocuteur privilégié du chef d’entreprise, il est son relais auprès des équipes du point de vente. Il agit par délégation de la Direction ; dans ce cadre, il est autonome dans ses prises de décision. Il est responsable de l’organisation et du fonctionnement de l’agence et encadre la totalité du personnel du point de vente. Il est le garant des résultats, de la fiabilité des engagements et de la qualité de service de son agence.Ilpropose un budget prévisionnel et en discute avec le Chef d’entreprise ou le Directeur financier. En fonction des informations dont il dispose, il suit et analyse le compte de résultat et met en place les mesures qui s’imposent (selon son degré d’autonomie : prise de décision ou force de proposition). Il effectue un reporting régulier auprès du Chef d’entreprise ou du Directeur financier.",
      image: "https://uploads.gedimat.fr/EMPLOI/f3/MET_IMAGE_21_1666280726.jpg",
    },
    {
      title: "Acheteur",
      desc: "L’acheteur doit participer avec la Direction à la définition de la politique commerciale et assure les achats du négoce, dans le respect de cette politique. Il est responsable des négociations fournisseurs et organise des présentations et/ou formations pour les équipes commerciales pour les nouveaux produits qu’il fait rentrer. Il est en tout état de cause le garant du respect des engagements passés avec le fournisseur.Ilest également le garant de l’optimisation des stocks. Il contribue à la définition du plan de vente, en tenant compte de la structure de la clientèle, de la concurrence et des évolutions du xn--march-fsa.Ilagit en autonomie, dans le respect de la politique commerciale et sous l’autorité hiérarchique du chef d’entreprise (ou responsable des achats si la fonction existe).",
      image: "https://uploads.gedimat.fr/EMPLOI/62/MET_IMAGE_22_1666280762.jpg",
    },
    {
      title: "Employé administratif",
      desc: "L’employé administratif effectue, en se conformant aux instructions de son responsable hiérarchique, les divers travaux administratifs et de secrétariat inhérents au service auquel il est rattaché (courrier, accueil téléphonique, saisie/enregistrement de données, exploitation de fichiers, liaison avec les autres services…).Il participe/réalise la comptabilité fournisseur, prépare et effectue les relances d’impayés, selon la procédure interne en participant à la préparation des dossiers contentieux et prépare les ouvertures de compte et les suit.Celui-ci travaille en suivant les consignes et sous l’autorité hiérarchique du responsable de service auquel il est rattaché (selon les organisations : responsable de service, responsable d’agence ou chef d’entreprise.",
      image: "https://uploads.gedimat.fr/EMPLOI/15/MET_IMAGE_23_1666280889.jpg",
    },
  ];

  const newArray = array.map((data, i) => {
    return (
      <div
        className={styles.card}
        key={i}
        onClick={() => {
          handleClickOpen(data);
        }}
      >
        <div className={styles.image}>
          <img src={data.image} />
        </div>
        <div className={styles.title}>
          <h6>{data.title}</h6>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >

      </div>
      <div
        style={{
          height: "200px",
          overflowY: "hidden",
          // overflowX: "hidden",
          width: "55%",
          display: "flex",
          marginLeft: "40vh",
          
        }}
      >
        
        {newArray}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <IconButton>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.ctaLogout}
                onClick={() => handleClose()}
              />
            </IconButton>
            <DialogTitle>
              {objetSelectionne && objetSelectionne.title}
            </DialogTitle>
            <DialogContentText>
              {objetSelectionne && objetSelectionne.desc}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      
      </div>
    </div>
  );
}

export default BusinessCard;