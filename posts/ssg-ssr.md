---
title: 'Static Generation v.s. Server-side Rendering'
date: '2020-09-27'
---

Il est recommandé d'utiliser **La Génération Statique** (avec ou sans chargement de données) dès que cela est possible car la page est buildée une seule fois et servie par un CDN, ce qui est beaucoup rapide que d'avoir un server qui va render la page à chaque requête.

Il est possible d'utiliser la **Génération Statique** pour ce genre de pages :

- Pages marketing
- Blog posts
- Produits e-commerce
- FAQ et documentation

Vous devez vous demander: "Est-ce que je peux pre-render cette page **avant** toute requête utilisateur ?" Si la réponse est oui, alors vous il est conseillé d'utiliser la génération statique.

D'autre part, la génération statique n'est **pas** une bonne idée si vous ne pouvez pas pre-render la page avant son chargement. Exemple: toute sorte de pages dont les données évoluent dans le temps. Étant donné que la génération statique se fait à la compilation si le contenu de la page dépend de la requête de l'utilisateur alors ce n'est pas une bonne idée d'uiliser la génération statique pour cette page.

Dans ce cas il est possible d'utiliser le **Server-Side Rendering**. Ce sera plus lent, mais la page pré-rendue sera toujours à jour. Ou alors il est possible de passer l'étape de pré-rendering et d'utiliser du Javascript côté client pour charger des données (Comme une application classique React par exemple).

Référence ==> https://nextjs.org/learn/basics/create-nextjs-app
