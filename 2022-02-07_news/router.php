<?php

class Router
{

    private $get;
    private $mappings;

    public function getGet()
    {
        return $this->get;
    }

    public function setGet($get)
    {
        $this->get = $get;
        return $this;
    }

    public function getMappings()
    {
        return $this->mappings;
    }

    public function setMappings($mappings)
    {
        $this->mappings = $mappings;
        return $this;
    }

    public function showPage()
    {
        if (!$this->get) {
            return;
        }
        require_once($this->mappings[$this->get]);
    }

    public static function errorPage()
    {
        require_once("template/error.php");
    }
}

$router = new Router();
$router->setGet(@$_GET['page']);
$router->setMappings([
    'article_show' => 'page/article.php',
    'articles' => 'page/articles.php',
    'create_article' => 'page/article_create.php',
    'users' => 'page/user.php',
]);
