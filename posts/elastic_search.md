---
title: 'Elasticsearch en 5min'
date: '2020-11-20'
---

# Elasticsearch en 5 minutes

Hey Salut ! Quels sont les concepts clés de Elasticsearch ? Qu'ai-je besoin de savoir pour commencer à utiliser Elasticsearch ?

Ici on essaye de présenter les choses facilement en y allant pas à pas, un concept après l'autre.

Vous allez voir ces concepts :
1. Elasticsearch, un moteur de recherche.
2. Les Query
3. Les Clauses
4. La query Bool
5. Le Score
6. Le Query Context & Filter Context
7. Petit exemple tout simple


## Qu'est-ce qu'Elasticsearch ?

Elasticsearch est un moteur de recherche puissant et _facile_ à utiliser. Dans cet article nous nous mettrons dans la situation d'un client front qui souhaite rechercher des objets dans une base de données.

_Exemple: "Hey Salut ! Je suis l'application YouTube et je souhaite rechercher dans ma base de donnée les vidéos dont le titre contient la séquence de mots **'la terre est plate'**..."_

Elasticsearch comprend deux parties essentielles: **l'indexation** et **les requêtes**. L'indexation intervient lorsque l'on ajoute des nouvelles données, ces nouvelles données sont analysées et stockées par elasticsearch sous forme d'objets **JSON** qu'on appellera **Documents**, chaque document contient les key/value d'un vidéo par exemple. L'ensemble des documents constituent une collection qu'on appellera **Index**. Des requêtes au format Elasticearch peuvent être ensuite utilisées pour faire des recherches parmi ces documents.

Dans cette article nous ne parlerons que de la partie **requête** d'Elasticsearch, la partie indexation fera probablement l'objet d'un second article.

## Qu'est-ce qu'une Query Elasticsearch ?

Une requête Elasticsearch est donc utilisée pour rechercher des documents dans un index.

Cette requête est décrite par un objet JSON au format [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html "Query DSL Documentation") compréhensible par Elasticsearch. Ce format est la langue parlée par Elasticsearch. DSL pour Domain Specific Language.

Query DSL contient des "clauses" (clauses = conditions, contraintes...)

## Les clauses Elasticsearch

Il existe plusieurs type de clauses. Les plus simples sont:

1. [match](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html "Match Documentation") *"Le document que je recherche possède une clé qui match exactement la valeur fournie"*
  Exemple: je recherche une vidéo dont la clé "titre" match exactement la valeur "Journal"
2. [range](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html "Range Documentation") *"Le document que je recherche contient une clé qui est comprise entre telle et telle valeur"*
  Exemple : je recherche une vidéo dont la date de publication (publication_date) est comprise entre "030/11/2020" et le "30/11/2020"
3. [match_phrase](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html "Match_phrase Documentation") *"Le document que je recherche possède une clé qui match la phrase fournie"*
  Exemple: je recherche une vidéo dont la clé "titre" match exactement la phrase "Journal de 20h, vendredi 20 novembre 2020"

## Composer une requête à partir de plusieurs clauses

Il existe des clauses plus complexes. Notamment des clauses qui servent à combinées d'autres clauses:

1. [bool](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html "Query Bool Documentation")

La query Bool permet d'effectuer une **combinaison de clauses** présentées plus haut.

Cette combinaison de clauses se fait à l'aide des mots clés MUST (qui correspond à un **ET** logique) et/ou SHOULD (qui correspond à un **OU** logique). On peut ainsi créer des requêtes complexes composées de plusieurs clauses.

_Note : D'après la documentation Elasticseach ces clauses sont parfois aussi appelées query, la notion peut se mélanger._

Les deux terminologies sont équivalentes :
  - Une requêtes Elasticsearch peut être composée de plusieurs clauses.
  - Une requête ElasticSearch est composées de plusieurs requêtes.

## Résultats triés par Score

L'ensemble des résultats qui correspondent aux clauses présentées au dessus sont présentés par ordre de **pertinence**. Cette pertinence est représenté par un **score elasticsearch**, un nombre a virgule calculé par un algorithme choisi lors de l'indexation.

Ce score peut varier de plusieurs manières. Plus le document possède des valeurs qui match les différentes clauses plus le score sera élevé. Lors d'un match_phrase par exemple : plus le titre correspond à la valeur fournie plus score sera élevé.

Le score répond à la question **"A quel point ce document correspond à ma recherche ?"**. La réponse peut être 12,00000 ou 37,467362 ou... 42

_Note : si on impose un trie spécifique alors le score n'est alors pas calculé._

## Context query et Context filter

Une requête elasticsearch est composée de plusieurs **contexte** : [le contexte filter et le contexte query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html "Context Filter & Query Documentation").

Les deux contextes utilisent Query DSL, ils sont **semblables** et peuvent utiliser les même clauses.

La différence qu'il existe entre le contexte Query et le contexte Filter est que **le contexte Filter n'affecte pas le score** elasticsearch du résultat. Le contexte Filter répond juste à une question : Oui ou Non ? Exemple: est-ce que la date de publication est comprise entre telle et telle date ? => Oui/Non.

Le contexte filter est généralement utilisé pour préfiltrer des résultats, par la suite un score pourra être appliqué si la partie contexte query existe.

_Note : La contexte filter peut être considéré comme un must n'appliquant pas de score._

_Note : Le contexte Filter peut être considéré comme un moyen de sélectionner un sous ensemble d'un Index. (Index = collections d'objets de même nature)_

_Note : Le contexte filter est contenu DANS une clause bool, c'est à dire que le contexte filter doit se trouver au même niveau que should et/ou must dans l'objet JSON de la requête._

## Exemple

Voici un exemple de requête elasticsearch:

Ici nous souhaitons avoir toute les vidéos dont le statut est publié (status = published) et dont la date est postérieure au 1er Janvier 2015 (la publish_date >= 2015-01-01). Sur cette base de résultats nous cherchons des vidéos dont le titre contient la phrase "La terre est plate" et dont la description contient le mot "conspiration".

```JSON
GET video/_search
{
  "query": {
    "bool": {
      "must": [
        { "match_phrase": { "title": "Search" }},
        { "match": { "description": "Elasticsearch" }}
      ],
      "filter": [
        { "term": { "status": "published" }},
        { "range": { "publish_date": { "gte": "2015-01-01" }}}
      ]
    }
  }
}
```

Explications :
La ligne n°3 indique un contexte Query

La ligne n°4 : une clause booléene (Combinaison de de plusieurs clauses) dans le contexte query. Ce qui signifie qu'un score qui représente la pertinence de chaque document, va être calculé.

La ligne n°9 : indique un Context Filter. Les clauses Term & Range sont utilisées dans un contexte de filtre, ce qui signifie que les documents qui ne possèdent pas le statuts "publié" ou les documents dont la date est antérieure au 1er Janvier 2015 ne seront pas remontés. (A ET B) = (!A OU !B)
Pour les documents qui correspondent aux clauses présentées, le score ne sera pas influencé.
