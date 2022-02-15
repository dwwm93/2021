<?php

class Categorie
{
    private $id;
    private $nom;
    private $idParent;

    function __construct($id)
    {
        $this->id = $id;
    }

    public static function getCategorie($id): Categorie
    {
        $query = BDD::connexion()->prepare("SELECT *
        FROM categorie
        WHERE id_categorie = :id");
        $query->bindParam('id', $id);
        $query->execute();
        $res = $query->fetch();
        $categorie = new Categorie($id);
        $categorie->setNom($res['nom_categorie']);
        $categorie->setIdParent($res["id_parent"]);
        return $categorie;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom($nom): Categorie
    {
        $this->nom = $nom;
        return $this;
    }

    public function getIdParent(): string
    {
        return $this->idParent;
    }

    public function setIdParent($idParent): Categorie
    {
        $this->idParent = $idParent;
        return $this;
    }
}
