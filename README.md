# Bachelorarbeit

# Automatisch generierte Dokumentation

# aus bereits vorhandenen Systemen

# (AutoGenDok)

```
Vorgelegt von
Simon Rininsland
632883
```
```
Eine Thesis geschrieben für die
Hochschule Fulda
```
```
Zur Erlangung des akademischen Grades des
Bachelor of Science in
Angewandte Informatik - Medieninformatik
```
In Zusammenarbeit mit

# und

im September 2015

Erstprüfer: Prof. Dr. Paul Grimm

Zweitprüfer: Tolleiv Nietsch


## Zusammenfassung

IT^1 - Administratoren sind in technischen Betrieben nicht nur dafür zuständig Server oder
ganze IT - Infrastrukturen aufzusetzen, sondern solche möglichst vollständig zu
dokumentieren. Dies macht nachträgliche Änderungen möglich oder hilft Informationen
schneller einsehen zu können. Außerdem leidet mit zunehmender Projektgröße die
Übersichtlichkeit von Infrastrukturen. Es ist schwer die Zusammenhänge und
Abhängigkeiten zwischen Servern zu erkennen.
Diese Arbeit soll den Entstehungsprozess, die Entwicklung und die damit einhergehenden
Gedankengänge einer Webapplikation dokumentieren, um oben genannten Probleme zu
lösen.
Es werden aus vorhandenen Überwachungs-, oder Verwaltungswerkzeugen bereits
vorliegende Informationen verwendet, um eine möglichst vollständige Dokumentation zu
erhalten. Außerdem wird ein Teil dieser Informationen genutzt, um die Visualisierung der
IT-Infrastrukturen darzustellen.

Ziel der Arbeit ist es zum einen die Projektdokumentation weitestgehend zu automatisieren
und damit Standards zu folgen, Mehraufwand zu vermeiden und Robustheit zu garantieren
und zum anderen komplexe IT-Infrastrukturen zu visualisieren.

Es soll eine Webanwendung implementiert werden, welche aus bestehenden Daten von
internen Informationsquellen mit möglichst wenig Zusatzinformationen und Arbeit eine
automatisch generierte Dokumentation erstellt, welche standardisiert alle Anforderungen
einer Projektdokumentation erfüllt.

Die Notwendigkeit einer Projektdokumentation steht außer Frage und wird in allen
Projekten als Teil des Arbeitsprozesses angesehen.
Unübersichtliche IT-Infrastrukturen zu visualisieren, um damit Zusammenhänge und
Abhängigkeiten auf einen Blick zu erkennen, lässt eine frühzeitige Fehlerdiagnose zu und
garantiert zudem einen schnelleren Überblick über nicht bekannte Systeme.

(^1) "Informationstechnik :: information technology :: IT :: ITWissen ..." 2009. 15 Sep. 2015
<http://www.itwissen.info/definition/lexikon/Informationstechnik-information-technology-
IT.html>


## Inhaltsverzeichnis




- 1 Aufbau des Hauptteils der Arbeit
- 2 Praktisches Ziel
- 3 Einleitung
   - 3.1 Diskussion um Dokumentationen
   - 3.2 Ziele der Dokumentationen
   - 3.3 Zusammenfassung Dokumentation
   - 3.4 Die optimale Projekt- / Systemdokumentation
   - 3.5 Bezug zu meiner Arbeit
      - 3.5.1 System-/ Serverdokumentation.......................................................................
      - 3.5.2 Projektdokumentation
- 4 Datenbeschaffung
   - 4.1 Was ist eine Programmierschnittstelle/ API
   - 4.2 Was ist JSON.........................................................................................................
   - 4.3 Was ist SOAP
   - 4.4 Was ist cURL
   - 4.5 Was ist smarty
   - 4.6 Zabbix
   - 4.7 VMware vSphere
   - 4.8 Confluence
   - 4.9 Zusammenfassung Datenbeschaffung
- 5 Datenverarbeitung
   - 5.1 Die geeignete Datenstruktur
   - 5.2 Was ist Neo4J
   - 5.3 Welche Daten werden gespeichert
      - 5.3.1 Abstrakte Knoten / Metaknoten
   - 5.4 Welche Daten werden während der Laufzeit generiert
   - 5.5 Verarbeitung der angeforderten Daten
      - 5.5.1 Daten der Zabbix Schnittstelle
      - 5.5.2 Daten der vSphere Schnittstelle
      - 5.5.3 Daten Neo4j
   - 5.6 Frontend Programmablauf
      - 5.6.1 Vor dem ersten Start
      - 5.6.2 Die Gesamtübersicht / Startseite
      - 5.6.3 Ausgewähltes Projekt
- 6 Datenvisualisierung
   - 6.1 Historie der Datenvisualisierung - Prototypen
      - 6.1.1 Version
      - 6.1.2 Version
      - 6.1.3 Version
   - 6.2 Maßnahmen zur besseren Übersicht
   - 6.3 Visualisierung reine Darstellung von Daten
   - 6.4 Visualisierung neues Projekt/neue Knoten/neue Kanten
- 7 Datenausgabe
   - 7.1 Die smarty Vorlagen
   - 7.2 Datenausgabe in Confluence
- 8 Erfüllte Anforderungen
   - 8.1 Technische Anforderungen
   - 8.2 Unternehmenspezifische Anforderungen
   - 8.3 Normen, Richtlinien, Gesetze, Standards
      - 8.3.1 Technisch
      - 8.3.2 Programmierrichtlinien der Hochschule Fulda
      - 8.3.3 Cypher spezifisch
      - 8.3.4 Design
      - 8.3.5 Usability
   - 8.4 Anforderungen an die Datenhaltung
   - 8.5 Qualitätssicherung durch Behavior Driven Development
- 9 Bewertung und Ausblick
   - 9.1 Wichtigste Ergebnisse der Arbeit
   - 9.2 Unvorhergesehene Schwierigkeiten
   - 9.3 Ausblick
   - 9.4 Schlusssatz
- 10 Quellenverzeichnis / Literaturverzeichnis
- 11 Genutzte Werkzeuge oder externe Frameworks
   - 11.1 Werkzeuge
      - 11.1.1 Neo4J
      - 11.1.2 Zabbix
      - 11.1.3 VMWare vsphere
      - 11.1.4 Targetprocess
      - 11.1.5 Git
      - 11.1.6 Jenkins
      - 11.1.7 XAMPP
      - 11.1.8 Online Syntax-Highligher
   - 11.2 Genutzte Frameworks
      - 1 1.2.1 PHP
      - 11.2.2 JavaScript
      - 11.2.3 CSS
- 12 Abkürzungverzeichnis
- 13 Glossar
- 14 Quellcode
   - 14.1 Ordnerstruktur
   - 14.2 index.php
   - 14.3 api.php
   - 14.4 Api_controller.php
   - 14.5 Application_handler.php
   - 14.6 SSH_service.tpl
   - 14.7 apache.tpl
   - 14.8 dns.tpl
   - 14.9 hostDiff.tpl
   - 14.10 project.tpl
   - 14.11 server.tpl
   - 14.12 topOverview.tpl
   - 14.13 app.css...............................................................................................................
   - 14.14 index.html...........................................................................................................
   - 14.15 index_popups.html
   - 14.1 6 conf.php
   - 14.17 commits_ajax.js
   - 14.18 controller_choosen.js
   - 14.19 controller_choosen.js
   - 14.20 dataInViz.js
   - 14.21 doc_draft.js
   - 14.22 global_variables.js
   - 14.23 handler_click.js
   - 14.24 success_choosenProject.js
   - 14.25 success_newNodes.js
   - 14.26 success_simpleCommit.js
   - 14.27 success_startData.js
   - 14.28 unsorted_stuff.js
   - 14.29 ajax_calls.php
   - 14.30 api_connector.php
- 15 CD als Anhang


## Erklärung

Ich erkläre, dass ich die vorliegende Bachelor-/Masterarbeit selbständig und nur unter
Verwendung der angegebenen Quellen und Hilfsmittel angefertigt habe.

__________________________________
Datum und Unterschrift


## 1 Aufbau des Hauptteils der Arbeit

Die Arbeit ist in vier große Abschnitte unterteilt die in logisch notwendiger Reihenfolge nach
der Einleitung aufgeführt werden.
Das erste Kapitel des Hauptteils beschäftigt sich mit der Datenbeschaffung [Kapitel 4]. Die
zu erstellende Webapplikation bezieht die meisten Informationen nicht aus Eingaben des
Nutzers, sondern aus anderen bereits vorhandenen Systemen. Zu Beginn war also eine
Analyse dieser Systeme notwendig, um zu wissen inwieweit ein automatischer Datenbezug
überhaupt realisierbar ist. Eine dahingehende Beschäftigung mit deren Methoden und
Zugängen ist notwendig.
Daraufhin folgt das Kapitel der Datenverarbeitung [Kapitel 5]. Dies schließt die eigentliche
Datenverarbeitung und Korrelation dieser Daten ein, die von dem danach erwähnten
Frontend mit der zusammengehörigen Visualisierung, im Kapitel der Datenvisualisierung
[Kapitel 6] benötigt wird.

Abbildung 1 : Einfaches grundsätzliches Datenfluss-Diagramm der Webapplikation

Zum Ende des Hauptteils wird die Datenausgabe [Kapitel 7] beziehungsweise die
Datenspeicherung erläutert. Auch dort sind übergreifende Kenntnisse über Anbindungen
an verschiedene Systemen notwendig.
Nachdem die Programmstruktur im Hauptteil erklärt ist, werden nochmals die
Anforderungen, die mit der Webanwendung erfüllt werden, dargestellt.


## 2 Praktisches Ziel

Folgende Vorteile ergeben sich aus einer weitestgehend automatisch generierten
Dokumentation und Visualisierung der IT-Infrastruktur:
Die Dokumentation wird immer nach demselben Schema erstellt. Der Standard für interne
Dokumentationen wird demnach immer eingehalten.
Daten der Systeme liegen bereits in verschiedenen Überwachungssystemen vor. Dort
werden die Systeme überwacht oder verwaltet. Die Systeme bieten Schnittstellen um
Daten auszulesen. So können große Teile der Dokumentation automatisiert und in
regelmäßigen Abständen erstellt oder aktualisiert werden. Fehler und Aufwand werden
somit verringert.
Eine Visualisierung ist einer rein textuellen oder virtuellen aufgeführter Serverliste mit
Abhängigkeiten vorzuziehen. Durch dargestellte Knoten und Kanten erkennt man
Datenflüsse und Abhängigkeiten schneller. Dadurch ist eine schnellere Übersicht gegeben.
Somit schafft man mit weniger Arbeit eine strukturiertere und robustere Dokumentation, die
zudem hilft neue komplexe IT-Infrastruktur schneller zu überblicken.

## 3 Einleitung

Mit dem Thema der automatisch generierten Dokumentation ist eine tiefergehende
Beschäftigung mit den Arten der System-Dokumentationen unumgänglich. Im Folgenden
wird erläutert wie Normen zu IT Dokumentationen entstanden sind, was eine IT
Dokumentationen ausmacht, wieso man sie erstellt und was das letztendlich für meine
Arbeit bedeutet.

### 3.1 Diskussion um Dokumentationen

Die allgemeinen Diskussionen um die Dokumentation im Rahmen der Software-
Entwicklung ist so alt wie die Informationstechnik selbst. Meist möchten die Kunden eine
möglichst detaillierte Projektdokumentation, die nicht nur vollständig ist, sondern zudem
auch die unternehmensinternen Richtlinien zum Erstellen von Dokumentationen erfüllt. Der
Entwickler hingegen möchte am liebsten weitestgehend programmieren und möglichst
effizient und schnell an der Lösung des Problems arbeiten. Er sieht den Programmiercode
und die darin enthaltenen Kommentare als aktuellste und zuverlässigste
Informationsquelle an.^2

(^2) Inspieriert von: "Optimale Systemdokumentation mit agilen Prinzipien." 2012. 25 Aug.
2015 <https://www.codecentric.de/kompetenzen/publikationen/optimale-
systemdokumentation-mit-agilen-prinzipien/>


