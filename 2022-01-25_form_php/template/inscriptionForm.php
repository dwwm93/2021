<form action="" method="post" onsubmit="return valid()">
    <section class="error">
        <?php echo ($errorMessage) ?>
    </section>
    <input type="text" name="lastname" id="lastname" placeholder="ex: McGyver" value="<?= $lastname ?>" />
    <input type="text" name="firstname" id="firstname" placeholder="ex: Angus" value="<?= $firstname ?>" />
    <input style="color: <?php echo ($color) ?>;" type="email" name="email" id="email" pattern=".*" placeholder="Votre email" value="<?php echo ($email) ?>" />
    <input type="password" name="password" id="password" placeholder="Votre mot de passe" value="<?php echo ($password) ?>" />

    <button type="submit">S'inscrire</button>
</form>