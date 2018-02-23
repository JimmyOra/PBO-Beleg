# PBO-Beleg WS 2017/18

*by Jimmy Orawetz and
Tobias Rudolph*

### Beschreibung

Onepager zur Darstelunng, Erstellung und Bearbeitung von Konkaten.

Die Struktur eines Kontaktes ist durch den Stakeholder-Array der process.json definiert.
->somit anfangs 16 Kontake
Diese können einerseits bearbeitet werden, wobei die Eingaben, wie email-Adresse/Name etc. sofort auf Gültigkeit,
bzw. Sinnhaftigkeit überprüft werden, andererseits werden resultierende Änderungen sofort für den Nutzer 
an allen Stellen sichtbar.

##### Aufteilung der Website in 4 Bereiche:

1. Kontake
  - Auflistung aller Kontakte; Hinzufügen und Entfernen möglich

2. Allgemein
  - Ansicht eines Kontaktes mit name und Bild
  
3. Profil
  - Ansicht aller Kontaktdaten
  
4. Bearbeiten
  - Zum Bearbeiten der Kontaktdaten, Ändern des Bildes und Speicherung der Änderungen in der json
  
### Verwendete Frameworks und Bibliotheken

- Vue.js
- Anime.js
- Bootstrap4 (Hauptsächlich CSS Teil, jQuery nur an wenige Stellen)

### Bemerkungen

Um die Nutzerfreundlichkeit zu Verbessern, mussten mir die process.json auf den Bereich des Stakeholder Arrays kürzen.
(um das Abspeichern der Änderungen zu erleichtern) ->process2.json

Das Einlesen der lokalen process.json funktioniert in Chrome aufgrund der **cross origin policy** nur mittels LiveServer aus VSC heraus.










