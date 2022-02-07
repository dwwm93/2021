<h1>Liste des articles</h1>

<ol>
    <?php
    foreach ($articles as $key => $article) {
        echo ("<li><a href='index.php?page=articles&id={$article['id_article']}'>
                {$article['titre_article']}</a>
            </li>");
    }
    ?>
</ol>