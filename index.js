/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

// APL para la Bienvenida
const DOCUMENT_ID_BIENVENIDA = "Bienvenida";
const datasourceBienvenida = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://cdn.pixabay.com/photo/2022/10/05/05/40/sunset-7499759_1280.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "¡Bienvenido a la Skill de Información sobre Santorini!"
                }
            },
            "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "hintText": "Prueba: \"Alexa, Dame información de santorini\""
        }
    }
};

// APL para la Descripción
const DOCUMENT_ID_DESCRIPCION = "Descripcion";
const datasourceDescripcion = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://img.freepik.com/foto-gratis/fondo-abstracto-azul-degradado-estudio-azul-oscuro-liso-vineta-negra_1258-68081.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user",
            "displayFullscreen": false,
            "headerTitle": "Santorini Grecia",
            "headerSubtitle": "",
            "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "videoControlType": "skip",
            "videoSources": [
                "https://iebdlfthbbxohteapyua.supabase.co/storage/v1/object/public/LCDM/videoplayback_(2).mp4?t=2024-07-02T20%3A31%3A17.043Z"
            ],
            "sliderType": "determinate"
        }
    }
};

// APL para los Lugares Turísticos
const DOCUMENT_ID_LUGARES_TURISTICOS = "Lugares_turisticos";
const datasourceLugaresTuristicos = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://img.freepik.com/foto-gratis/fondo-abstracto-azul-degradado-estudio-azul-oscuro-liso-vineta-negra_1258-68081.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user",
                    "size": "large"
                }
            ]
        },
        "title": "Lugares turísticos",
        "listItems": [
            {
                "primaryText": "Puerto de Amoudi",
                "imageSource": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/64/27/8f/20170705-122927-largejpg.jpg?w=1200&h=-1&s=1"
            },
            {
                "primaryText": "Imerovigli",
                "imageSource": "https://santorinibesttours.com/sites/default/files/top-attractions-listing/imerovigli-blue-dome-church.jpg"
            },
            {
                "primaryText": "Fira, capital de Santorini",
                "imageSource": "https://mywowo.net/media/images/cache/santorini_fira_01_introduzione_jpg_1200_630_cover_85.jpg"
            },
            {
                "primaryText": "Firostefani",
                "imageSource": "https://www.strogilisantorini.com/blog/user/pages/01.home/10.oia-fira-firostefani-santorini-villages/firostefani-santorini-greece02.jpg"
            },
            {
                "primaryText": "Pyrgos",
                "imageSource": "https://www.worldisbeautiful.eu/up_files/2140_02-Greckie-miasto.jpg"
            },
            {
                "primaryText": "Playa Roja",
                "imageSource": "https://nohurrytogethome.com/wp-content/uploads/2023/06/red-beach-santorini.jpg"
            }
        ],
        "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
        "hintText": "Prueba \"Alexa, selecciona el número 1\""
    }
};

// APL para la Comida
const DOCUMENT_ID_COMIDA = "Comida";
const datasourceComida = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://img.freepik.com/foto-gratis/fondo-abstracto-azul-degradado-estudio-azul-oscuro-liso-vineta-negra_1258-68081.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Comida típica Santorini",
        "listItems": [
            {
                "primaryText": "Keftedes o las Kofta",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfD_coEbBIDd9GUPtr7Ayn5_BnX1TLquxjw&s"
            },
            {
                "primaryText": "Cordero Asado",
                "imageSource": "https://hips.hearstapps.com/hmg-prod/images/roast-australian-lamb-shanks-with-vegetables-royalty-free-image-1640080732.jpg?crop=1xw:0.75012xh;center,top&resize=1200:*"
            },
            {
                "primaryText": "Souvlaki",
                "imageSource": "https://imag.bonviveur.com/souvlaki.jpg"
            },
            {
                "primaryText": "Baklava",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png"
            },
            {
                "primaryText": "Melitinia",
                "imageSource": "https://www.dianekochilas.com/wp-content/uploads/2013/04/melitinia-21.jpg"
            },
            {
                "imageSource": "https://imag.bonviveur.com/gyros.jpg",
                "primaryText": "Gyros"
            }
        ],
        "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg"
    }
};

// APL para el Traje Típico
const DOCUMENT_ID_TRAJE = "Traje_tipico";
const datasourceTraje = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://img.freepik.com/foto-gratis/fondo-abstracto-azul-degradado-estudio-azul-oscuro-liso-vineta-negra_1258-68081.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user",
            "foregroundImageLocation": "left",
            "foregroundImageSource": "https://i.pinimg.com/736x/ed/c7/ff/edc7ff7077c5868f950804b08d0bf5a5.jpg",
            "headerTitle": "Traje típico Santorini",
            "headerSubtitle": "Grecia",
            "hintText": "Prueba \"Alexa, siguiente pregunta\"",
            "headerAttributionImage": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "primaryText": "El traje típico de Grecia para hombres, llamado fustanella, incluye una falda plisada blanca, una chaqueta corta adornada y zapatos con pompones. Para mujeres, el traje Amalia tiene un vestido largo de terciopelo con bordados, una chaqueta ajustada y un delantal decorado. Estos trajes, usados en festivales y celebraciones, simbolizan la rica herencia cultural griega.",
            "textAlignment": "start",
            "titleText": ""
        }
    }
};

