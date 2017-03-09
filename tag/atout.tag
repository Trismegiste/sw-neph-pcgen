<atout>
    <form class="pure-form">
        <table class="pure-table pure-table-striped">
            <thead><tr><th>Atouts</th></tr></thead>
            <tbody>
                <tr each="{ key in SwPcGen.model.edge }">
                    <td>
                        <select value="{key}" onchange="{
                                    onChange
                                }">
                            <option value="0"></option>
                            <option each="{val in savageWorlds.edge}" value="{val}">{val}</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
    <script>
        onChange(e) {
            if (0 == e.target.value) {
                SwPcGen.model.removeEdge(e.item.key)
            } else {
                SwPcGen.model.removeEdge(e.item.key)
                SwPcGen.model.addEdge(e.target.value)
            }
            SwPcGen.model.trigger('update')
        }
    </script>
</atout>