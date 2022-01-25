<form action="" method="post" onsubmit="return valid()">
    <?php echo ($errorMessage) ?>
    <input style="color: <?php echo ($color) ?>;" type="email" name="email" id="email" pattern="[a-zA-Z0-9]+" placeholder="Votre email" value="<?php echo ($email) ?>">
    <button type="submit">Clic</button>
</form>