<h2><?php echo ($article['titre_article']); ?></h2>
<summary>par
    <a href="index.php?page=users&id=<?= $article['id_user'] ?>">
        <?= "{$article['nom_user']} {$article['prenom_user']}" ?>
    </a>
</summary>

<img src="<?= $article['img_article'] ?>" alt="" srcset="">
<p>
    <?= $article['contenu_article'] ?>
</p>