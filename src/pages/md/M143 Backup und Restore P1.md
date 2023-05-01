---
title: M143 Backup und Restore
layout: ../../layouts/MarkdownLayout.astro
description: Zusammenfassung der Lernziele der 1. Prüfung
author: marni
updated: "2022-04-26"
draft: false
---

# M143 Backup und Restore

## Datenschutz

Bezieht sich auf den gesetzlichen Schutz personenbezogener Daten, indem sie vor unerlaubter Verarbeitung oder Verwendung geschützt werden.

## Datensicherheit

Bezieht sich auf die Maßnahmen, die ergriffen werden, um die Verfügbarkeit, Integrität und Vertraulichkeit von Daten sicherzustellen.

#### Die 3 Grundwerte der Datensicherheit: 

- **Integrität**, ungewünschte, nicht nachvollziehbare Änderungen unmöglich gemacht.
- **Vertraulichkeit**, nur befugte Personen haben Zugang zu den entsprechenden Daten.
- **Verügbarkeit**, Nutzer kommen an die Daten ran, wenn sie benötigt werden.

## Kategorien von Bedrohungen
#### Höhere Gewalt: 
- Defekte der Hardware, Stromversorgung 
- Fehler im Betriebs- oder Kommunikationssystem 
- Feuer, Explosion im Rechenzentrum oder in dessen Umgebung 
- Naturkatastrophen wie Erdbeben, Überschwemmungen oder Blitzschlag 

#### Menschliches Versagen: 
- Versehentliches Löschen von Daten 
- Fehlerhaftes Programmieren 
- Verlust der Vertraulichkeit durch herumliegende Daten 

#### Kriminelle Handlung: 
- Absichtliche Manipulation an Geräten, Programmen oder Daten 
- Missbrauch vertraulicher Daten 
- Diebstahl oder Kidnapping von Geräten, Programmen oder Daten 
- Einbringen von bösartiger Software (Viren), Hacking, Industriespionage 
- Vandalismus, Sabotage 

## Wie schütze ich mich dagegen?
#### Preloss:
- USV
- CO2 Alarm
- Serverraum nicht im Keller

#### Postloss:
- Backup
- Versicherungen
- Kommunikation mit den Medien

## Hauptgruppen von Speichermedien
#### Magnetische Speichermedien
- Festplatten, Magnetbänder
- Schutz vor magnetischen Feldern, hohe Luftfeuchtigkeit

#### Optische Speichermedien
- CD-ROMs, DVDs, Blu-ray-Discs
- Schutz vor Licht, hohe Luftfeuchtigkeit

#### Flash-Speicher
- USB-Sticks, SD-Karten, SSD-Festplatten
- Schutz vor elektrostatischer Entladung (ESD)

#### Generelle Schutzmaßnahmen
Schutz vor physikalischen Schäden wie Stößen, Feuchtigkeit, Hitze und Feuer

## Was braucht man wenn man in 20 Jahren ein altes Speichermedium auslesen will?
- Spezielle Hardware und Software benötigt
- Kompatibles Lesegerät oder Adapter
- Ältere Betriebssystemversion oder virtuelle Maschine erforderlich
- Spezielle Software für das Dateiformat notwendig

## Giga/Gibi - Mega/Mibi ... & Andere Basis, 2 statt 10
- "Giga" und "mega" sind dezimale Präfixe (Base 10) für Messungen in der IT-Industrie.
- "Gibi" und "mibi" sind binäre (Base 2) Präfixe für die Speicherung von Daten auf Computern.
- Ein Gigabyte (GB) entspricht 1.000 Megabytes (MB), während ein Gibibyte (GiB) 1.024 Mebibytes (MiB) entspricht.

## Autoloader/Libary
- Autoloader hat nur ein Laufwerk und kann nur wenige Magnetbänder aufnehmen (8, 10 bis 16)

- Librarys können mehrere Dutzend Bandlaufwerke haben, in die Roboterarme Magnetbänder aus Magnetbandmagazinen einlegen. Solche Magazine umfassen durchaus mehrere tausend Magnetbänder.

## Kapazität Ultrium 8/9 Bänder
LTO 8 = 12-30TB
LTO 9 = 18-45TB

## Organisatorische Vorbereitungen
- Schulung
- Dokumentation (wer ist für was verantwortlich)
- Checkliste für Sicherheitsaspekte
