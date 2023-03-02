import styles from '../../styles/BusinessCard.module.css';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function BusinessCard() {

   const [isModalVisible, setIsModalVisible] = useState(false);
const array= [
   {title:"Conseiller de vente Comptoir", desc:"Il accueille, renseigne et oriente la clientèle de professionnels et de particuliers en vue de la fidéliser et la développer. Il veille à tous les éléments qui font la qualité de l’accueil et l’image de l’entreprise : disponibilité, tenue vestimentaire, propreté et rangement de son environnement de travail.", image:"https://uploads.gedimat.fr/EMPLOI/18/MET_IMAGE_11_1666279908.jpg"},
{title:"Conseiller de vente libre-service", desc:"Il renseigne, argumente et conseille le client dans ses achats pour conclure les ventes dans un esprit gagnant/gagnant.Il contribue, par son dynamisme commercial, au résultat du magasin.", image:"https://uploads.gedimat.fr/EMPLOI/8c/MET_IMAGE_12_1666279994.jpg"},
{title:"Vendeur salle d'exposition", desc:"Il met en œuvre les principes fondamentaux de la technique de vente (écoute, identification du besoin, propositions, argumentation…) pour conclure la vente dans un esprit gagnant/gagnant.", image:"https://uploads.gedimat.fr/EMPLOI/03/MET_IMAGE_13_1666280105.jpg"},
{title:"Attaché technico-commercial", desc:"Celui-ci intervient en collaboration avec les conseillers vendeurs des points de vente. Il participe à la préparation et à la réalisation des opérations et animations commerciales. Il négocie ponctuellement les tarifs avec les fournisseurs.", image:"https://uploads.gedimat.fr/EMPLOI/f1/MET_IMAGE_14_1666280229.jpg"},
{title:"Magasinier Vendeur", desc:"Il accueille et sert les clients qui viennent dans la cour, les fait patienter en période d’affluence en faisant respecter par les clients les circuits de circulation établis entre la zone chaude et la zone froide.", image:"https://uploads.gedimat.fr/EMPLOI/ed/MET_IMAGE_15_1666280380.jpg"},
{title:"Magasinier Cariste", desc:"Avec un engin de manutention, le magasinier cariste assure la réception, le déchargement et le stockage des produits et effectue également la préparation et la distribution des marchandises (chargement)", image:"https://uploads.gedimat.fr/EMPLOI/94/MET_IMAGE_16_1666280435.jpg"},
{title:"Chauffeur Livreur (PL)", desc:"Le chauffeur livreur transporte et livre les produits destinés aux clients ou aux différents sites.", image:"https://uploads.gedimat.fr/EMPLOI/30/MET_IMAGE_17_1666280483.jpg"},]
   // const showModal = () => {
	// 	setIsModalVisible(!isModalVisible);
	// };
  const newArray= array.map((data,i) => {
   return(
      <div className={styles.card}onClick={() => setIsModalVisible(true)}>
    <div className= {styles.image}>
      <img src={data.image}/>
      </div>
      <div className={styles.title}>
      <h6>{data.title}</h6>
      </div>
      {/* <p>{data.desc}</p> */}
       </div> 
   )
  })

 return (
   <div className= {styles.container}>
      {newArray}
    {/* <div className={styles.image}>
     <img src="https://uploads.gedimat.fr/EMPLOI/18/MET_IMAGE_11_1666279908.jpg"onClick={() => setModalIsOpen(true)}/>
     <h5>Conseiller de vente Comptoir</h5>
     <p>{description}</p>
      </div>  
        <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/8c/MET_IMAGE_12_1666279994.jpg"/>
        <h5>Conseiller de vente libre-service</h5>
        </div>
     <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/03/MET_IMAGE_13_1666280105.jpg"/>
        <h5>Vendeur salle d'exposition</h5>
     </div>
     <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/f1/MET_IMAGE_14_1666280229.jpg"/>
        <h5>Attaché technico-commercial</h5>
     </div>
     <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/ed/MET_IMAGE_15_1666280380.jpg"/>
        <h5>Magasinier Vendeur</h5>
     </div>
     <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/94/MET_IMAGE_16_1666280435.jpg"/>
        <h5>Magasinier Cariste</h5>
     </div>
     <div className={styles.image}>
        <img src= "https://uploads.gedimat.fr/EMPLOI/30/MET_IMAGE_17_1666280483.jpg"/>
        <h5>Chauffeur Livreur (PL)</h5>
     </div> */}
   </div>
 );
}

export default BusinessCard;