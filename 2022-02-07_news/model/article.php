<?php

class Article
{
    /** @var PDO $bdd */
    private $bdd;

    private $id;
    private $titre;
    private $contenu;
    private $img;
    private $date;
    private $id_categorie;
    private $id_user;

    function __construct($id = null)
    {
        $this->bdd = BDD::connexion();
        $this->id = $id;
    }

    public static function getArticles()
    {
        $articles = BDD::connexion()
            ->query("SELECT *
                FROM article
                INNER JOIN categorie
                ON categorie.id_categorie = article.id_categorie
                ")
            ->fetchAll();
        return $articles;
    }

    public static function getArticle($id)
    {
        $bdd = BDD::connexion();
        $query = $bdd->prepare("SELECT 
                article.*, 
                user.nom_user, 
                user.prenom_user 
            FROM article
            JOIN user ON article.id_user = user.id_user
            WHERE id_article = ?");
        $query->bindParam(1, $id);
        $query->execute();
        $res = $query->fetch();
        //
        $article = new Article($res['id_article']);
        $article->setTitre($res['titre_article']);
        $article->setDate($res['date_article']);
        $article->setImg($res['img_article']);
        $article->setContenu($res['contenu_article']);
        $article->setIdCategorie($res['id_categorie']);
        $article->setIdUser($res['id_user']);
        return $article;
    }

    public function getUser(): User
    {
        return User::getUser($this->getIdUser());
    }

    public function getCategorie(): Categorie
    {
        return Categorie::getCategorie($this->getIdCategorie());
    }

    public function verify(): bool
    {
        if ($this->getContenu() && $this->getDate()) {
            return true;
        }
        return false;
    }

    public function save(): void
    {
        if (!$this->verify()) {
            echo "<h1 class='error'>Article invalide !</h1>";
            return;
        }
        $query = BDD::connexion()->prepare("INSERT INTO article
        ( 
            titre_article, 
            contenu_article, 
            date_article, 
            img_article, 
            id_categorie, 
            id_user 
        )
        VALUES (
            ?, ?, ?, ?, ?, ?
        )");
        $query->execute([
            $this->titre,
            $this->contenu,
            $this->date,
            $this->img,
            $this->id_categorie,
            $this->id_user,
        ]);
        $this->id = BDD::connexion()->lastInsertId();
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function setTitre($titre)
    {
        $this->titre = $titre;
        return $this;
    }

    public function getContenu()
    {
        return $this->contenu;
    }

    public function setContenu($contenu)
    {
        $this->contenu = $contenu;
        return $this;
    }

    public function getImg()
    {
        return $this->img;
    }

    public function setImg($img)
    {
        $this->img = $img;
        return $this;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    }
    public function getIdCategorie()
    {
        return $this->id_categorie;
    }

    public function setIdCategorie($id_categorie)
    {
        $this->id_categorie = $id_categorie;
        return $this;
    }

    public function getIdUser()
    {
        return $this->id_user;
    }

    public function setIdUser($id_user)
    {
        $this->id_user = $id_user;
        return $this;
    }
}