Der Trend in der Softwareentwicklung geht zur agilen Softwareenwicklung^3. Mit Methoden
wie Scrum^4 oder Kanban^5 werden Projektiterationen möglichst klein gehalten, um den
Kunden kontinuierlich Ergebnisse zu präsentieren. Außerdem helfen diese Werkzeuge den
organisatorischen Aufwand während einer Projektphase möglichst klein zu halten.
Besonders zu Beginn der agilen Softwareentwicklung und der damit einhergehenden
Veröffentlichung des Agilen Manifests^6 , kam es zunehmend zu Missverständnissen. Die
Diskussion, ob eine umfangreiche Dokumentation überhaupt noch zeitgemäß ist, stand
lange im Raum^7.

### 3.2 Ziele der Dokumentationen

Jeder der einmal den Auftrag hatte, komplexe Software oder eine Hardware-Infrastruktur
zu verändern oder einzusetzen, kennt das Problem von fehlenden Beispielen oder
Informationen. Eine Dokumentation gehört also unumstößlich zu jedem Projekt, das
komplex genug ist, um nicht sofort verstanden zu werden.
Das agile Manifest^8 ist Anfang der Jahrtausendwende entstanden. Zu dieser Zeit waren
vor allem langwierige Prozesse in der Informationstechnik anzutreffen, die nicht minder
umfangreiche Dokumentationen forderten. Nicht selten gab es Fälle, in denen die
Dokumentation mehr Zeit als das eigentliche Projekt in Anspruch nahm. Aus diesem Grund
gibt es im agilen Manifest den Punkt: “Working software over comprehensive
documentation”^9. Was frei übersetzt bedeutet, dass funktionierende Software einen
höheren Stellenwert haben sollte, als eine umfassende Dokumentation.

Daraus ergibt sich ein klares Ziel, welches erreicht werden soll. Wie im vorherigen Kapitel
erläutert gilt folgende Maxime: Mehraufwand vermeiden! Der Aufwand der Erstellung darf
nicht über der späteren Aufwandseinsparung der Dokumentation liegen.
Dieser Satz kann als immer gültiges und zu erreichendes Ziel gesehen werden und darf
bei der Erstellung und Wartung einer Dokumentation niemals aus den Augen verloren
werden.

(^3) "Key Software Development Trends - MSDN Blogs." 2010. 14 Sep. 2015
<http://blogs.msdn.com/b/somasegar/archive/2010/02/23/key-software-development-
trends.aspx>
(^4) "Scrum – Wikipedia." 2011. 7 Aug. 2015 <https://de.wikipedia.org/wiki/Scrum>
(^5) "Kanban – Wikipedia." 2011. 7 Aug. 2015 <https://de.wikipedia.org/wiki/Kanban>
(^6) "Manifest für Agile Softwareentwicklung - Agile Manifesto." 2011. 25 Aug. 2015
<http://www.agilemanifesto.org/iso/de/>
(^7) "Optimale Systemdokumentation mit agilen Prinzipien." 2012. 14 Sep. 2015
<https://www.codecentric.de/kompetenzen/publikationen/optimale-systemdokumentation-
mit-agilen-prinzipien/>
(^8) "History: The Agile Manifesto." 2002. 25 Aug. 2015
<http://agilemanifesto.org/history.html>
(^9) "The Agile Manifesto." 2002. 25 Aug. 2015 <http://agilemanifesto.orgl>


### 3.3 Zusammenfassung Dokumentation

Aus Erfahrung wissen Softwareentwickler, dass die Betriebs- und Wartungphase um
einiges aufwendiger zu dokumentieren ist als die Entwicklungsphase^10. Dort beschränkt
man sich meist darauf, den Programmcode zu kommentieren. Hierbei wichtig zu beachten
sei daher, dass eine Dokumentation vorwiegend für die Betriebs-und Wartungsphase
geschrieben wird, um eine langwierige Informationssuche auszuschließen.
Auch müssen Projekt-, Prozess- und Systemdokumentationen unterschieden werden.
Prozessdokumentationen spielen während des Erstellungprozesses eine große Rolle, da
hier nicht nur der Zustand festgehalten wird, sondern auch neue Mitarbeiter angelernt, der
Kunde über den aktuellen Status informiert und Zwischenschritte festgehalten werden^11
Beachtet werden muss die Tatsache, dass der Erstellungsprozess der Software und der
Dokumentation sich über sehr lange Zeit erstrecken kann.
Meist wird die Prozessdokumentation nach dem Abschluss des Projektes weniger oft
benötigt als die Projekt- oder die Systemdokumentation, da diese für die spätere Wartungs-
und Betriebsphase eher relevant sind.
Zusätzlich sollte beachtet werden, dass ein Entwickler genau so schnell benötige
Informationen aus den Quellcode lesen kann, falls dieser gut kommentiert ist, aber ein
Systemadministrator es ungleich schwieriger hat in die einzelnen Rechner zu schauen, um
die Zusammenhänge in der Infrastruktur zu erkennen. Somit liegt die Vermutung nahe,
dass eine Systemdokumentation einen höheren Mehrwert beinhaltet als eine reine
Prozessdokumentation.

Eine Dokumentation ist ferner nicht dafür zuständig jede Frage zu beantworten. Falls eine
Person oder das System an sich die Fragen genauso gut beantworten könnten, sind diese
Quellen einer schriftlich ausgearbeitet Dokumentation vorzuziehen^12. Sie müssen lediglich
in der Dokumentation erwähnt werden.
Wie im vorherigen Kapitel erwähnt: Im Hinterkopf sollte immer behalten werden, dass
Mehraufwand vermieden werden soll. Nur relevantes in die Dokumentation aufnehmen.

### 3.4 Die optimale Projekt- / Systemdokumentation

Wie bereits bekannt ist die Prozessdokumentation für die spätere Betriebs- und
Wartungsphase weniger relevant. Deshalb werden wir das Hauptaugenmerk in der Arbeit
auf die Projekt- bzw. Systemdokumentation legen.

(^10) "Optimale Systemdokumentation mit agilen Prinzipien." 2012. 15 Sep. 2015
<https://www.codecentric.de/kompetenzen/publikationen/optimale-systemdokumentation-
mit-agilen-prinzipien/>
(^11) "Optimale Systemdokumentation mit agilen Prinzipien." 2012. 15 Sep. 2015
<https://www.codecentric.de/kompetenzen/publikationen/optimale-systemdokumentation-
mit-agilen-prinzipien/>
(^12) "Agile Dokumentation für Stakeholder und Projektmitarbeiter ..." 2015. 24 Aug. 2015
<http://www.informatik-aktuell.de/management-und-recht/projektmanagement/agile-
dokumentation-fuer-stakeholder-und-projektmitarbeiter.html>


Die elementarsten Punkte der optimalen Projekt- bzw. Systemdokumentation könnte also
folgendermaßen lauten:

- Nicht was möglich ist zu sammeln, sondern nur was nötig ist.
- Die Aufstellung der benötigten Informationen sind von allen Parteien zu
    erfahren, die später mit dem System arbeiten. Damit ist Wartung,
    Inbetriebnahme, Nutzung und Qualitätsmanagement abzudecken.
- Prozessdokumenation vermeiden.
Die Erstellung der Systemdokumenation kann ebenfalls als agiler Schaffungsprozess
gesehen werden, wodurch die Kontroverse, um die Nutzung einer Dokumentation im
Zusammenspiel mit der agilen Softwareentwicklung weiter verstärkt wird.

Zur Vereinfachung wird im weiteren Verlauf der Thesis nur von der Projektdokumentation
oder einfach von der Dokumentation gesprochen.

### 3.5 Bezug zu meiner Arbeit

Meine Arbeit beschäftigt sich mit der automatischen Erstellung einer Projektdokumentation
und stellt damit nicht nur eine mögliche Methode zur Arbeitszeitoptimierung zur Verfügung,
sondern macht große Teile der im Vorfeld geführten Diskussion überflüssig.
Nichtsdestotrotz muss auch bei der generierten Dokumentation auf alle einzuhaltenden
Standards und Vorgaben geachtet werden. Auch sollte die vorher erarbeitete Maxime “Nur
was nötig ist gehört in die Dokumentation”^13 eingehalten werden, um unübersichtliche
Strukturen zu vermeiden.
Die folgenden Prototypen meiner generierten Dokumentation wurden anhand von
folgenden Vorlagen erstellt:

- Firmeninternen Vorgaben^14
- Allgemeine Vorgaben zu IT Dokumentationen von ITIL^15
- Korrelation der bei AOE bereits vorhandener System- und
Projektdokumentationen.

#### 3.5.1 System-/ Serverdokumentation.......................................................................

Die System- oder Serverdokumentation soll Information zu einem einzelnen System
beinhalten. Sie bietet dem Nutzer eine Übersicht über die laufenden Dienste und die
verbaute Hardware. Zusätzlich werden nach Abschluss Methoden beschrieben, die helfen
häufige Fehler eigenständig zu lösen.

(^13) Kapitel 3.2: Ziele der Dokumentation
(^14) Kapitel 8: Anforderungen an die Software. Vorallem Kapitel 8.2:
Unternehmensspezifische Anforderungen
(^15) "ITIL® - IT Service Management." 2006. 20 Sep. 2015 <http://www.itil-officialsite.com/>


```
Servername
[virtueller vSphere Pfad] Servername/interne Serverbezeichnung
Server Information
```
- Typ der virtuellen Maschine, Betriebssystem (Architektur) [Betriebssystem
Version mit internen Abbildungsdateiname]
- Volle Domain Adresse (FQDN) (IP-Adresse)

```
Network Services
```
- Dienstname: [interner Dienstname, lauschende IP Adresse:lauschender Port;
weiterer Dienstname, lauschende IP Adresse:lauschender Port]
- ...

```
Hardware Information
```
- numCPU : Anzahl der Prozessorneinheiten
- numCoresPerSocket : Anzahl der Kerne pro Prozessoreinheit
- weitere Hardwareinformationen...

```
Mögliche Fehler die eintreten können
Beispiel: High load on server
Restart Apache2 webserver and kill PHP processes
Kill Apache2 and PHP processes
service apache2 stop
killall php php5 php52 php
sleep 30
```
Die gesamte Vorlage, wie die Absätze zu den einzelnen Hilfen, sollen in separaten Vorlage-
Dateien den eigenen Erfahrungen oder Wünschen anpassbar sein.

#### 3.5.2 Projektdokumentation

Die Projektdokumentation soll neben der Aufzählung aller im vorherigen Kapitel genannten
Servern, einige Zusatzinformationen beinhalten.
Direkt zu Beginn, soll der Nutzer einen Überblick über die bereits in der Graphendatenbank
vorliegenden Server bekommen. Es soll direkt ersichtlich sein, welche Systeme bereits
wirklich implementiert sind.

```
Projektname
Server die bereits bereitsgestellt wurden gegenüber geplanten Hosts
Server, die bereits bereitgestellt sind:
Beispielservernamen
...
Server in der graphischen Datenbank:
```

```
Beispielservernamen
Server, die nur in der graphischen Datenbank sind:
Beispielservernamen
Server, die nur bereitgestellt sind:
Beispielservernamen
```
```
Projektname
Visualisation der Server-Infastruktur
```
```
Abbildung 2 : Mockup der Projektvisualisierung
Aufzählung der einzelnen Server im Projekt
```
Mit einem Klick auf die Grafik soll der Nutzer auf eine Seite weitergeleitet werden, auf der
er die Grafik aktualisieren und den eigenen Wünschen entsprechend verschieben kann.

Mit dem Abschluss dieses Kapitels sollte deutlich werden, wie die spätere Dokumentation
der Systeme und Projekte aussehen soll.

## 4 Datenbeschaffung

Der erste große Teil dieser Arbeit beschäftigt sich mit der Datenbeschaffung aus
verschiedenen, bereits vorhandenen Systemen.
Vor der eigentlichen Überlegung, woher die Daten beschafft werden können, stand die
Frage im Raum, welche Daten für eine vollständige Dokumentation gebraucht werden.
Sowohl für Projekte, als auch für einzelne Server wurde diese Frage dem vorherigen
Kapiteln erläutert. Für einzelne Server ergeben sich folgende benötigte Informationen:


