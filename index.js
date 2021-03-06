const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

//Giphy GIF's
var giphy = require('giphy-api')(giphyToken);

client.once('ready', () => {
    console.log('Listo!');
})

client.on('message', message => {
    //pb!hola
    if(message.content.startsWith(`${prefix}hola`)){
        let author = message.author;
        giphy.random({
            tag: 'hello'
        }, function (err, res) {
            message.channel.send("Hola " + author + " poto!", {
                files: ["" + res.data.image_url + ""]
            });
        });
    }
    //pb!beso
    var besos = [
        "https://media3.giphy.com/media/2BLqfC7g5VLkA/giphy.gif",                                           //1
        "http://olegif.com/bin/gifs/00/42/54.gif",                                                          //2
        "https://66.media.tumblr.com/37874f6c541467224fb36bc18dea287f/tumblr_my0y7stBk11spinxyo1_400.gif",  //3
        "http://31.media.tumblr.com/c85b151b864826c295e4bcf3325a6b28/tumblr_mmrji8aHiN1rec5f9o1_500.gif",   //4
        "https://hayunalesbianaenmisopa.com/wp-content/uploads/2017/10/giphy-35.gif",                       //5
        "https://media2.giphy.com/media/frHK797nhEUow/source.gif",                                          //6
        "https://media.giphy.com/media/Fm48ulOITP6zm/giphy.gif",                                            //7
        "https://gifimage.net/wp-content/uploads/2017/09/anime-hug-kiss-gif-9.gif",                         //8
        "https://media0.giphy.com/media/OByc9JtlabhOU/source.gif",                                          //9
        "https://66.media.tumblr.com/a3c94873cf5ba011687d26efce9a4f4a/tumblr_paqfy88mhQ1riopvto1_400.gif",  //10
        "https://media.giphy.com/media/135ov2QjF2YsMg/giphy.gif"                                            //11
    ];
    if(message.content.startsWith(`${prefix}beso`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres besar a tí mismo? :smirk: ");
            }
            else
            {
                var random = Math.floor(Math.random() * 11);
                message.channel.send(author + " le dio un besito a " + member + " :* ", {
                                    files: ["" + besos[random] + ""]
                });
                message.delete(1);
            }
        }
    }
    //pb!correr
    if(message.content.startsWith(`${prefix}correr`)){
        let author = message.author;
        giphy.random({
            tag: 'run'
        }, function (err, res) {
            message.channel.send(author + " se puso a correr!", {
                files: ["" + res.data.image_url + ""]
            });
            message.delete(1);
        });
    }
    //pb!corrernaruto
    var naruto = [
        "https://i.pinimg.com/originals/a6/50/b2/a650b23a1f94f4f19d5cf056735c9892.gif",                             //1
        "https://thumbs.gfycat.com/ConcreteAggravatingBrownbear-max-1mb.gif",                                       //2
        "https://media.giphy.com/media/Z03ucO90nhfUc/giphy.gif",                                                    //3
        "http://pa1.narvii.com/6236/d931bccb2f21240a04461cf2c0fc57d95acb2ce5_00.gif",                               //4
        "https://media1.giphy.com/media/RaeH5z5AlrkwU/giphy.gif",                                                   //5
        "http://i.imgur.com/xlZoSQA.gif",                                                                           //6
        "https://i.redd.it/qie8itirzff11.gif"                                                                       //7    
    ]
    if(message.content.startsWith(`${prefix}narutorun`)){
        let author = message.author;
        var random = Math.floor(Math.random() * 6);
        message.channel.send(author + " se puso a correr como naruto ", {
                            files: ["" + naruto[random] + ""]
        });
        message.delete(1);
    }
    //pb!kiss3
    var beso3 = [
        "https://media.tenor.com/images/2e80fbfe8f4a3c672624c40dffb8a79f/tenor.gif", //1
        "https://media.tenor.com/images/63f8aeacf5cedb46cff3c74d0e73df2c/tenor.gif", //2
        "https://i.gifer.com/eOb.gif",                                               //3
        "https://i.giphy.com/WrgNKZEWi42O2ZPfog.gif",                                //4
        "http://i.imgur.com/dPbwqiR.gif",                                            //5
        "https://media0.giphy.com/media/qttv7ks0cR2Vi/source.gif",                   //6
        "https://i.imgur.com/U6UL47b.gif",                                           //7
        "http://25.media.tumblr.com/tumblr_ma3bahGkuZ1rp1v9uo1_500.gif",             //8
        "https://media.giphy.com/media/3oKIPxqufrjNIEydJS/giphy.gif",                //9
        "https://66.media.tumblr.com/c9c6492659176c09d4689bd9864d54eb/tumblr_ofhmoyPmqs1vtssk7o6_500.gif" //10
    ]
    if(message.content.startsWith(`${prefix}kiss3`)){
        let author = message.author;
        let member = message.mentions.members;
        var random = Math.floor(Math.random() * 10);
        message.channel.send(author + " se dió un beso de 3", {
                            files: ["" + beso3[random] + ""]
        });
        message.delete(1);
    }
    //pb!abrazo
    if(message.content.startsWith(`${prefix}abrazo`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres abrazar a tí mismo? :smirk: ");
            }
            else
            {
                giphy.random({
                    tag: 'hug'
                }, function (err, res) {
                    message.channel.send(author + " le dió un abrazo a " + member + " <3 ", {
                        files: ["" + res.data.image_url + ""]
                    });
                    message.delete(1);
                });
            }
        }
    }
    //pb!llorar
    if(message.content.startsWith(`${prefix}llorar`)){
        let author = message.author;
        giphy.random({
            tag: 'cry'
        }, function (err, res) {
            message.channel.send(author + " está llorando :cry: ", {
                files: ["" + res.data.image_url + ""]
            });
            message.delete(1);
        });
    }
    //pb!morder
    var morder = [
        "https://data.whicdn.com/images/222855490/original.gif",                                            //1
        "https://data.whicdn.com/images/80939313/original.gif",                                             //2
        "https://media.giphy.com/media/K61PiJgYQUTrq/giphy.gif",                                            //3
        "https://media2.giphy.com/media/cTLNU3Otwy4M0/source.gif",                                          //4
        "https://media2.giphy.com/media/1T68JTz3wjPEY/source.gif",                                          //5
        "https://66.media.tumblr.com/8ee8f335d4f9a5292f49e839f42fe0ab/tumblr_oh6nkhonEE1qlb5fjo1_400.gif",  //6
        "https://media2.giphy.com/media/LON1BhW6JdFrG/giphy.gif",                                           //7
        "http://gif-finder.com/wp-content/uploads/2016/01/Epic-nose-bite.gif",                              //8
        "https://66.media.tumblr.com/4528591c3608220753b0258debc512d8/tumblr_nrfziaEJmB1qgwf6po1_400.gif",  //9
        "https://i.gifer.com/embedded/download/OeOn.gif"                                                    //10
    ]
    if(message.content.startsWith(`${prefix}morder`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres morder a tí mismo? :smirk: ");
            }
            else
            {
                var random = Math.floor(Math.random() * 10);
                message.channel.send(author + " mordió a " + member + " :BlobFearSweat: ", {
                    files: ["" + morder[random] + ""]
                });
                message.delete(1);
            }
        }
    }
    //pb!azote
    if(message.content.startsWith(`${prefix}azote`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres azotar a tí mismo? :smirk: ");
            }
            else
            {
                giphy.random({
                    tag: 'spank'
                }, function (err, res) {
                    message.channel.send(author + " azotó a " + member + " :whip: ", {
                        files: ["" + res.data.image_url + ""]
                    });
                    message.delete(1);
                });
            }
        }
    }
    //pb!punch
    if(message.content.startsWith(`${prefix}golpear`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres golpear a tí mismo? :smirk: ");
            }
            else
            {
                giphy.random({
                    tag: 'punch'
                }, function (err, res) {
                    message.channel.send(author + " golpeó a " + member + " :punch: ", {
                        files: ["" + res.data.image_url + ""]
                    });
                    message.delete(1);
                });
            }
        }
    }
    //pb!chupar
    if(message.content.startsWith(`${prefix}chupar`)){
        let author = message.author;
        let member = message.mentions.members.first();
        if(member === undefined)
        {
            message.channel.send("Debes mencionar a alguien :rolling_eyes: ");
        }
        else
        {
            if(author.id === member.id)
            {
                message.channel.send("Te quieres chupar a tí mismo? :smirk: ");
            }
            else
            {
                giphy.random({
                    tag: 'licking'
                }, function (err, res) {
                    message.channel.send(author + " chupó a " + member + " :stuck_out_tongue: ", {
                        files: ["" + res.data.image_url + ""]
                    });
                    message.delete(1);
                });
            }
        }
    }
    //pb!bailar
    if(message.content.startsWith(`${prefix}bailar`)){
        let author = message.author;
        giphy.random({
            tag: 'dance'
        }, function (err, res) {
            message.channel.send(author + " se puso a bailar! :dancer: ", {
                files: ["" + res.data.image_url + ""]
            });
            message.delete(1);
        });
    }
    //pb!chayanne
    var chayanne = [
        "https://media.giphy.com/media/3o7aDangmeJZSwE8cU/giphy.gif",                                       //1
        "https://media2.giphy.com/media/xThta4LFjbOkQGpyFO/giphy.gif",                                      //2
        "https://thumbs.gfycat.com/AngelicEvergreenBull-size_restricted.gif",                               //3
        "https://media3.giphy.com/media/8lQydUR3hNZqQyPTXj/giphy.gif",                                      //4
        "https://i.makeagif.com/media/5-28-2015/XWRp0l.gif",                                                //5
        "https://media0.giphy.com/media/gZrNbvMC5XClq/source.gif",                                          //6
        "https://media0.giphy.com/media/3o6fJcEcW1xcvOc2eQ/giphy.gif",                                      //7
        "http://4.bp.blogspot.com/-KUrr0E6TYwY/T-yO-5ToeHI/AAAAAAAAK98/wf2Z6w42a5E/s1600/Chayanne25.gif",   //8
        "https://i.pinimg.com/originals/42/92/1a/42921a6fa977e7ba017962bd93f82056.gif",                     //9
        "https://media.giphy.com/media/j9DrxsNXzBzPO/giphy.gif"                                             //10        
    ]
    if(message.content.startsWith(`${prefix}chayanne`)){
        let author = message.author;
        var random = Math.floor(Math.random() * 10);
        message.channel.send(author + " toma a tu Chayanne <3 ", {
                            files: ["" + chayanne[random] + ""]
        });
    }
    //pb!luismiguel
    var frases_lm = [
        "'Un te amo, dicho por los labios tuyos, es un poema que acelera los latidos de mi corazón.'" //1
    ]
    var luismiguel = [
        "https://media.giphy.com/media/w8Zigi8Jx9Hi6Nw2eg/giphy.gif" //1
    ]
    if(message.content.startsWith(`${prefix}luismiguel`)){
        let author = message.author;
        var random = Math.floor(Math.random() * 1);
        var random_phrase = Math.floor(Math.random() * 1);
        message.channel.send(author + ": " + frases_lm[random_phrase], {
                            files: ["" + luismiguel[random] + ""]
        });
    }
    //pb!f
    if(message.content.startsWith(`${prefix}f`)){
        let author = message.author;
        message.channel.send("", {
                            files: ["https://media1.tenor.com/images/bf32ee0d74ae0e54179d087c96e178d8/tenor.gif"]
        });
        message.delete();
    }
    //pb!ponido
    if(message.content.startsWith(`${prefix}ponido`)){
        var mje = message.content;
        if(mje.split(`${prefix}ponido`)[1] != "")
        {
            message.channel.send("io avia ponido mi " + mje.split(`${prefix}ponido`)[1] + " aki", {
                                files: ["https://cdn.discordapp.com/attachments/610307580207562775/610319933955375134/yo-habia-ponido-mis-cosas-aqui01561772726.png"]
            });
        }
        else
        {
            message.channel.send("Pon tu frase poto");
        }
    }
    /* FRASES */
    //sexo
    if(message.content.toUpperCase().includes("SEXO"))
    {
        let author = message.author;
        message.channel.send(author + " :eyes: ");
    }
    /* Verdad / Reto */
    if(message.content.startsWith(`${prefix}verdad`))
    {
        var verdad = [
            "Si tuvieras la oportunidad de salir en una cita con alguien que está presente, ¿quién sería?", //1
            "¿Cómo te sentirías si pillas a tu pareja dándose autoplacer?", //2
            "¿Cuál es tu mayor secreto?", //3
            "Si pudieras cambiar una cosa en tu cuerpo, ¿cuál sería?", //4
            "Si pudieras tener sexo con un/a famoso/a, ¿quién sería?", //5
            "¿Cuál ha sido el peor día de tu vida?", //6
            "¿Cuál es tu fantasía sexual más deseada?", //7
            "¿Qué es lo más loco que has hecho por un chico o una chica?", //8
            "¿Cómo fue tu primera experiencia sexual?", //9
            "¿Con cuántas personas te has acostado?", //10
            "¿Te arrepientes de algo en esta vida?", //11
            "¿Qué es lo más estúpido que has hecho nunca?", //12
            "¿Qué es lo que la mayoría de gente piensa de ti y es totalmente falso?", //13
            "¿Cuál es la cosa más infantil que todavía haces?", //14
            "¿Dejarías a tu pareja si te ofrecieran 1 millón de euros?", //15
            "¿Cómo fue tu primer beso?", //16
            "¿Alguna vez has engañado a alguien?", //17
            "¿Has humillado a alguien alguna vez?", //18
            "Si te perdieras en una isla desierta, ¿te llevarías a tu pareja o a un amigo?", //19
            "¿Cuál es la cosa más embarazosa que tus padres te han pillado haciendo?", //20
            "Si pudieras cambiar de lugar con alguien por un día, ¿quién sería?", //21
            "¿Has ido a alguna playa nudista?", //22
            "¿Te gusta alguien ahora mismo? (Si la persona está soltera)",  //23
            "Describe el sueño más erótico que hayas tenido alguna vez", //24
            "¿Te gusta tu trabajo? ¿Por qué?", //25
            "¿Cuál ha sido tu mejor experiencia sexual?", //26
            "¿Cuál ha sido tu peor experiencia sexual?", //27
            "¿Cuál fue la primera impresión que tuviste de tu pareja?", //28
            "¿Cuál es el hábito más molesto de tu pareja?", //29
            "Si pudieras cambiar algo en tu pareja ¿qué sería?", //30
            "¿Has hecho un trío?", //31
            "¿Harías un trío?", //32
            "¿Has tenido alguna cita que haya salido mal?", //33
            "¿Qué es lo que más te excita?", //34
            "¿Has hecho algo de lo que te arrepientes después de haber consumido alcohol?", //35
            "¿Qué es lo más loco que has hecho en la vida?", //36
            "¿Has mentido a alguien para no herir sus sentimientos?", //37
            "¿Tus padres te han pillado dándote autoplacer?", //38
            "¿Qué harías si fueras del sexo opuesto durante un mes?" //39
        ]
        let author = message.author;
        let member = message.mentions.members.first();
        var random = Math.floor(Math.random() * 39);
        if(member === undefined)
            message.channel.send(author + ": " + verdad[random]);
        else
            message.channel.send(member + ": " + verdad[random]);
    }
    //pb!reto
    if(message.content.startsWith(`${prefix}reto`))
    {
        var reto = [
            "Entra al canal de voz e imita a un perro", //1
            "Entra al canal de voz y di un trabalenguas", //2
            "Menciona a la primera persona que hable en el #general y dile que te gusta", //3
            "Entra al canal de voz General y canta una canción", //4
            "Escribe el nombre de la persona que te retó en alguna parte de tu cuerpo y envía la evidencia :eyes: ", //5
            "Escribe en el KC 'Me gustan mucho las berenjenas'", //6
            "Envía un audio cantando en el KC", //7
            "Escribe en el KC 'King ironBallz turns me on'", //8
            "Escribe en el KC 'Uuf voy mamadísim@'" //9
        ]
        let author = message.author;
        let member = message.mentions.members.first();
        var random = Math.floor(Math.random() * 9);
        if(member === undefined)
            message.channel.send(author + ": " + reto[random]);
        else
            message.channel.send(member + ": " + reto[random]);
    }
    /* Horoscopo */
    if(message.content.startsWith(`${prefix}horoscopo`))
    {
        var amor = Math.floor(Math.random() * 100);
        var salud = Math.floor(Math.random() * 100);
        var suerte = Math.floor(Math.random() * 100);
        var dinero = Math.floor(Math.random() * 100);
        var berenjenas = Math.floor(Math.random() * 1000);
        var poto = Math.floor(Math.random() * 100);

        let author = message.author;
        message.channel.send(author + ", tu horoscopo es el siguiente: \n" + 
                                        "Amor: " + amor + "%\n" +
                                        "Salud: " + salud + "%\n" +
                                        "Suerte: " + suerte + "%\n" +
                                        "Dinero: " + dinero + "%\n" +
                                        "Berenjenas: " + berenjenas + "\n" +
                                        "Nivel de poto: " + poto + "%"
                                    );
    }
})

client.login(token);