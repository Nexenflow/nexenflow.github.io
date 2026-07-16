# 🗺️ PLAN DE CONTENU & ARCHITECTURE DE PRÉSENCE — CACTUS INFORMATIQUE
### Proposition de sous-domaines/rubriques, piliers éditoriaux et calendrier des 90 premiers jours

---

## I. Architecture du site : subfolders vs. sous-domaines

**Recommandation :** privilégier des **sous-dossiers** (`cactus.ma/erp`) plutôt que des **sous-domaines** (`erp.cactus.ma`) pour tout ce qui relève du contenu éditorial. Un sous-domaine est traité par Google comme une entité semi-distincte et dilue l'autorité SEO du domaine principal.

Réserver les véritables sous-domaines aux éléments **fonctionnellement séparés** du site vitrine :

| Sous-domaine | Usage | Justification |
|---|---|---|
| `portail.cactus.ma` | Portail client (tickets support, suivi de mission) | Application distincte, pas du contenu marketing |
| `carrieres.cactus.ma` *(optionnel)* | Plateforme de recrutement / body-shopping | Peut nécessiter un CMS ou ATS séparé |
| `docs.cactus.ma` *(futur)* | Documentation technique ERP pour clients existants | Contenu produit, pas acquisition |

Tout le reste (piliers ci-dessous) vit en sous-dossiers du domaine principal.

---

## II. Les 8 piliers de contenu (par ordre de priorité d'investissement)

| # | Pilier | URL proposée | Priorité | Pourquoi |
|---|---|---|---|---|
| 1 | ERP Cactus (produit propriétaire) | `/erp` | ⭐⭐⭐⭐⭐ | Actif le plus différenciant, 20 ans de maturité produit |
| 2 | Migration & Ingénierie de la Donnée | `/migration-donnees` | ⭐⭐⭐⭐⭐ | Garantie de résultat + cas AS400/SQL Server = preuve rare |
| 3 | Cybersécurité & Conformité | `/cybersecurite` | ⭐⭐⭐⭐ | ISO 27002 + pentest = contenu à forte confiance, génère des leads qualifiés |
| 4 | Solutions Sectorielles & IoT | `/secteurs` | ⭐⭐⭐⭐ | Angle rare sur le marché marocain (médical, industriel) |
| 5 | Références & Cas Clients | `/references` | ⭐⭐⭐⭐ | Asset de confiance sous-exploité (actuellement une simple liste) |
| 6 | Infrastructure & Cloud | `/infrastructure` | ⭐⭐⭐ | Nécessaire pour la couverture SEO, mais plus commoditisé | (hebergé au maroc, repond aux lois protections des données marocains)
| 7 | Blog / Insights | `/blog` | ⭐⭐⭐ | Investissement long terme (12-18 mois pour compounding SEO) |
| 8 | Carrières / Recrutement | `/carrieres` | ⭐⭐ | Double usage : image employeur + pipeline body-shopping |

---

## III. Calendrier éditorial — 90 premiers jours

*Rythme proposé : 2 publications/semaine (1 page pilier "evergreen" + 1 article de blog), soit ~24 pièces de contenu sur la période.*

### Mois 1 — Fondations (Piliers ERP + Migration)

| Semaine | Titre | Type | Mot-clé cible | Pilier |
|---|---|---|---|---|
| 1 | Page pilier : "ERP Cactus — la solution modulaire pensée pour les PME marocaines" | Page produit | `erp pme maroc` | ERP |
| 1 | "Pourquoi votre intégrateur ERP a échoué (et comment on débloque une installation Sage X3 bloquée)" | Article | `installation sage x3 bloquée maroc` | Migration |
| 2 | Page module : "Gestion Commerciale — devis, facturation, achats en un seul système" | Page produit | `logiciel gestion commerciale maroc` | ERP |
| 2 | "Migrer d'Excel vers un ERP sans interrompre votre activité : méthode en 5 étapes" | Article | `migration excel vers erp` | Migration |
| 3 | Page module : "Comptabilité & Télédéclaration — conformité fiscale automatisée" | Page produit | `télédéclaration comptabilité maroc` | ERP |
| 3 | "AS400 vers SQL Server : le guide de la migration de données massives sans perte" | Étude de cas | `migration as400 sql server` | Migration |
| 4 | Page module : "Pesage & Ponts-Bascules — capture automatique du poids net" | Page produit | `intégration pont bascule erp` | ERP |
| 4 | "Sage 1000 ou Sage X3 bloqué : les 7 signes qu'il vous faut un expert externe" | Article | `dépannage sage 1000` | Migration |

