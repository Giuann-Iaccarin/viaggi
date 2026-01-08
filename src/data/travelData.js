export const travelData = {
    countries: [
        {
            name: 'Grecia',
            cities: [
                {
                    name: 'Zante',
                    images: [
                        'https://grecia365.it/images/banners/licensed-image.jpg',
                        'https://welcometozante.com/wp-content/uploads/2020/11/Vista-Piazza-San-Marco-dal-Base.jpg',
                        'https://cdn.shopify.com/s/files/1/0015/0028/2982/files/Zante_Xigia_beach_1024x1024.jpg?v=1573020606'
                    ],
                    description: 'Zante, nel Mar Ionio, è famosa per acque turchesi, feste, grotte marine e spiagge spettacolari come il Navagio. Un mix perfetto tra relax, natura e divertimento notturno.',
                    beaches: [
                        { name: 'Navagio Beach', description: 'La spiaggia del relitto, una delle più iconiche al mondo, raggiungibile solo via mare.' },
                        { name: 'Laganas Beach', description: 'Lunga spiaggia sabbiosa, cuore della vita notturna e ideale per i giovani.' },
                        { name: 'Gerakas Beach', description: 'Area protetta delle tartarughe Caretta Caretta, acque calme e natura intatta.' },
                        { name: 'Porto Limnionas', description: 'Meravigliosa insenatura di scogli con acque cristalline perfette per lo snorkeling.' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Consigliato per esplorare grotte, baie remote e il punto panoramico del Navagio. Le distanze sono brevi ma senza auto ci si limita a poche zone.'
                    },
                    nightlife: {
                        rating: 'Molto vivace',
                        description: 'Laganas è una delle zone più animate delle Isole Ionie, con discoteche e cocktail bar. Argassi offre serate più tranquille e familiari.'
                    },
                    flights: [
                        {
                            departureDate: '5 agosto',
                            departureTime: '06:05-08:30',
                            returnDate: '12 agosto',
                            returnTime: '09:10-09:35',
                            price: 152
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '06:05-08:30',
                            returnDate: '12 agosto',
                            returnTime: '15:00-15:40',
                            price: 190
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '12:00-14:30',
                            returnDate: '12 agosto',
                            returnTime: '15:00-15:40',
                            price: 177
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '15:35-18:00',
                            returnDate: '10 agosto',
                            returnTime: '18:40-19:05',
                            price: 153
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '06:15-08:45',
                            returnDate: '10 agosto',
                            returnTime: '18:40-19:05',
                            price: 183
                        }
                    ]
                },
                {
                    name: 'Santorini',
                    images: [
                        'https://live.staticflickr.com/65535/52056187323_0c8bab672a_c.jpg',
                        'https://www.santorinigrecia.it/images/stradine-fira-santorini.jpg',
                        'https://www.artoftraveling.it/wp-content/uploads/2019/06/Spiaggia-santorini-grecia.jpg'
                    ],
                    description: 'Santorini è l\'isola più iconica delle Cicladi, famosa per i suoi tramonti mozzafiato, le case bianche con le cupole blu e le viste spettacolari sulla caldera. Un\'esperienza romantica e indimenticabile.',
                    beaches: [
                        { name: 'Red Beach', description: 'Spiaggia unica con sabbia e rocce rosse vulcaniche' },
                        { name: 'Perissa Beach', description: 'Lunga spiaggia di sabbia nera con beach bar e ristoranti' },
                        { name: 'Kamari Beach', description: 'Spiaggia organizzata con ciottoli neri e acque cristalline' },
                        { name: 'White Beach', description: 'Piccola baia accessibile solo via mare, molto suggestiva' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Altamente consigliato per esplorare i villaggi di Oia, Fira, Pyrgos e le spiagge remote. Le strade sono strette ma ben tenute.'
                    },
                    nightlife: {
                        rating: 'Moderata',
                        description: 'Fira e Oia offrono bar eleganti e lounge con vista tramonto. Perissa ha club sulla spiaggia per chi cerca più energia. Atmosfera sofisticata e romantica.'
                    },
                    flights: [
                        {
                            departureDate: '5 agosto',
                            departureTime: '12:35-15:30',
                            returnDate: '12 agosto',
                            returnTime: '16:10-17:10',
                            price: 132
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '07:00-09:55',
                            returnDate: '12 agosto',
                            returnTime: '16:10-17:10',
                            price: 128
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '12:35-15:30',
                            returnDate: '12 agosto',
                            returnTime: '10:25-11:25',
                            price: 146
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '07:20-10:10',
                            returnDate: '10 agosto',
                            returnTime: '11:00-12:05',
                            price: 147
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '07:20-10:10',
                            returnDate: '10 agosto',
                            returnTime: '21:30-22:30',
                            price: 173
                        },
                        {
                            departureDate: '4 agosto',
                            departureTime: '13:05-16:00',
                            returnDate: '11 agosto',
                            returnTime: '16:50-17:50',
                            price: 144
                        },
                        {
                            departureDate: '4 agosto',
                            departureTime: '13:05-16:00',
                            returnDate: '11 agosto',
                            returnTime: '21:30-22:30',
                            price: 147
                        }
                    ]
                },
                {
                    name: 'Mykonos',
                    images: [
                        'https://www.lucadea.com/wp-content/uploads/2014/09/mykonos-dall-alto.jpg',
                        'https://5giornate.it/wp-content/uploads/2023/02/Citta-di-Mykonos.jpg',
                        'https://media.opentur.it/WEB/CHANNELS/VERATOUR/CMS/IMAGES/BODYIMAGES//Articoli%20Magazine/Mykonos%20non%20solo%20spiagge/Mykonos_Kalo_Livadi.jpg'
                    ],
                    description: 'Mykonos è l\'isola del lusso e del divertimento, famosa per i mulini a vento, le spiagge attrezzate e le serate nei beach club più celebri d\'Europa. Elegante, cosmopolita e vivacissima.',
                    beaches: [
                        { name: 'Paradise Beach', description: 'Iconica e famosissima per i beach club e la musica tutto il giorno.' },
                        { name: 'Super Paradise', description: 'Acque cristalline e feste che iniziano dal pomeriggio e vanno avanti fino a notte fonda.' },
                        { name: 'Elia Beach', description: 'Lunga e scenografica, perfetta per relax e sport acquatici.' },
                        { name: 'Ornos Beach', description: 'Spiaggia elegante, ben servita, ideale anche per famiglie.' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Utile per muoversi tra spiagge e beach club. I taxi sono pochi e costosi nelle ore di punta.'
                    },
                    nightlife: {
                        rating: 'Molto vivace',
                        description: 'Mykonos è capitale assoluta della nightlife greca: beach party, club internazionali, cocktail bar a Little Venice e DJ di fama mondiale.'
                    },
                    flights: [
                        {
                            departureDate: '5 agosto',
                            departureTime: '06:00-08:50',
                            returnDate: '12 agosto',
                            returnTime: '18:00-18:55',
                            price: 152
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '14:20-17:15',
                            returnDate: '12 agosto',
                            returnTime: '18:00-18:55',
                            price: 144
                        }
                    ]
                },
                {
                    name: 'Corfù',
                    images: [
                        'https://www.corfu.info/wp-content/uploads/sites/64/Kerkyra.jpg',
                        'https://www.itineraridicinemaedamerica.com/wp-content/uploads/2015/11/11904644_10207588332727799_1128249014305099899_n.jpg',
                        'https://images.unsplash.com/photo-1500198894528-3819de6ad916?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHwxfHxrZXJraXJhfGVufDB8fHx8MTcxOTQ3OTM5OHww&ixlib=rb-4.0.3&q=100&fit=max&w=3840'
                    ],
                    description: 'Corfù è un\'isola verdeggiante nel Mar Ionio, ricca di storia veneziana, spiagge meravigliose e paesaggi naturali. Perfetta per chi cerca relax, cultura e divertimento in un\'unica destinazione.',
                    beaches: [
                        { name: 'Paleokastritsa', description: 'Baia incantevole con acque turchesi, considerata la più bella dell\'isola' },
                        { name: 'Glyfada Beach', description: 'Spiaggia di sabbia dorata con servizi e sport acquatici' },
                        { name: 'Canal d\'Amour', description: 'Formazioni rocciose uniche con leggende romantiche' },
                        { name: 'Agios Gordios', description: 'Lunga spiaggia sabbiosa circondata da scogliere verdi' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Essenziale per scoprire le numerose spiagge nascoste, i villaggi tradizionali e i monasteri panoramici. L\'isola è più grande e dispersiva.'
                    },
                    nightlife: {
                        rating: 'Vivace',
                        description: 'Kavos è il centro della vita notturna giovane e selvaggia. Corfu Town offre bar raffinati e club. Diverse opzioni per tutti i gusti, dall\'aperitivo alla discoteca.'
                    },
                    flights: [
                        {
                            departureDate: '5 agosto',
                            departureTime: '12:55-15:10',
                            returnDate: '12 agosto',
                            returnTime: '15:55-16:10',
                            price: 119
                        },
                        {
                            departureDate: '5 agosto',
                            departureTime: '12:55-15:10',
                            returnDate: '12 agosto',
                            returnTime: '20:35-20:50',
                            price: 124
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '12:40-14:55',
                            returnDate: '10 agosto',
                            returnTime: '18:10-18:25',
                            price: 129
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '15:15-17:30',
                            returnDate: '10 agosto',
                            returnTime: '18:10-18:25',
                            price: 128
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '12:40-14:55',
                            returnDate: '10 agosto',
                            returnTime: '15:35-15:50',
                            price: 119
                        },
                        {
                            departureDate: '3 agosto',
                            departureTime: '15:15-17:30',
                            returnDate: '10 agosto',
                            returnTime: '15:35-15:50',
                            price: 118
                        },
                        {
                            departureDate: '4 agosto',
                            departureTime: '11:10-13:20',
                            returnDate: '11 agosto',
                            returnTime: '14:10-14:15',
                            price: 119
                        },
                        {
                            departureDate: '2 agosto',
                            departureTime: '16:00-18:15',
                            returnDate: '11 agosto',
                            returnTime: '10:00-10:25',
                            price: 139
                        },
                        {
                            departureDate: '2 agosto',
                            departureTime: '16:00-18:15',
                            returnDate: '11 agosto',
                            returnTime: '18:55-19:10',
                            price: 157
                        },
                        {
                            departureDate: '2 agosto',
                            departureTime: '07:10-09:20',
                            returnDate: '11 agosto',
                            returnTime: '18:55-19:10',
                            price: 155
                        }
                    ]
                },
                {
                    name: 'Skiathos',
                    images: [
                        'https://www.vacanzegreche.com/public/img/data/2019112819311596_skiathos-town-isola-di-skiathos.jpg',
                        'https://image.urlaubspiraten.de/640/image/upload/v1614764033/Impressions%20and%20Other%20Assets/BP_Skiathos_Greece_shutterstock_687689308_lnulqq.jpg',
                        'https://www.costacrociere.it/content/dam/costa/costa-magazine/articles-magazine/beaches/skiathos-beaches/skiathos-spiagge_m.jpg.image.694.390.low.jpg'
                    ],
                    description: 'Skiathos è l\'isola più famosa delle Sporadi, ricchissima di spiagge sabbiose, pinete e acque trasparenti. Ottima per chi cerca mare da sogno e un centro vivace.',
                    beaches: [
                        { name: 'Koukounaries', description: 'Considerata una delle spiagge più belle della Grecia: sabbia fine e pineta alle spalle.' },
                        { name: 'Lalaria', description: 'Raggiungibile solo via mare, famosa per l\'arco naturale e i ciottoli bianchi.' },
                        { name: 'Banana Beach', description: 'Perfetta per giovani, sport acquatici e beach bar.' },
                        { name: 'Agia Paraskevi', description: 'Spiaggia tranquilla, rilassante e molto organizzata.' }
                    ],
                    carRental: {
                        recommended: false,
                        reason: 'L\'isola è piccola e servita bene da autobus turistici che collegano quasi tutte le spiagge principali.'
                    },
                    nightlife: {
                        rating: 'Moderata',
                        description: 'Il porto di Skiathos offre cocktail bar e piccoli club, atmosfera giovane ma non caotica.'
                    },
                    flights: [
                        {
                            departureDate: '5 agosto',
                            departureTime: '07:00-09:35',
                            returnDate: '12 agosto',
                            returnTime: '10:15-10:55',
                            price: 133
                        }
                    ]
                },
                {
                    name: 'Candia (Creta)',
                    images: [
                        'https://www.grecia.info/wp-content/uploads/sites/71/creta-heraklion-fortezza-hd.jpg',
                        'https://www.ilturista.info/myTurista/files/1/foto_aerea_di_heraklion_al_tramonto.jpg',
                        'https://volare.volotea.com/wp-content/uploads/2022/05/shutterstock_659252305.jpg'
                    ],
                    description: 'Candia (Heraklion) è il cuore di Creta, ricca di storia, spiagge incredibili e cucina eccezionale. Perfetta per chi vuole combinare mare, cultura e avventura.',
                    beaches: [
                        { name: 'Agia Pelagia', description: 'Baia protetta con acque calme e turchesi, ideale per famiglie e snorkeling.' },
                        { name: 'Matala Beach', description: 'Famosa per le grotte e lo stile hippie, atmosfera unica e rilassata.' },
                        { name: 'Hersonissos Beach', description: 'Lunga spiaggia sabbiosa con beach bar e attività acquatiche.' },
                        { name: 'Ammoudara', description: 'Spiaggia urbana molto estesa e comoda, perfetta per chi alloggia a Heraklion.' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Creta è molto grande: noleggiare un\'auto è fondamentale per visitare spiagge, gole e siti archeologici come Cnosso.'
                    },
                    nightlife: {
                        rating: 'Buona',
                        description: 'Heraklion offre bar moderni, taverne, alcuni club e tanta vita serale. Hersonissos è più intensa con feste sulla spiaggia.'
                    },
                    flights: [
                        {
                            departureDate: '4 agosto',
                            departureTime: '06:35-09:30',
                            returnDate: '11 agosto',
                            returnTime: '21:25-22:30',
                            price: 162
                        }
                    ]
                }
            ]
        },
        {
            name: 'Albania',
            cities: [
                {
                    name: 'Saranda',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sarand%C3%AB_%283%29.jpg/800px-Sarand%C3%AB_%283%29.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f6/df/saranda.jpg',
                        'https://www.viaggioinalbania.it/wp-content/uploads/2018/06/saranda-golfo-2.jpg'
                    ],
                    description: 'Saranda è la regina della Riviera Albanese, con acque cristalline, un lungomare vivace e una vista spettacolare sulla baia. Porta d\'accessione per il sito UNESCO di Butrinto.',
                    beaches: [
                        { name: 'Plazhi i Sarandës', description: 'La spiaggia principale della città, sabbiosa e ben attrezzata' },
                        { name: 'Ksamili Beach', description: 'Quattro isolette di sabbia accessibili a piedi, acque turchesi' },
                        { name: 'Krorez Beach', description: 'Spiaggia isolata raggiungibile solo via mare o trekking, natura selvaggia' },
                        { name: 'Borsh Beach', description: 'Lunga spiaggia di ciottoli circondata da agrumeti e uliveti' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Utile per visitare Butrinto, le spiagge vicine e la città di Gjirokastër. La riviera albanese offre scorci meravigliosi raggiungibili in auto.'
                    },
                    nightlife: {
                        rating: 'Vivace',
                        description: 'Lungomare pieno di bar, ristoranti e piccoli locali. Atmosfera giovane e informale, con musica fino a tarda notte.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Valona',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Panorama_of_Vlora.jpg/800px-Panorama_of_Vlora.jpg',
                        'https://www.albaniaholidayrental.com/wp-content/uploads/2020/10/Vlora-plazhi-i-Ri-1024x576.jpg',
                        'https://www.turismo.al/wp-content/uploads/2021/04/Vlora-city-1200x800.jpg'
                    ],
                    description: 'Valona è dove il mare Adriatico incontra lo Ionio, famosa per la sua storia come sede del primo governo albanese e per le spiagge della Riviera. Città vivace con una costa affascinante.',
                    beaches: [
                        { name: 'Plazhi i Vjetër', description: 'Spiaggia di sabbia fine nel centro di Valona, molto frequentata' },
                        { name: 'Radhima Beach', description: 'Baia riparata con acque calme e poco profonde, ideale per famiglie' },
                        { name: 'Orikum Beach', description: 'Vicino all\'antica città di Oricum, acque cristalline e natura' },
                        { name: 'Dhermi Beach', description: 'Una delle spiagge più belle dell\'Albania, ciottoli e mare turchese' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Consigliato per esplorare la Riviera Albanese verso Dhermi, Himara e le spiagge più remote. Le strade costiere offrono panorami mozzafiato.'
                    },
                    nightlife: {
                        rating: 'Animata',
                        description: 'Lungomare con bar e discoteche, soprattutto nei mesi estivi. Dhermi è famosa per i festival e le feste in spiaggia.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Montenegro',
            cities: [
                {
                    name: 'Budva',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Budva_City_View.jpg/800px-Budva_City_View.jpg',
                        'https://www.montenegro.com/it/wp-content/uploads/2018/05/Jaz-Beach-Budva.jpg',
                        'https://www.visit-montenegro.com/wp-content/uploads/2015/09/Budva_2.jpg'
                    ],
                    description: 'Budva è il cuore della costa montenegrina, famosa per la Città Vecchia veneziana, le spiagge sabbiose e la vita notturna vibrante. Perfetta per chi cerca divertimento e storia.',
                    beaches: [
                        { name: 'Mogren Beach', description: 'Due spiagge collegate da un tunnel, circondate da scogliere, vicino alla Città Vecchia' },
                        { name: 'Jaz Beach', description: 'Lunga spiaggia di ghiaia, famosa per concerti e festival estivi' },
                        { name: 'Becici Beach', description: 'Spiaggia di ciottoli organizzata, premiata per qualità' },
                        { name: 'Sveti Stefan', description: 'Iconica isola-hotel con spiaggia pubblica, panorama unico' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Utile per visitare le spiagge vicine, la baia di Kotor e il Parco Nazionale di Lovćen. Il traffico in centro può essere intenso in alta stagione.'
                    },
                    nightlife: {
                        rating: 'Molto vivace',
                        description: 'Top Club, Trocadero e molti altri locali lungo la costa. La Città Vecchia offre bar raffinati. Budva è il centro della vita notturna montenegrina.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Kotor',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Kotor%2C_Montenegro_%287621456906%29.jpg/800px-Kotor%2C_Montenegro_%287621456906%29.jpg',
                        'https://www.visit-montenegro.com/wp-content/uploads/2015/09/Kotor-Bay-1.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/73/d5/8f/photo0jpg.jpg'
                    ],
                    description: 'Kotor è una gemma medievale nella baia più bella d\'Europa, protetta dall\'UNESCO. Tra mura antiche, vicoli labirintici e montagne che si tuffano nel mare.',
                    beaches: [
                        { name: 'Bay Beach', description: 'Piccola spiaggia di ciottoli proprio sotto le mura della città vecchia' },
                        { name: 'Risan Beach', description: 'Spiaggia tranquilla nella baia, ideale per famiglie e relax' },
                        { name: 'Orahovac', description: 'Spiaggia di ciottoli con vista panoramica sulla baia di Kotor' },
                        { name: 'Morinj Beach', description: 'Baia riparata con acque calme, circondata da uliveti' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Per salire alla Fortezza di San Giovanni, esplorare i villaggi della baia e raggiungere il Parco Nazionale di Lovćen. Le strade panoramiche sono imperdibili.'
                    },
                    nightlife: {
                        rating: 'Moderata',
                        description: 'Bar accoglienti nella Città Vecchia, musica dal vivo e atmosfera medievale. Meno selvaggia di Budva, più culturale e romantica.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Croazia',
            cities: [
                {
                    name: 'Dubrovnik',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Dubrovnik_Croatia.jpg/800px-Dubrovnik_Croatia.jpg',
                        'https://www.croazia.info/wp-content/uploads/sites/11/Dubrovnik-citta-vecchia-1.jpg',
                        'https://www.discoverthedalmatiancoast.com/wp-content/uploads/2019/03/Dubrovnik-Banje-Beach.jpg'
                    ],
                    description: 'Dubrovnik, la "Perla dell\'Adriatico", è una città-museo protetta dall\'UNESCO, con mura imponenti, palazzi storici e un mare cristallino. Location di Game of Thrones.',
                    beaches: [
                        { name: 'Banje Beach', description: 'Spiaggia di ciottoli con vista spettacolare sulle mura della città vecchia' },
                        { name: 'Copacabana Beach', description: 'Spiaggia di sabbia artificiale, ideale per famiglie e sport acquatici' },
                        { name: 'Sveti Jakov', description: 'Baia tranquilla con scalinata panoramica, meno affollata' },
                        { name: 'Lokrum Island', description: 'Isola naturale con piccole calette rocciose e acque cristalline' }
                    ],
                    carRental: {
                        recommended: false,
                        reason: 'Il centro storico è pedonale e parcheggiare è difficile e costoso. Meglio usare autobus locali, taxi o traghetti per le isole.'
                    },
                    nightlife: {
                        rating: 'Vivace',
                        description: 'Bar sui bastioni con vista mozzafiato, club nella città vecchia e locali sul lungomare. Atmosfera cosmopolita e internazionale.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Split',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Split_%2836914280225%29.jpg/800px-Split_%2836914280225%29.jpg',
                        'https://www.croazia.info/wp-content/uploads/sites/11/split-riva-1.jpg',
                        'https://www.total-croatia-news.com/media/k2/items/cache/7a90daa8d20e7bd1d10061b8b3657e85_XL.jpg'
                    ],
                    description: 'Split è una città vivace dove il Palazzo di Diocleziano, patrimonio UNESCO, si fonde con la vita quotidiana. Porta d\'accesso alle isole della Dalmazia.',
                    beaches: [
                        { name: 'Bačvice Beach', description: 'Spiaggia di sabbia famosa per il picigin (gioco tradizionale in acqua)' },
                        { name: 'Kašjuni Beach', description: 'Spiaggia di ciottoli con pineta, perfetta per snorkeling' },
                        { name: 'Bene Beach', description: 'Baia rocciosa con acque cristalline, molto frequentata dai locali' },
                        { name: 'Trstenik Beach', description: 'Spiaggia attrezzata nella parte occidentale della città' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Ottimo per esplorare la regione di Split, visitare Trogir, le cascate di Krka o fare escursioni sulla costa e nell\'entroterra.'
                    },
                    nightlife: {
                        rating: 'Molto vivace',
                        description: 'La Riva (lungomare) è piena di bar e caffè. Il centro storico pullula di locali, dai pub ai club. Atmosfera giovane e internazionale.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Zara',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Zadar_-_Croatia_-_panoramio_%2813%29.jpg/800px-Zadar_-_Croatia_-_panoramio_%2813%29.jpg',
                        'https://www.zadar.travel/storage/images/og_image.jpg',
                        'https://www.croazia.info/wp-content/uploads/sites/11/zadar-sole.jpg'
                    ],
                    description: 'Zara è una città di storia e innovazione, famosa per l\'Organo Marino e il Saluto al Sole. Una destinazione artistica e culturale con un fascino unico.',
                    beaches: [
                        { name: 'Kolovare Beach', description: 'Spiaggia cittadina attrezzata, perfetta per famiglie e sport' },
                        { name: 'Borik Beach', description: 'Spiaggia ghiaiosa in un\'area turistica ben organizzata' },
                        { name: 'Puntamika Beach', description: 'Più tranquilla e autentica, vicino al monastero francescano' },
                        { name: 'Diklo Beach', description: 'Baia rocciosa con acque trasparenti, ideale per snorkeling' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Per visitare il Parco Nazionale di Paklenica, le cascate di Plitvice (più lontane) e le isole dell\'arcipelago di Zara come Ugljan e Pašman.'
                    },
                    nightlife: {
                        rating: 'Animata',
                        description: 'Bar lungo le mura della città vecchia, locali con vista sul mare e alcuni club. Atmosfera più rilassata rispetto a Split, ma con tante opzioni.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Spagna',
            cities: [
                {
                    name: 'Ibiza',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Eivissa_-_Vista_de_Dalt_Vila.jpg/800px-Eivissa_-_Vista_de_Dalt_Vila.jpg',
                        'https://www.ibiza-spotlight.com/sites/default/files/styles/facebook/public/2020-07/ibiza%20town.jpg',
                        'https://cdn.getyourguide.com/img/location/5ffeb2fe6c45a.jpeg/99.jpg'
                    ],
                    description: 'Ibiza è l\'isola della festa per eccellenza, con i club più famosi del mondo, ma anche di incredibili spiagge, calette nascoste e un centro storico dichiarato Patrimonio UNESCO.',
                    beaches: [
                        { name: 'Playa d\'en Bossa', description: 'La spiaggia più lunga, piena di chiringuitos e vicina ai grandi club' },
                        { name: 'Cala Salada', description: 'Baia di sabbia e rocce con acque turchesi, tra pini profumati' },
                        { name: 'Las Salinas', description: 'Spiaggia chic vicino alle saline, atmosfera trendy e internazionale' },
                        { name: 'Cala Comte', description: 'Famosa per i suoi tramonti mozzafiato e acque cristalline' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Fondamentale per scoprire le calette più belle e remote del nord e dell\'ovest dell\'isola, lontano dalle zone turistiche più affollate.'
                    },
                    nightlife: {
                        rating: 'Leggendaria',
                        description: 'Pacha, Amnesia, Ushuaïa, HI Ibiza: i templi della musica elettronica mondiale. Feste diurnne nei beach club e notti indimenticabili nei superclub.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Maiorca',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Palma_Cathedral_Sunset.jpg/800px-Palma_Cathedral_Sunset.jpg',
                        'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/baleares/palma-mallorca-catedral-38317199-istock.jpg',
                        'https://www.visitaremaiorca.it/wp-content/uploads/sites/48/Playa-de-Muro-Mallorca.jpg'
                    ],
                    description: 'Maiorca è l\'isola più grande delle Baleari, offre tutto: dalle spiagge da sogno alle montagne del Tramuntana, dalla vivace Palma de Mallorca ai villaggi autentici dell\'interno.',
                    beaches: [
                        { name: 'Playa de Muro', description: 'Lunga spiaggia di sabbia fine e acque poco profonde nella baia di Alcúdia' },
                        { name: 'Cala Millor', description: 'Spiaggia urbana ben attrezzata, ideale per famiglie' },
                        { name: 'Es Trenc', description: 'Spiaggia selvaggia e naturale, senza edifici, con dune e acque caraibiche' },
                        { name: 'Cala Deià', description: 'Piccola caletta rocciosa in un villaggio di pescatori pittoresco' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Assolutamente necessario per apprezzare la diversità dell\'isola: esplorare la Serra de Tramuntana, le calette e i paesini dell\'interno.'
                    },
                    nightlife: {
                        rating: 'Molto varia',
                        description: 'Palma offre locali eleganti e ristoranti stellati. Magaluf e Arenal sono per feste intense. Cala d\'Or e Port de Pollença hanno un\'atmosfera più familiare.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Barcellona',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_%28skyline%29.jpg/800px-Barcelona_%28skyline%29.jpg',
                        'https://cdn.getyourguide.com/img/location/54b54e6a6a9f9.jpeg/99.jpg',
                        'https://www.barcelona.de/images/barcelona-beach.webp'
                    ],
                    description: 'Barcellona è la capitale cosmopolita della Catalogna, città d\'arte, architettura modernista, cultura e vita urbana vibrante, con ben 4 km di spiagge urbane.',
                    beaches: [
                        { name: 'Barceloneta', description: 'La spiaggia più famosa e centrale, sempre animata e piena di chiringuitos' },
                        { name: 'Bogatell', description: 'Più larga e meno affollata di Barceloneta, preferita da sportivi e locali' },
                        { name: 'Mar Bella', description: 'Spiaggia con zona nudista, skatepark e ambiente giovane e alternativo' },
                        { name: 'Nova Icaria', description: 'Spiaggia tranquilla vicino al Porto Olimpico, ideale per famiglie' }
                    ],
                    carRental: {
                        recommended: false,
                        reason: 'Il traffico e la sosta in città sono difficili e costosi. La metropolitana, i bus e i taxi sono molto efficienti. Auto utile solo per gite fuori città.'
                    },
                    nightlife: {
                        rating: 'Eccellente',
                        description: 'Dai bar di El Born e Gràcia ai mega-club del Porto Olimpico e Poble Espanyol. Opzioni per tutti i gusti, dalla musica indie all\'elettronica, fino all\'alba.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Malaga',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/M%C3%A1laga_Collage_2023.png/800px-M%C3%A1laga_Collage_2023.png',
                        'https://www.andalucia.org/sites/default/files/styles/principal/public/eventos/portada/muelle_uno_malaga_verano_carrusel.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/5e/6f/c7/malaga.jpg'
                    ],
                    description: 'Malaga, la capitale della Costa del Sol, è rinata come città culturale, con il Museo Picasso, il Centre Pompidou e un centro storico vivace, senza dimenticare il sole e le spiagge.',
                    beaches: [
                        { name: 'La Malagueta', description: 'Spiaggia urbana per eccellenza, lunga e attrezzata, a pochi passi dal centro' },
                        { name: 'Pedregalejo', description: 'Serie di calette con tradizionali chiringuitos di pesce, atmosfera locale' },
                        { name: 'El Palo', description: 'Quartiere di pescatori con spiaggia familiare e ristorantini tipici' },
                        { name: 'Playa de la Misericordia', description: 'Spiaggia più lunga e meno affollata, ideale per passeggiate' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Perfetta per esplorare i pueblos blancos (Mijas, Frigiliana), la zona di Nerja con le sue grotte, e altre località della Costa del Sol come Marbella.'
                    },
                    nightlife: {
                        rating: 'Buona',
                        description: 'La vita serale si concentra nel centro storico (bar, terrazze), nella zona del porto (Muelle Uno) e nelle discoteche lungo la costa. Atmosfera andalusa e internazionale.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Francia',
            cities: [
                {
                    name: 'Nizza',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Nice_seen_from_Castle_Hill_%285%29.jpg/800px-Nice_seen_from_Castle_Hill_%285%29.jpg',
                        'https://cdn.getyourguide.com/img/location/5c7a5f4a7e2c9.jpeg/99.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f6/fa/nice.jpg'
                    ],
                    description: 'Nizza, la "Regina della Costa Azzurra", unisce l\'eleganza francese al calore italiano. Promenade des Anglais, mercati colorati, arte e cucina nizzarda in una città piena di luce.',
                    beaches: [
                        { name: 'Plage Beau Rivage', description: 'Spiaggia privata attrezzata con lettini e servizi, in posizione centrale' },
                        { name: 'Plage Publique des Ponchettes', description: 'Spiaggia pubblica di ciottoli vicino alla Vecchia Nizza' },
                        { name: 'Coco Beach', description: 'Piccola baia rocciosa sotto il castello, ideale per snorkeling' },
                        { name: 'Plage de Carras', description: 'Spiaggia libera più ampia e meno affollata, verso l\'aeroporto' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Perfetta per percorrere la spettacolare Corniche roads (Moyenne, Grande), visitare i villaggi dell\'entroterra (Èze, Saint-Paul-de-Vence) e Monaco.'
                    },
                    nightlife: {
                        rating: 'Elegante',
                        description: 'Bar alla moda in Promenade du Paillon, locali nel porto, discoteche esclusive. Atmosfera chic e internazionale, meno selvaggia di altre destinazioni mediterranee.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Marsiglia',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Marseille_vue_aérienne.jpg/800px-Marseille_vue_aérienne.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/6c/59/5b/caption.jpg',
                        'https://www.franciavinivia.it/wp-content/uploads/sites/176/2023/10/marsiglia-cosa-vedere.jpg'
                    ],
                    description: 'Marsiglia, la città più antica di Francia, è un crogiolo di culture, con un porto vibrante, il Panier (quartiere storico), calanques spettacolari e un carattere forte e autentico.',
                    beaches: [
                        { name: 'Plage des Catalans', description: 'Spiaggia sabbiosa più vicina al centro città, molto popolare' },
                        { name: 'Prado Beaches', description: 'Serie di grandi spiagge artificiali create negli anni \'70, ideali per sport' },
                        { name: 'Plage du Prophète', description: 'Spiaggia familiare in posizione panoramica, molto amata dai marsigliesi' },
                        { name: 'Calanque de Sormiou', description: 'Una delle calanque più belle, mix di spiaggia e paesaggio roccioso (accesso limitato)' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Per visitare le calanques (alcune hanno parcheggi e accesso limitato), esplorare la Costa Blu e i villaggi vicini come Cassis. Il traffico in città può essere intenso.'
                    },
                    nightlife: {
                        rating: 'Autentica e vivace',
                        description: 'Vieux-Port è il cuore della movida, con molti bar. Il quartiere del Panier è trendy. Locali con musica dal vivo e atmosfera multiculturale.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Portogallo',
            cities: [
                {
                    name: 'Oporto',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Oporto.jpg/800px-Oporto.jpg',
                        'https://www.portugal.com/wp-content/uploads/2024/03/Porto-scaled.jpg',
                        'https://media.cntraveller.com/photos/63e06c43e6b6f934cef5e6e0/16:9/w_2560%2Cc_limit/Porto_GettyImages-1047502570.jpeg'
                    ],
                    description: 'Oporto (Porto), città Patrimonio UNESCO sul fiume Douro, è famosa per il vino, i ponti monumentali, l\'architettura azulejada e un\'atmosfera malinconica e autentica.',
                    beaches: [
                        { name: 'Praia de Matosinhos', description: 'Lunga spiaggia sabbiosa vicino alla città, famosa per il surf e il pesce fresco' },
                        { name: 'Praia do Molhe', description: 'All\'estremità del porto di Leça, protetta da frangiflutti, acque calme' },
                        { name: 'Praia da Luz', description: 'Spiaggia cittadina a nord del centro, con scogliere e area verde' },
                        { name: 'Praia de Miramar', description: 'Bellissima spiaggia con la cappella di Senhor da Pedra sullo scoglio' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Ottimo per esplorare la regione del Douro, le spiagge della Costa Verde a nord (Vila do Conde, Póvoa de Varzim) e la città di Guimarães.'
                    },
                    nightlife: {
                        rating: 'Tradizionale e trendy',
                        description: 'Vita notturna nelle "galerias" (passaggi) di Ribeira, bar alla moda in Miragaia, club lungo il fiume. Atmosfera intima, con molti locali di fado e jazz.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Lisbona',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/800px-Lisbon_%2836831596786%29_%28cropped%29.jpg',
                        'https://cdn.getyourguide.com/img/location/5c046c4d71b0a.jpeg/99.jpg',
                        'https://www.visitportugal.com/sites/default/files/styles/experiencias_destaque/public/mediateca/shutterstock_212191948_Costa%20de%20Caparica_Almada_Lisboa_660x371.jpg'
                    ],
                    description: 'Lisbona, città delle sette colli, della luce unica, del fado e delle stradine pittoresche (becos). Metropoli vibrante che guarda al futuro senza dimenticare la tradizione.',
                    beaches: [
                        { name: 'Praia de Carcavelos', description: 'Vasta spiaggia sabbiosa facilmente raggiungibile col treno, ideale per surf' },
                        { name: 'Costa da Caparica', description: 'Lungo litorale di sabbia dorata a sud del Tago, con spiagge per tutti i gusti' },
                        { name: 'Praia do Tamariz', description: 'Spiaggia elegante di ciottoli a Estoril, con piscina d\'acqua di mare' },
                        { name: 'Praia da Rainha', description: 'Piccola e incantevole spiaggia a Cascais, una delle preferite della regina' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Molto utile per esplorare la costa di Lisbona (Cascais, Sintra, Cabo da Roca), la penisola di Setúbal e fare gite di un giorno più lunghe.'
                    },
                    nightlife: {
                        rating: 'Eccellente e variegata',
                        description: 'Dai bar tradizionali del Bairro Alto e di Alfama, ai club moderni del quartiere dei docks (LX Factory, Santos), fino alle feste al Parque das Nações. Opzioni per tutte le età.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                },
                {
                    name: 'Algarve',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Praia_da_Marinha_%282009%29.jpg/800px-Praia_da_Marinha_%282009%29.jpg',
                        'https://www.visitalgarve.pt/sites/default/files/styles/principal/public/2023-02/2.%20Arma%C3%A7%C3%A3o%20de%20P%C3%AAra_Amândio_Figueiredo-139.jpg',
                        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/54/f3/portimao.jpg'
                    ],
                    description: 'L\'Algarve è la regione più soleggiata del Portogallo, famosa per le sue scogliere dorate, le grotte marine, le spiagge immense e i campi da golf di livello mondiale.',
                    beaches: [
                        { name: 'Praia da Marinha', description: 'Iconica spiaggia con archi e faraglioni, spesso considerata una delle più belle d\'Europa' },
                        { name: 'Praia de Benagil', description: 'Famosa per la grotta con il foro in alto (Benagil Cave), accessibile solo via mare' },
                        { name: 'Praia da Falésia', description: 'Km di sabbia dorata sotto imponenti scogliere di arenaria rossa e bianca' },
                        { name: 'Ilha de Tavira', description: 'Isola-barriera raggiungibile con un breve traghetto, spiagge selvagge e natura' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'INDISPENSABILE. L\'Algarve è una regione estesa. Senza auto è difficile spostarsi tra le diverse località (Lagos, Albufeira, Faro, Tavira) e raggiungere le calette più belle.'
                    },
                    nightlife: {
                        rating: 'Molto vivace (in alcune zone)',
                        description: 'Albufeira (The Strip) è il centro della festa per i giovani. Vilamoura offre casino e locali più chic. Lagos ha un\'atmosfera più alternativa. Molte opzioni lungo tutta la costa.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        },
        {
            name: 'Malta',
            cities: [
                {
                    name: 'La Valletta',
                    images: [
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Valletta_Montage.jpg/800px-Valletta_Montage.jpg',
                        'https://cdn.getyourguide.com/img/location/5c28e9a9688f7.jpeg/99.jpg',
                        'https://www.visitmalta.com/content/dam/visitmalta/beaches/malta/comino/laguna-blubarriere.jpg'
                    ],
                    description: 'La Valletta, la piccola ma potente capitale di Malta, è una città-fortezza barocca Patrimonio UNESCO, con palazzi maestosi, giardini panoramici e una storia ricchissima.',
                    beaches: [
                        { name: 'St. George\'s Bay', description: 'Spiaggia sabbiosa e ben organizzata vicino a San Giuliano, molto popolare' },
                        { name: 'Golden Bay', description: 'Una delle poche spiagge di sabbia dorata naturali di Malta, sulla costa nord-ovest' },
                        { name: 'Blue Lagoon (Comino)', description: 'Acque turchesi e sabbia bianca in una laguna da sogno (raggiungibile in barca)' },
                        { name: 'Għajn Tuffieħa', description: 'Spiaggia di sabbia rossa vicino a Golden Bay, più tranquilla e scenografica' }
                    ],
                    carRental: {
                        recommended: true,
                        reason: 'Consigliato per esplorare l\'isola di Malta (Mdina, Templi megalitici, scogliere), ma nel centro di Valletta è meglio camminare o usare gli autobus. Guida a sinistra.'
                    },
                    nightlife: {
                        rating: 'Discreta ma presente',
                        description: 'Il cuore della vita notturna maltese è a San Giuliano e Paceville, pieni di bar, pub e club. La Valletta offre bar più raffinati e terrazze con vista.'
                    },
                    flights: [
                        {
                            departureDate: null,
                            departureTime: null,
                            returnDate: null,
                            returnTime: null,
                            price: null
                        }
                    ]
                }
            ]
        }
    ]
};

export default travelData;