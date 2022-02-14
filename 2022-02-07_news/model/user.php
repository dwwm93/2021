<?php

class User
{
    private $id;
    private $nom;
    private $prenom;
    private $tel;
    private $email;
    private $password;

    function __construct($id)
    {
        $this->id = $id;
    }

    public static function getUser($id_user): User
    {
        $query = BDD::connexion()->prepare("SELECT * 
            FROM user
            WHERE id_user = ?
        ");
        $query->execute([$id_user]);
        $res = $query->fetch();
        $user = new User($id_user);
        $user->setNom($res['nom_user']);
        $user->setPrenom($res['prenom_user']);
        $user->setTel($res['tel_user']);
        $user->setEmail($res['email_user']);
        $user->setPassword($res['password_user']);
        return $user;
    }

    function getId()
    {
        return $this->id;
    }

    function getNom(): string
    {
        return $this->nom;
    }

    function setNom($nom): User
    {
        $this->nom = $nom;
        return $this;
    }

    function getPrenom(): string
    {
        return $this->prenom;
    }

    function setPrenom($prenom): User
    {
        $this->prenom = $prenom;
        return $this;
    }

    function getTel(): string
    {
        return $this->tel;
    }

    function setTel($tel): User
    {
        $this->tel = $tel;
        return $this;
    }

    function getEmail(): string
    {
        return $this->email;
    }

    function setEmail($email): User
    {
        $this->email = $email;
        return $this;
    }

    function getPassword(): string
    {
        return $this->password;
    }

    function setPassword($password): User
    {
        $this->password = $password;
        return $this;
    }
}
