<h2><?php
    /** @var Article $article */
    echo ($article->getTitre());
    ?>
</h2>
<summary>par
    <a href="index.php?page=users&id=<?= $article->getIdUser() ?>">
        <!-- ?= "{$article['nom_user']} {$article['prenom_user']}" ? -->
        <?= "{$article->getIdUser()}" ?>
    </a>
</summary>

<img src="<?= $article->getImg() ?>" alt="" srcset="">
<p>
    <?= $article->getContenu() ?>
</p>