### Mois 2 — Confiance (Piliers Cybersécurité + Références)

| Semaine | Titre | Type | Mot-clé cible | Pilier |
|---|---|---|---|---|
| 5 | Page pilier : "Cybersécurité pour PME/ETI — audit, pare-feu, conformité ISO 27002" | Page produit | `audit cybersécurité maroc` | Cybersécurité |
| 5 | Étude de cas : "Comment le Conseil National de l'Ordre des Notaires a sécurisé son accès API" | Cas client | `test intrusion api maroc` | Références |
| 6 | "Ransomware : les 24 premières heures qui décident de tout" | Article (lead magnet) | `que faire ransomware entreprise` | Cybersécurité |
| 6 | Étude de cas : "Autodistribution — 17 ans de partenariat en virtualisation et sécurité réseau" | Cas client | `virtualisation vmware maroc entreprise` | Références |
| 7 | "ISO/IEC 27002 : par où commencer quand on est une PME (pas une multinationale)" | Article + checklist téléchargeable | `iso 27002 pme` | Cybersécurité |
| 7 | Étude de cas : "Active Tech (Segula) — accompagnement ISO 27002 et architecture VPN" | Cas client | `accompagnement iso 27002 maroc` | Références |
| 8 | "VPN nomade vs VPN multisite : quelle architecture pour votre entreprise ?" | Article | `vpn entreprise maroc` | Infrastructure |
| 8 | Page pilier : "Nos références — 20 ans de missions critiques" (hub agrégeant tous les cas clients) | Page hub | `références intégrateur it maroc` | Références |

### Mois 3 — Différenciation (Piliers Sectoriel + Infrastructure + lancement Blog)

| Semaine | Titre | Type | Mot-clé cible | Pilier |
|---|---|---|---|---|
| 9 | Page pilier : "Solutions IoT & Connectivité machine-système" | Page produit | `intégration iot industriel maroc` | Secteurs |
| 9 | "Comment un moniteur ECG parle à votre système hospitalier" | Article technique | `intégration données médicales système hospitalier` | Secteurs |
| 10 | Page secteur : "IT pour le Transport & Logistique" | Page secteur | `solution it transport logistique maroc` | Secteurs |
| 10 | "Automatiser la collecte de données en usine agroalimentaire : cas pratique" | Étude de cas | `automatisation collecte données production` | Secteurs |
| 11 | Page secteur : "IT pour le secteur Médical" | Page secteur | `système information hôpital maroc` | Secteurs |
| 11 | "Hébergement haute disponibilité : ce qu'une PME doit vraiment exiger de son prestataire" | Article | `hébergement haute disponibilité maroc` | Infrastructure |
| 12 | Page secteur : "IT pour l'Industrie & la Production" | Page secteur | `automatisation industrielle système information` | Secteurs |
| 12 | "ERP au Maroc : guide de choix pour PME en 2026" (article pilier long-format) | Article pilier SEO | `choisir erp pme maroc 2026` | Blog |

---

## IV. Priorités de lead-generation (contenu à formulaire)

Ces pièces méritent un formulaire de contact / téléchargement dédié plutôt qu'une simple lecture :

1. **Checklist ISO 27002 pour PME** (téléchargeable, capture email)
2. **Guide "Ransomware : les 24 premières heures"** (checklist imprimable)
3. **Grille de diagnostic "Votre installation ERP est-elle bloquée ?"** (auto-évaluation interactive)
4. **Étude de cas complète Autodistribution** (PDF détaillé, version longue de la page web)

---

## V. Angles à ne PAS sur-communiquer (cf. points ouverts non validés)

Pour rester cohérent avec les réserves identifiées dans la base de connaissances :
- Éviter toute promesse commerciale ferme sur l'**IA/agentique** tant que l'engagement réel n'est pas validé avec la direction — traiter comme vision, pas comme offre.
- Ne pas citer de certifications partenaires (Microsoft Partner, etc.) sans confirmation.
- Ne pas publier de nouvelles références clients sans validation explicite de la liste autorisée.

---

*Ce calendrier est un point de départ structurant, pas un carcan : à ajuster selon les retours de la Phase 1 (validation des connaissances) et la disponibilité réelle de la direction pour les interviews de cas clients.*
