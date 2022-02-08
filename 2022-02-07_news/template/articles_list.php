<h1>Liste des articles</h1>

<ol>
    <?php
    foreach ($articles as $key => $colonnes) {
        echo ("<li><a href='index.php?page=articles&id={$colonnes['id_article']}'>
                [{$colonnes['nom_categorie']}] - 
                {$colonnes['titre_article']}</a>
            </li>");
    }
    ?>
</ol>