- Allgemeine Informationen zu
    - Servernamen
    - vollständige Bezeichnung des Servers
- Pfad in vSphere
- Softwareinformationen zu
    - Betriebssystemart und Version
    - laufende Dienste mit Port
- Hardwareinformationen wie Arbeitsspeicher, Prozessor oder Festplatten-
kapazität.

Die Datenbeschaffung ist bei der automatisch generierten Dokumentation größtenteils auf
andere Systeme gestützt und versucht möglichst wenig Eingaben von dem Nutzer zu
verlangen.
Bei AOE laufen zurzeit verschiedene Systeme, die eine Datenbeschaffung ermöglichen.
So können alle Maschinen direkt per vSphere angesprochen werden, wodurch es möglich
wäre jegliche Hardware-Konfigurationen auszulesen. Diese Daten genügen
selbstverständlich nicht für eine vollständige Systemdokumentation. Informationen zu den
laufenden Diensten bekommt man von Zabbix, ein System welches die Verfügbarkeit und
Performance von IT-Infrastrukturen messen und protokollieren kann. Zabbix überwacht
dazu angegebene Systeme auf bestimmten Ports und kann daher eine Aussage darüber
treffen, wie sich die Reaktionszeit und die Verfügbarkeit über einen gewissen Zeitraum
verändern. Diese Daten können genutzt werden, um zu wissen, welche Dienste auf
welchen Systemen auf welchen Ports laufen.
Dieser Datenfluss ist eine einfache Datenverarbeitung und kann durch folgendes UML^16 -
Diagramm beschrieben werden:

(^16) "Unified Modeling Language (UML)." 2002. 8 Sep. 2015 <http://www.uml.org/>


Abbildung 3 : Datenflussdiagramm im Detail

Der Nutzer kann Daten über das Frontend oder über die Programmierschnittstelle
anfordern. Das Frontend verfügt über ein Interface, welches Daten über verschiedene
Programmierschnittstellen der Systeme anfragt. Fragt der Nutzer Daten über die interne
Programmierschnittstelle an, werden jene Daten direkt von den angebundenen
Plattformen, wie beispielsweise Zabbix, vSphere oder Confluence abgerufen.
Infolgedessen werden in den nächsten Kapiteln Begriffe und Themen, die im Laufe der
Bachelor Arbeit genutzt wurden erklärt.

### 4.1 Was ist eine Programmierschnittstelle/ API

Alle Systeme zum automatischen Datenerhalt werden von der im Rahmen der
Bachelorarbeit erstellten Webanwendung über Programmierschnittstellen angesprochen.
API ist die englische Kurzfassung und wird im weiteren Verlauf der Bachelor Arbeit anstatt
von Programmierschnittstelle genutzt.
Eine API ist eine Anbindung, die von einem System bereitgestellt wird, um auf sonst nur
interne Informationen oder Funktionen von extern zugreifen zu können. Neben der reinen
Schnittstelle gehört zu einer API meist auch eine ausführliche Dokumentation. Meist wird
eine API durch einen einfachen Aufruf einer Internetadresse angesprochen und kann
programmiersprachenunabhängig genutzt werden.
Des Weiteren stellt eine gut dokumentierte API einen hohen Mehrwert für ein Programm
dar, da es auch im Nachhinein von externen Programmierern genutzt werden kann.
Neuentwicklung sind so seltener nötig.

(^17) "Application-Programming-Interface (API) Definition ..." 2010. 16 Sep. 2015
<http://www.gruenderszene.de/lexikon/begriffe/application-programming-interface-api>


### 4.2 Was ist JSON^18

JSON (JavaScript Object Notation) ist ein leicht lesbares Datenformat, das zum Austausch
oder speichern dient. Jedes JSON-Objekt muss von JavaScript evaluiert werden können
und somit auch ein gültiges JavaScript Objekt sein.
Mit JSON ist es beispielsweise möglich, Daten von PHP zu JavaScript zu senden und dort
zu verarbeiten.

### 4.3 Was ist SOAP^19

SOAP (Simple Object Acces Protocol) ist ein Protokoll, das zum Austausch von XML-
Dokumenten dient. Die Webanwendung wird SOAP nutzen um Daten per
Remoteprozeduraufruf an andere PHP-Klassen zu senden oder Daten von externen
Quellen anzufordern. Vorrangig wird SOAP genutzt um Daten an Confluence zu senden.

### 4.4 Was ist cURL^20

cURL ist ein Kommandozeilen-Programm, um Dateien oder Daten innerhalb von
Rechnernetzen auszutauschen. In der Webanwendung wird cURL genutzt, um Daten per
POST-Übertragung an andere Webseiten zu senden.

### 4.5 Was ist smarty^21

smarty ist eine auf PHP basierende Template - Engine. Sie verwaltet und generiert
Vorlagen, die in dem Modell-Präsentation-Steuerungs Muster die Präsentation übernimmt.
Durch smarty kann man leicht anpassbare Vorlagedateien erstellen, die auch komplexe
Aufgaben, wie schleifen oder abfragen aus Datenbanken, übernehmen können.
Ich benötige smarty zur Erstellung der Vorlagen der dienstabhängigen Hilfen.

### 4.6 Zabbix

Zabbix dient der Überwachung von IT-Infrastrukturen. Eine Grundfunktion ist das Auslesen
des Zustandes eines Dienstes auf verschiedenen Ports um zu überwachen, ob der
jeweilige Dienst läuft. Kleine Programme auf dem jeweiligen Server übertragen zusätzliche
Informationen, wie Festplattenbelegung, Arbeitsspeicher oder Prozessorlast.

(^18) "JSON :: JavaScript object notation :: ITWissen.info." 2010. 8 Sep. 2015
<http://www.itwissen.info/definition/lexikon/JSON-JavaScript-object-notation.html>
(^19) "SOAP :: simple object access protocol - IT Wissen.info." 2008. 8 Sep. 2015
<http://www.itwissen.info/definition/lexikon/simple-object-access-protocol-SOAP-SOAP-
Protokoll.html>
(^20) "curl and libcurl." 8 Sep. 2015 <http://curl.haxx.se/>
(^21) "Smarty: PHP Template Engine." 2003. 8 Sep. 2015 <http://www.smarty.net/>


Diese Informationen nutzt AOE um eine
Übersicht von verschieden gewichteten
Ereignissen übersichtlich darzustellen.
Außerdem sind diese Informationen bei
der nachträglichen Fehlersuche sehr
hilfreich.
Zabbix ist modular aufgebaut und basiert
auf verschiedenen Komponenten. So kann
Zabbix einfach skaliert werden. AOE nutzt
Zabbix in dieser Form seit Mitte letzten
Jahres.
Durch ein externes Framework ist es
möglich die Zabbix-API direkt in PHP anzusteuern.

Ein Beispiel im Programmcode zum Erhalt aller Namen der Projektgruppen in Zabbix.

Dieser Aufruf gibt ein Array mit allen Projektnamen zurück. Hier:

["HE KGAL", "HE Congstar", "HE Production Cluster", ...]
Mit diesen Daten wird die Visualisierung beim Start erstellt.

Die Zabbix API stellt in der fertigen Dokumentation folgende Informationen bereit:

```
function ZABBIX_get_he_projects(){
try {
//load external PHPZabbixApi
require
'../external_php/PhpZabbixApi_Library/ZabbixApi.class.php';
//using global config
global $zabbix_host, $zabbix_user, $zabbix_pw;
//creating new ZabbixApi object
$zabbix = new ZabbixApi($zabbix_host, $zabbix_user,
$zabbix_pw);
//get Services from Zabbix Projects
$zServices = $zabbix->serviceGet(array(
//parent is Object "Projects"
'parentids' => '100100000000001',
'output' => 'extend',
'selectDependencies' => 'extend'
));
//create data array with names
$data = array();
foreach($zServices as $zService){
array_push($data, $zService->name);
}
//encode Stuff and echo
echo (json_encode ($data));
} catch(Exception $e) {
echo ("Error");
}
}
```
Abbildung 4 : Zabbix Dashboard bei AOE


- OsImageName: Den kompletten Betriebssystemnamen inkl. Image
Version.
- Hostname: Den vollen FQDN^22 , also die volle Domain-Adresse.
- Die Liste der Dienstnamen inkl. genauerer Bezeichnung, lauschende IP
Adressen, Ports oder genauere Informationen.

### 4.7 VMware vSphere

AOE nutzt VMware vSphere um virtuelle Server bei einem Hoster bereitzustellen. Auch
vSphere besitzt eine breit angebundene API, die jegliche Frontend Operationen zulässt.

Wie zuvor werden externe Klassen verwendet, um eine Nutzung in PHP zu ermöglichen.

function VSPHERE_get_virtualMachineList(){
//using global vSphere Object
global $vSphere;
$virtualMachines = $vSphere-
>findAllManagedObjects('VirtualMachine', array('name'));
$data = array();
foreach($virtualMachines as $singleMachine){
array_push($data, $singleMachine->config->name);
}
//encode in json to allow reading the return with
JavaScript
echo (json_encode ($data));
}
Dieser Aufruf gibt eine Liste aller verwalteten virtuellen Server von vSphere

["congstar-cobwa-aw", "logging", "fw01", "congstar-slave1", ...]
Mit diesen Daten wird das Dropdown-Menü bei der Benennung eines neuen Knotens
generiert.
Die vSphere API stellt folgende Daten für die automatisch erstellen Dokumentation zur
Verfügung:

- Servernamen
- Vollen internen virtuellen Rechnernamen
- Das laufende Betriebssystem inkl. Rechnerarchitektur
- Die IP Adresse
- Alle Hardwareinformationen wie die Anzahl an Prozessoren,
Prozessorlast, eingebauter Arbeitsspeicher usw.

### 4.8 Confluence

Confluence ist eine Wiki-Software, die hauptsächlich für interne Kommunikation
mittelgroßer Unternehmen geschrieben wurde. In einem Betrieb stellt ein Wiki die zentrale
Sammelstelle für Informationen dar. Dort werden sowohl Projekte dokumentiert, als auch

(^22) "What is a fully qualified domain name (FQDN)?." 2014. 20 Sep. 2015
<https://kb.iu.edu/d/aiuv>


Anleitungen geschrieben. Es werden Notizen zu Vorgehensweisen erklärt oder ganze
Infrastrukturen beschrieben.
Confluence ist modular und kann beliebig erweitert werden.
Auf Confluence greift die Webanwendung direkt über die API zu, um die fertige
Dokumentation auf die jeweilige Projektseite einzufügen.

function refresh_Doc($updates){
global $token, $client;
//Problems with finding space and page via
//client->getPage(token, space, id)
try{
$updatePage = $client->getPage($token,
$_GET["space"], $_GET["page"]);
}catch (Exception $e) {
$pageID = $client->search($token, $_GET["page"],
5 )[ 0 ]->id;
$updatePage = $client->getPage($token, $pageID);
}
$updatePage->content = $updates;
//updatePage: String token,RemotePage page,
//RemotePageUpdateOptions options
$rPage = $client->updatePage($token, $updatePage, "");
return ($rPage->content);
}
Dies ist ein Beispiel, der im Rahmen der praktischen Arbeit erstellten
Programmierschnittstelle, welches zuerst eine Seite aus Confluence einliest und sie
danach aktualisiert wieder am selben Ort einfügt.
Die Rückgabe ist in diesem Fall die generierte Dokumentation.

### 4.9 Zusammenfassung Datenbeschaffung

Es lässt sich sagen, dass sich große Teile der benötigten Dokumentation für Systeme oder
Projekte automatisch erstellen lässt. Es lassen sich sowohl Verbindungen zu Systemen
automatisch bestimmen, als auch die Abhängigkeiten erkennen. Von Zabbix bekommt man
die dafür benötigten Dienste und Ports. Hard- und Softwareinformationen bekommt man in
gleichen Teilen von Zabbix und vSphere.
Lediglich die Hilfen zu häufig auftretenden Fehlern müssen manuell eingefügt werden.
Durch die Kapselung in dienstspezifische Vorlagen müssen diese aber pro Dienst nur
einmal geschrieben werden.

## 5 Datenverarbeitung

