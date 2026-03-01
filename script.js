// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    const progressBar = document.getElementById("myBar");
    const loader = document.getElementById("page-loader");

    // 1. On lance l'animation de la barre après un tout petit délai
    setTimeout(() => {
        if (progressBar) {
            progressBar.style.width = "100%";
        }
    }, 100);

    // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0"; // Effet de fondu
            loader.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                loader.style.display = "none";
                loader.classList.remove('active');
                // Affiche la page Home par défaut
                document.getElementById('page-home').classList.add('active');
            }, 500); // Attend la fin du fondu
        }
    }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai



    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: '✅ CANAL TELEGRAM ✅',
            url: 'https://t.me/+1Bta_gUn1n4zODY0',
            id: 'telegram-secours',
            className: 'secours',
            text: "✅ CANAL TELEGRAM ✅"
        },
        {
            name: '💜 LUFFA 💜',
            url: 'https://callup.luffa.im/c/T9saE1ig4Lc',
            id: 'luffa-main',
            className: 'luffa', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "💜 LUFFA 💜"
        },
        {
            name: '📡 SIGNAL 📡',
            url: 'https://signal.me/#eu/Mhq6hOkKYobfdYTvkzalmEKmtr71IxpE0GcZZ23uC_Vfa2ABrntMwoTu4hfypC1_',
            id: 'signal-main',
            className: 'signal', // Garde le style Bleu Telegram
            text: "📡 SIGNAL 📡"
        },
        {
            name: '💚 WHATSAPP 💚',
            url: 'https://wa.me/33759010537',
            id: 'whatsapp',
            className: 'whatsapp', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "💚 WHATSAPP 💚"
        },
        {
            name: '💻 INSTAGRAM 💻',
            url: 'https://www.instagram.com/casaaaverdeee?igsh=MXFneXNpbHpvNGV6dA%3D%3D&utm_source=qr',
            id: 'instagram-main',
            className: 'instagram', // Garde le style Marron/Doré Potato
            text: "💻 INSTAGRAM 💻"
        },
    ];

