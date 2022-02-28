<?php

namespace App\Controller;

use App\Entity\Article;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ArticleController extends AbstractController
{

    /**
     * @Route("/articles/{id}", name="article")
     */
    public function show($id): Response
    {
        $article = $this
            ->getDoctrine()
            ->getRepository(Article::class)
            ->find($id);

        return $this->render('article/show.html.twig', [
            'article' => $article,
        ]);
    }

    /**
     * @Route("/articles", name="articles")
     */
    function list()
    {
        /**
         * Traitements intelligents
         * @var Article[] $articles
         */
        $articles = $this
            ->getDoctrine()
            ->getRepository(Article::class)
            ->findAll();

        /**
         * Renvoie la vue !
         */
        return $this->render('article/article_list.html.twig', [
            'articles' => $articles,
        ]);
    }
}
