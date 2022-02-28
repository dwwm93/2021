---
title: Symfony
subtitle: Introduction à l'utilisation
author: Marc CHENEBAUX
date: 2022/02/18
transition: fade
theme: serif
overview: true
revealjs-url: https://unpkg.com/reveal.js@3.9.2
...

# Librairie vs Framework

---

- librairie : des blocs de codes à intégrer dans votre structure
- framework : une structure dans laquelle vous intégrez des bouts de votre code !

---

## Dans le cas de symfony

- soit on prend les petits bouts qu'on met dans son code (donc librairie), par ex: utiliser symfony mailer pour envoyer des mails, ou twig pour le templating (mise en forme)
- soit on utilise le squelette qu'on nous propose : ie quasiment tous les modules de symfony, et on doit adapter notre code en conséquence.

---

## Cas framework

### Installation

```sh
composer create-project symfony/skeleton:"^5.4" nom_de_rep_au_choix
# ou "^5.4.99" si ça plante
# on n'utilise pas la version 6 car elle nécessite PHP8 qui n'est pas sur les ordis du GRETA
# cd = change directory : on se déplace en ligne de commande
cd nom_de_rep_au_choix
composer require webapp
```

---

### Explications

Il faut se conformer à la structure :

```sh
.
├── assets             => fichiers js, css ...
├── bin
│   └── console        => bin/console !! *\o/*
├── composer.json      => sauvegarde les dépendances
├── composer.lock      => indique les dépendances installées
├── config
├── migrations
├── public
│   └── index.php
├── src
│   ├── Controller
│   ├── Entity
│   └── Repository
├── templates
├── vendor
```

---

- `config/` : répertoire des configurations (fichiers `yaml`)
- `src/` : répertoire qui contient les sources de notre code
- `src/Controller/` : code qui concerne les ... controllers
- `src/Entity/` : TBD
- `src/Repository/` : TBD
- `templates/` : répertoire des templates `twig` pour générer les vues

---

- `vendor/` : répertoire géré par `composer` qui contient les sources de tous les projets que l'on utilise (ex: les sources de symfony, les sources de twig, les sources de doctrine etc.) => répertoire non versionné par git ! il suffit d'utiliser `composer install` pour réinstaller tout `vendor`. (`composer` utilise alors le fichier `composer.json`)
- `public/` : répertoire qui contient le fichier index.php et qui est exposé au monde entier (contrairement à nos sources!)
- `migrations/` : répertoire des traitements `LDD` [^ldd] (et parfois `LMD`[^lmd] mais **anecdotique**)

[^ldd]: ou DDL - Langage de définition des données
[^lmd]: ou DML - Langage de manipulation des données

---

## Lancer le serveur web

- Pour avoir accès au fichier `index.php` dans `public/`
- et pour avoir des urls "jolies" (ex: `localhost/articles` au lieu de `localhost?page=articles`, ou `localhost/articles/1` au lieu de `localhost?page=articles&id=1` !!)

=> on doit paramétrer son serveur web (ex: apache pour wamp).

---

Pour se faciliter la vie, on utilise celui qui est fourni par le logiciel "symfony"[^symfony-cli] (`symfony-cli`, càd symfony en ligne de commande), en faisant :

```sh
symfony server:start
```

[^symfony-cli]: pour l'installer, se rendre sur [la page de téléchargement](https://symfony.com/download)

# MVC

---

Symfony utilise le _design pattern_ (= organise son code) **MVC**.

- Model : partie du code qui va gérer les données et parler à la base
- Controller : chef d'orchestre, c'est lui qui contient l'intelligence
- View : partie qui gère l'IHM[^ihm] et l'affichage à l'utilisateur

---

- ! Ne pas oublier:
  - router
  - database

à compléter : comment M, V et C intéragissent les uns avec les autres (et dans quel ordre).

