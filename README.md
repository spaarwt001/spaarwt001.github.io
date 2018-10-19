# Front End Application

In dit document vind je de dagplanning en gedane werkzaamheden voor de cursus Front End Application. Daarnaast word er gesproken over het concept en hoe je het concept kan installeren zodat je het te zien krijgt in je browser.

## Onderwerpen

 - Concept
 - Installatie
 - Logboek
 - Wat heb ik geleerd
 - Bronnen

## Concept
Als opdracht is er gegeven om de jeughulp tool te redesignen of in iedergeval te 
verbeteren. Uit de interviews met de jongerenwerkers is gebleken dat het invulproces met de desbetreffende persoon beter kan. De volgende punten werden genoemd:
1. Document makkelijk updaten / aanpassen
2. Makkelijk nieuwe informatie zetten in het document
3. Beslissingen vergemakkelijken (hangt van veel factoren af, teambeslissing)
4. Een tool dat ervoor zorgt de meningen van de begeleiders niet teveel van elkaar verschillen

Dit is hieronder uitgewerkt in een klikbaar prototype:
https://projects.invisionapp.com/prototype/cjnfz0t0h001c6c011x4pudbp/play


## Installatie 
Voor de installatie is er gebruik gemaakt van de [vue-CLI](https://cli.vuejs.org/) installatie 

install dependencies (pakketen dat waarop je project is gebouwd)
`npm install`

Run vervolgens zodat je project local te zien is op localhost:8000
`npm run dev`

Run onderstaande alleen als je het project online gaat zetten. Build zorgt ervoor dat alles geminified wordt zodat het online gezet kan worden.
`npm run build`


## Logboek
## Dag 1 -- 8/10

We begonnen met wat spelletjes om elkaar beter te leren kennen. In de middag kwam `Arjan` langs om zijn project te pitchen. Hij vertelde wat hij zijn project inhield, waarvoor hij het doet en tot slot liet hij zijn product zien.

Na de presentatie zijn we de buurt in gegaan, vervolgens zijn we op het terras gaan zitten.

## Dag 2 -- 9/10

Dag 2 kregen we 3 gastcolleges over de meest populaire `JavaScript Frameworks`. Verzorgd door: [Hay](https://twitter.com/hayify) voor Vue, [Peter](https://twitter.com/peterpeerdeman) voor React en [Albert](https://twitter.com/al_bert_brand) voor Angular.

Na de colleges ben ik mij gaan verdiepen in verschillende frameworks. Hieruit is gebleken dat [Vue.js](https://vuejs.org/) mij het meest aanspreekt. Vervolgens ben ik gaan brainstormen over om tot een concept te komen voor de opdrachtgever

Einde van de dag moest ik 3 frameworks uitkiezen die mij het meest aanspreekt en deze voorleggen aan de docent. 

Mijn top 3: 
 1. Vue.JS
 2. Node.JS
 3. React.JS

## Dag 3 -- 10/10
Vandaag kwam `Arjan` weer langs om zijn project en zijn gemaakte product verder uit te leggen. Voor de studenten was het nog een vraagteken wat hij nou verwacht van ons. We hebben hem vragen gesteld zoals hoe een proces van een 1e lijn hulpverlener eruit ziet.

Proces van een 1e lijn hulpverlener:

1. Signalering
2. Intake/registratie
3. Vraag/probleem verheldering met de kind
4. Tips/advies van hulpverlener
5. Perspectiefplan
6. Ondersteuning zoeken en aanbieder
7. Behandelplan
8. Akkoord van beide partijen (gezin & kind)
9. Hulp starten
10. Evaluatie
11. Resultaat

Vandaag kreeg ik te horen aan welke Framework ik mag werken. Gelukkig heb ik `Vue.JS` als framework gekregen. Dat was ook de reden waarom ik me had aangemeld voor de cursus [Front-End Applications](https://github.com/cmda-tt/course-18-19/tree/master/frontend-applications). 

Ik ben begonnen met het installeren van een aantal node packages. 
Als eerst heb ik `Npm init` gedaan om een `package.json` file aan te maken.
Hierin komen al mijn Node packages die ik in project ga gebruiken. 

Vervolgens heb ik `npm install 'package'` gedaan om de gewenste package te installeren voor mijn project. Dit lukte allemaal en mijn `package.json` file werd geüpdatet met de packages die ik had geïnstalleerd. Deze kwamen onder *dependencies* te staan. Daarnaast zag ik ook *devDependecies* staan. 

** dependencies vs devDependecies**
Dependencies zijn nodig om je project werkend te maken. Denk aan een Animatie library. DevDependencies heb je alleen nodig tijdens het coderen zelf, denk aan een compiler die al je code bundelt.

**Installeren van Vue.js**
Nadat ik al mijn packages had geïnstalleerd in mijn project, was het nu de bedoeling dat ik Vue.js als framework installeer en al mijn node packages daaraan koppelt.
Het installeren van Vue.js was gelukt, alleen kreeg ik mijn applicatie maar niet draaiend. 

## Dag 4 -- 11/10
Gisteren was het me niet gelukt om mijn Vue.js applicatie werkend te krijgen. 
Ik wou hem zelf *clean* met alle benodigde packages installeren. Ik ben toen opnieuw begonnen met de Vue.js installatie met behulp van de Command Line Interface(CLI). 


**Wat is Vue CLI?**
Vue Command Line Interface is 1 van de manieren hoe je gebruik kan maken van de framework. Als je gebruikt maakt van de CLI, configureert de CLI automatisch de mappenstructuur en installeert die webpack(plugins om alle files te bundelen naar een minified version) voor Vue, zodat je gelijk aan de slag kan. Zie het als een soort boilerplate. Daarnaast heb je ook Vue GUI

**Wat is Vue GUI?**
Vue GUI doet inprincipe hetzelfde als de CLI. In plaats van dat je alles via de CLI moet configureren laat de GUI een interface zien

**En kan het ook zonder CLI/GUI?**
`<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>`. 

De bovenstaande regel laadt de Vue Library via een script tag in. Dit wordt meestal gedaan als je snel iets wilt testen of een website gaat maken met een paar pagina’s. Nadeel hiervan is, is dat je alle plugins zoals babel, jslint etc. zelf moet installeren.

**Hoe ziet het mappenstructuur voor Vue eruit?**

 - Node modules - Alle libraries om Vue te laten draaien
 - Public - alle files die niet meegenomen hoeven te worden door webpack
 - Src - alle files die we gebruiken voor onze vue app
	 - Assets - images, fonts etc.
	 - Components - onze componenten voor de vue app
	 - Views - onze views/pagina’s voor de app
	 - App.vue - Root component, alle componenten komen daar samen
	 - Main.js - Render de app en kent het toe aan de DOM
	 - Router.js -
	 - Store.js -

**Hoe wordt de vue app geladen in de browser?**
App.vue is onze root file waar al onze gemaakte componenten in zijn genest.

Main.js verwerkt vervolgens alle componenten uit App.vue en past deze toe in Index.html bestand. Waardoor de app in de browser getoond kan worden.

**Wat is VueX**
Is een state management systeem dat gebruikt wordt icm Vue. [VueX](https://vuex.vuejs.org/) kan ook gezien worden als een centrale punt voor alle data die we gebruiken en willen bewaren. Daarnaast functioneert het ook als een library voor Vue. Bij [VueX](https://vuex.vuejs.org/) zitten een paar belangrijke elementen:

 - State – Single state tree. Hiermee configureer je alle states van je
   elementen
 - Getters – Met getter kan je een specifieke waarde uit de state halen
 - Mutation – Met mutation kan je de waarde manipuleren (sync)
 - Actions – Actions lijkt op mutations maar actions commit de mutations
   (async)
 - Modules – Hoe groter de app, hoe meer data. Modules maakt het
   mogelijk om je code op te delen in modules om het overzichtelijk te
   houden.

**Wat is state management?**
State management biedt je de mogelijkheid om de status van een element te beheren. We nemen een stoplicht als voorbeeld. Die heeft 3 states: groen, oranje en rood. Deze moeten steeds constant geswitcht worden. Een state management helpt je daarbij.

**Waneer maak je gebruik van VueX?**
Als beginner zal je denken dat je al je data in [VueX](https://vuex.vuejs.org/) moet opslaan. Dit is meestal niet het geval. Het is alleen essentieel als je de data vanuit verschillende niet gerelateerde componenten wil benaderen. Het wordt aangeraden om het wel te gebruiken bij een middel tot groot project. Voor kleinere projecten kan je ook zonder [VueX](https://vuex.vuejs.org/) werken.

Onder zie je een flow chart over wanneer wel/niet je data moet opslaan in Vuex.

![Flowchart voor VueX](https://markus.oberlehner.net/images/2018-05-27/should-i-store-this-data-in-vuex-flow-chart.png)


## Dag 5 -- 12/10
Gisteren heb ik voornamelijk onderzoek gedaan naar [Vue.js](https://vuejs.org/) en gekeken naar hoe alles in elkaar zit. Gisteren heb ik mijn Vue project geïnstalleerd met behulp van de [CLI](https://cli.vuejs.org/). De applicatie heb ik toen getest op hoe alles werkt en hoe alles gestructureerd is.

**SCSS in Vue**
Ik kwam erachter dat in de Vue file [HTML](https://developer.mozilla.org/nl/docs/Learn/Getting_started_with_the_web/HTML_basisbegrippen), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) & [JS](https://developer.mozilla.org/nl/docs/Learn/Getting_started_with_the_web/JavaScript_basics) geschreven wordt. Vandaag heb ik de CSS gestript van de file en in een externe file geplaatst. Met behulp van de methode `@import  './styles/main.scss'`.



## Dag 6 -- 15/10
Vandaag hadden we in de ochtend 2 gastsprekers die werken als jongeren hulpverleners. Ze vertelden namelijk over hun ervaring met uithuisplaatsing.
Wat me opviel bij beide sprekers is dat ze het erg moeilijk vinden om een advies te geven over een kind. Daarnaast moeten zij heel voorzichtig te werk gaan omdat de hulpverleners de ouders kunnen kwetsen met hun vragen/beslissingen.

**Jongeren hulpverlener proces:**

 1. Kijken naar maatregel (kinderberscherming maatregel)
 2. Verzoek indienen bij de kinderbescherming/justitie
 3. Instituut krijgt een rapport over het kind
 4. Kijkt naar situatie
 5. Instituut leg uit aan de ouderen wat wat is
 6. Instituut kijkt naar goede en slechte dingen in het gezin
 7. Verzint een plan
 8. Legt het plan uit aan de ouders
 9. Biedt het kind begeleiding aan

Het doel van de twee sprekers was eigenlijk omdat het onduidelijk was of zij werken met digitale hulpmiddelen om hun bevindingen te noteren. Beide sprekers hebben nooit gewerkt met de tool die `Arjan` heeft gemaakt. Dus werd de vraag gesteld wat zij graag willen zien als verbetering van digitale hulpmiddelen. 

**Wensen & behoeftes jongeren hulpverlener:**

1. Document makkelijk updaten / aanpassen
2. Makkelijk nieuwe informatie zetten in het document
3. Beslissingen vergemakkelijken (hangt van veel factoren af, teambeslissing)
4. Een tool dat ervoor zorgt de meningen van de begeleiders niet teveel van elkaar verschillen

Vandaag heb ik niet veel gewerkt aan mijn applicatie. Ik ben meer bezig geweest met het documenteren van alles wat we de afgelopen week hebben gedaan. Wel heb ik mijn mede-studenten geholpen met [Vue.js](https://vuejs.org/) als zij tegen dingen aanliepen. Bijvoorbeeld: waarom wordt mijn header / footer niet getoond. Hoe haal ik mijn CSS bestand los van de Vue bestand en laad ik het extern in.

## Dag 7 -- 16/10

**Computed vs Methods property in Vue.js**
De werking van beide property lijken op elkaar.  Het verschil is dat de [methods](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) property alle functies binnenin de property opnieuw runt, ook al *target* je maar 1 functie. De [computed](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) property runt alleen het desbetreffende functie.

Bijvoorbeeld je hebt 2 optel functies in je [methods](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) property voor button A en button B, beide doen hetzelfde, ze tellen steeds 1 erbij op als je op de knop klikt. Als je op button A klikt zal button B ook gerund worden, maar het effect zal alleen weergegeven worden voor button A.

Als je hetzelfde doet maar dan in een [computed](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) property. Dan zal Vue alleen het desbetreffende functie runnen. Als je op knop A klikt dan zal alleen de functie voor knop A gerund worden. Dat geldt hetzelfde voor knop B. 

Dus je zal je afvragen waarom je [methods](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) zal moeten gebruiken als [computed](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) heel efficient werkt. Ik zal [methods](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) gebruiken bij het veranderen van states omdat de hele functie dan gerund moet worden. [Computed](https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods) zal ik gebruiken binnen in de state als er data veranderd moet worden.


**Vue.js shorthands**
Vue.js maakt gebruikt van de `V-prefix`. Zo weet Vue dat die iets moet aanpassen in de DOM. bijvoorbeeld `<div v-text="message"></div>`. Hier zie je de prefix `V`, gevolgd door de directive `text`, met als expressie `message`.

Hetzelfde heb ik gebruik voor een onClick action. in Vue schrijft je het uit als `<a on:click="toggle()"></a>`, maar dit kan ook ingekort worden door het te schrijven als `@click`. De syntax ziet er dan het volgende uit `<a @click="toggle()"></a>`

**Vue Router**
`<a>`  & `<router-link>`

Paginas koppelen

1 root element -> template

data inladen lukte niet.

## Dag 8 -- 17/10

presentatie [nienke](https://twitter.com/helenasometimes) over waarom en wanneer je een framework moet gebruiken

Question component aangemaakt 
data inladen gelukt door [stackoverflow](https://stackoverflow.com/questions/45565349/how-to-acces-external-json-file-objects-in-vue-js-app)

**new Vue vs export default**
new vue maakt een nieuwe instantie aan, hiermee bedoel ik dat de aangemaakte component de root file zal worden en componenten daaraan gekoppeld kan worden. Export default gebruik je om componenten te declareren om die later te gebruiken.


## Dag 9 -- 18/10
Selectbox selecteert alle velden met dezelfde antwoorden. Dit komt omdat v-model alles reset. Selectbox heb ik gebruikt voor het formulier. Dit zorgde ervoor dat elke veld met dezelfde antwoord geselecteerd zal worden. Om dit op te lossen wou ik voor elke vraag een component aanmaken zodat ze afhankelijk van elkaar zouden functioneren. Dit is half gelukt. Ik ben hierdoor wel een groot deel van mijn applicatie kwijt. 

Om dit te voorkomen moest ik eerder en vaker op [Github](https://github.com/) gaan [committen](https://help.github.com/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project/) zodat ik altijd de vorige versie weer in kan laden. Daarnaast kan je ook bijhouden wat en wanneer je iets heb aangepast.

## Wat heb ik geleerd

 1. Het werken met een Framework (Vue.JS)
 2. Installeren van Vue.JS
 3. Verschillen tussen de installatie methodes
 4. Dependecies vs devDependencies
 5. Vue CLI / Vue GUI / Script
 6. Mappenstructuur van Vue
 7. VueX
 8. Statemanagements
 9. SCSS in vue
 10. Computed vs Methods
 11. Vue shorthands
 12. Vue router
 13. new Vue vs export Default

    
    
## Bronnen

 - [VueJs docs](https://vuejs.org/v2/guide/)
 - [NetNinja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

