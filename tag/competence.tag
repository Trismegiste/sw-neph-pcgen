<competence>
    <form class="pure-form">
        <table class="pure-table pure-table-striped">
            <tr each="{ key, val in SwPcGen.model.skill }">
                <th>{ key }</th>
                <td>
                    <select value="{ val }" data-is="dice-option">
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <script>

    </script>
</competence>