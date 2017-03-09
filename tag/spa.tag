<spa>

    <div class="pure-g">
        <div class="pure-u-1 pure-u-md-2-5">
            <section>
                <button class="pure-button pure-button-primary" onclick="{
                            onGenerate
                        }">Generate</button>
                <table class="pure-table pure-table-striped">
                    <tr><th>Genre</th><td>{ SwPcGen.model.gender }</td></tr>
                    <tr><th>Age</th><td>{ SwPcGen.model.age }</td></tr>
                    <tr><th>En couple</th><td>{ SwPcGen.model.inCouple ? 'oui' : 'non' }</td></tr>
                    <tr><th>Activité</th><td>{ SwPcGen.model.activity }</td></tr>
                </table>
                <table class="pure-table pure-table-striped">
                    <tr each="{ attr, val in SwPcGen.model.attribute }">
                        <th>{ attr }</th>
                        <td>d{ val }</td>
                    </tr>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th>Atouts</th></tr></thead>
                    <tbody>
                        <tr each="{ key in SwPcGen.model.edge }">
                            <td>{ key }</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

        <div class="pure-u-1 pure-u-md-2-5">
            <section>
                <table class="pure-table pure-table-striped">
                    <tr each="{ key, val in SwPcGen.model.skill }">
                        <th>{ key }</th>
                        <td>d{ val }</td>
                    </tr>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Handicaps</th></tr></thead>
                    <tbody>
                        <tr each="{ key, val in SwPcGen.model.hindrance }">
                            <th>{ key }</th>
                            <td>{ val }</td>
                        </tr>
                    </tbody>
                </table>
                <table id="technical" class="pure-table pure-table-striped">
                    <tr><th>Skill points</th><td>{SwPcGen.model.getSkillPoint()} / {SwPcGen.model.skillCreationPoint}</td></tr>
                    <tr><th>Equilibre atouts</th><td>{SwPcGen.model.getEdgeBalance()}</td></tr>
                </table>
            </section>
        </div>

        <div class="pure-u-1 pure-u-md-1-5">
            <section>
                <table class="pure-table pure-table-striped">
                    <tbody><tr><th><img src="img/soleil.png" class="pure-img"/></th><td>d{SwPcGen.model.kaSun}</td></tr></tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Frères/Sœurs</th></tr></thead>
                    <tbody>
                        <tr each="{ obj in SwPcGen.model.sibling }">
                            <td>{ obj.gender }</td>
                            <td>{ obj.age }</td>
                        </tr>
                    </tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Parents</th></tr></thead>
                    <tbody>
                        <tr each="{ obj in SwPcGen.model.parent }">
                            <td>{ obj.gender }</td>
                            <td>{ obj.age }</td>
                        </tr>
                    </tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Enfants</th></tr></thead>
                    <tbody>
                        <tr each="{ obj in SwPcGen.model.children }">
                            <td>{ obj.gender }</td>
                            <td>{ obj.age }</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>

    <script>
        var self = this

        onGenerate() {
            SwPcGen.model = SwPcGen.factory.generate()
            //SwPcGen.factory.render(SwPcGen.model)
        }
    </script>
</spa>