// APL para Personajes Sobresalientes
const DOCUMENT_ID_PERSONAJES = "Personajes_sobresalientes";
const datasourcePersonajes = {
    "imageListData": {
        "type": "object",
        "objectId": "paginatedListSample",
        "title": "Personajes sobresalientes",
        "listItems": [
            {
                "primaryText": "Sócrates",
                "secondaryText": "Filósofo por excelencia ",
                "imageSource": "https://i.pinimg.com/564x/86/97/90/8697901106af7ffba40605c67c01452e.jpg"
            },
            {
                "primaryText": "Pitágoras",
                "secondaryText": "Realizó importantes contribuciones a las matemáticas",
                "imageSource": "https://i.pinimg.com/564x/62/9f/c9/629fc93fc8e86f1781700fbb694bb046.jpg"
            },
            {
                "primaryText": "Aristóteles",
                "secondaryText": "Realizó aportaciones a varias disciplinas, siempre desde la lógica y el pensamiento científico.",
                "imageSource": "https://i.pinimg.com/564x/14/0e/96/140e968d3395313cec8d87443e353a97.jpg"
            }
        ],
        "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg"
    }
};

const DOCUMENT_ID_MUSICA = "Musica";
const datasourceMusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://arlkhakysysqjafwdbrf.supabase.co/storage/v1/object/public/video/audio_santorini.mp3?t=2024-07-02T21%3A27%3A37.669Z"
            ],
            "backgroundImage": "https://img.freepik.com/foto-gratis/fondo-abstracto-azul-degradado-estudio-azul-oscuro-liso-vineta-negra_1258-68081.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719792000&semt=ais_user",
            "coverImageSource": "https://elperiodicodevillena.com/wp-content/uploads/2019/02/1256312.jpg",
            "headerTitle": "Música",
            "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "primaryText": "La Zorba",
            "secondaryText": "Grecia",
            "sliderType": "determinate"
        }
    }
};

const DOCUMENT_ID_AYUDA = "Ayuda";
const datasourceAyuda = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://media.istockphoto.com/id/598237100/es/foto/vista-nocturna-de-la-isla-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=BQjDbKgTIqrsEKukG0l7jQGmZIlcMqRSQz3Vq9Gj_dw=",
            "titleText": "Ayuda",
            "primaryText": "Esta skill te proporcionará datos interesantes y útiles sobre la hermosa isla de Santorini. Puedes obtener información sobre Santorini. Ejemplos de preguntas que puedes hacer:",
            "choices": [
                "Dame informacion de Satorini",
                "Cuéntame sobre la historia de Santorini.",
                "¿Cuáles son las mejores playas en Santorini?",
                "¿Qué actividades puedo hacer en Santorini"
            ],
            "choiceListType": "alphabet",
            "headerAttributionImage": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "footerHintText": ""
        }
    }
};

const DOCUMENT_ID_ERROR = "Error";
const datasourceError = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://media.istockphoto.com/id/598237100/es/foto/vista-nocturna-de-la-isla-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=BQjDbKgTIqrsEKukG0l7jQGmZIlcMqRSQz3Vq9Gj_dw=",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, hubo un problema al procesar tu solicitud."
                }
            },
            "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg",
            "hintText": ""
        }
    }
};

