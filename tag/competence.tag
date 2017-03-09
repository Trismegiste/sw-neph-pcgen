<competence>
    <form class="pure-form">
        <table class="pure-table pure-table-striped">
            <tr each="{ key in reorder }">
                <th>{ key }</th>
                <td>
                    <select value="{ SwPcGen.model.skill[key] }" data-is="dice-option" onchange="{
                                onSkillEdit
                            }">
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <script>
        var self = this;

        onSkillEdit(e) {
            if (0 == e.target.value) {
                delete SwPcGen.model.skill[e.item.key]
            } else {
                SwPcGen.model.skill[e.item.key] = e.target.value
            }
            SwPcGen.model.trigger('update')
        }

        self.on('update', function () {
            if (SwPcGen.model) {
                self.reorder = Object.keys(SwPcGen.model.skill)
                self.reorder.sort(function (a, b) {
                    return SwPcGen.model.skill[b] - SwPcGen.model.skill[a]
                })
            }
        })
    </script>
</competence>