Da nun alle Vorüberlegungen hinsichtlich der Datenbeschaffung gemacht wurden, kann
sich der gesamten Datenverarbeitung gewidmet werden.
Zur Datenverarbeitung gehört der gesamte Umgang mit Daten. Dies umfasst sowohl
relevante Informationen aus den Daten zu filtern, als auch die verwendeten Verfahren zu
beschreiben.


### 5.1 Die geeignete Datenstruktur

Eine der frühen entscheidenden Fragen, die das Arbeiten im späteren Verlauf entschieden
beeinflusst hat, war die Frage nach der geeigneten Datenstruktur zur Speicherung der
Rohdaten der Dokumentation.
Es gibt mehrere Möglichkeiten Daten im Projekt abzuspeichern:

- Eine Speicherung in einer eigenständigen relationalen Datenbank.
- Datenspeicherung in Zabbix^23
- Auslagerung in Puppet^24
- Speicherung in einer Graphdatenbank wie Neo4J
Da die generierte Dokumentation sowohl Graphen, als auch Daten enthält und später zum
Teil IT-Infrastrukturen visualisiert werden, lag eine Speicherung der Daten in einer
zentralen Graphdatenbank nahe. Eine einfache und logisch schnelle und flexible Suche
über die verschiedenen Knoten und Verbindungen priorisierten eine Graphdatenbank wie
Neo4j zusätzlich.
Neo4j ist eine graphische Datenbank welche Objekte in der Form von Knoten und Kanten
speichert^25. Dabei sind Knoten die zu speichernden Objekte und Kanten die
Verknüpfungen zwischen diesen Objekten. Knoten können Eigenschaften haben mit den
zugeordneten Knoten verbunden sind. Bei Graphendatenbanken wird sehr viel Wert auf
die Modellierung und effiziente Speichern von Datenmengen gelegt. Im Gegensatz zu
relationalen Datenbanken hat die Datenbank mit steigender Komplexität keine
Leistungseinbußen^26.

### 5.2 Was ist Neo4J

Neo4J ist eine auf Java-basierende Graphendatenbank. Das Kernkonzept basiert auf
Knoten und Kanten, wobei sowohl die Kanten als auch die Knoten Eigenschaften haben
können.
Ein weiterer Vorteil von Neo4J als zentrale Datenanbindung ist die breit gefächerte
Anbindung an andere Sprachen und Frameworks. So ist eine Verbindung zu vielen
anderen Quellen wie Zabbix oder vSphere^27 über API Zugriffe möglich.

(^23) "Zabbix :: The Enterprise-Class Open Source Network ..." 2004. 7 May. 2015
<http://www.zabbix.com/>
(^24) "Puppet Labs: IT Automation Software for System ..." 2011. 7 May. 2015
<https://puppetlabs.com/>
(^25) "Neo4j | heise Developer - Heise Online." 2010. 19 Sep. 2015
<http://www.heise.de/developer/artikel/Neo4j-NoSQL-Datenbank-mit-
graphentheoretischen-Grundlagen-1152559.html?artikelseite=2>
(^26) "Neo4j | heise Developer - Heise Online." 2010. 19 Sep. 2015
<http://www.heise.de/developer/artikel/Neo4j-NoSQL-Datenbank-mit-
graphentheoretischen-Grundlagen-1152559.html?artikelseite=2>
(^27) "vSphere: Server Virtualization, Cloud Infrastructure | United ..." 2009. 26 Aug. 2015
<http://www.vmware.com/products/vsphere>


### 5.3 Welche Daten werden gespeichert

Große Teile der Daten, die über die Laufzeit gebraucht werden, werden auch während der
Laufzeit angefordert oder generiert. Man kann die Aussage treffen, dass alles in der Neo4j
Datenbank gespeichert wird, was man syntaktisch korrekt in das Programmcode-Fenster
im Frontend eingibt und abschickt.
Die jeweiligen Daten werden im Folgenden aufgezählt.
Die ersten Daten die uns beim Programmstart begegnen, sind die Gesamtinfrastruktur -
Daten. Diese Daten umfassen alle Namen der vorliegenden Projekte. Im Cypher-Code
haben diese Daten folgende Form:

CREATE (AOE:Company {nick:'AOE',label:'Company', name:'AOE'})
CREATE (drs:Project {nick:'DRS',label:'Project', name:'DRS'})
CREATE (monier:Project {nick:'Monier',label:'Project',
name:'Monier'})
CREATE (lenze:Project {nick:'Lenze',label:'Project',
name:'Lenze'})
CREATE (euiss:Project {nick:'EUISS',label:'Project',
name:'EUISS'})
CREATE (kgal:Project {nick:'KGAL',label:'Project', name:'KGAL'})
MATCH (target:Project) MATCH (source:Company) CREATE (source)-
[:projectiziert]->(target);
Falls diese Daten nicht vorliegen, werden diese automatisch generiert und automatisch
gespeichert. Eine Aktualisierung alter Daten ist möglich, indem man die jeweiligen Daten
oder die gesamte Neo4j-Datenbank löscht.
Im nächsten Schritt werden bereits spezifische Projektdaten gebraucht, die entweder
bereits vorliegen, durch das Frontend erstellt werden oder direkt per Cypher-Code
eingegeben werden können. Zu jedem Projekt braucht man die redundanten Systeme, die
das Programm aus einer auf dem Server liegenden Textdatei bezieht.
Ein solcher Knoten halt folgende Form:

CREATE (fw:Firewall {nick:'fw',redundant:
true,name:'Firewall'})
In diesem Fall repräsentiert der Knoten keinen real vorliegenden Server, sondern ist ein
abstrakter Knoten, welcher in nachfolgenden Kapitel beschrieben wird.

Die Webanwendung speichert die erfolgreich erstellte Dokumentation am angegeben Ort
in Confluence. Der detaillierte Vorgang wird in Kapitel beschrieben.

#### 5.3.1 Abstrakte Knoten / Metaknoten

In jeder Infrastruktur Knoten existieren Knoten, die nur virtuelle Knotenpunkte darstellen
und nicht etwa “reale” Server. Ein Projekt, ein Kunde oder ein Service wäre ein solcher
Knotenpunkt. Zusätzlich mussten Wege gefunden werden, um Informationen, wie
projektspezifische Anforderungen oder andere Zusatzinformationen, knotenunabhängig zu
speichern. Abstrakte Knoten wurden eingeführt.


### 5.4 Welche Daten werden während der Laufzeit generiert

Gewisse Daten unterliegen einer kontinuierlichen
Veränderung. Es macht aus diesem Grund wenig Sinn
sie dauerhaft zu speichern. Zu diesen Daten gehören, die
für die Autovervollständigung der Erstellung eines neuen
Projektes benötigte Serverliste.
Außerdem wird die Vorschau der Dokumentation am
rechten Rand immer wieder neu generiert. Dazu gehören
alle Abfragen sowohl von der Neo4j Datenbank, als auch von Confluence Quellen, falls die
Dokumentation bereits vorliegt.

### 5.5 Verarbeitung der angeforderten Daten

Es kann nun zwischen während der Laufzeit generierten Daten und bereits vorliegenden
Daten unterschieden werden. Zusätzlich wurde beschrieben, wie die Daten gespeichert
werden. Offen ist aber die Frage, wie die Daten aussehen, die von den verschiedenen
Schnittstellen angefragt werden.

Das Frontend bezieht seine Daten ebenfalls von der eigens implementierten Schnittstelle.
Meine Schnittstelle ist in verschiedene Klassen aufgeteilt: Eine Kontrollier - Klasse, eine
Handel - Klasse und eine allgemeine API - Klasse.

- Der Controller kontrolliert je nach Schnittstellenaufruf die aufzurufende
folgende Handlung.
- Der Handler übernimmt die eigentliche Datenverarbeitung und die
Zuweisungen der verschiedenen Vorlagen. Die eigene API - Klasse nimmt die
Parameter entgegen.

Folgender Beispielaufruf:

“http://system-doc.hq.aoe.lan/?project=Congstar&space=foo&page=bar”
Würde die allgemeine Schnittstellendatei ansprechen, welche die Parameter an die
jeweiligen Klassen weiterleitet.
Der beschriebene Ablauf ist zur besseren Übersicht in folgendem Diagramm dargestellt.

```
Abbildung 5 : Eingabe - Popup des
```
## Projektknotens


```
Abbildung 6 : Datenverarbeitung API- Aufruf
```
Durch den Aufruf wird die Dokumentation des gesamten Congstar Projekt aktualisiert. Der
Controller organisiert das Zusammenfügen des generierten HTML-Codes und gibt die
gesamte Dokumention am Ende durch ein echo zurück.
Daraufhin wird die generierte Dokumentation in den Confluence Platz “foo” auf die jeweilige
Seite “bar” übertragen

#### 5.5.1 Daten der Zabbix Schnittstelle

Im Folgenden wird erläutert welche Daten genau von der Zabbix Schnittstelle kommen und
wie diese verarbeitet werden.
Als Beispiel dient die “ZABBIX_get_Host” Funktion, die in der allgemeinen Schnittstelle zu
finden ist.


//getting host and hostid from ZABBIX
function ZABBIX_get_Host($machine){
$machine = explode(".", $machine);
$machine = $machine[ 0 ];
try{
//echo($machine);
global $zabbix;
$zOutput = $zabbix->hostGet(array(
"output" => ["host", "hostid"],
"search" => [
"name" => $machine
]
));
return($zOutput);
}catch(Exception $e) {
// Exception in ZabbixApi catched
echo "ZABBIX_get_Host Error";
return $e->getMessage();
}
}
Der Parameter “$maschine” enthält den vollen Domain - Namen der jeweiligen Maschine.
Am Beispiel des “congstar-hudson” - Servers “congstar-hudson.aoemedia-hosting.com”.
Um die Suche über die Maschinen in Zabbix robust zu halten, wird der reine Maschinen -
Name verwendet: “congstar-hudson”.
Falls die Suche über dem Zabbix Objekt erfolgreich war, wird das Ergebnis - Objekt
zurückgeliefert, welches sowohl den Maschinen - Namen und die Maschinen -
Identifikationsnummer enthält. Falls nicht, wird eine Fehlermeldung geworfen.
Die Maschinen Identifikationsnummer wird später verwendet um Maschinen in Zabbix
direkt anzusprechen.

#### 5.5.2 Daten der vSphere Schnittstelle

Wie bei den Daten der Zabbix Schnittstelle, müssen auch die Daten der vSphere
Schnittstelle aufgearbeitet werden.
Die vSphere Schnittstelle gibt uns zu der jeweiligen Maschine die Hardware Informationen.
Zu besseren Übersicht wurden ähnliche Zeilen durch Punkte ersetzt.

```
/* creating Info-Array from vSphere */
function VSPHERE_get_singleVirtualMachineConfig($machine){
global $vSphere;
/* deleting aoemedia-hosting.com */
/* -> having pure machine Names */
$machine = explode(".", $machine);
$machine = $machine[ 0 ];
$virtualMachines = $vSphere->findManagedObjectByName
('VirtualMachine', $machine, array());
if (gettype ($virtualMachines) == "object"){
$data = [];
$data["name"] =
$virtualMachines->config->name;
$data["vmPathName"] =
```

Wie bei der Zabbix Schnittstelle ist auch hier die Variable “$machine” der Maschinen -
Name und wird durch eine bereits bereitgestellte Funktion des vSphere - Objektes gesucht.
Falls der Rückgabewert dieser Funktion ein gültiges Objekt und kein Fehler ist, wird dieser
weiterverarbeitet und die benötigten Informationen einem Daten Array hinzugefügt. Weiter
wird die gesamte Kurzübersicht einer Maschine in den Daten Array gespeichert. Falls der
Typ der Rückgabe der Suchfunktion ein Objekt ist, wurde die Maschine nicht in vSphere
gefunden. Somit muss das Datenarray dem Fehler entsprechend gefüllt werden.
In diesem Fall gibt die Funktion das Daten Array zurück, welches im weiteren Verlauf als
Informationsquelle genutzt wird.

An diesem Beispiel wird besonders deutlich, wie die Quelle trotz ähnlicher Informationsart,
wechselt.

#### 5.5.3 Daten Neo4j