[^ihm]: [Interface Homme - Machine](https://fr.wikipedia.org/wiki/Interactions_homme-machine)

---

## Controller

Se trouve dans le répertoire `src/Controller`.

Pour créer un nouveau Controller, je crée un fichier `ArticleController`.

---

```php
<?php

namespace App\Controller;

# "use" est une sorte de "include()".
# utiliser l'auto import, pas besoin de connaître par coeur les
# composants symfony
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\...\AbstractController;
// importer Symfony\...\Response : la réponse HTTP vers l'utilisateur
use Symfony\...\Response;
# code qui vient de mon application :
use App\Entity\Article;

/**
 * Mon controller hérite de celui de symfony,
 * par conséquent j'ai accès à $this->render qui me permet
 * de générer du html en utilisant TWIG.
 */
class ArticleController extends AbstractController
{

    /**
     * @Route("/articles", name="articles")
     */
    public function index() : Response
    {
        /**
         * Traitements intelligents
         */

        $valeur = "val1"; // ou n'importe quel structure PHP
        $article = new Article();

        /**
         * Renvoie la vue !
         */
        // "mon_template" est situé dans le répertoire "templates"
        // penser à indiquer l'arborescence complète à partir de "templates/"
        return $this->render("mon_template.html.twig", [
            "nom_var1" => $valeur,
            "article" => $article,
        ]);

        // bad mais possible: (en vérifiant la bonne syntaxe)
        // return new Response("<html>....");
    }
}
```

---

NB: Symfony vous aide grâce à `bin/console` (petite ligne de commande écrite en php qui vous facilite la vie ❤️)

```sh
php bin/console make:controller CategorieController
```

---

## View

Puis il faut que je construise mon template twig.

```twig
<!-- dans templates/mon_template.html.twig -->
<html>
    <head>...</head>
    <body>
        <h1>{{ nom_var1 }}</h1>
        <p>
            {{ article.contenu }}
        </p>
        <p>On note que l'accès aux propriétés de l'objet article ressemble à la syntaxe du javascript !! (cf <pre>eleve.nom</pre>)</p>
    </body>
</html>
```

# TWIG

---

Langage de templating.

## Cheatsheet

[cheatsheet/antisèche](https://danielmg.org/php/twig-cheatsheet.html)

---

## Syntaxe

- `{{ ma_var }}` : affiche la variable (si elle est affichable)
- `{# mon commentaire #}` : commentaire dans le code twig, non affiché dans le html
- `{% for element in tableau %} {{ element }} {% endfor %}` : boucle
- `{% if ma_var == "jour" %} Bonjour {{ nom }} {% else %} Bonsoir {% endif %}` : test sur les variables disponibles
- etc.

---

### Héritage des templates

```twig
<!-- templates/parent.html.twig -->

<html>
    <head></head>
    <body>
        <nav></nav>
        <main>
            {% block mon_block_main %}
                l'enfant peut effacer le contenu de ce bloc et le remplacer par ce qu'il veut !!
            {% endblock %}
        </main>
        <footer>
            {% block block_footer %}
            {% endblock %}
        </footer>
    </body>
</html>
```

---

et l'enfant :

```twig
<!-- templates/enfant.html.twig -->
{% extends "parent.html.twig" %}

{% block mon_block_main %}
Ici j'écris dans le parent !!!!!

J'utilise ici la variable {{ nom_var1 }}.
{% endblock %}

{% block block_footer %}
Voici le footer de ma page enfant !!!
{% endblock %}
```

---

Permet de réduire la duplication de code et d'avoir un style commun pour tout le site !

# La base de données

---

## Connexion

Les informations de connexion sont stockées dans un fichier `.env` (appelé : `dotenv`).

Il y aura un fichier `.env` différent par machine, cela permet de ne pas partager les informations "secrètes".

---

### exemple

Sur mon pc "maison", dans mon fichier `.env.local` j'indique : login=marc, pwd=marc.

Par contre au greta, dans le fichier `.env.local`, j'indique : login=greta, pwd=greta.

> je peux avoir plusieurs "secrets" différents en fonction de la machine.

---

Attention, on ne commite pas le fichier `.env.local` car il contient des secrets à ne pas partager !!

Le `.env` lui contient les exemples ou les valeurs "non secrètes".

## Informations de connexion

Il faut donc **créer** et écrire dans le fichier `.env.local` :

```.env
DATABASE_URL="mysql://login:mdp@127.0.0.1:3306/2022_news_symfony?serverVersion=8.0"
```

---

Vérification de la connexion (à écrire dans le terminal):

```sh
php bin/console doctrine:database:create
```

ou avec symfony-cli :

```sh
symfony console doctrine:database:create
```

---

## MVC : Model

Partie de l'architecture chargée de "parler" avec la base de données (donc LDD[^ldd] et LMD[^lmd]), et transformer les données de la base vers des données exploitables en PHP.

---

### Représentation Objet

> cf : MCD

Dans mon code "objet" (POO), on ne manipule pas les "tables" SQL. On manipule des objets. Ces objets, qui représentent des données dans la base, sont appelés : **Entités**.

---

### Dans Symfony

On doit créer les "Entity" : les classes qui vont contenir mes données en php.

> à créer dans `src/Entity`

---

Il s'agit de classes PHP, qui seront "mappées" vers les tables de la BDD.

On peut soit :

1. écrire ces classes à la main ! (comme on a fait pour le controller)
2. soit demander à `bin/console` !

```sh
php bin/console make:entity
```

---

```php
<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
```

---

## ORM

ORM = Object Relational Mapping = correspondance table / classe

Il s'agit d'un bout de code qui sait transformer des objets PHP en tables SQL.

Symfony utilise l'ORM[^orm] qui s'appelle **Doctrine**.

[^orm]: [définition](https://fr.wikipedia.org/wiki/Mapping_objet-relationnel)

---

### Migration

#### Déclaration

```sh
php bin/console make:migration
```

=> Demande à doctrine de générer les requêtes LDD[^ldd] associées aux entités PHP que l'on a crées (donc Article pour nous)

=> regarder dans le répertoire `migrations/` pour les voir.

---

#### Exécution

```sh
php bin/console doctrine:migration:migrate
```

---

## Précisions Symfony

Model = Manager + Entity + Repository
