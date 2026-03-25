// Importer Express
const express = require('express');
// Créer app
const app = express();
// Middleware JSON
app.use(express.json());
// "Base de données" temporaire
let articles = [
  {
    id: 1,
    titre: "Premier article",
    contenu: "Ceci est un article",
    auteur: "Christine",
    date: "2026-03-23",
    categorie: "Tech",
    tags: ["node", "api"]
  }
];
// Route test
app.get('/', (req, res) => {
  res.send('Mon serveur fonctionne !');
});
//  GET tous les articles + filtres
app.get('/api/articles', (req, res) => {
  let result = articles;

  const { categorie, auteur, date } = req.query;

  if (categorie) {
    result = result.filter(a => a.categorie === categorie);
  }

  if (auteur) {
    result = result.filter(a => a.auteur === auteur);
  }

  if (date) {
    result = result.filter(a => a.date === date);
  }

  res.json(result);
});
//  GET par ID
app.get('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const article = articles.find(a => a.id === id);

  if (!article) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  res.json(article);
});
//  POST (créer un article)
app.post('/api/articles', (req, res) => {
  const { titre, contenu, auteur, categorie, tags } = req.body;

  if (!titre || !auteur) {
    return res.status(400).json({ message: "Titre et auteur obligatoires" });
  }

  const nouvelArticle = {
    id: articles.length + 1,
    titre,
    contenu,
    auteur,
    date: new Date().toISOString().split('T')[0],
    categorie,
    tags: tags || []
  };

  articles.push(nouvelArticle);

  res.status(201).json(nouvelArticle);
});
//  PUT (modifier un article)
app.put('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const article = articles.find(a => a.id === id);

  if (!article) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  const { titre, contenu, categorie, tags } = req.body;

  if (titre) article.titre = titre;
  if (contenu) article.contenu = contenu;
  if (categorie) article.categorie = categorie;
  if (tags) article.tags = tags;

  res.json({ message: "Article modifié", article });
});
//  DELETE
app.delete('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = articles.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  articles.splice(index, 1);

  res.json({ message: "Article supprimé" });
});
// SEARCH
app.get('/api/articles/search', (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ message: "Query manquante" });
  }

  const result = articles.filter(a =>
    a.titre.toLowerCase().includes(query.toLowerCase()) ||
    a.contenu.toLowerCase().includes(query.toLowerCase())
  );

  res.json(result);
});
// Lancer serveur
app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});