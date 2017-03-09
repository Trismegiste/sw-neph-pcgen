<info>
    <p each="{detail}">
        <strong>{type}</strong> {descr}
    </p>
    <script>
        this.detail = []
        var self = this
        this.on('update', function () {
            self.detail = []
            SwPcGen.model.edge.forEach(function (idx) {
                self.detail.push(savageWorlds.edge[idx])
            })
        })
    </script>
</info>
