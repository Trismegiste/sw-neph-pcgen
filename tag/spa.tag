<spa>

    <div class="pure-g">
        <div class="pure-u-1 pure-u-md-2-5">
            <section>
                <table id="civilState" class="pure-table pure-table-striped">
                    <tr><th>Genre</th><td class="gender"></td></tr>
                    <tr><th>Age</th><td class="age"></td></tr>
                    <tr><th>En couple</th><td class="incouple"></td></tr>
                    <tr><th>Activité</th><td class="activity"></td></tr>
                </table>
                <table id="attributes" class="pure-table pure-table-striped"></table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th>Atouts</th></tr></thead>
                    <tbody id="edges"></tbody>
                </table>
            </section>
        </div>

        <div class="pure-u-1 pure-u-md-2-5">
            <section>
                <table id="skills" class="pure-table pure-table-striped"></table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Handicaps</th></tr></thead>
                    <tbody id="hindrances"></tbody>
                </table>
                <table id="technical" class="pure-table pure-table-striped">
                    <tr><th>Skill points</th><td class="overspentSkill"></td></tr>
                    <tr><th>Equilibre atouts</th><td class="edgeBalance"></td></tr>
                </table>
            </section>
        </div>

        <div class="pure-u-1 pure-u-md-1-5">
            <section>
                <button class="pure-button pure-button-primary" onclick="{
                        onGenerate
                    }">Generate</button>
                <table class="pure-table pure-table-striped">
                    <tbody><tr><th><img src="img/soleil.png" class="pure-img"/></th><td id="kaSun"></td></tr></tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Frères/Sœurs</th></tr></thead>
                    <tbody id="siblings"></tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Parents</th></tr></thead>
                    <tbody id="parents"></tbody>
                </table>
                <table class="pure-table pure-table-striped">
                    <thead><tr><th colspan="2">Enfants</th></tr></thead>
                    <tbody id="children"></tbody>
                </table>
            </section>
        </div>
    </div>

    <script>
        onGenerate() {
            SwPcGen.model = SwPcGen.factory.generate()
            SwPcGen.factory.render(SwPcGen.model)
        }
    </script>
</spa>