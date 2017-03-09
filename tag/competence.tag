<competence>
    <form class="pure-form">
        <table class="pure-table pure-table-striped">
            <tr each="{ key, val in SwPcGen.model.skill }">
                <th>{ key }</th>
                <td>
                    <select value="{ val }" data-is="dice-option" onchange="{
                                onSkillEdit
                            }">
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <script>
        onSkillEdit(e) {
            if (0 == e.target.value) {
                delete SwPcGen.model.skill[e.item.key]
            } else {
                SwPcGen.model.skill[e.item.key] = e.target.value
            }
            SwPcGen.model.trigger('update')
        }
    </script>
</competence>