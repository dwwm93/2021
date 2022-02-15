<h2><?php
    /** @var Article $article */
    echo ($article->getTitre());
    ?>
</h2>
<summary>par
    <a href="index.php?page=users&id=<?= $article->getIdUser() ?>">
        <?= "{$article->getUser()->getNom()} {$article->getUser()->getPrenom()}" ?>
    </a>
</summary>
<section><?= $article->getCategorie()->getNom() ?></section>

<img src="<?= $article->getImg() ?>" alt="" srcset="">
<p>
    <?= $article->getContenu() ?>
</p>