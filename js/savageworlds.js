var savageWorlds = {
    trait: {
        attribute: ['Force', 'Vigueur', 'Âme', 'Intellect', 'Agilité'],
        skill: {
            'Combat': 'Agilité',
            'Conduite': 'Agilité',
            'Connaissance Art': 'Intellect',
            'Connaissance Science': 'Intellect',
            'Connaissance Eco/Gestion': 'Intellect',
            'Connaissance Lettre': 'Intellect',
            'Connaissance Informatique': 'Intellect',
            'Connaissance Langue': 'Intellect',
            'Crochetage': 'Agilité',
            'Discrétion': 'Agilité',
            'Équitation': 'Agilité',
            'Escalade': 'Force',
            'Intimidation': "Âme",
            'Jeu': 'Intellect',
            'Lancer': 'Agilité',
            'Natation': 'Agilité',
            'Navigation': 'Agilité',
            'Perception': 'Intellect',
            'Persuasion': 'Âme',
            'Pilotage': 'Agilité',
            'Pistage': 'Intellect',
            'Recherche': 'Intellect',
            'Réparation': 'Intellect',
            'Réseaux': 'Intellect',
            'Sarcasme': 'Intellect',
            'Soins': 'Intellect',
            'Survie': 'Intellect',
            'Tir': 'Agilité'
        }
    },
    hindrance: {
        "Anémique": {
            type: "Mineur",
            descr: "-2 aux jets de Vigueur pour résister aux maladies ou aux effets de l'environnement."},
        "Arrogant": {
            type: "Majeur",
            descr: "Le personnage est le meilleur dans un domaine, et se sent obligé de dominer les autres."},
        "Bavard": {
            type: "Mineur",
            descr: "Le personnage ne sait pas tenir sa langue."},
        "Bizarrerie": {
            type: "Mineur",
            descr: "Le personnage a une obsession ou une autre bizarrerie de comportement."},
        "Boiteux": {
            type: "Majeur",
            descr: "-2 en Allure, et le dé de course est d4."},
        "Borgne": {
            type: "Majeur",
            descr: "-1 en charisme si non masqué, -2 pour tous les jets qui nécessitent une perception de laprofondeur."},
        "Chimères": {
            type: "Mineur/Majeur",
            descr: "Le personnage croit des choses non fondées."},
        "Code de l'honneur": {
            type: "Majeur",
            descr: "Le personnage tient toujours sa parole et agit en gentleman."},
        "Couard": {
            type: "Majeur",
            descr: "-2 en Tripes."},
        "Cupide": {
            type: "Mineur/Majeur",
            descr: "Le personnage est obsédé par la richesse."},
        "Curieux": {
            type: "Majeur",
            descr: "Le personnage veut tout savoir."},
        "Deux mains gauches": {
            type: "Mineur",
            descr: "-2 en réparation, un jet de compétence de 1 sur l'utilisation d'un objet technologique provoque une défaillance."},
        "Dur d'oreille": {
            type: "Mineur/Majeur",
            descr: "-2 en Perception si mineur. Sourd si Majeur"},
        "Ennemi": {
            type: "Mineur/Majeur",
            descr: "Le personnage a un ou plusieurs ennemis connus."},
        "Frêle": {
            type: "Majeur",
            descr: "-1 en Résistance."},
        "Gamin": {
            type: "Majeur",
            descr: "3 points d'attributs, 10 points de compétences, +1 Jeton par session."},
        "Héroïque": {
            type: "Majeur",
            descr: "Le personnage est héroïque et vient en aide à tous ceux qui en ont besoin."},
        "Ignorant": {
            type: "Majeur",
            descr: "-2 en Connaissance Commune"},
        "Illettré": {
            type: "Mineur",
            descr: "Le personnage ne sait ni lire ni écrire."},
        "Loyal": {
            type: "Mineur",
            descr: "Le héros ne trahira jamais ses amis."},
        "Malchanceux": {
            type: "Majeur",
            descr: "Un Jeton de moins par session."},
        "Manchot": {
            type: "Majeur",
            descr: "Le personnage n'a qu'un bras valide. -4 aux actions qui nécessitent deux bras (Escalade)."},
        "Mauvaise habitude": {
            type: "Mineur/Majeur",
            descr: "Le personnage a une habitude énervante ou une addiction."},
        "Moche": {
            type: "Mineur",
            descr: "-2 en Charisme à cause de son apparence hideuse."},
        "Myope": {
            type: "Mineur/Majeur",
            descr: "-2 en Combat ou Perception à plus de 5."},
        "Obèse": {
            type: "Mineur",
            descr: "+1 en Résistance, -1 en Allure, et le dé de course est d4."},
        "Pacifiste": {
            type: "Mineur/Majeur",
            descr: "Le personnage combat seulement pour se défendre et ne combattra jamais si le handicap est Majeur."},
        "Paria": {
            type: "Mineur",
            descr: "-2 en Charisme. Mal vu dans la société de référence."},
        "Phobie": {
            type: "Mineur/Majeur",
            descr: "-2 ou -4 sur les jets de Traits quand quand le personnage se retrouve au contact de l'objetde sa phobie."},
        "Poches Percées": {
            type: "Mineur",
            descr: "Fonds de départ divisés par 2. En général, impossibilité de faire des économies."},
        "Présomptueux": {
            type: "Majeur",
            descr: "Le héros pense qu'il peut arriver à tout."},
        "Prudent": {
            type: "Mineur",
            descr: "Le personnage est excessivement prudent."},
        "Rancunier": {
            type: "Mineur/Majeur",
            descr: "Le personnage est revanchard, allant jusqu'à tuer pour se venger si le handicap est Majeur."},
        "Recherché": {
            type: "Mineur/Majeur",
            descr: "Les autorités recherchent le personnage pour une ou plusieurs infractions à la loi."},
        "Rien à perdre": {
            type: "Mineur",
            descr: "Le héros souhaite mourir une fois une certaine tache accomplie."},
        "Sale Caractère": {
            type: "Mineur",
            descr: "-2 en Charisme à cause de sa mauvaise humeur perpétuelle."},
        "Sanguinaire": {
            type: "Majeur",
            descr: "Ne fait jamais de prisonniers. -4 en Charisme si cela se sait."},
        "Sceptique": {
            type: "Mineur",
            descr: "Le personnage ne croit pas au surnaturel."},
        "Serment": {
            type: "Mineur/Majeur",
            descr: "Le héros a fait un serment envers lui-même, un groupe, une divinité ou une religion."},
        "Têtu": {
            type: "Mineur",
            descr: "Le héros veut toujours avoir raison."},
        "Agé": {
            type: "Majeur",
            descr: "-1 en Allure, -1 en Force et en Vigueur, 5 points supplémentaires pour des compétences liées à l'Intellect."}
    },
    edge: {
        "Artisan": {type: 'N', descr: 'Jet de INT'},
        "Artiste": {type: 'N', descr: 'Jet de ÂME'},
        "Acrobate": {
            type: "N, Agi d8, For d6",
            descr: "+2 aux jets d'Agilité liés à la souplesse, +1 en Parade si non-encombré."},
        "Ambidextre": {
            type: "N, Agi d8",
            descr: "Ignore le malus de -2 pour la main non directrice."},
        "Arme fétiche": {
            type: "N, Combat ou Tir d10",
            descr: "+1 en Combat ou en Tir avec une arme précise."},
        "Arts martiaux": {
            type: "N, Combat d6",
            descr: "For+d4 pour les attaques à mains nues&nbsp;; toujours considéré armé"},
        "As": {
            type: "N, Agi d8",
            descr: "+2 en Conduite, Navigation et Pilotage. Peut faire un jet de Résistance pour un véhicule en réussissant un jet à -2."},
        "Assassin": {
            type: "N, Agi d8, Combat d6, Discrétion d8, Escalade d6",
            descr: "+2 aux dégâts contre une cible surprise"},
        "Balayage": {
            type: "N, For d8, Combat d8",
            descr: "Attaque tous les adversaires adjacents à -2."},
        "Bagarreur": {
            type: "N, For d8",
            descr: "+2 aux dégâts à mains nues"},
        "Brave": {
            type: "N, Âme d6 +2",
            descr: "+2 aux jets de Terreur"},
        "Chanceux": {
            type: "N",
            descr: "+1 Jeton par session."},
        "Très Chanceux": {
            type: "N, Chanceux",
            descr: "+2 Jetons par session."},
        "Charismatique": {
            type: "N, Âme d8",
            descr: "Charisme +2"},
        "Combat à deux armes": {
            type: "N, Agi d8",
            descr: "Peut attaquer avec une arme dans chaque main sans subir le malus d'Actions multiples"},
        "Commandement": {
            type: "N, Int d6",
            descr: "Les troupes ont un bonus de +1 pour récupérer d'un état Secoué."},
        "Grande aura de command.": {
            type: "N, Commandement",
            descr: "L'aura de commandement a un rayon de 10 cases."},
        "Contacts": {
            type: "N",
            descr: "Peut demander de l'aide à des amis bien placés."},
        "Costaud": {
            type: "N, For d6, Vig d6",
            descr: "Résistance +1, limite de poids à 8 _ For"},
        "Débrouillard": {
            type: "N, Int d6, Réparation d6, Perception d8",
            descr: "Peut improviser des gadgets."},
        "Dégaine comme l'éclair": {
            type: "N, Agi d8",
            descr: "Peut dégainer une arme en action gratuite."},
        "Don des langues": {
            type: "N, Int d6",
            descr: "Commence le jeu en maîtrisant un nombre de langues égal à son dé d'Intellect; possibilité de se faire comprendre par n'importe qui avec un jet d'Intellect à -2 après une semaine d'immersion."},
        "Enragé": {
            type: "N",
            descr: "Voir texte."},
        "Érudit": {
            type: "N, d8 dans les Compétences concernées",
            descr: "+2 dans deux Connaissances."},
        "Extraction": {
            type: "N, Agi d8",
            descr: "Empêche une attaque ennemie sur une retraite avec un jet d'Agilité."},
        "Grande extraction": {
            type: "N, Extraction",
            descr: "Comme ci-dessus. Avec une Relance, empêche toutes les attaques."},
        "Florentine": {
            type: "N, Agi d8, Combat d8",
            descr: "+1 en Combat contre les cibles n'ayant qu'une arme et sans bouclier. Ignore 1 point de bonus pour des attaquants multiples."},
        "Forestier": {
            type: "N, Âme d6, Survie d8, Pistage d8",
            descr: "+2 en Survie, Pistage et Discrétion."},
        "Frappe éclair": {
            type: "N, Agi d8",
            descr: "Peut attaquer un adversaire se portant au contact."},
        "Guérison rapide": {
            type: "N, Vigueur d8",
            descr: "+2 au jets de guérison naturelle."},
        "Guérisseur": {
            type: "N, Âme d8",
            descr: "+2 au jets de Soins."},
        "Increvable": {
            type: "N, Joker, Âme d8",
            descr: "Ignore le malus de Blessures sur les jets lorsqu'il passe dans un État critique."},
        "Investigateur": {
            type: "N, Int d8, Investigation d8, Réseaux d8",
            descr: "+2 en Investigation et Réseaux."},
        "Leader naturel": {
            type: "N, Âme d8, Commandement",
            descr: "Le leader peut donner des Jetons à ses troupes."},
        "Maître des bêtes": {
            type: "N, Âme d8",
            descr: "Vous obtenez un compagnon animal."},
        "Nerfs d'acier": {
            type: "N, Joker, Vigueur d8",
            descr: "Ignore 1 point de malus lié aux Blessures."},
        "Nerfs d'acier trempé": {
            type: "N, Nerfs d'acier",
            descr: "Ignore 2 points de malus liés aux Blessures."},
        "Noble": {
            type: "N",
            descr: "Riche, Charisme +2, Statut et richesse."},
        "Panache": {
            type: "N, Âme d8",
            descr: "+2 en cas d'utilisation de Jeton pour un jet de Trait (y compris pour un jet d'Encaissement)"},
        "Poigne Ferme": {
            type: "N, Agi d8",
            descr: "Ignore la pénalité lié à une Plateforme instable."},
        "Recycleur": {
            type: "N, Chanceux",
            descr: "Possibilité de trouver un équipement utile une fois par session"},
        "Riche": {
            type: "N",
            descr: "3 fois les fonds de départ, 75 000 $ de salaire annuel."},
        "Très riche": {
            type: "N, Riche",
            descr: "5 fois les fonds de départ, 250 000 $ de salaire annuel."},
        "Séduisant": {
            type: "N",
            descr: "Charisme +2"},
        "Très séduisant": {
            type: "N, Séduisant",
            descr: "Charisme +4"},
        "Sixième sens": {
            type: "N",
            descr: "Jet de Perception à -2 pour anticiper pièges et embuscades."},
        "Touche-à-tout": {
            type: "N, Int d10",
            descr: "Pas de malus de -2 sur les jets de Connaissance non maitrisées."},
        "Véloce": {
            type: "N, Agi d6",
            descr: "Allure +2, le dé de Course passe à d10."},
        "Vif": {
            type: "N",
            descr: "Défausse les cartes de 5 ou moins lors de l'Initiative."},
        "Vigilant": {
            type: "N",
            descr: "+2 en Perception"},
        "Voleur": {
            type: "N, Agi d8, Escalade d6, Crochetage d6, Discrétion d8",
            descr: "+2 en Escalade, Crochetage, Discrétion, et pour désamorcer les pièges."},
        "Volonté de Fer": {
            type: "N, Intimidation d6",
            descr: "+2 en Intimidation et Sarcasme, +2 pour y résister."}
    }
};