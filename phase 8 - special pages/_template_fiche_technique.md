---
# ═══════════════════════════════════════════════════════════════
# TEMPLATE — Fiche Technique Produit Cactus Informatique
# ═══════════════════════════════════════════════════════════════
# 
# Instructions d'utilisation :
# 1. Dupliquer ce fichier
# 2. Renommer selon la convention : [Gamme]_[Produit]_Fiche_Technique_v[X.Y].md
# 3. Remplacer tous les [PLACEHOLDER] par le contenu spécifique au produit
# 4. Supprimer les commentaires d'instruction (lignes commençant par #)
# 5. Mettre à jour le frontmatter YAML
#
# Convention de nommage :
#   HealthTech_Feuille_Anesthesie_Fiche_Technique_v2.0.md
#   Industrie_Pesage_Pont_Bascule_Fiche_Technique_v1.0.md
#   ERP_Gestion_Commerciale_Fiche_Technique_v3.1.md
#
# ═══════════════════════════════════════════════════════════════

produit: "[GAMME] — [NOM DU PRODUIT]"
version_document: "1.0"
date_creation: "YYYY-MM-DD"
date_mise_a_jour: "YYYY-MM-DD"
auteur: "Cactus Informatique"
classification: "Commercial — Distribution autorisée"
gamme: "[HealthTech | ERP | Industrie | Infrastructure]"
secteur: "[Médical & Santé | Transport & Logistique | Industrie | Finance | Services Professionnels]"
mots_cles: ["mot-clé 1", "mot-clé 2", "mot-clé 3"]
---

# [GAMME] — [Nom du Produit]

## Fiche Technique — v[X.Y]

---

**Gamme :** [Gamme complète]
**Document :** Fiche Technique Produit
**Version :** [X.Y] — [Mois Année]
**Classification :** Commercial — Distribution autorisée

---

## Présentation

<!-- 
  INSTRUCTIONS : 2-3 phrases décrivant le produit.
  Répondre à : Qu'est-ce que c'est ? Pour quel environnement ? 
  Que remplace-t-il ou améliore-t-il ?
-->

[Description du produit — 2 à 3 phrases percutantes]

### Usage prévu

<!-- Liste des contextes d'utilisation, environnements cibles, utilisateurs -->