// --- DONNÉES DE L'APPLICATION (CASAVERDE) ---
const appData = [
    // ============================================================
    // CATEGORIE 4 : FROZEN
    // ============================================================
    {
        id: '🧊 FROZEN 🧊',
        name: '🧊 FROZEN 🧊',
        type: 'Frozen',
        quality: '🧊 FROZEN 🧊',
        image: 'CategFrozen.png',

        // On supprime "farms: []" et on place "products: []" directement ici
        products: [
            // Tu pourras ajouter tes produits Frozen directement ici, comme ceci :
            {
                id: '🥜❄️ Peanut Butter Fly',
                flag: '🇲🇦',
                name: '🥜❄️ Peanut Butter Fly',
                farm: 'CasaSelection 🧞',
                promoEligible: true,
                type: 'Frozen',
                image: 'ProductPeanut.jpg',
                images: ['ProductPeanut1.jpg',],
                video: 'VideoPeanut.mov',
                description: 'Frozen Sift – Qualité / Prix au top 💸🔥\n\n Un frozen sift riche et savoureux, à la texture fine et dorée ✨        \n\n 🥜 Arômes : beurre de cacahuète crémeux, notes légèrement sucrées et toastées\n ❄️ Frozen : fraîcheur préservée, terpènes bien présents\n 🌿 Texture : sableuse, propre et fondante  \n\n  Une qualité qui frappe fort pour le prix — gourmand, efficace et accessible.',
                tarifs: [
                    { weight: '10g', price: 90.00 },
                    { weight: '20g', price: 160.00 },
                    { weight: '50g', price: 400.00 },
                    { weight: '100g', price: 650.00 },
                ]
            }
           
        ]
    },
    // ============================================================
    // CATEGORIE 1 : HASH 🍫
    // ============================================================
    {
        id: 'HASH',
        name: '🇲🇦 HASH 🇺🇸',
        type: 'Hash',
        quality: '🇲🇦 HASH 🇺🇸',
        image: 'CategHash.png',

        farms: [
            {
                id: 'mousseux',
                name: '🧽 Mousseux/CaliMousse 🇺🇸',
                image: '', // Tu pourras ajouter une image ici plus tard
                products: [
                    {
                        id: 'Tangie Power 🍊',
                        flag: '🇺🇸',
                        name: 'Tangie Power 🍊',
                        farm: '🗽 L.A Mousse',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductTangie.jpg',
                        video: 'VideoTangie.mov',
                        description: '🇺🇸 L.A Mousse Californienne – Dry Sift ✨ \n\n Vive et lumineuse, Tangie Power séduit avec ses têtes vert éclatant et ses reflets orange flamboyants. \n Au nez, une explosion d’agrumes sucrés et de mandarine fraîche.\n  Une vibe solaire, énergique et créative.',
                        tarifs: [
                            { weight: '10g', price: 60.00 },
                            { weight: '20g', price: 110.00 },
                            { weight: '50g', price: 250.00 },
                            { weight: '100g', price: 390.00 },
                        ]
                    },
                    {
                        id: 'Mendo Purps 🌺',
                        flag: '🇺🇸',
                        name: 'Mendo Purps 🌺',
                        farm: '🗽 L.A Mousse',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductMendo.jpg',
                        video: 'VideoMendo.mov',
                        description: '🇺🇸 L.A Mousse Californienne – Dry Sift ✨ \n\n Dense et élégante, Mendo Pups dévoile des nuances vert profond et violettes couvertes de résine brillante.\n Des arômes de raisin mûr et de baies sucrées.\n Une ambiance douce, relaxante et chaleureuse.',
                        tarifs: [
                            { weight: '10g', price: 60.00 },
                            { weight: '20g', price: 110.00 },
                            { weight: '50g', price: 250.00 },
                            { weight: '100g', price: 390.00 },
                        ]
                    },
                ]
            },
            {
                id: 'prenium_filtred',
                name: '🎯 Prenium filtred 🎯',
                image: '',
                products: [
                    {
                        id: '✨ 35u Mimosa 🍊',
                        flag: '🇺🇸',
                        name: '✨ 35u Mimosa 🍊',
                        farm: 'Farmz KGF 🏋🏻‍♂️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductMimo.png',
                        video: 'VideoMimo.mov',
                        description: '💎 Type : 35u Premium \n\n Un 35 microns propre et ultra fin, signé Farmz KGF — une maison déjà bien connue pour sa constance et sa qualité 🔥\n\n 🍊 Profil : Mimosa éclatante, agrumes frais, légère touche sucrée\n ✨ Texture : poudre fine, claire et brillante (35u sélectionné)\n ❄️ Rendu : arômes nets, terpènes bien présents\n\n Franchement top — une valeur sûre, maison reconnue, qualité au rendez-vous.',
                        tarifs: [
                            { weight: '5g', price: 50.00 },
                            { weight: '10g', price: 90.00 },
                        ]
                    },
                    {
                        id: 'Sunset Sherbet 🌅',
                        flag: '🇺🇸',
                        name: 'Sunset Sherbet 🌅',
                        farm: 'DHF 🍹',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductSunset.jpg',
                        video: 'VideoSunset.mov',
                        description: '💎 Type : 120u Premium \n\n ✨ Arômes : fruits sucrés 🍊 • agrumes 🍋 • crème onctueuse 🍦 • touche gassy légère ⛽\n 💎 Qualité : extraction fine 120u • très propre • riche en terpènes • texture sableuse premium\n⚡ Effets : euphorie douce 😄 → relaxation chaleureuse 😌 → bien-être profond 🌙\n 🔥 Style : gourmand • terpénique • haut de gamme\n\n Un produit élégant et savoureux, combinant puissance maîtrisée et profil dessert intense, parfait pour les amateurs de résines premium. ✨',
                        tarifs: [
                            { weight: '10g', price: 80.00 },
                            { weight: '25g', price: 180.00 },
                            { weight: '50g', price: 250.00 },
                            { weight: '100g', price: 470.00 },
                        ]
                    },
                    {
                        id: 'Tropicali 🌴',
                        flag: '🇺🇸',
                        name: 'Tropicali 🌴',
                        farm: 'DHF 🍹',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductTropi.jpg',
                        video: 'VideoTropi.mov',
                        description: '💎 Type : 120u Premium \n\n ✨ Arômes : explosion de fruits tropicaux 🍍🥭 • agrumes sucrés 🍊 • notes exotiques intenses\n 💎 Qualité : extraction 120u ultra propre • texture parfaite • aspect clair et résineux • très riche en terpènes\n👃 Odeur : extrêmement prononcée — parfum fruité qui remplit instantanément la pièce\n 👅 Goût : fidèle à l’odeur, long en bouche, sucré et exotique\n ⚡ Effets : euphorie rapide 😄 → relaxation agréable 😌 → sensation premium durable ✨\n  🔥 Puissance : élevée avec une grande richesse aromatique\n\n Un 120u exceptionnel, aussi impressionnant par son odeur que par son goût et son visuel, destiné aux amateurs de résines haut de gamme et de profils fruités explosifs. 💎🌈',
                        tarifs: [
                            { weight: '10g', price: 80.00 },
                            { weight: '25g', price: 180.00 },
                            { weight: '50g', price: 250.00 },
                            { weight: '100g', price: 470.00 },
                        ]
                    },
                ]
            },
            {
                id: 'Ofrozen',
                name: '💎 Olive Frozen 💎',
                image: '',
                products: [
                    {
                        id: '🫒✨ Jasmin Pannacota',
                        flag: '🇲🇦',
                        name: '🫒✨ Jasmin Pannacota',
                        farm: 'No Farm – Frozen Premium ❄️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductPanna.jpg',
                        video: 'VideoPanna.mov',
                        description: 'Un bijou aromatique aux notes de jasmin floral 🌼, crème onctueuse et touche subtile d’olive. \n\n ❄️ Extraction frozen pour une fraîcheur intense\n 🌿 Arômes purs et élégants\n 💎 Texture riche et soyeuse\n\n Une création premium, douce, parfumée et délicieusement raffinée.',
                        tarifs: [
                            { weight: '10g', price: 120.00 },
                            { weight: '20g', price: 220.00 },
                            { weight: '30g', price: 330.00 },
                        ]
                    },
                    {
                        id: 'Orange Bud 🍊',
                        flag: '🇲🇦',
                        name: 'Orange Bud 🍊',
                        farm: 'Gaz N Fruit ⚠️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductOrange.jpg',
                        video: 'VideoOrange.mov',
                        description: '🫒 Olive 10g \n curé sec, pétant ⚡️🤩 \n\n ✨ Arômes : orange 🍊 • agrumes sucrés 🍬 • zesty ⚡ \n 👃 Odeur : puissante, propre 💥 \n 💎 Aspect : olive compacte • sèche • résine brillante ❄️  \n 👅 Goût : fruité explosif, fidèle 🔥\n 🚀 Effets : euphorie 😄 → relaxation 😌 → défonce nette 😵‍💫\n\n Orange Bud premium : goût intense, effet solide, top qualité. 🍊💎🔥',
                        tarifs: [
                            { weight: '10g', price: 120.00 },
                            { weight: '20g', price: 220.00 },
                            { weight: '30g', price: 330.00 },
                        ]
                    },
                    {
                        id: 'Blue Magic💙',
                        flag: '🇲🇦',
                        name: 'Blue Magic💙',
                        farm: 'Gaz N Fruit ⚠️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductBlue.jpg',
                        video: 'VideoBlue.mov',
                        description: '🤯 Olive 10g curé sec/pétant 🤯 \n ✨ Arômes : fruits bleus 🫐 • bonbon 🍬 • crémeux 🍦 • léger gassy ⛽ \n👃 Odeur : sucrée, intense, très gourmande 💥 \n 💎 Aspect : olive compacte • sèche parfaite • résine brillante ❄️ \n 👅 Goût : fruité doux, long en bouche 🔥 \n🚀 Effets : euphorie 😄 → relaxation 😌 → défonce marquée 😵‍💫   \n\n Blue Magic premium : gourmande, puissante et ultra terpénique. 💎🔥',
                        tarifs: [
                            { weight: '10g', price: 120.00 },
                            { weight: '20g', price: 220.00 },
                            { weight: '30g', price: 330.00 },
                        ]
                    },
                    {
                        id: 'Gelato 41 💚',
                        flag: '🇲🇦',
                        name: 'Gelato 41 💚',
                        farm: 'Gaz N Fruit ⚠️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductGelato.jpg',
                        video: 'VideoGelato.mov',
                        description: '💎 Frozen Sift Premium — Olive 10g (curé sec, pétant)\n ✨ Arômes : crème sucrée 🍦 • notes dessert 🍰 • touche gassy légère ⛽\n 👃 Odeur : propre, gourmande et puissante 💥\n 💎 Aspect : olive verte compacte • sèche parfaite • résine brillante ❄️\n 👅 Goût : crémeux, doux, très terpénique 🔥\n 🚀 Effets : euphorie 😄 → relaxation profonde 😌 → défonce solide 😵‍💫\n\n Un Gelato 41 premium, gourmand et puissant, avec un équilibre parfait goût / effet. 💎🔥',
                        tarifs: [
                            { weight: '10g', price: 120.00 },
                            { weight: '20g', price: 220.00 },
                            { weight: '30g', price: 330.00 },
                        ]
                    },
                ]
            },
            {
                id: 'static',
                name: '🐉 Static 🐉',
                image: '',
                products: [
                    {
                        id: 'Red Velvet 🛑',
                        flag: '🇲🇦',
                        name: 'Red Velvet 🛑',
                        farm: 'Gaz N Fruit ⚠️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductRed.jpg',
                        video: 'VideoRed.mov',
                        description: '✨ Arômes : fruits sucrés 🍓 • crème dessert 🍰 • touche gassy ⛽\n 💎 Qualité : fleurs denses • ultra résineuses • couleurs violettes/rouges\n⚡ Effets : euphorie 😄 → relaxation 😌\n 🔥 Style : gourmand • moderne • premium\n\n Une variété riche, puissante et élégante, parfaite pour les amateurs de saveurs sucrées avec du caractère. 💜',
                        tarifs: [
                            { weight: '5g', price: 90.00 },
                            { weight: '10g', price: 160.00 },
                            { weight: '20g', price: 300.00 },
                        ]
                    },
                    {
                        id: 'Donny Burger 🍔',
                        flag: '🇲🇦',
                        name: 'Donny Burger 🍔',
                        farm: 'Gaz N Fruit ⚠️',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductDonny.jpg',
                        images: ['ProductDonny2.jpg',],
                        video: 'VideoDonny.mov',
                        description: '💨 Arômes : gassy puissant ⛽ • terreux 🌿 • poivré 🌶️ • touche skunk \n 💎 Qualité : têtes compactes • très résineuses • aspect givré ❄️\n ⚡ Effets : montée lourde 🧠 → relaxation extrême 🛋️ → effet “scotché” 🚀\n 🔥 Puissance : très élevée — réservé aux habitués\n\n 🍔⚡️Une variété brute et redoutable, connue pour sa défonce massive et son effet couch-lock intense. Parfaite pour ceux qui recherchent une puissance maximale et une détente profonde. 💥',
                        tarifs: [
                            { weight: '5g', price: 90.00 },
                            { weight: '10g', price: 160.00 },
                            { weight: '20g', price: 300.00 },
                        ]
                    }
                ]
            },
            {
                id: 'static_usa',
                name: '🇺🇸 Static usa 🇺🇸',
                image: '',
                products: []
            }
        ]
    },

    // ============================================================
    // CATEGORIE 2 : WEED 🌿
    // ============================================================
    {
        id: 'Weed',
        name: 'FLEURS 🇪🇸🇳🇱🇺🇸',
        type: 'Weed',
        quality: 'FLEURS 🇪🇸🇳🇱🇺🇸',
        image: 'CategWeed.png',

        farms: [
            {
                id: 'perfecto_spania',
                name: '🇪🇸 Perfecto Spania 🇪🇸',
                image: '',
                products: []
            },
            {
                id: 'prima_hollandia',
                name: '🇳🇱 Prima hollandia 🇳🇱',
                image: '',
                products: []
            },
            {
                id: 'great_canada',
                name: '🇨🇦 Great Canada 🇨🇦',
                image: '',
                products: [
                    {
                        id: '💜 PURPLE PUNCH 🥊',
                        flag: '🇺🇸',
                        name: '💜 PURPLE PUNCH 🥊',
                        farm: 'CasaSelection 🧞',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductPunch.jpg',
                        video: 'VideoPunch.mov',
                        description: '💜 Couleurs : Violet profond mêlé de vert foncé, avec pistils orange éclatants.\n ❄️ Aspect : Ultra résineuse, texture dense et compacte, effet “givré”.\n 🍇 Arôme : Raisin sucré, baies mûres, fond légèrement terreux et crémeux.\n 🧘‍♂️ Effet (décrispration) :\n  • Relâchement musculaire progressif\n  • Sensation de lourdeur agréable\n  • Calme mental, stress qui descend doucement\n  • Idéale en fin de journée \n\n 🇨🇦 Version “Cali Canadienne” \n\n Quand elle est cultivée en style Cali premium au Canada, on retrouve souvent :\n ✔️ Manucure très propre\n ✔️ Têtes très compactes\n ✔️ Taux de résine élevé\n ✔️ Profil terpénique intense et sucré \n\n ✨ En résumé : une variété parfaite pour une décompression profonde, ambiance chill, musique douce, détente totale.',
                        tarifs: [
                            { weight: '5g', price: 50.00 },
                            { weight: '10g', price: 90.00 },
                            { weight: '25g', price: 220.00 },
                            { weight: '50g', price: 400.00 },
                            { weight: '100g', price: 650.00 },
                        ]
                    },
                    {
                        id: '🍩 Zkittlez ✘ Gélato 🍦',
                        flag: '🇺🇸',
                        name: '🍩 Zkittlez ✘ Gélato 🍦',
                        farm: 'CasaSelection 🧞',
                        promoEligible: true,
                        type: 'Filtrer',
                        image: 'ProductZG.jpg',
                        video: 'VideoZG.mov',
                        description: '💚💜 Couleurs : Mélange éclatant de vert clair et de violet profond, avec des pistils orange vif.\n ❄️ Aspect : Ultra givrée, recouverte d’une couche épaisse de trichomes brillants.\n 💎 Structure : Têtes compactes, rondes et denses, manucure propre style Cali premium.\n\n 🍭🍦 Arômes\n  • Bonbon tropical (héritage Zkittlez)\n  • Notes crémeuses et sucrées (héritage Gelato)\n  • Légère touche terreuse / vanillée en fond\n\n 🧠 Profil général\n • Montée euphorique et joyeuse\n • Sensation relaxante progressive\n  • Hybride équilibrée, douce mais puissante\n\n 🌈 En résumé : une fleur colorée, sucrée et élégante, mélange parfait entre le côté candy fruité et la crème onctueuse.',
                        tarifs: [
                            { weight: '5g', price: 50.00 },
                            { weight: '10g', price: 90.00 },
                            { weight: '25g', price: 220.00 },
                            { weight: '50g', price: 400.00 },
                            { weight: '100g', price: 650.00 },
                        ]
                    },
                ]
            },
            {
                id: 'bangers_usa',
                name: '🇺🇸 Bangers USA 🇺🇸',
                image: '',
                products: []
            }
        ]
    },

    // ============================================================
    // CATEGORIE 3 : CANDY / EDIBLES 🍬
    // ============================================================
    {
        id: '🇨🇦 CANDY 🇺🇸',
        name: '🇨🇦 CANDY 🇺🇸',
        type: '🇨🇦 CANDY 🇺🇸',
        quality: '🇨🇦 CANDY 🇺🇸',
        image: 'CategCandy.png',

        farms: [
            {
                id: 'space_cake',
                name: '🧁 Space cake 🧁',
                image: '',
                products: []
            },
            {
                id: 'vap_thc',
                name: '🚬 Vap thc 🚬',
                image: '',
                products: []
            },
            {
                id: 'gummies',
                name: '🧸 Gummies 🧸',
                image: '',
                products: []
            },
            {
                id: 'prerolls_donuts',
                name: '🍩 Pre Rolls / Donuts 🍩',
                image: '',
                products: []
            }
        ]
    }
];


    /* {
                            id: 'Cocolato 🍫',
                            flag: '💎',
                            name: 'Cocolato 🍫',
                            farm: 'Sticky Fingers 🌱',
                            promoEligible: true,
                            type: 'Filtrer',
                            image: 'ProductCoco.jpg',
                            video: 'VideoCoco.mp4',
                            description: '🚨 EXCLU 2026 🚨 \n\n 💎 Nouvelle frappe filtrée DISPONIBLE \n La team, du très lourd vient d’atterrir 💥 \n\n 🔬 Microns : 90u \n Texture premium, résine ultra clean, qualité au rendez-vous 😮‍🔥 \n\n ⚡ Quantités limitées – premiers arrivés, premiers servis ⚡ ',
                            tarifs: [
                                { weight: '10g', price: 90.00 },
                                { weight: '25g', price: 180.00 },
                                { weight: '50g', price: 320.00 },
                                { weight: '100g', price: 570.00 },
                            ]
                        },
                        {
                            id: 'RUNTZ 🔥',
                            flag: '🇺🇸',
                            name: 'RUNTZ 🔥',
                            farm: 'CALIPLATE 🪐',
                            promoEligible: true,
                            type: 'Filtrer',
                            image: 'ProductRuntz.png',
                            video: 'VideoRuntz.mp4',
                            description: '🇺🇸 MADE IN USA \n\n ✅ Produit certifié \n\n 🔍 QR Code d’authentification inclus \n Qualité alimentaire.',
                            tarifs: [
                                { weight: '1g', price: 30.00 },
                                { weight: '4g', price: 100.00 },
                                { weight: '10g', price: 220.00 },
                                { weight: '50g', price: 980.00 },
                                { weight: '100g', price: 1850.00 },
                            ]
                        },
                        {
                            id: '🇲🇦 73u 🧙🏻‍♂️',
                            flag: '🇺🇸',
                            name: '🇲🇦 73u 🧙🏻‍♂️',
                            farm: '🍁 No Farm 🍁',
                            promoEligible: true,
                            type: 'Filtrer',
                            image: 'Product7.jpg',
                            video: 'Video7.mp4',
                            description: '🔥 NEW DROP 🔥 \n\n Frappe de filtré 🇲🇦 \n  Microns : 73u \n\n 📲 Dispo maintenant \n ⚠️ Quantités limitées',
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '25g', price: 140.00 },
                                { weight: '50g', price: 200.00 },
                                { weight: '100g', price: 360.00 },
                            ]
                        } */
                      /*   {
                            id: '❄️ FRESH FROZEN 🔥',
                            flag: '🇲🇦',
                            name: '❄️ Fresh Frozen 🔥',
                            farm: '🏠 FROZEN NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductP.jpg',
                            images: ['ProductP.jpg','ProductP1.jpg',],
                            videos: ['VideoP.mp4','VideoP1.mp4'],
                            description: '❄️🔥 FRESH FROZEN – SINGLE SOURCE – P420 🔥❄️ \n\n 🌱 Produit 100% Single Source \n ➡️ De la plante à l’extraction, maîtrise totale \n ❄️ Extraction Fresh Frozen pour garder tous les arômes & terpènes \n 💎 Qualité premium, goût intense, texture onctueuse \n\n 🧬 2 STRAINS DISPONIBLES : \n\n 🔬 GMO \n  ⛽🧄 Ultra puissant, gazzy, lourd en bouche \n 👉 Parfait pour les amateurs de sensations fortes \n\n 🍓 Lamponie \n 🍬 Fruité, sucré, notes de framboise \n 👉 Smooth, gourmand, super parfumé \n\n 💸🤝 Pas cher la team \n 🔥 On arrange MAX sur les prix \n 📦 Qualité au top, dispo limitée \n\n 🚀💨 Du vrai fire, pour les vrais connaisseurs 💨🚀',
                             // 👇 NOUVELLE STRUCTURE
                             variantTitle: 'Saveurs Frozen ❄️ :', 
                             jars: [
                                 { name: 'GMO', emoji: '🔬', colorClass: 'style-gmo' },
                                 { name: 'Lamponie', emoji: '🍓', colorClass: 'style-lampo' },
                             ],
 
                            tarifs: [
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 200.00 },
                                { weight: '50g', price: 300.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            images: ['ProductSift.jpg','ProductTangier.jpg','ProductGrappe.jpg'],
                            videos: [
                                'VideoTangier.mp4', // Ta 1ère vidéo
                                'VideoGrappe.mp4', // Ta 1ère vidéo
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },
                                { name: 'TANGIER', emoji: '🍊', colorClass: 'style-tangier' },
                                { name: 'GRAPPE', emoji: '🍇', colorClass: 'style-grappe' },
                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        } */

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "BACKPACK10": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        }
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            // 1. Cherche dans les produits directs (Nouveau cas)
            if (category.products) {
                const product = category.products.find(p => p.id === productId);
                if (product) return product;
            }

            // 2. Cherche dans les farms (Ancien cas)
            if (category.farms) {
                for (const farm of category.farms) {
                    const product = farm.products.find(p => p.id === productId);
                    if (product) return product;
                }
            }
        }
        return undefined; // Non trouvé
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');
        const avisNav = document.getElementById('nav-avis'); // <-- AJOUT ICI

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');
        if (avisNav) avisNav.classList.remove('active'); // <-- AJOUT ICI

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else if (pageId === 'page-avis') { // <-- LA NOUVELLE CONDITION
            if (avisNav) avisNav.classList.add('active');
        }else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ : renderHomePage ---

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; // Pas de filtres pour les farms
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 colonne pour les farms

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `
            border: none;
            color: #2c2c2c;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 2.5vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #043724, #ffcc003b);
                        border-radius: 10px;`;

            filterContainer.prepend(backButton);

        } else if (currentView === 'simple_products') { 

            updateFarmFilter(currentCategoryId);

            renderProductListSimple(currentCategoryId);

            // --- GESTION DES FILTRES ---
            // 1. On AFFICHE la barre de recherche
            searchFilterWrapper.style.display = 'flex';
            
            // 2. On AFFICHE le filtre Farm
            farmFilterWrapper.style.display = 'flex'; 
            
            // 3. On CACHE le filtre Qualité ("Sélection du chef")
            qualityFilterWrapper.style.display = 'none';

            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

            backButton.style.cssText = `
            border: none;
            color: #2c2c2c;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 2.5vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #043724, #ffcc003b);
            border-radius: 10px;`;

            filterContainer.prepend(backButton);

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';

        } else if (currentView === 'products') {
            updateFarmFilter(currentCategoryId, currentFarmId); 

            renderProductList(currentCategoryId, currentFarmId);

            // --- GESTION DES FILTRES (Vue Produit) ---
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex'; // On montre les filtres produits
            qualityFilterWrapper.style.display = 'none'; // On cache la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes

            // --- AJOUT BOUTON RETOUR (vers Farms) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const farm = category.farms.find(f => f.id === currentFarmId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn'; // CLASSE IMPORTANTE
            backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
            backButton.style.cssText = `
            border: none;
            color: #2c2c2c;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 2.5vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #043724, #ffcc003b);
                        border-radius: 10px;`;

            filterContainer.prepend(backButton);
        }
    }

