<competence>
    <form class="pure-form">
        <table class="pure-table pure-table-striped">
            <tr each="{ sortedSkill }">
                <th>{ key }</th>
                <td>
                    <select value="{ val }" data-is="dice-option" onchange="{
                                parent.onSkillEdit
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
                self.sortedSkill = []
                Object.keys(SwPcGen.model.skill).forEach(function (key) {
                    self.sortedSkill.push({key: key, val: SwPcGen.model.skill[key]})
                })
                self.sortedSkill.sort(function (a, b) {
                    return b.val - a.val
                })
            }
        })
    </script>
</competence>