<h1>Liste des utilisateurs</h1>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>lastname</th>
            <th>firstname</th>
            <th>email</th>
            <th>password</th>
        </tr>
    </thead>
    <tbody>
        <?php
        foreach ($users as $key => $user) {
            echo ("<tr>
                    <td>{$user['id']}</td>
                    <td>{$user['lastname']}</td>
                    <td>{$user['firstname']}</td>
                    <td>{$user['email']}</td>
                    <td>{$user['password']}</td>
                </tr>");
        }
        ?>
    </tbody>
</table>