const DOCUMENT_ID_SALIR = "Salir";
const datasourceSalir = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://media.istockphoto.com/id/598237100/es/foto/vista-nocturna-de-la-isla-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=BQjDbKgTIqrsEKukG0l7jQGmZIlcMqRSQz3Vq9Gj_dw="
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Gracias por usar la Skill de Información sobre Santorini!"
                }
            },
            "logoUrl": "https://ih1.redbubble.net/image.4112316330.5523/pp,840x830-pad,1000x1000,f8f8f8.jpg"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    };
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '¡Bienvenido a la Skill de Información sobre Santorini! ¿Como puedo ayudarte?, Prueba decir "Dame informacion de Santorini"';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_BIENVENIDA, datasourceBienvenida))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const DescripcionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santorini es una isla griega ubicada en el mar Egeo, famosa por su espectacular paisaje, formado por un volcán activo y una caldera sumergida. Sus pintorescas casas blancas con techos azules, estrechas calles empedradas y vistas impresionantes del mar crean una atmósfera mágica que atrae a millones de turistas cada año. La isla también es conocida por sus playas de arena volcánica, sus viñedos y su rica historia arqueológica, con sitios como Akrotiri, una antigua ciudad minoica bien preservada. La combinación de belleza natural, arquitectura icónica y herencia cultural hacen de Santorini un destino turístico inigualable.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_DESCRIPCION, datasourceDescripcion))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const LugaresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Santorini alberga diversos lugares turísticos impresionantes. El Puerto de Amoudi, bajo Oia, es famoso por sus restaurantes de mariscos y atardeceres. Imerovigli, en un acantilado, ofrece vistas panorámicas y lujosos hoteles. Fira, la capital, mezcla tiendas, restaurantes y vida nocturna con vistas al mar. Firostefani, cerca de Fira, es tranquilo y pintoresco. Pyrgos, en lo alto de una colina, tiene callejones y casas tradicionales con vistas panorámicas. La Playa Roja, con sus acantilados rojos y arena oscura, es una de las playas más singulares y fotografiadas de Santorini.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_LUGARES_TURISTICOS, datasourceLugaresTuristicos))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const ComidaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La gastronomía de Santorini es deliciosa y variada. Los keftedes son albóndigas de carne o verduras sazonadas con hierbas locales. El cordero asado, cocinado lentamente, es tierno y aromático. El souvlaki, brochetas de carne marinada y asada, se sirve con pan pita y salsa tzatziki. El baklava es un dulce de capas de masa filo rellenas de nueces y almíbar. Los melitinia son pasteles de queso típicos de Pascua. El gyros, similar al kebab, es carne asada en un asador vertical, servida en pan pita con tomate, cebolla y salsa. Estos platos reflejan la rica tradición culinaria de Santorini.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_COMIDA, datasourceComida))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const TrajeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'El traje típico de Grecia, conocido como fustanella para los hombres, se caracteriza por una falda plisada blanca con hasta 400 pliegues, simbolizando los años de ocupación otomana. Este conjunto incluye una chaqueta corta adornada, un cinturón decorado y zapatos de cuero con grandes pompones. Para las mujeres, el traje tradicional, llamado Amalia, presenta un vestido largo de terciopelo con bordados dorados, una chaqueta ajustada, un delantal decorado y un sombrero o pañuelo bordado, complementado con joyas tradicionales. Estos trajes son un símbolo vibrante de la rica herencia cultural griega y se utilizan en festivales y celebraciones.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_TRAJE, datasourceTraje))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const PersonajesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sócrates, Pitágoras y Aristóteles son figuras icónicas de la antigua Grecia. Sócrates, considerado uno de los fundadores de la filosofía occidental, es conocido por su método socrático de diálogo y su enfoque en la ética y la introspección. Pitágoras, famoso matemático y filósofo, es conocido por el teorema de Pitágoras y por fundar una escuela que combinaba matemáticas, música y misticismo. Aristóteles, discípulo de Platón y tutor de Alejandro Magno, hizo contribuciones significativas en diversas disciplinas como la lógica, la biología, la ética y la política, sentando las bases de la filosofía científica. Estos tres pensadores dejaron un legado duradero que ha influido profundamente en la filosofía, las matemáticas y las ciencias.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_PERSONAJES, datasourcePersonajes))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = '"La Zorba", también conocida como "Zorba el Griego", es una famosa pieza musical compuesta por Mikis Theodorakis. Esta canción es ampliamente reconocida por su ritmo alegre y enérgico, que refleja el espíritu vibrante de la cultura griega. La música, que acompaña la célebre danza sirtaki, se caracteriza por un inicio lento que gradualmente se acelera, invitando a los bailarines a seguir el ritmo creciente con movimientos cada vez más rápidos y entusiastas. "La Zorba" ha trascendido las fronteras de Grecia, convirtiéndose en un símbolo de celebración y alegría, y evocando la esencia de la vida isleña en lugares como Santorini.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_MUSICA, datasourceMusica))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Aquí tienes algunas preguntas que puedes hacer: ¿Dame información de Santorini?, ¿Cuéntame sobre la historia de Santorini?, ¿Cuáles son las mejores playas en Santorini?, ¿Qué actividades puedo hacer en Santorini?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_AYUDA, datasourceAyuda))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'salir';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .addDirective(createDirectivePayload(DOCUMENT_ID_SALIR, datasourceSalir)) // Agregar aquí la directiva para mostrar el APL de Salir
                .speak(speakOutput)
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, hubo un problema al procesar tu solicitud.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_ERROR, datasourceError))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective(createDirectivePayload(DOCUMENT_ID_ERROR, datasourceError))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionIntentHandler,
        LugaresIntentHandler,
        ComidaIntentHandler,
        TrajeIntentHandler,
        PersonajesIntentHandler,
        MusicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();