Bei dem angegebenen Beispielaufruf der Schnittstelle werden auch Daten aus der Neo4j
Datenbank benötigt. Zum Abgleich der bereits in der Datenbank vorhanden Daten mit
wirklich existierenden Maschinen.
Mit folgendem Aufruf wird eine Liste der zugehörigen Daten zu einem bereits vorhandenen
Projekt in einen Datenarray gelesen.

//Getting Data from Neo4JDatabase
$result = (json_decode(ajaxCommit("MATCH path = (a{project:'"
.ucfirst($_GET["project"])."'})-[r]-m RETURN path,m;", "",
""),true));
Diese wird dann mit der Liste der Maschinen von Zabbix verglichen.
Aus diesen Daten werden die vier Serverlisten generiert, die vor der Aufzählung der
einzelnen Server eines Projektes stehen.

```
substr($virtualMachines->config->files->vmPathName, 0 ,- 4 );
...
/* add quickstats */
foreach($virtualMachines->summary->quickStats as $key =>
$value){
/* if you don't want to have items just type here i.e. */
if ($value != "ssdSwappedMemory") $data[$key] = $value;
}
return($data);
}else{
$data =[];
/* Have to, to get no error in direct get in Template */
$data["name"] = "not Listed in vSphere";
...
return($data);
}
}
```

### 5.6 Frontend Programmablauf

Der Programmablauf unterscheidet sich in der Frontendnutzung wesentlich zur API-
Nutzung.
Aufgrund der späteren Einbindung durch ein iFrame^28 muss der Programmablauf innerhalb
einer logischen Seite passieren. So dürfen keine “echten” Seitenwechsel entstehen. Alle
neuen Inhalt werden dynamisch per JavaScript im aktuellen DOM^29 hinzugefügt, geändert
oder gelöscht.

```
Abbildung 7 : Workflow Diagramm des Frontends
```
Dieses Diagramm zeigt eine vereinfachte Darstellung des internen Programmablaufes. Es
beginnt mit dem Aufruf der startVisualization() in der index.html und geht dann, je nach
Nutzereingabe oder bereits vorliegenden Daten, ihren Lauf.
Nachdem man das passende Projekt ausgewählt hat, wird die jeweilige Dokumentation
automatisch generiert.

(^28) "HTML iframe tag - W3Schools." 2002. 20 Sep. 2015
<http://www.w3schools.com/tags/tag_iframe.asp>
(^29) "W3C Document Object Model." 20 Sep. 2015 <http://www.w3.org/DOM/>


#### 5.6.1 Vor dem ersten Start

Bevor das Programm Daten
darstellen kann, müssen diese erst
einmal in der Neo4J Datenbank
vorliegen. Um die Visualisierung der
Projetübersicht zu erstellen, müssen
die Informationen der derzeitig
laufenden Projekte eingeholt
werden. Diese können direkt von
Zabbix Gruppen eingelesen werden.
Falls beim ersten Start diese Daten in
der Datenbank noch nicht vorliegen,
werden sie automatisch eingelesen
und der Datenbank hinzugefügt.

#### 5.6.2 Die Gesamtübersicht / Startseite

Im Normalfall liegen die oben erwähnten Daten also bereits vor. Beim ersten Start bekommt
der Nutzer nicht nur eine Visualisierung der vorhandenen Projekte mit AOE als
Wurzelknoten, sondern auch eine Menüstruktur,
bei der aus verschiedenen Sichten gewählt werden
kann. Ähnlich wie die Kategorien der
verschiedenen Arten der Datenhaltung verhält es
sich auch mit den Ansichten. Es gibt die
Gesamtübersicht der Projekte, die Ansicht eines
einzelnen Projektes oder eines einzelnen Objektes.
Solange der Nutzer noch kein Projekt ausgewählt
hat, ist der Reiter des ausgewählten Projektes
ebenso noch nicht einsehbar, wie der Reiter des
ausgewählten Objektes. Der Nutzer wählt dann mit
einem Doppelklick aus den bereits vorliegenden Knoten ein Projekt aus. Mit dem Klick auf
den Haken bestätigt man die Auswahl.

#### 5.6.3 Ausgewähltes Projekt

Die Ansicht des auswählten Projektes variiert mit den vorgegebenen Parametern. So sieht
man bei einem Projekt, bei dem die Daten komplett vorliegen, die jeweilige Visualisierung.
Bei einem Projekt wo jene fehlen wird eine Entwurfsvisualisierung angezeigt um die Knoten
und Verbindungen zu modellieren.

5.6.3.1 Bereits vorhandenes Projekt

Die Visualisierung eines bereits vorhandenen Projektes beinhalten einige Features:

Abbildung 8 : Workflow beim ersten Start

```
Abbildung 9 : : Ältere Version der
Gesamtübersicht
```

- Die Knoten sind je nach Funktion anders eingefärbt. Eine Legende ist in
der Visualisierung zu finden. Auch
Abstrakte Knoten sind in der
Visualisierung vorhanden.
- Die Position der Knoten und
Kanten wird erst während der
Erstellung durch gegenseitige
Anziehung und Abstoßung modelliert.
So ist die Darstellung bei jeder
Neudarstellung anders, auch wenn die
Daten gleichbleiben.
- Die Kanten haben eine Richtung und identifizieren so den Server, der den
jeweiligen Dienst in Anspruch nimmt und welcher Server ihn bereitstellt.
- Die Kanten sind mit der jeweiligen Funktion oder Dienst beschriftet.

5.6.3.2 Noch nicht vorhandenes Projekt

Eine Visualisierung zu finden, die elegant das Speichern aller benötigten Daten eines
Systems ermöglicht, war besonders zu Beginn eine große
Herausforderung. Man musste eine Visualisierung finden die so
dynamisch ist, dass ein Hinzufügen von beliebig vielen Knoten und
Verbindungen möglich ist und parallel dazu nur mit einfachen Eingaben
sowohl eine Auswahl, ein Hinzufügen von Beschreibungen und ein
Verändern wichtiger Attribute möglich macht. Die Entwurfsvisualisierung
hat folgende Eigenschaften:

- Alle Knoten haben unterschiedliche Farben, um die
Übersicht zu gewährleisten.
- Neue Knoten bekommen eine Nummer, welche die spätere ID darstellt.
- Knoten, wie Kanten, können mit einem einfachen Klick ausgewählt
werden.
- Klickt man auf ein bereits ausgewähltes Objekt kann dieses beschriftet
werden. Ein Doppelklick hat dieselbe Funktion.
- Knoten können einen Namen und einen
Nick zugewiesen werden. Den Kanten eine
Funktion, beziehungsweise eine
Verbindungsbeschriftung.
- Die Richtung der Verbindung kann nach
dem Auswählen bestimmten werden
- “R” verändert die
Pfeilrichtung nach rechts
- “L” verändert die Pfeilrichtung nach Links
- “B” macht die Verbindung Bidirektional

```
Abbildung 10 : Beispiel Visualisierung eines
bereits vorhandenen Projektes
```
```
Abbildung 11 :
Visualisierung
neues großes
Projekt
```
```
Abbildung 12 : Visualisierung
neues großes Projekt
```

- “Enter” öffnet ein Fenster in dem man der Verbindungen
einen Namen/Funktion geben kann
- Die Visualisierung wird mit einem Klick auf die Überschrift des
Programmcodefensters in Cypher-Code umgewandelt. Dieser kann dann in der
Befehlszeile angezeigt und dem Wünschen entsprechend weiter verändert und in
die Datenbank eingefügt werden.

## 6 Datenvisualisierung

Nach Beschreibung der geeigneten Datenstruktur, beschäftigte sich das folgende Kapitel
mit der späteren Visualisierung dieser Daten.
Da eine IT - Infrastruktur Visualisierung beliebige
Rückverbindungen zu einzelnen Knoten haben können kann
man diese nur als vermaschte Struktur^30 visualisieren.
Ein früherer Versuch eine hierarchisch angelegte
Baumstruktur einzuführen wurde wegen zu vielen
Rückverbindungen zu vorherigen Knoten verworfen. So ist die
derzeitige Visualisierung ein Konglomerat zwischen einer
möglichst übersichtlichen Darstellung und die durch die
gegebenen Daten möglichen Visualisierungsmethoden.

### 6.1 Historie der Datenvisualisierung - Prototypen

Die finale Visualisierung basiert auf einer mehrstufigen Entwicklung. Die Visualisierung der
Gesamtübersicht der vorhandenen Projekte nahm folgenden Werdegang.

#### 6.1.1 Version

```
Bevor eine Darstellung über Kanten angedacht
wurde, wurde eine grundlegende
Visualisierung als Prototyp verwendet. Dieser
Prototyp stellt lediglich die Knoten Namen dar
und versieht diese mit den jeweiligen
Projektnamen. In der Version 1 fehlen sowohl
die Kanten, wie auch eine Möglichkeit die
Server den Wünschen entsprechend zu
verschieben.
```
(^30) "Vermaschte Struktur“: meshed topology :: ITWissen.info." 2008. 18 Sep. 2015
<http://www.itwissen.info/definition/lexikon/Vermaschte-Struktur-meshed-topology.html>
Abbildung 13 :
Vermaschte
Beispielvisualisierung
Abbildung 14 : Version 1 der
Gesamtvisualisierung


### 6.1.2 Version 2

Als nächster Schritt wurde überlegt ob eine Darstellung als leere Box der typischen
Darstelljung eines Servers näherkommt.
Diese Idee wurde bis zum vorfinalen Produkt verfolgt.

### 6.1.3 Version 3

Eine Version mit Kanten- und
Knotenbeschriftungen wurde implementiert.
Diese Version wurde verworfen, da die
Namen der Server nicht in die jeweilige Box
passen. Auch sah es d3.js nicht vor, dass die
Beschriftung der Elemente einen
Zeilenumbruch beinhielt.
Die finale Version wird in Kapitel 6.2 gezeigt.

### 6.2 Maßnahmen zur besseren Übersicht

Das Framework D3.js^31 beziehungsweise das SVG-Element^32 hat mehrere Möglichkeiten
die Knoten visuell voneinander zu unterscheiden. So sind verschiedene Formen, Farben
oder Beschriftungen möglich. D3.js besitzt jedoch einige nennenswerte Eigenheiten. So ist
es nicht möglich einer Beschriftung einen containerabhängigen Zeilenumbruch zu geben.
Auch ist die Beschriftung der Art der Verbindung rein logisch schwer in die Visualisierung
einzubinden. Es mussten also viele Fragen beantwortet werden:

- Soll die Beschriftung der Objekte und Verbindungen dauerhaft angezeigt
werden?
- Haben die einzelnen Knoten einen festen Platz oder soll die Position
variabel von der Anzahl der Verbindungen sein? Ist der Platz dann fest, oder soll
er verschiebbar sein?
- Wie kennzeichnet man abstrakte Knoten wie Cluster, Projekte, Dienste
oder Firmen? Soll es eine andere Form, Farbe oder sogar komplett eine andere

(^31) "D3.js - Data-Driven Documents." 2010. 26 Aug. 2015 <http://d3js.org/>
(^32) "Document Structure – SVG 1.1 (Second Edition)." 26 Aug. 2015
<http://www.w3.org/TR/SVG/struct.html>
Abbildung 15 : Version 2 der Gesamtvisualisierung
Abbildung 16 : Version 3 der
Gesamtvisualisierung


```
Visualisierung mit unterschiedlichen Datenbanken sein?
```
- Soll bei der Gesamtübersicht der Projekte jeder Knoten der Projekte
aufgeführt werden oder soll bei Klick auf ein Projekt alle Kind-Knoten aufgeführt
werden. Falls ja, wie soll sich die Visualisierung verhalten, wenn Knoten aus
verschiedenen Projekten vorhanden sind?
Der Schwerpunkt, bei der Findung von allen Fragen, die sich auf die Visualisierungsart /-
Methodik bezog, wurde auf die übersichtliche Darstellung der späteren Visualisierung
gelegt.
Neben der reinen Datenwiedergabe durch eine Visualisierung sollte es zusätzliche möglich
sein, dass man über eine Visualisierung
neue Infrastrukturen anlegt. Auch dort
ergaben sich verschiedene Probleme
wie:
- Wie wird die Dateneingabe für
neue Knoten realisiert?
- Wie fügt man neue Knoten
hinzu?
- Wie werden neue Verbindungen
erstellt, beschriftet und mit einer
Funktion versehen?
Im Laufe der Erarbeitung des praktischen Teils der Bachelor Arbeit wurde sich auf bereits
vorhandene intuitive Bedienungskonzepte besonnen.

