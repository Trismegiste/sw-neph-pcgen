<handicap>
    <table class="pure-table pure-table-striped">
        <thead><tr><th colspan="3">Handicaps</th></tr></thead>
        <tbody>
            <tr each="{ key, val in SwPcGen.model.hindrance }">
                <th>{ key }</th>
                <td>{ val }</td>
                <td><a href="#" onclick="{
                            onDeleteHindrance
                        }"><i class="icon-trash-empty"></i></a></td>
            </tr>
        </tbody>
    </table>
    <script>
        onDeleteHindrance(e) {
            SwPcGen.model.removeHindrance(e.item.key)
            SwPcGen.model.trigger('update')
        }
    </script>
</handicap>