- [Contexte d'utilisation principal]
- Environnements cibles : [lieux / services]
- Utilisateurs : [profils utilisateurs]

### Problème résolu

<!-- 
  INSTRUCTIONS : Décrire le problème métier que le produit résout.
  Orienter vers la douleur du client, pas les features.
  Utiliser des termes concrets (temps perdu, erreurs, risques).
-->

[Description du problème — 2 à 3 phrases orientées douleur client]

---

## Bénéfices clés

<!--
  INSTRUCTIONS : 4-5 bénéfices orientés RÉSULTAT, pas FEATURE.
  Mauvais : "Acquisition automatique des données"
  Bon : "Zéro saisie manuelle — le praticien se concentre sur le patient"
-->

| Bénéfice | Impact |
|---|---|
| **[Bénéfice 1]** | [Impact mesurable ou concret] |
| **[Bénéfice 2]** | [Impact mesurable ou concret] |
| **[Bénéfice 3]** | [Impact mesurable ou concret] |
| **[Bénéfice 4]** | [Impact mesurable ou concret] |
| **[Bénéfice 5]** | [Impact mesurable ou concret] |

---

## Fonctionnalités

<!--
  INSTRUCTIONS : Grouper les fonctionnalités par domaine métier.
  Chaque groupe = un sous-titre H3.
  4-6 bullet points par groupe, descriptifs mais concis.
  Adapter les groupes au produit (ne pas copier aveuglément).
-->

### [Domaine fonctionnel 1]

- [Fonctionnalité]
- [Fonctionnalité]
- [Fonctionnalité]

### [Domaine fonctionnel 2]

- [Fonctionnalité]
- [Fonctionnalité]
- [Fonctionnalité]

### [Domaine fonctionnel 3]

- [Fonctionnalité]
- [Fonctionnalité]
- [Fonctionnalité]

### Gestion des données

- [Stockage, archivage, recherche]
- [Import/Export]

### Administration et reporting

- Tableaux de bord d'activité
- Statistiques : [KPIs spécifiques au produit]
- Rapports exportables
- Gestion des profils utilisateurs et droits d'accès granulaires

---

## Architecture et intégration

<!--
  INSTRUCTIONS : Décrire COMMENT le système s'intègre dans l'environnement existant.
  Inclure un tableau des interfaces (si IoT/connectivité)
  et un schéma d'architecture ASCII.
-->

### Connectivité et interfaces

| Interface / Équipement | Données échangées |
|---|---|
| [Équipement 1] | [Données] |
| [Équipement 2] | [Données] |
| [Équipement 3] | [Données] |

### Interopérabilité

- [Protocoles supportés]
- Interfaçage avec [systèmes existants]
- API d'intégration disponible pour [systèmes tiers]

### Architecture technique

```
[Schéma d'architecture ASCII — adapter au produit]

┌──────────────────────┐
│     POSTE CLIENT      │
│  (Navigateur web)     │
└──────────┬───────────┘
           │ HTTPS
           ▼
┌──────────────────────┐
│  SERVEUR APPLICATIF   │
│  [Composants clés]    │
└──────────┬───────────┘
           │
     ┌─────┴──────┐
     ▼            ▼
┌──────────┐  ┌──────────────┐
│  BASE DE │  │  [INTERFACE   │
│  DONNÉES │  │   EXTERNE]    │
└──────────┘  └──────────────┘
```

---

## Sécurité et conformité

<!--
  INSTRUCTIONS : Section OBLIGATOIRE pour tout produit.
  Adapter le niveau de détail au secteur :
  - Médical : conformité réglementaire + données patient
  - Finance : conformité fiscale + audit trail
  - Industrie : traçabilité + intégrité des données
-->

### Protection des données

- Authentification forte : OAuth 2.0, intégration Active Directory / LDAP
- Chiffrement des données en transit et au repos
- Journalisation complète de toutes les actions utilisateur (audit trail)
- Gestion fine des droits d'accès par profil
- Sauvegarde automatique et plan de reprise d'activité

### Conformité réglementaire

- Conception conforme aux bonnes pratiques de sécurité de l'information (ISO/IEC 27002)
- [Réglementations spécifiques au secteur — ex: Loi 09-08 pour le Maroc]
- [Normes sectorielles — ex: ISO 13485 pour le médical]

---

## Spécifications techniques

| Caractéristique | Détail |
|---|---|
| **Type d'application** | Application web — accessible depuis tout navigateur moderne |
| **Architecture** | Client-serveur, multi-utilisateurs |
| **Base de données** | Microsoft SQL Server |
| **Authentification** | OAuth 2.0, Active Directory, LDAP |
| **Compatibilité navigateurs** | Chrome, Edge, Firefox (dernières versions) |
| **Déploiement** | [On-premise / Cloud privé / Hybride] |
| **Personnalisation** | [Niveau de personnalisation] |
| **Export de données** | PDF, Excel, CSV |
| **Import de données** | Excel, CSV |
| **Réseau requis** | [Prérequis réseau] |

---

## Déploiement et accompagnement

### Modes de déploiement

- **On-premise** — Installation sur le serveur du client, données hébergées localement
- **Cloud privé** — Hébergement dédié sécurisé (si applicable)

### Services inclus

| Service | Description |
|---|---|
| **Audit préalable** | [Analyse de l'existant, cartographie, étude de faisabilité] |
| **Installation et paramétrage** | [Déploiement, configuration] |
| **Formation** | [Formation sur site des équipes] |
| **Migration de données** | [Reprise des données historiques] |
| **Support technique** | [Assistance à distance et sur site] |
| **Mises à jour** | [Évolutions fonctionnelles continues] |

---

## Références et déploiements

<!--
  INSTRUCTIONS : Mentionner les déploiements existants.
  Nommer les clients UNIQUEMENT si autorisé par la direction.
  Sinon, utiliser des descriptions génériques (secteur + ville).
-->

[Description de l'expérience Cactus dans ce domaine — 2-3 phrases]

**Déploiements réalisés :** [Lieux / secteurs]

*Références clients nominatives disponibles sur demande.*

---

## À propos de Cactus Informatique

**Cactus Informatique** est un partenaire technologique marocain spécialisé dans les systèmes d'information d'entreprise depuis 2006. L'entreprise conçoit des solutions sur mesure à haute valeur ajoutée, avec une expertise reconnue en ingénierie des données, cybersécurité, ERP modulaire et IoT industriel et médical.

**Siège social :** 70 Allée des Phoenix, Casablanca 20250, Maroc
**Téléphone :** +212 5 22 34 35 45
**Email :** contact@cactus.net.ma
**Web :** www.cactus.ma

---

*CACTUS INFORMATIQUE — Ce document est la propriété de Cactus Informatique. Reproduction interdite sans autorisation.*
*Version [X.Y] — [Mois Année]*