Abbildung 17 : Beispieldarstellung eines Projekts

```
Abbildung 18 : Beispieldarstellung der Eingabe eines
neuen Knotens
```

### 6.3 Visualisierung reine Darstellung von Daten

Sowohl direkt beim Starten der
Webanwendung, als auch nach Auswahl
eines Projektes wird eine reine
Visualisierung der bereits vorhandenen
Daten benötigt.
Um eine maximale Übersicht und
Lesbarkeit zu garantieren wurde auf
überflüssige Informationsdarstellungen
verzichtet. Objekte sind als Kreise
visualisiert und haben je nach Funktion
eine unterschiedliche Farbe. Funktionen
bzw. die Beschriftung von Kanten sind
dauerhaft sichtbar.
Zusätzlich kann die Visualisierung den eigenen Wünschen entsprechend verschoben
werden.

### 6.4 Visualisierung neues Projekt/neue Knoten/neue Kanten

Wie bereits in der oberen Darstellung gezeigt, lassen sich Knoten mit einen Doppelklick
Namen und Nick zuweisen. Der Nick sollte, wie der offizielle Servername lauten, um
spätere Verbindungen richtig in vSphere zuordnen zu können. Knoten können durch
einfaches ziehen verbunden werden und mit einer vorherigen Markierung und der
Bestätigung beschriftet werden.

## 7 Datenausgabe

Dieses Kapitel beschreibt die gesamte Datenausgabe, welche die Nutzung der Template -
Engine umfasst und die Übertragung in Confluence.
Zur Datenausgabe gehört sowohl die Speicherung, als auch die Darstellung der Daten.

### 7.1 Die smarty Vorlagen

Die Template - Engine smarty wurde bereits im Kapitel 4.5 näher erläutert. Diese Vorlagen
haben folgenden Aufbau:

```
Abbildung 19 : Beispiel Visualisierung aller Projekte
bei AOE
```

<h1>{$infoArray.vSphereInfos["name"]}</h1>
<h2>{$infoArray.vSphereInfos["vmPathName"]}</h2>
<h3>Server Information</h3>
<ul>
<li>Virtual Machine ESX,
{$infoArray.vSphereInfos["guestFullName"]}
[{$infoArray.zOsImageName}]</li>
<li>{$infoArray.zHostName}
({$infoArray.vSphereInfos.ipAddress})</li>
</ul>
<h3>Network Services</h3>
<ul>
{* Iterate over all zabbixInfos (mainly Network Services) *}
{foreach from=$infoArray.zabbixInfos item=val}
<li>{$val}</li>
{/foreach}
</ul>
<h3>Hardware Information</h3>
<ul>
{* Iterate over the Rest of the vSphere Infos (Main parts from
getOverview) *}
{foreach from=$infoArray.vSphereInfos key=valkey item=val}
{if $valkey != "name" && $valkey != "vmPathName" &&
$valkey != "guestFullName" && $valkey != "ipAddress"}
<li>{$valkey} : {$val}</li>
{/if}
{/foreach}
</ul>
Neben den smarty - Funktionen können die Vorlagen auch reinen HTML - Code enthalten.
Die smarty - Variablen sind ähnlich wie PHP - Variablen aufgebaut und müssen vor der
ersten Nutzung in smarty - Variablen umgewandelt und übergeben werden.
Anpassungen des Aussehens können dank der Template - Engine einfacher und ohne in
den Programmcode schauen zu müssen, übernommen werden. Außerdem stellt smarty
bereit sicher, dass grobe Synatxfehler nicht in der generierten Dokumentation vorhanden
sind.

### 7.2 Datenausgabe in Confluence

Die Webanwendung generiert die Dokumentation der Projekte oder Server in reinen HTML.
Somit ist eine Datenausgabe in jedem System vorstellbar, welches HTML als
Darstellungsform nutzt.
Wie in Kapitel 4.8 beschrieben ist Confluence ein Wiki - System, das als Datenablage für
darstellende Inhalte dient. Im Folgenden wird der Programmcodeteil aufgeführt, der die
generierte Dokumentation in Confluence überträgt.


/* Write generated Stuff in Confluence */
function refresh_Doc($updates){
global $token, $client;
/* Problems with finding space and page */
/* via client->getPage(token, space, id) */
try{
$updatePage = $client->getPage($token, $_GET["space"],
$_GET["page"]);
}catch (Exception $e) {
$pageID = $client->search($token, $_GET["page"], 5 )[ 0 ]->id;
$updatePage = $client->getPage($token, $pageID);
}
$updatePage->content = $updates;
/* updatePage: */
/* String token,RemotePage page,RemotePageUpdateOptions */
/* options */
$rPage = $client->updatePage($token, $updatePage, "");
return ($rPage->content);
}
Dieser Programmteil erstellt mit Hilfe der Confluence - API ein Confluence - Seiten Objekt.
Dieses Objekt hat einen Seiteninhalt der durch die bereits generierte Dokumentation
ersetzt wird. Nachdem dieser Vorgang erfolgreich beendet wurde, wird die Seite in das
Confluence - System übertragen.
Confluence hat sehr strikte HTML Syntaxregeln. Bereits bei kleinen Verstößen blockiert
Confluence die Übertragung ins System und macht Struktur - Änderungen somit sehr
schwierig und fehleranfällig.
Neben der Übertragung in Confluence, kann der Nutzer die Dokumentation auch als reine
HTML - Darstellung betrachten.

## 8 Erfüllte Anforderungen

Die Webapplikation, die im Rahmen dieser Bachelorarbeit erstellt wird, hilft sowohl
Software-Entwicklern als auch den Administratoren bei AOE bei der Übersicht über die
Projekte und deren IT-Infrastrukturen. Zusätzlich wird die Webanwendung aus den damit
verbundenen gesammelten Daten die automatisch generierten Projektdokumentationen,
Systemdokumentationen und Serverdokumentationen mit dem einhergehenden
Runbook^33 erstellt.
Im weiteren Verlauf werden die erfüllten Anforderungen aufgeführt.

### 8.1 Technische Anforderungen

Die Webapplikation basiert technisch auf einem XANP System, wobei X für ein beliebiges
Betriebssystem steht.

(^33) "What is run book? - Definition from WhatIs.com." 2010. 19 Sep. 2015
<http://searchnetworking.techtarget.com/definition/run-book>


Das A steht für einen typischen Apache^34 , um die statischen Elemente mit HTML
darzustellen und die Applikation über HTTP ansteuerbar zu machen. Außerdem ist damit
auch die Nutzung von JavaScript^35 gegeben, da diese Clientbasierend läuft. Im
Zusammenhang mit JavaScript werden verschiedene Frameworks^36 genutzt wie jQuery^37 ,
d3.js^38 , CodeMirror^39 oder Bootstrap^40. JQuery stellt JavaScript Methoden, um oft genutzte
Aufgaben, wie beispielsweise Änderungen am DOM^41 , zu vereinfachen. D3.js bietet viele
verschiedene Visualisierungsmethoden und Bootstrap vereinfacht oft genutzte Design-
Elemente, wie Formularelemente.
Das N steht für die bereits im Vorfeld erwähnte Neo4J^42 - Graphendatenbank. Sie
übernimmt die Speicherung der Daten und stellt schnelle Such- und Updatefunktionen über
eine eigene Query-Sprache Namens Cypher^43 bereit. Die Neo4J Datenbank ist Java
basiert und läuft auf demselben Server.
P steht für die serverseitige Script-Interpreter Sprache PHP^44 , welche sowohl für die API^45
Anbindungen über das SDK^46 von vSphere^47 verwendet wird, für die direkte API-Anbindung
von Zabbix, als auch für die eigens geschriebene API.
Das Frontend der Webapplikation kann über eine Einbindung im intern genutzen
Kollobartionswerkzeug Confluence bedient werden. Alle Funktionen sind sowohl über das
Frontend, als auch direkt über die eigens geschriebene API erreichbar. Die API kann über
einfache GET-Anfragen angesprochen werden.

In Confluence dokumentiert AOE wichtige Informationen und stellt ein eigenes Wiki bereit,
ebenso wie die einzelnen Projektteams, die Software nutzen um gemeinsam ihr Projekt zu

(^34) "Welcome to The Apache Software Foundation!." 2006. 8 Aug. 2015
<https://www.apache.org/>
(^35) "JavaScript Tutorial - W3Schools." 8 Aug. 2015 <http://www.w3schools.com/js/>
(^36) "Framework Definition." 2015. 19 Sep. 2015
<http://techterms.com/definition/framework>
(^37) "jQuery." 2006. 8 Aug. 2015 <https://jquery.com/>
(^38) "D3.js - Data-Driven Documents." 2010. 8 Aug. 2015 <http://d3js.org/>
(^39) "CodeMirror." 2013. 22 Aug. 2015 <https://codemirror.net/>
(^40) "Bootstrap · The world's most popular mobile-first and ..." 2008. 8 Aug. 2015
<http://getbootstrap.com/>
(^41) "W3C Document Object Model." 8 Aug. 2015 <http://www.w3.org/DOM/>
(^42) "Neo4j, the World's Leading Graph Database." 2009. 8 Aug. 2015 <http://neo4j.com/>
(^43) "Cypher Query Language - - The Neo4j Manual v2.2.0." 2014. 8 Aug. 2015
<http://neo4j.com/docs/stable/cypher-query-lang.html>
(^44) "PHP: Hypertext Preprocessor." 2005. 8 Aug. 2015 <http://php.net/>
(^45) "What is Application Program Interface (API)? Webopedia." 2002. 8 Aug. 2015
<http://www.webopedia.com/TERM/A/API.html>
(^46) "SDK (Software Development Kit) Definition." 2015. 19 Sep. 2015
<http://techterms.com/definition/sdk>
(^47) "vSphere: Server Virtualization, Cloud Infrastructure | United ..." 2009. 8 Aug. 2015
<http://www.vmware.com/products/vsphere>


planen. Auch werden dort die Dokumentationen für die Projekte und Systeme hinterlegt,
womit eine Einbindung in der Webapplikation sinnvoll wäre.

### 8.2 Unternehmenspezifische Anforderungen

Da die Anforderungen in dem Falle einer Bachelorarbeit von mehreren Fraktionen kommen
kann, muss ein Zusammenschluss aller Anforderungen erstellt werden. Die Hochschule
Fulda hatte lediglich die Anforderung, dass ein Thema in einem technischen Gebiet
gewählt wird und der jeweilige zu betreuende Professor mit dem Thema einverstanden ist.
So kamen die einzigen Vorgaben von der Firma AOE.
Es wurde eine Webanwendung gefordert, welche aus bereits vorhandenen Quellen
eigenständig eine Dokumentation erstellt, die beliebig anpassbar und erweiterbar ist. Mit
der Zeit kamen Anforderungen hinzu:

- Jede Anwendung oder Dienst soll, soweit wie möglich, mit einen Port versehen
    werden.
- Eine bessere Übersicht in der Visualisierung der Grobstruktur.
- Eine eigene API schreiben um den Zugriff der Webanwendung auch über einer
    Linux - Shell^48 zu übermöglichen.
- Kapselung der Hilfevorlagen mit smarty
Vorteile wären einerseits Einsparungen hinsichtlich möglicher Automatisierung und
andererseits einheitlichere Systemdokumentationen.

### 8.3 Normen, Richtlinien, Gesetze, Standards

Ein Thema wie automatisch generierte Dokumentationen bringt Standards mit sich. So ist
zwar eine Dokumentation an sich selten vom Unternehmen vorgegeben, doch gibt es
häufig Richtlinien oder Vorgaben, die sich mit der Zeit durchgesetzt haben. Im Folgenden
wird kurz verdeutlicht, inwieweit der praktische Teil der Arbeit anhand von bereits
vorhandene Normen erstellt wird.

#### 8.3.1 Technisch

