<h2>Contact</h2>
<div class="error"></div>
<form action="index.php?page=setForm" method="POST" onsubmit="return sendForm()">
    nom : <input type="text" name="nom" id="nom"><br>
    email : <input type="text" name="email" id="email"><br>
    sujet : <input type="text" name="sujet" id="sujet"><br>
    message : <textarea name="message" id="message" cols="30" rows="10"></textarea><br>
    <button>Valider</button>
</form>
<script src="js/verif.js"></script>