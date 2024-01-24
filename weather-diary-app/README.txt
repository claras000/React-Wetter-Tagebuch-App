Das Projekt WetterFühlIch wurde mit React,Redux und der Programmiersprache JavaScript realisiert. Mit Hilfe von Node.JS kann unsere App geöffnet werden.
Laden Sie sich dafür Node.Js herunter und öffnen sie  den Ordner in ihrer Shell indem sich die Dateien für die App befinden.
Geben Sie nun folgende Befehle ein:

1 - run "npm install"

2 - run "npm start"

Als Entwicklerplattform haben wir Visual Studio Code verwendet.

Folgende Bibliotheken wurden genutzt und ergänzt:

 "bootstrap": "^5.2.3", (für Struktur)
 "moment": "^2.29.4", (für Datum)
 "react-bootstrap": "^2.7.0", (für Struktur)
  "react-color": "^2.19.3", (für Colopicker)
  "react-datetime-bootstrap": "^1.4.7", (für Datum)
 "react-icons": "^4.7.1",(für Icons)
 "react-redux": "^7.2.9", (für Redux)
 "redux": "^4.2.0",
 "redux-form": "^8.3.9",
  "redux-persist": "^6.0.0",
 "semantic-ui-css": "^2.5.0", (für inneres CSS in Komponenten)
 "semantic-ui-react": "^2.1.4",
  "web-vitals": "^2.1.4" (Analyse für Redux)


Folgende Dateien sind in der App enhalten:

CSS Komponenten: In den CSS Komponenten wurde das Design festgelegt

Index.js : im Index wird der DOM importiert und das Projekt gerendert. Sie bildet die Wurzel des Projekts.

App.js : In der der App wurde die Navbar impelmentiert und die Verbindungen zu den vier Hauptkomponenten.

Componenten:

WeatherAPI.js : Hier wurde der API-Aufruf implementiert und der Farbkreis

Weather.JS : API wird in Daten übersetzt (WeatherAPI ruft diese Datei auf). Hier ist der Algorythmus zur Umrechung von Wetterdaten in Farbe.

Navbar.JS : Hier wurde der Titel und das Logo impelmentiert, welches immer zu sehnen ist.

DiaryRedux.JS : Der Provider für die persitente Datenspeicherung mit dem Tool Redux, eine internes state-memory für den Tagebuchfeed.

DiaryItemRedux.js : Hier wurde die Struktur des Tagebuchfeeds implementiert.

DiaryItem.js : hier wurde die Nahansicht eines Tagebucheintrag implementiert

DiaryFormRedux.js : hier wurde die Struktur des Formulars für Tagebucheinträge implmentiert.

DiaryForm.js : hier wird die Eingabe des Formulars angenommen und gespeichert.

Diary.js : Der StrictMode für das Anwenden von Redux wird angewendet. Diese Datei bildet das Parentelement aller Dateien die mit Redux verknüpft sind und Teil des Tagebuchfeeds sind.

dateTime.js : Datum wird mit der Nutzung von dem Plugin Moment ausgelesen.

ColorChange.js : Struktur der Farbauswahlseite.

AddNoteRedux.js : Der Provider für die persitente Datenspeicherung mit dem Tool Redux, eine internes state-memory für den Tagebucheintrag.

Diary.js : Der StrictMode für das Anwenden von Redux wird angewendet. Diese Datei bildet das Parentelement aller Dateien die mit Redux verknüpft sind und Teil des Tagebucheintrages sind.

Dateiordner Redux: Redux besteht aus: actions, reducer und Store, um die Tagebucheintrgäe zu persistieren. Ein Item wird im Reducer erstellt mit den Parametern: id: id,title,date,text, circle,backgrounde, temp, humidity und location. Diese werden im Store pro Eintrag persisiert.

Dateiordner ColorPicker: Pro Farbauswahl gibt es ein Farbauswahltool und eine dazugehörige Datei. Das PlugIn react-color wurde hier genutzt mit dem ColorPicker "SwatchesPicker".

(Die restlichen Dateien wurden automatisch generiert oder sind nicht relevant für die App.)