Die Implementierung der Bachelorarbeit hält sich an typische Programmierstile zur
Verbesserung der Lesbar-, Wartbar-, oder Erweiterbarkeit. Konzepte, um spätere
Änderungen an der Datenbeschaffung oder Dokumentationsdesign einfacher zu halten,
werden beachtet. Auch Konzepte, wie CodeSmells^49 werden berücksichtigt. Klassen
werden möglichst klein gehalten, um die Struktur lesbarer zu gestalten.
Die Projekt-, System- und Serverdokumentation hält sich an allgemeine und offizielle
Standards oder Vorgaben, die sich in der Vergangenheit als nützlich erwiesen haben.^50

(^48) "LinuxCommand.org: Learning the shell." 2003. 19 Sep. 2015
<http://linuxcommand.org/learning_the_shell.php>
(^49) "Code Smell." 2002. 8 Aug. 2015 <http://c2.com/cgi/wiki?CodeSmell>
(^50) "System Development Life Cycle (SDLC) | Office of the Chief ..." 2011. 8 Aug. 2015
<http://www.ocio.gov.nl.ca/ocio/pmo/sdlc.html>


Zusätzlich wird das agile Prinzip bei der Erstellung der Dokumentationen berücksichtigt.^51
Desweiteren werden die internen Richtlinien von AOE zur Erstellung von
Serverdokumentationen beachtet.

#### 8.3.2 Programmierrichtlinien der Hochschule Fulda

Folgende Programmierrichtlinien von der Hochschule Fulda wurden beachtetet und
eingehalten. Die Programmierrichtlinien wurden von Prof. Dr. Siegmar Groß vorgegeben.

- “Jede Datei beginnt mit einen Kopf, mit einen einheitlich gegebenen Aufbau.”^52
- “Alle Kommentare werden in derselben Sprache verfasst”^53. In Rücksprache mit
    AOE wurde Englisch für die Erstellung der Praktischen Arbeit gewählt.
- “Kommentare beginnen in der 41. Spalte und enden vor der 72. Spalte. Lange
    Kommentare werden vor den Block geschrieben.^54 ”
- “Jeder Block wird um genau zwei Leerzeichen eingerückt.^55 ”
- “Deklarationen sind so lokal wie möglich.Namen sind sorgfältig gewählt.^56 ”
- “Klassen- und Schnittstellennamen beginnen mit einem Großbuchstaben und
    Methoden- und Variablenamen mit einem Kleinbuchstaben. Namen von
    Konstanten sind nur in Großbuchstaben geschrieben.^57 ”
- “Die Funktionsfähigkeit des Programms muss präsentiert werden und muss ohne
    Warnungen ausgeführt werden können.^58 ”

#### 8.3.3 Cypher spezifisch

Daten werden in Neo4J mit Cypher hinzugefügt. Cypher ist eine einfache aber dennoch
ausdrucksstarke Abfragesprache. Verbindungen können einfacher hinzugefügt und
abgefragt werden als durch SQL^59 - Abfragen. Dennoch wurde die Cypher Sprache von SQL
inspiriert.

(^51) "Optimale Systemdokumentation mit agilen Prinzipien." 2012. 8 Sep. 2015
<https://www.codecentric.de/kompetenzen/publikationen/optimale-systemdokumentation-
mit-agilen-prinzipien/>
(^52) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^53) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^54) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^55) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^56) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^57) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^58) "Programmierrichtlinien JAVA - Hochschule Fulda." 2006. 9 Sep. 2015
<http://www2.hs-fulda.de/~gross/java_richt.pdf>
(^59) "SQL – Wikipedia." 2011. 2 Sep. 2015 <https://de.wikipedia.org/wiki/SQL>


Interessant ist die Aussage in der Neo4j Dokumentation “We have tried to optimize the
language for reading and not for writing.”^60

Auch der jeweilige Cypher-Code zu jedem bereits vorhandenen oder neuen Projekt muss
sich an Standards halten, damit das Programm sich erwartungsgemäß verhalten kann.
Diese Standards sind sowohl intern bei der Erstellung bei eventuellen neuen Cypher Code
als auch bei der Eingabe oder Bereitstellung von externen Quellen einzuhalten.
Neo4J hat einen integrierten Parser, der eingegebenen Cypher-Code auf syntaktische
Korrektheit überprüft.

8.3.3.1 Manuell Daten in die Neo4J-Datenbank einfügen

Ein extern zugeführter Cypher-Code kann jederzeit in das Code Übertragung - Fenster
eingefügt werden. Nach einer Bestätigung wird der Code auf einzuhaltende Konventionen
überprüft.

- Im ersten Drittel des Cypher-Codes muss überlegt werden, welche redundanten
    Systeme bereits vorhanden sind und diese per MATCH einer internen
    Bezeichnung zugeordnet werden.
- Eine Liste der bereits vorhandenen Knoten und der zugehörigen ”MATCH” Code-
    Fragmente bekommt man im Auswahlmenü.
       - Beispiel:
          MATCH (aoe:Company {nick:"AOE"})
    Im weiteren Cypher-Code kann man den Bezeichner “aoe” nutzen um neue
    Verbindungen zu bereits vorhandenen Knoten zu erstellen.
- Im zweiten Drittel erstellt man die neuen Knoten. Diese müssen folgender
    Konvention folgen:
       CREATE (interne_Beschreibung:Typ {nick:”NICK”,
       name:”NAME”, project:”Projekt_Name”})

Einzelne Felder:

- interne_Beschreibung: Ohne Hochkommata - gibt die interne Bezeichnung
    zum späteren Verbinden der Knoten innerhalb des Cypher-Codes an.
- Typ: Zur Unterscheidung der Farben und Bezeichnung des Typs.
- nick: Bezeichnung des Servers - im besten Falle der volle Domain-Name
    (FQDN), falls dieser existiert oder in Zukunft existieren könnte.
- name: Selbsterklärende Bezeichnung für die Visualisierung.
- project: Für projektspezifische Knoten nötig. Projektname in derselben
    Schriftweiße wie der Knoten in der Übersicht und beim oberen MATCH.
- Das dritte Drittel beschäftigt sich mit den Verbindungen der Knoten untereinander.

(^60) "8.1. What is Cypher? - - The Neo4j Manual v2.2.4." 2014. 2 Sep. 2015
<http://neo4j.com/docs/stable/cypher-introduction.html>


Verbindungen erstellt man mit:
CREATE (interne_Beschreibung)-[:NameDerVerbindung]-
>(interne_Beschreibung)
Es können anstatt einer “interne_Beschriftung” auch komplett neue Knoten
angelegt werden.
Weitere Informationen zur Erstellung von Cypher-Code Fragmenten kann der offiziellen
Dokumentation^61 von Neo4j entnommen werden.

#### 8.3.4 Design

Das in Confluence eingebundene Frontend hält sich sowohl an die bei AOE übliche
Farbwahl, als auch an das von Confluence vorgegebenen Design. Somit integriert sich das
Modul besser in die Gesamtstruktur
von Confluence.
Das Design ist in mehreren Schritten
entstanden, die durch verschiedene
Versionen gekennzeichnet sind. So
waren die ersten Versionen
Prototypen, die lediglich zum Testen
von Funktionen gebaut wurden, sehr
funktionaler Natur. Später wurde
dann mehr Wert auf Design gelegt.
Es kamen immer aufwändiger
gestaltende Mockups zum Tragen. Für jede neue Version wurde ein neuer Mockup
angefertigt. So waren zu Beginn weder
feste Größen noch ein corporate Design
festgelegt. Zusätzlich sollte das Design
im weiteren Verlauf immer
minimalistischer werden, um die
Übersichtlichkeit zu gewährleisten. Es
wurde in der finalen Version auf alles
vieles der Anfangsversion verzichtet
beispielsweise ein Eingabe Fehler und
ein Vorschaufenster.

#### 8.3.5 Usability

Sowohl der Arbeitsablauf als auch die allgemeine Bedienung soll so nutzerfreundlich wie
möglich gestaltet werden. Aus diesem Grund wird auf ein angenehmes Arbeiten mit den

(^61) "Cypher Query Language - - The Neo4j Manual v2.2.2." 2014. 27 Aug. 2015
<http://neo4j.com/docs/stable/cypher-query-lang.html>
Abbildung 20 : Mockup einer frühen Version
Abbildung 21 : Mockup einer frühen Version


sonst komplex zu nutzenden Knoten und Kanten sehr viel Wert gelegt. Ebenso wird auf ein
allgemein gültiges Bedienungskonzept^62 geachtet.

### 8.4 Anforderungen an die Datenhaltung

Grundsätzlich sind die Daten in vier verschiedene Kategorien zu untergliedern.

1. Die Gesamtstruktur beinhaltet lediglich die Namen der einzelnen Projekte, die bei
    AOE zurzeit betreut werden. Diese werden mit dem Tag “Label” als “Project”
    markiert. Diese Knoten bekommt die Webanwendung automatisch aus den Zabbix
    Projektgruppen.
2. Die projektunspezifischen Daten, die in jedem Projekt gleich sind. Damit sind
    beispielsweise allgemeine Infrastrukturelemente, wie Firewalls^63 oder Verbände
    von Servern gemeint. Diese haben keine eigenen Tags und werden über einzelne
    Projekte hinaus verwendet.
3. Die projetspezifischen Daten beinhalten die gesamten Daten zur Infrastruktur für
    ein einzelnes Projekt. So sind hier alle Server, wie Services untergliedert. Diese
    haben ein Tag namens “project”, das immer den Namen des zugehörigen Projekts
    angibt.
4. Zuletzt gibt es dann noch die Objektspezifischen Daten, die sich nur auf einzelne
    Objekte in der Infrastruktur beziehen. So werden dort die genaueren Daten zu
    Servern, Services oder abstrakte Knoten aufgeführt. Diese Daten werden nicht in
    der Graphendatenbank gespeichert.

### 8.5 Qualitätssicherung durch Behavior Driven Development

Das Behavior Driven Development (Verhaltensgetriebene Softwareentwicklung) ist
ebenfalls ein Teil der agilen Softwareentwicklung und stellt sicher, dass bereits zu Beginn
der Entwicklung feststeht welche Aufgaben die Webanwendung später erfüllen soll.
Zusätzlich werden bereits vor der eigentlichen Implementation einer neuen Funktion, Tests
geschrieben, um während der Entwicklung spätere Folgefehler zu vermeiden. Behavior
Driven Development zwingt den Entwickler sich immer wieder Gedanken darüber zu
machen, wie die Webanwendung sich in jeder Situation verhalten muss.^65

(^62) "Guidelines | Usability.gov." 2012. 8 Aug. 2015 <http://guidelines.usability.gov/>
(^63) "What is firewall? - Definition from WhatIs.com - SearchSecurity." 2011. 20 Sep. 2015
<http://searchsecurity.techtarget.com/definition/firewall>
(^64) "Bdd - Guide to Agile Practices - Agile Alliance." 2012. 19 Sep. 2015
<http://guide.agilealliance.org/guide/bdd.html>
(^65) "Bdd - Guide to Agile Practices - Agile Alliance." 2012. 19 Sep. 2015
<http://guide.agilealliance.org/guide/bdd.html>


## 9 Bewertung und Ausblick

Das Ziel des praktischen Teils dieser Bachelorarbeit, war die Erstellung einer
Webanwendung, die IT - Dokumentationen, inklusive der Visualisierung der zugehörigen
IT-Infrastruktur, möglichst vollständig und automatisch generiert.
Zu diesem Zweck, wurde sich sowohl mit verschiedenen bereits vorhandenen
Datenquellen, deren Zugriff und der Relevanz der erhaltenen Daten beschäftigt, als auch
mit Möglichkeiten IT-Infrastrukturen bestmöglich zu visualisieren.