// --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find(c => c.id === categoryId);
    const farmFilter = document.getElementById('farm-filter');
    
    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
        const subCategory = category.farms.find(f => f.id === subCategoryId);
        if (subCategory) {
            subCategory.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    } 
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
        if (category.farms) {
            // Si c'est une catégorie à tiroirs, on prend tout
            category.farms.forEach(sub => {
                sub.products.forEach(p => {
                    if (p.farm) availableFarms.push(p.farm);
                });
            });
        } else if (category.products) {
            // Si c'est une catégorie simple
            category.products.forEach(p => {
                if (p.farm) availableFarms.push(p.farm);
            });
        }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ['all', ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;
    
    farmFilter.innerHTML = uniqueFarms.map(farm => 
        `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`
    ).join('');

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
        farmFilter.value = currentValue;
    } else {
        farmFilter.value = 'all';
        currentFilters.farm = 'all'; 
    }
}

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    // Quand toute la page (images comprises) est chargée
window.addEventListener('load', () => {
    // Optionnel : On ajoute un petit délai de 300ms pour bien voir la fin de l'animation
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            // Grâce à la transition CSS, ça va faire un fondu propre de 0.6s
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }
    }, 1500); 
});

    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    // --- FONCTION MODIFIÉE : Affichage liste bouton ---
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        // On change le style de la grille pour avoir une seule colonne (liste verticale)
        productListContainer.style.gridTemplateColumns = '1fr';
        productListContainer.style.gap = '10px'; // Espacement entre les boutons

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée.</p>';
            return;
        }

        farms.forEach(farm => {
            const btn = document.createElement('div');
            // On change la classe pour ne plus utiliser le style "card"
            btn.className = 'farm-list-btn';
            btn.dataset.farmId = farm.id;

            if (farm.clickable === false) {
                btn.classList.add('unclickable');
            }

            const productCount = farm.products.length;
            const countText = productCount > 0 ? `${productCount} prod.` : '';

            // Structure : Icone | Nom + Badge | Flèche
            btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
            productListContainer.appendChild(btn);
        });
    }


// Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
function renderProductListSimple(categoryId) {
    const category = appData.find(c => c.id === categoryId);
    if (!category || !category.products) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
        return;
    }

    // Mise à jour du filtre farm intelligent
    if(typeof updateFarmFilter === "function") updateFarmFilter(categoryId); 

    // On filtre le tableau products
    const filteredProducts = category.products.filter(product => {
        const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
        const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
        return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = '';
    if (filteredProducts.length === 0) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card product-item-card';
        card.dataset.productId = product.id;
        
        // --- 1. LOGIQUE PLEINE LARGEUR ---
        // Si c'est un Pack, on ajoute la classe spéciale
        if (product.type === 'Pack' || product.id === 'PackNoel2025') {
            card.classList.add('full-width');
        }

        if (product.clickable === false) card.classList.add('unclickable');

        let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

        // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
        let imgHTML = '';
        if (product.image && product.image !== '') {
            imgHTML = `<img src="${product.image}" alt="${product.name}">`;
        }

        card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
        productListContainer.appendChild(card);
    });
}
    // Affiche la liste des PRODUITS pour une farm
    function renderProductList(categoryId, farmId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }
        const farm = category.farms.find(f => f.id === farmId);
        if (!farm) {
            productListContainer.innerHTML = '<p class="no-results">Farm non trouvée.</p>';
            return;
        }
        const filteredProducts = farm.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;

            return searchMatch && farmMatch; // On retourne sans le qualityMatch
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
        if (product.id === 'PackNoel2025' || product.type === 'Pack') {
            card.classList.add('full-width');
        }

            if (product.clickable === false) {
                card.classList.add('unclickable');
            }

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

     

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            productListContainer.appendChild(card);
        });
    }


    // Affiche la page de détail d'un produit
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;
    
        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');
    
        // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
        let galleryHTML = '';
        let hasMedia = false;
    
        // Images
        let mediaItems = [];
        if (product.images && product.images.length > 0) {
            mediaItems = product.images;
        } else if (product.image && product.image !== '') {
            mediaItems = [product.image];
        }
    
        if (mediaItems.length > 0) {
            hasMedia = true;
            galleryHTML += mediaItems.map(imgSrc => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `).join('');
        }
    
        // Vidéos
        if (product.videos && product.videos.length > 0) {
            hasMedia = true;
            product.videos.forEach(videoSrc => {
                galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ''}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
            });
        } else if (product.video && product.video !== '') {
            hasMedia = true;
            galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ''}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
        }
    
        // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

        // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = '';
    if (product.packContents && product.packContents.length > 0) {
        const links = product.packContents.map(item => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `).join('');
        
        packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
        let variantsHTML = '';
        if (product.jars && product.jars.length > 0) {
            const buttonsHTML = product.jars.map((jar, index) => `
                <div class="variant-btn ${index === 0 ? 'active ' + jar.colorClass : ''}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `).join('');
            variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || 'Choisir une option :'}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
        } else if (product.options && product.options.length > 0) {
            variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select></div>`;
        }
    
        let tarifsHTML = product.tarifs.map(tarif => `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `).join('');
    
        let descriptionHTML = product.description ? `<p class="product-description">${product.description.replace(/\n/g, '<br>')}</p>` : '';
    
        const oldVideo = document.querySelector('#page-product .product-video');
        if(oldVideo) oldVideo.style.display = 'none';
    
        // --- 3. INJECTION (On cache la galerie si pas de média) ---
        detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ''}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ''}
            
            <div class="name" style="margin-top: ${hasMedia ? '0' : '20px'}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;
    
        showPage('page-product');
    
        // Réattache les événements (pour les variantes de couleurs)
        if (product.jars && product.jars.length > 0) {
            const variantBtns = document.querySelectorAll('.variant-btn');
            const cartBtns = document.querySelectorAll('.add-to-cart-btn');
            const updateCartButtonsColor = (colorClass) => {
                cartBtns.forEach(btn => {
                    btn.classList.remove(
                        'style-purple', 
                        'style-red', 
                        'style-green', 
                        'style-yellow', 
                        'style-orange', 
                        'style-brown', 
                        'style-passion', 
                        'style-melon',
                        // 👇 J'ai ajouté tes nouvelles ici :
                        'style-gmo',
                        'style-lampo',
                        'style-tangier',
                        'style-grappe'
                    );
                                        if (colorClass) btn.classList.add(colorClass);
                });
            };
            updateCartButtonsColor(product.jars[0].colorClass);
            variantBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    variantBtns.forEach(b => {
                        b.classList.remove('active');
                        const color = b.dataset.colorClass;
                        b.classList.remove(color);
                    });
                    this.classList.add('active');
                    this.classList.add(this.dataset.colorClass);
                    updateCartButtonsColor(this.dataset.colorClass);
                    if(window.Telegram.WebApp.HapticFeedback) window.Telegram.WebApp.HapticFeedback.selectionChanged();
                });
            });
        }
    }

    // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else { 
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
    document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById('confirmation-items-list');
    itemsList.innerHTML = cart.map((item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `).join('');

    // UI Promo
    const promoInputContainer = document.getElementById('promo-input-container');
    const promoAppliedContainer = document.getElementById('promo-applied-container');
    if (appliedPromo) {
        promoInputContainer.style.display = 'none';
        promoAppliedContainer.style.display = 'flex';
        document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
    } else {
        promoInputContainer.style.display = 'flex';
        promoAppliedContainer.style.display = 'none';
        document.getElementById('promo-code-input').value = ''; 
    }

    // UI Paiement
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById('confirmation-summary');
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
        summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById('copy-order-btn');
    const contactBtn = document.getElementById('confirm-order-button');

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if(copyBtn) copyBtn.style.display = 'none';

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if(contactBtn) {
        contactBtn.classList.remove('secondary-action-btn'); // Enlève le gris
        contactBtn.classList.add('main-action-btn');      // Met le rouge (ou couleur principale)
        contactBtn.disabled = false;                      // Active le clic
        contactBtn.innerHTML = '🛰️ CONFIRMER SUR WHATSAPP 🛰️'; // Change le texte
    }

    showPage('page-confirmation');
}
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById('search-filter');
    const qualityFilter = document.getElementById('quality-filter');
    const farmFilter = document.getElementById('farm-filter');

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach(category => {
        if (category.farms) {
            category.farms.forEach(farm => allNestedProducts.push(...farm.products));
        } else if (category.products) {
            allNestedProducts.push(...category.products);
        }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map(c => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ['all', ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'SELECTION DU CHEF' : q}</option>`).join('');

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map(p => p.farm).filter(f => f); // Garde seulement si une farm est définie
    const farms = ['all', ...new Set(productFarms)];
    
    farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? '👨‍🌾  -  Toutes les farms' : farm}</option>`).join('');

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value;
        renderHomePage();
    });

    qualityFilter.addEventListener('change', (e) => {
        currentFilters.quality = e.target.value;
        renderHomePage();
    });

    farmFilter.addEventListener('change', (e) => {
        currentFilters.farm = e.target.value;
        renderHomePage();
    });
}

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---

    // Ajoute le paramètre 'variant' à la fin
    function addToCart(productId, weight, price, variant = null) {
        // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
        const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, '') : 'default'}`;

        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);

        // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
        const displayName = variant ? `${product.name} \n👉 ${variant}` : product.name;

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: displayName, // On utilise le nom avec la variante
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price,
                variant: variant // On garde la variante en mémoire si besoin
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }
    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }
        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else {
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---
    
    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
        // On nettoie le nom (enlève les sauts de ligne techniques si variante)
        // On met en majuscules pour faire comme sur ta capture
        let cleanName = item.name.replace(/\n/g, ' ').toUpperCase();

        // Ligne 1 : Numéro + Nom du produit (en Gras *)
        message += `*${index + 1}. ${cleanName}*\n`;
        
        // Ligne 2 : Quantité
        message += `• Quantité: ${item.quantity}x ${item.weight}\n`;
        
        // Ligne 3 : Prix unitaire
        message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;
        
        // Ligne 4 : Total de la ligne
        message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
        message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
        message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
        message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
        message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison à convenir\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
}

    // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
    function copyToClipboard(text) {
        if (navigator.clipboard) { // API moderne et sécurisée
            navigator.clipboard.writeText(text).then(() => {
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            }, (err) => {
                showNotification('❌ Erreur en copiant le message');
            });
        } else { // Ancien fallback (pour certains navigateurs)
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed'; // Hors de l'écran
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                tg.HapticFeedback.notificationOccurred('success');
            } catch (err) {
                showNotification('❌ Erreur en copiant le message');
            }
            document.body.removeChild(textArea);
        }
    }

    // --- GESTION PAGE AVIS ---

    // 1. Bouton vers le canal Potato
    const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = "https://dympt.org/RetourP420"; 
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }

    // 2. (Optionnel) Zoom sur l'image quand on clique dessus
    window.openImage = function(imgElement) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('img-in-modal');
        
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
        tg.BackButton.show(); // Affiche le bouton retour natif
        
        // Clic pour fermer
        modal.onclick = function() {
            modal.style.display = "none";
            tg.BackButton.hide(); // Cache le bouton retour
        }
        
        // Gestion du bouton retour physique/natif Telegram
        tg.onEvent('backButtonClicked', function() {
            modal.style.display = "none";
            tg.BackButton.hide();
        });
    };
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', async function (e) {
                const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');

            copyToClipboard(message);

            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            const category = appData.find(c => c.id === categoryCard.dataset.categoryId);

            if (category.products) {
                // Si la catégorie a des produits directement (pas de sous-catégorie)
                currentView = 'simple_products'; // <-- NOUVEL ÉTAT
                currentCategoryId = category.id;
            } else if (category.farms) {
                // Si la catégorie a des farms
                currentView = 'farms';
                currentCategoryId = category.id;
            } else {
                return; // Ne fait rien si la catégorie est vide
            }

            // On reset les filtres et on lance la page
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }
        // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
        const farmBtn = target.closest('.farm-list-btn'); // <-- J'ai changé le nom de la classe ici
        if (farmBtn) {

            if (farmBtn.classList.contains('unclickable')) {
                return;
            }

            currentView = 'products';
            currentFarmId = farmBtn.dataset.farmId;

            // On reset les filtres
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';

            renderHomePage();
            return;
        }
        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        // Clic sur "Ajouter au panier"
        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');

            let selectedVariant = null;

            // CAS 1 : Nouveau système (Boutons JARs)
            const activeVariantBtn = document.querySelector('.variant-btn.active');
            if (activeVariantBtn) {
                selectedVariant = activeVariantBtn.dataset.name;
            }
            // CAS 2 : Ancien système (Select) - Fallback
            else {
                const variantSelect = document.getElementById('product-variant-select');
                if (variantSelect) {
                    selectedVariant = variantSelect.value;
                }
            }

            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price), selectedVariant);
        }

        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

       // Clic sur N'IMPORTE QUEL bouton du panier
       if (target.closest('.cart-button')) {
        renderCart();
        showPage('page-cart');
    }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur un produit DANS un Pack
        if (target.closest('.pack-item-btn')) {
            const btn = target.closest('.pack-item-btn');
            const targetId = btn.dataset.targetId;
            
            // On charge la page du produit ciblé
            renderProductPage(targetId);
            return;
        }
          // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest('#confirm-order-button')) {

        // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
        const myPhoneNumber = '33759010537'; 
        
        // 2. On prépare le message
        let message = formatOrderMessage();
        
        // 3. On encode le message pour qu'il passe dans une URL
        const encodedMessage = encodeURIComponent(message);
        
        // 4. On crée le lien magique WhatsApp
        const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

        // 5. On ouvre WhatsApp
        tg.openLink(whatsappUrl);
    }

    });

    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage(); // Affiche les catégories au début
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});