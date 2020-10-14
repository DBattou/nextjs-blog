---
title: 'Two Forms of Pre-rendering'
date: '2020-09-27'
---

Next.js a deux formes de pre-rendering: **Static Generation** et **Server-side Rendering**. La difference est à **quel moment** L'HTML de la page est générée.

- **Static Generation** est la méthode de pre-rendering qui va générer l'HTML à **l'étape de build**. Le HTML pre-rendu est alors _réutilisé_ à chaque requête.
- **Server-side Rendering** est la méthode de pre-rendering qui va générer l'HTML à **chaque requête**.

À retenir, Next.js vous laisse **choisir** quelle méthode de pré-rendering à utiliser pour **chaque** page. Il est possible de créer une application Next.js "hybride" en utilisant la génération statique pour la plupart des pages et utiliser rendu côté serveur pour les autres.

Référence ==> (https://nextjs.org/learn/basics/create-nextjs-app)
