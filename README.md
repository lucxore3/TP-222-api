API Blog - Projet Backend

PRÉSENTATION

Ce projet est une petite application backend qui permet de gérer des articles de blog.  
On peut créer, lire, modifier et supprimer des articles.

L’objectif de ce travail est de comprendre comment fonctionne une API en utilisant Node.js et Express.

OUTILS UTILISÉS

- Node.js : permet d’exécuter du JavaScript sur l’ordinateur  
- Express.js : facilite la création d’un serveur web  

INSTALLATION DU PROJET

1. Ouvrir un terminal  
2. Aller dans le dossier du projet :  
cd blog-api  

3. Installer les dépendances :  
npm install  

4. Lancer le serveur :  
node index.js  

Si tout fonctionne, un message apparaît :  
Serveur lancé sur http://localhost:3000  

FONCTIONNEMENT GÉNÉRAL

Le serveur permet de manipuler des articles.

Chaque article contient :  
- un id  
- un titre  
- un contenu  
- un auteur  
- une date  
- une catégorie  
- des tags  

Les données sont stockées dans un tableau, ce qui correspond à une fausse base de données (en mémoire). Ce choix a été fait pour simplifier le développement et se concentrer sur la compréhension du fonctionnement des routes de l’API. Cependant, les données ne sont pas sauvegardées de manière permanente : elles disparaissent dès que le serveur est redémarré, contrairement à une vraie base de données comme MongoDB.

LES DIFFÉRENTES ROUTES DE L’API

1. Voir tous les articles  
GET /api/articles  
Permet d’obtenir la liste complète des articles.

2. Voir un seul article  
GET /api/articles/:id  
Permet d’obtenir un article précis grâce à son identifiant.  

Exemple :  
/api/articles/1  

3. Ajouter un article  
POST /api/articles  
Permet de créer un nouvel article.  

Exemple de données à envoyer :  

{
  "titre": "Mon article",
  "contenu": "Contenu du texte",
  "auteur": "Christine",
  "categorie": "Tech",
  "tags": ["node", "api"]
}

4. Modifier un article  
PUT /api/articles/:id  
Permet de modifier un article existant.

5. Supprimer un article  
DELETE /api/articles/:id  
Permet de supprimer un article grâce à son id.

6. Rechercher un article  
GET /api/articles/search?query=mot  
Permet de chercher un mot dans le titre ou le contenu.

Exemple :  
/api/articles/search?query=node  

7. Filtrer les articles  
GET /api/articles?categorie=Tech&auteur=Christine  
Permet de filtrer les articles selon :  
- la catégorie  
- l’auteur  
- la date  

REMARQUES IMPORTANTES

- Les données sont temporaires (elles disparaissent quand on redémarre le serveur)  
- Une amélioration possible serait d’utiliser une vraie base de données comme MongoDB  
- Cette API utilise les méthodes HTTP principales (GET, POST, PUT, DELETE)

CONCLUSION

Ce projet m’a permis de comprendre comment fonctionne une API backend et comment manipuler des données avec Express. C’est une première étape avant d’utiliser une base de données réelle.