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
        "Aveugle": {
            type: "Majeur",
            descr: "-6 à toutes les actions impliquant la vision, -2 sur les jet sociaux et gain d'un Atout supplémentaire."},
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
        "Cul-de-jatte": {
            type: "Majeur",
            descr: "-2 en Allure, et le dé de course est d4. Sans une jambe de bois, l'allure passe à 2, et -2 aux compétences nécessitant une mobilité."},
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
        "Vieux": {
            type: "Majeur",
            descr: "-1 en Allure, -1 en Force et en Vigueur, 5 points supplémentaires pour des compétences liées à l'Intellect."}
    },
    edge: {
        "Acrobate": {
            type: "N, Agi d8, For d6",
            descr: "+2 aux jets d'Agilité liés à la souplesse, +1 en Parade si non-encombré."},
        "Afflux de Pouvoir": {
            type: "Joker, A, Compétence d'Arcane d10",
            descr: "+2d6 PP en cas de Joker lors de l'Initiative."},
        "Ambidextre": {
            type: "N, Agi d8",
            descr: "Ignore le malus de -2 pour la main non directrice."},
        "Adepte": {
            type: "N, Arcanes (Miracles), Foi d8, Combat d8",
            descr: "For+d4 pour les attaques à mains nues&nbsp;; toujours considéré armé&nbsp;; peut lancer certains pouvoirs en tant qu'actions libres (voir texte)"},
        "Arcanes": {
            type: "N, Spécial",
            descr: "Permet de disposer de pouvoirs surnaturels."},
        "Arme fétiche": {
            type: "N, Combat ou Tir d10",
            descr: "+1 en Combat ou en Tir avec une arme précise."},
        "Arme fétiche adorée": {
            type: "V, Arme fétiche",
            descr: "+2 en Combat ou en Tir avec une arme précise."},
        "Arts martiaux": {
            type: "N, Combat d6",
            descr: "For+d4 pour les attaques à mains nues&nbsp;; toujours considéré armé"},
        "Maîtrise des arts martiaux": {
            type: "V, Art martiaux, Combat d10",
            descr: "For+d6 pour les attaques à mains nues"},
        "As": {
            type: "N, Agi d8",
            descr: "+2 en Conduite, Navigation et Pilotage. Peut faire un jet de Résistance pour un véhicule en réussissant un jet à -2."},
        "Assassin": {
            type: "N, Agi d8, Combat d6, Discrétion d8, Escalade d6",
            descr: "+2 aux dégâts contre une cible surprise"},
        "Balayage": {
            type: "N, For d8, Combat d8",
            descr: "Attaque tous les adversaires adjacents à -2."},
        "Grand balayage": {
            type: "V, Balayage",
            descr: "Attaque tous les adversaires adjacents."},
        "Bagarreur": {
            type: "N, For d8",
            descr: "+2 aux dégâts à mains nues"},
        "Cogneur": {
            type: "A, Bagarreur",
            descr: "Le dé de bonus de dégâts à mains nues passe à d8"},
        "Bidouilleur": {
            type: "N, voir texte",
            descr: "+2 aux jets de Réparation, temps de réparation réduit de moitié avec un Relance."},
        "Blocage": {
            type: "A, Combat d8",
            descr: "Parade +1"},
        "Grand blocage": {
            type: "V, Blocage",
            descr: "Parade +2"},
        "Brave": {
            type: "N, Âme d6 +2",
            descr: "+2 aux jets de Terreur"},
        "Bricoleur de génie": {
            type: "N, voir texte",
            descr: "Peut bidouiller un engin une fois par session de jeu."},
        "Champion": {
            type: "N, voir texte",
            descr: "+2 au dégâts et en Résistance contre le mal d'origine surnaturelle."},
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
        "Combatif": {
            type: "A",
            descr: "+2 pour récupérer d'un état Secoué."},
        "Commandement": {
            type: "N, Int d6",
            descr: "Les troupes ont un bonus de +1 pour récupérer d'un état Secoué."},
        "Grande aura de commandement": {
            type: "N, Commandement",
            descr: "L'aura de commandement a un rayon de 10 cases."},
        "Inspiration": {
            type: "A, Commandement",
            descr: "Les troupes ont un bonus de +1 à leurs jets d'Âme."},
        "Acolyte": {
            type: "L, Joker",
            descr: "Un Joker Novice se met au service du personnage."},
        "Contacts": {
            type: "N",
            descr: "Peut demander de l'aide à des amis bien placés."},
        "Contre-attaque": {
            type: "A, Combat d8",
            descr: "Attaque gratuite par Round à -2 contre un adversaire ayant raté son attaque."},
        "Grand contre-attaque": {
            type: "V, Contre-attaque",
            descr: "Comme ci-dessus, sans le malus de -2."},
        "Costaud": {
            type: "N, For d6, Vig d6",
            descr: "Résistance +1, limite de poids à 8 _ For"},
        "Coup Puissant": {
            type: "Joker, A, Combat d10",
            descr: "Double les dégâts en mêlée en cas de Joker lors de l'Initiative."},
        "Courage liquide": {
            type: "N, Vig d6",
            descr: "Gagne un dé de Vigueur en buvant 25 cl d'alcool fort."},
        "Dans le mille&nbsp;!": {
            type: "Joker, A, Tir/Lancer d10",
            descr: "Double les dégâts à distance en cas de Joker lors de l'Initiative."},
        "Débrouillard": {
            type: "N, Int d6, Réparation d6, Perception d8",
            descr: "Peut improviser des gadgets."},
        "Dégaine comme l'éclair": {
            type: "N, Agi d8",
            descr: "Peut dégainer une arme en action gratuite."},
        "Don des langues": {
            type: "N, Int d6",
            descr: "Commence le jeu en maîtrisant un nombre de langues égal à son dé d'Intellect&nbsp;; possibilité de se faire comprendre par n'importe qui avec un jet d'Intellect à -2 après une semaine d'immersion."},
        "Drain de l'âme": {
            type: "A, voir texte",
            descr: "Spécial."},
        "Endurci": {
            type: "L",
            descr: "Résistance +1"},
        "Coriace": {
            type: "L, Endurci",
            descr: "Résistance +2"},
        "Enragé": {
            type: "N",
            descr: "Voir texte."},
        "Érudit": {
            type: "N, d8 dans les Compétences concernées",
            descr: "+2 dans deux Connaissances."},
        "Esquive": {
            type: "A, Agi d8",
            descr: "-1 aux attaques à distance contre le personnage."},
        "Grande esquive": {
            type: "V, Esquive",
            descr: "-2 aux attaques à distance contre le personnage."},
        "Extraction": {
            type: "N, Agi d8",
            descr: "Empêche une attaque ennemie sur une retraite avec un jet d'Agilité."},
        "Grande extraction": {
            type: "N, Extraction",
            descr: "Comme ci-dessus. Avec une Relance, empêche toutes les attaques."},
        "Ferveur": {
            type: "V, Âme d8, Commandement",
            descr: "Les troupes ont un bonus de +1 aux dégâts."},
        "Florentine": {
            type: "N, Agi d8, Combat d8",
            descr: "+1 en Combat contre les cibles n'ayant qu'une arme et sans bouclier. Ignore 1 point de bonus pour des attaquants multiples."},
        "Forestier": {
            type: "N, Âme d6, Survie d8, Pistage d8",
            descr: "+2 en Survie, Pistage et Discrétion."},
        "Frappe éclair": {
            type: "N, Agi d8",
            descr: "Peut attaquer un adversaire se portant au contact."},
        "Frappe Foudroyante": {
            type: "H, Frappe éclair",
            descr: "Peut attaque tous les adversaires se portant au contact."},
        "Frénésie": {
            type: "A, Combat d10",
            descr: "Peut faire une attaque supplémentaire avec un malus de -2."},
        "Frénésie Suprême": {
            type: "V, Frénésie",
            descr: "Peut faire une attaque supplémentaire."},
        "Serrez les Rang&nbsp;!": {
            type: "A, Int d8, Commandement",
            descr: "Les troupes ont un bonus de +1 aux Résistance."},
        "Guérison rapide": {
            type: "N, Vigueur d8",
            descr: "+2 au jets de guérison naturelle."},
        "Guérisseur": {
            type: "N, Âme d8",
            descr: "+2 au jets de Soins."},
        "Guerrier saint / impie": {
            type: "N, voir texte",
            descr: "Voir texte"},
        "Increvable": {
            type: "N, Joker, Âme d8",
            descr: "Ignore le malus de Blessures sur les jets lorsqu'il passe dans un État critique."},
        "Trompe-la-mort": {
            type: "V, Increvable",
            descr: "50&nbsp;% de chance de survivre à une «&nbsp;mort&nbsp;»."},
        "Instinct de tueur": {
            type: "H",
            descr: "Remporte les oppositions en cas d'égalité. Possibilité de relancer un 1 sur un jet Opposé."},
        "Investigateur": {
            type: "N, Int d8, Investigation d8, Réseaux d8",
            descr: "+2 en Investigation et Réseaux."},
        "Leader naturel": {
            type: "N, Âme d8, Commandement",
            descr: "Le leader peut donner des Jetons à ses troupes."},
        "Lien animal": {
            type: "N",
            descr: "Le personnage peut donner des Jetons à ses animaux."},
        "Lien mutuel": {
            type: "N, Joker, Âme d8",
            descr: "Le personnage peut donner des Jetons à ses compagnons."},
        "Mage": {
            type: "N, voir texte",
            descr: "Chaque Relance sur le jet d'Arcanes réduit le coût en pouvoir du sort de 1."},
        "Maître d'armes": {
            type: "L, Combat d12",
            descr: "Parade +1"},
        "Maître d'armes légendaire": {
            type: "L, Maître d'armes",
            descr: "Parade +2"},
        "Maître des bêtes": {
            type: "N, Âme d8",
            descr: "Vous obtenez un compagnon animal."},
        "Meneur d'hommes": {
            type: "V, Commandement",
            descr: "Dé Joker à d10 pour les jets de groupe des alliés"},
        "Mentaliste": {
            type: "N, Arcanes (Psioniques), Int d8, Psioniques d6",
            descr: "+2 pour tout jet de Psioniques Opposé."},
        "Nerfs d'acier": {
            type: "N, Joker, Vigueur d8",
            descr: "Ignore 1 point de malus lié aux Blessures."},
        "Nerfs d'acier trempé": {
            type: "N, Nerfs d'acier",
            descr: "Ignore 2 points de malus liés aux Blessures."},
        "Noble": {
            type: "N",
            descr: "Riche, Charisme +2, Statut et richesse."},
        "Nouveau Pouvoir": {
            type: "N, Arcanes",
            descr: "Le personnage obtient un nouveau pouvoir."},
        "Panache": {
            type: "N, Âme d8",
            descr: "+2 en cas d'utilisation de Jeton pour un jet de Trait (y compris pour un jet d'Encaissement)"},
        "Poigne Ferme": {
            type: "N, Agi d8",
            descr: "Ignore la pénalité lié à une Plateforme instable."},
        "Points de Pouvoir": {
            type: "N, Arcanes",
            descr: "+5 PP, une fois par Rang."},
        "Professionnel": {
            type: "L, d12 dans le Trait",
            descr: "Le Trait passe à d12+1"},
        "Expert": {
            type: "L, Professionnel dans le Trait",
            descr: "Le Trait passe à d12+2"},
        "Maître": {
            type: "L, Joker, Expert dans le Trait",
            descr: "Le dé Joker passe à d10 pour ce Trait."},
        "Recycleur": {
            type: "N, Chanceux",
            descr: "Possibilité de trouver un équipement utile une fois par session"},
        "Résistance aux arcanes": {
            type: "N, Âme d8",
            descr: "Armure +2 contre la magie, +2 pour résister aux pouvoirs."},
        "Grande résistance aux arcanes": {
            type: "N, Résistance aux arcanes",
            descr: "Armure +4 contre la magie, +4 pour résister aux pouvoirs."},
        "Riche": {
            type: "N",
            descr: "3 fois les fonds de départ, 75 000 $ de salaire annuel."},
        "Très riche": {
            type: "N, Riche",
            descr: "5 fois les fonds de départ, 250 000 $ de salaire annuel."},
        "Rock n' Roll&nbsp;!": {
            type: "A, Tir d8",
            descr: "Le tireur ignore le malus de Tir automatique s'il ne se déplace pas."},
        "Sans pitié": {
            type: "A",
            descr: "Peut utiliser des Jetons sur les jets de dégâts."},
        "Séduisant": {
            type: "N",
            descr: "Charisme +2"},
        "Très séduisant": {
            type: "N, Séduisant",
            descr: "Charisme +4"},
        "Sixième sens": {
            type: "N",
            descr: "Jet de Perception à -2 pour anticiper pièges et embuscades."},
        "Source de pouvoir": {
            type: "A, Âme d6, Arcanes",
            descr: "Regagne 1 PP toutes les 30 minutes."},
        "Grande source de pouvoir": {
            type: "V, Source de pouvoir",
            descr: "Regagne 1 PP toutes les 15 minutes."},
        "Suivants": {
            type: "L, Joker",
            descr: "Attire 5 suivants."},
        "Tacticien": {
            type: "A, Joker, Int d8, Conn. (Bataille) d6",
            descr: "Le joueur fait un jet de Connaissance (Bataille) et gagne une carte d'action par Succès et Relance. Il peut par la suiteremplacer la carte d'un allié par une de celles-ci durant le combat."},
        "Tête froide": {
            type: "A, Int d8",
            descr: "Agit sur la meilleure de deux cartes en combat."},
        "Sang-froid": {
            type: "A, Tête Froide",
            descr: "Agit sur la meilleure de trois cartes en combat."},
        "Tireur d'élite": {
            type: "A",
            descr: "La manœuvre Visée (+2 en Tir) est automatique si le personnage ne se déplace pas."},
        "Touche-à-tout": {
            type: "N, Int d10",
            descr: "Pas de malus de -2 sur les jets de Connaissance non maitrisées."},
        "Tueur de géant": {
            type: "V",
            descr: "+1d6 aux dégâts contre les grandes créatures."},
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