Die weitestgehende Automatisierung der IT-Abteilung in größeren Betrieben, macht auch
vor dem Dokumentieren der Ergebnisse nicht halt. Da bereits viele Informationen der
späteren technischen Dokumentationen in verschiedenen Überwachungswerkzeugen
vorliegen, war eine Untersuchung der möglichen zu erhaltenen Informationen nötig. Die
Aufstellung dieser Daten ergab, dass die meisten benötigten Informationen tatsächlich von
diesen Werkzeugen beziehbar waren. Die Schnittstellen der Werkzeuge wurden nach allen
Möglichkeiten, die benötigten Daten zu erhalten, durchgearbeitet.
Auch die Visualisierung der IT-Infrastrukturen warf einige Fragen auf. So war eine
Darstellung der Verbindungen der jeweiligen Server ein langwieriger Findungsprozess.

Mit Hinblick auf die Anforderungen stellt die gefundene Visualisierung die bestmögliche
Darstellung dar. Sie vereint Übersichtlichkeit, gutes Design und die Flexibilität die eine IT-
Infrastruktur zur Grunde liegt. Dank d3.js werde bei jedem generieren der Visualisierung,
die Knoten und Kanten verschieden gezeichnet.

Die erhaltenen Daten der verschiedenen Schnittstellen beinhalten die wichtigsten Hard-
und Softwareinformationen. Lediglich die Aussage der laufenden Dienst-Ports auf einem
Server wurde nicht erfüllt. Auch die aufkommende Anforderung nach einer Möglichkeit
dienstspezifische Hilfevorlagen möglich zu machen, wurde implementiert.

Eine System- oder Projektdokumentation lässt sich mit bereits vorliegenden
Überwachungswerkzeugen wie Zabbix oder vSphere sehr gut automatisch generieren.
Somit wird nicht nur redundante Arbeit vermieden, sondern auch Robustheit garantiert.

### 9.1 Wichtigste Ergebnisse der Arbeit

Im Laufe der Erarbeitung der Bachelorarbeit wurde sich eingehend mit zukünftigen Normen
zu Systemdokumentation beschäftigt. So wurden Richtlinien erarbeitet, die auch weiterhin
im Betrieb gültig sind und eingehalten werden.
Es wurde gezeigt, dass der Idee der Beschaffung aller nötigen Daten aus den bereits
vorhandenen Überwachungssystemen nichts im Wege steht und eine Realisierung einer
Webanwendung möglich ist. Dadurch wird der IT – Administrator, mit der nachträglichen
Systemdokumentation, bedeutend entlastet.


Auch die Visualisierung mit d3.js stellt die im Rahmen der Dokumentation bestmögliche
Darstellung einer IT – Infrastruktur dar und kann als Referenz für eine gute Darstellung von
Infrastrukturen angesehen werden.
Die entwickelte Webanwendung macht eine Erstellung von Dokumentationen in Massen
möglich. Ein Projekt von beispielsweise 20 Servern würde mit diesem Tool mit 20 aufrufen
über eine Shell und etwa 5 Minuten erledigt sein.
Zusammenfassend können folgende Ergebnisse als besonders wichtig angesehen
werden:

- Normen und Vorgaben zu Systemdokumentation bei AOE sind verfestigt.
- Benötigte Daten werden erfolgreich aus den jeweiligen Schnittstellen
extrahiert.
- Eine Automatisierung der Dokumentationserstellung erfolgt.
- Dynamische Visualisierung der Projekt Infrastruktur wird erstellt.

### 9.2 Unvorhergesehene Schwierigkeiten

Sowohl in der Findung der Visualisierung, als auch in der Datenverarbeitung und
Beschaffung gab es immer wieder unvorhergesehene Schwierigkeiten.
Zu erwähnen ist, dass die Methodik der Datenverarbeitung und der Beschaffung im
Hinblick auf die einzelnen Datenquellen Schwierigkeiten mit sich brachten. So war die
Nutzung der verschiedenen Schnittstellen nicht trivial. Zabbix und auch vSphere haben
unterschiedliche Eigenheiten. Die Schnittstelle zu Zabbix liefert keine nutzbaren
Warnungen oder Fehlermeldungen bei marginaler Abweichung der optimalen Nutzung der
Schnittstelle. So gibt die Schnittstelle in diesen Fällen den selben Inhalt zurück, wie bei
einem nicht vorhandenen Server. Eine Untersuchung von eventuellen Fehlerquellen war
demnach sehr mühsam.
Ein weiteres Problem war die Beschaffung der jeweiligen Ports zu einem bestimmt Dienst.
Mit Zabbix war es kein Problem die Namen der laufenden Dienste herauszufinden, doch
die zugehörigen Ports waren nicht abrufbar. Dieses Problem war äußerst
Unvorhergesehen, da die Zabbix die Dienste auf den Ports überwacht. Bis heute wurde
dieses Problem nicht gelöst.
Vsphere hingegen hat die Angewohnheit die Ergebnisse sehr wenig zu filtern. So bekommt
man eher alle möglichen Ergebnisse und muss die passenden im Nachhinein aussortieren.

### 9.3 Ausblick

Die Webanwendung kann beliebig erweitert werden. So sind die Stellen im Programmcode
markiert, die verändert werden müssen, um weitere Informationen aus Zabbix und Vsphere
der Dokumentation hinzuzufügen. Die zurzeit automatisch generierte Dokumentation, soll
kein endgültiges festes Werk sein, sondern soll eher dazu dienen einen Eindruck zu
bekommen, was möglich ist.


Neben der reinen Informationsbeschaffung durch das Tool, wäre auch eine
Servererstellung denkbar. Die Vsphere Schnittstelle ermöglicht Server oder Projekte mit
Vorlagen zu erstellen. Automatisch erstellte Infrastrukturen sind denkbar.

### 9.4 Schlusssatz

Die im praktischen Teil der Bachelorarbeit erstellten Arbeit trägt dazu bei, den
Nachbearbeitungsprozess der Servererstellung zu optimieren. Die Zeitaufwendung zur
Implementierung der Webanwendung, wird durch die Zeiteinsparung der Erstellung der
Dokumentation aufgewogen.
Es wurden alle Anforderungen seitens AOE erfüllt und die Webanwendung wird erfolgreich
im laufenden Betrieb eingesetzt.


## 10 Quellenverzeichnis / Literaturverzeichnis

Wolf, Henning (2011): Agile Projekte mit Scrum, XP und Kanban im Unternehmen
durchführen. Erfahrungsberichte aus der Praxis. In dpunkt. Auflage 1. S. 5 - 45
Pichler, Roman (2007): Scrum, Agiles Projektmanagement erfolgreich einsetzen. In
dpunkt. Auflage 1. S. 1 - 5
Van Bon, Jan (2010): ITIL V3 - Das Taschenbuch. In Van Haren Publishing. Auflage 6. S.
15 - 16
Loeliger, Jon / McCullough, Matthew (2012): Version Control with Git, Powerful Tools
and Techniques for Collaborative Software Development. In O’Reilly. Auflage 2. S. 9 - 60
Panzarino, Onofrio (2014): Learning Cypher, Write powerful and efficient queries for
Neo4j with Cypher. In Packt Publishing. Auflage 1. S. 7 - 10, S. 57 - 78
Franz, Klaus (2007): Handbuch zum Testen von Web-Applikationen. In Springer. Auflage

1. S. 11 - 29, S.87 - 94, S. 123 - 155
Hahn, Evan (2013): JavaScript Testing with Jasmine. In O’Reilly. Auflage 1. S. 1 - 20
Gerrard, Paul (2009): The Tester’s Pocketbook. In Paperback. Auflage 1. S. 44 - 56
Gloger, Boris/ Margetich, Jürgen (2014): Das Scrum-Prinzip. In Schäffer-Poeschel.
Auflage 1. S. 3 - 39

## 11 Genutzte Werkzeuge oder externe Frameworks

Die Bachelorarbeit nutzt eine Palette an Werkzeugen oder Frameworks, die im Folgenden
kurz beschreiben werden.

### 11.1 Werkzeuge

Werkzeuge sind größere Programme, die entweder ein Teil der praktischen Arbeit sind
oder dazu beigetragen haben sie zu erstellen.

#### 11.1.1 Neo4J

Neo4j ist eine Graphendatenbank, die genutzt wird, um die Datenhaltung zu organisieren.

#### 11.1.2 Zabbix

Zabbix ist einer der zentralen Quellen zum Datenerhalt meiner Dokumentation.

#### 11.1.3 VMWare vsphere

Vsphere von VMware ist die zweite zentrale Datenquelle.


#### 11.1.4 Targetprocess

Targetprocess wurde im oberen Text nicht
weiter erklärt, da es nicht direkt zur Erstellung
beigetragen kann. In Projekten werden in
Targetprocess die Fortschritte dokumentiert. In
kleinen Projekten kann es dazu genutzt werden
neue Ziele zu stecken, zeitliche Fenster zu
setzen und Engpässe frühestmöglich zu
erkennen. Außerdem hat Targetprocess sehr
geholfen Struktur in den Vorgang der
Ausarbeitung, als auch in die Programmierung
des praktischen Teils zu bekommen.

#### 11.1.5 Git

Auch Git^66 wird im Hauptteil der Thesis nicht weiter erwähnt. Git dient der
Versionskontrollierung und wurde von mir genutzt um die verschiedenen
Entwicklungsstufen meines Programms festzuhalten.
Nach jedem neuen Merkmal der Webanwendung wurde eine neue Version auf den Git-
Server erstellt.

#### 11.1.6 Jenkins

Jenkins^67 ist ein Integrations- bzw. Verteilungssoftware, die hilft komplexe
Anwendungsbereitstellung zu übernehmen und zu automatisieren. In meinem Fall
überprüft Jenkins den durch Git bereitgestellten Programmiercode auf Syntaktische und
funktionale Richtigkeit.
Die funktionale Richtigkeit wird beispielsweise durch eine Überprüfung der Rückgabewerte
der Schnittstelle überprüft.
Nachdem alle Tests erfolgreich sind, wird die neue Projektversion auf dem Server
bereitgestellt.

#### 11.1.7 XAMPP

Mit Hilfe von XAMPP^68 stellt ich eine lokale Entwicklungsumgebung her. Mit XAMPP ist es
möglich auf den eigenen Rechnern eine Webumgebung zu erstellen.

(^66) "Git." 2012. 8 Sep. 2015 <https://git-scm.com/>
(^67) "Meet Jenkins - Jenkins - Jenkins Wiki." 2011. 8 Sep. 2015 <https://wiki.jenkins-
ci.org/display/JENKINS/Meet+Jenkins>
(^68) "Xampp." 2014. 20 Sep. 2015 <https://www.apachefriends.org/de/>
Abbildung 22 : Screenshot Targetprocess


#### 11.1.8 Online Syntax-Highligher

Dank “Online syntax highlighting for the masses! for ‘PHP’”^69 wird der Quellcode mit
Syntaxhighlighting übersichtlicher. Diese Webanwendung wurde genutzt, um den
Quellcode des praktischen Teils der Bachelorarbeit bunter zu gestalten, der in der
Bachelorarbeit als Beispiel eingefügt wurde.
Auch hilite.me wurde als Hilfe herangezogen. Dieses Werkzeug hilft mir den gesamten
Quellcode in HTML darstellender Form aufzubereiten.

### 11.2 Genutzte Frameworks

#### 1 1.2.1 PHP

smarty (http://www.smarty.net/)
vsphere PHP-framework (https://github.com/vadimcomanescu/vmwarephp)
Zabbix PHP-framework (https://github.com/confirm-it-solutions/PhpZabbixApi)

#### 11.2.2 JavaScript

codemirror (https://codemirror.net)
d3.js (http://d3js.org/)
jQuery (https://jquery.com/)
jquery-UI (https://jqueryui.com/)
jqueryCookie (https://github.com/carhartl/jquery-cookie)
savaAsPng (https://github.com/exupero/saveSvgAsPng)
Directed Graph Editor (http://bl.ocks.org/rkirsling/5001347)

#### 11.2.3 CSS

Bootstrap (http://getbootstrap.com/)
codemirror (https://codemirror.net/)
jqueryUI (https://jqueryui.com/)

## 12 Abkürzungverzeichnis

AOE Alex Oldman Entertainment
API Application programming interface
CPU Central processing unit
CURL Client for URLs
DOM Document Object Model
FQDN Fully qualified domain name
HTML Hypertext Markup Language

(^69) "Online syntax highlighting for the masses! for "PHP"." 2007. 20 Sep. 2015
<http://tohtml.com/php/>


