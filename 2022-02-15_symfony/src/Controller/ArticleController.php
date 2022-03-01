<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ArticleController extends AbstractController
{
    /**
     * @Route("/articles/new", name="create_article")
     */
    function create(Request $request): Response
    {
        // Si "$_POST" n'est pas rempli :
        $form = $this->createForm(ArticleType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Si $_POST est rempli
            // 1. lire les données du POST
            // 2. créer une nouvelle entité $article, 
            //    la remplir avec les données
            // 3. sauvegarde
            // 4 a. je l'affiche dans le formulaire
            // 4 b. je redirige vers l'article créé
            return $this->redirectToRoute("accueil");
        }

        $viewForm = $form->createView();

        return $this->render('article/create.html.twig', [
            'viewForm' => $viewForm,
        ]);
    }

    /**
     * @Route("/articles/{id}", name="show_article")
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
