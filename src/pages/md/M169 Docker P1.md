---
title: M169 Docker
layout: ../../layouts/MarkdownLayout.astro
description: Zusammenfassung der Lernziele der 1. Prüfung
author: marni
updated: "2022-05-01"
draft: false
---

# M169 Docker

## Grundlagen was ist Docker/was nicht
Docker ist eine Open-Source-Plattform, die es Entwicklern ermöglicht, Anwendungen in Containern zu erstellen, zu verteilen und auszuführen. Docker ist kein Betriebssystem oder eine virtuelle Maschine, sondern eine Container-Plattform.

## Docker vs. VM
Im Vergleich zu virtuellen Maschinen (VMs) bieten Docker-Container mehr Flexibilität und Skalierbarkeit, da sie keine eigene Kopie des Betriebssystems benötigen. Docker-Container teilen das Betriebssystem des Host-Systems, was die Leistung verbessert und die Verwaltung erleichtert. VMs haben einen eigenen virtuellen Kernenl und Docker Container teilen sich den Physischen Kernel.
![](/public/dockervm.jpg)

## Vor- & Nachteile
Zu den Vorteilen von Docker gehören schnelle Bereitstellung, Portabilität, Wartbarkeit, Skalierbarkeit und Sicherheit. Docker ermöglicht es auch, Anwendungen schnell in verschiedenen Umgebungen bereitzustellen, z.B. auf Test-, Staging- und Produktionsumgebungen.

## Weshalb Docker und nicht VM
Im Vergleich zu VMs benötigen Docker-Container weniger Ressourcen, sind schneller zu starten und benötigen weniger Speicherplatz. Docker bietet auch mehr Kontrolle über die Netzwerkkommunikation und ermöglicht die Isolation von Anwendungen und Diensten.

## Docker Commands
- docker run (-d --> Detach, -p 8080:8080) [DOCKER_IMAGE]: Neuen Container anhand eines Image erstellen und laufen lassen
- docker build (-t TAG --> Tag für das Image setzen) [DIRECTORY]: Docker Image durch ein Dockerfile bauen
- docker images: Images auflisten
- docker ps: Aktive Container auflisten
- docker pull: Image von Registry downloaden
- docker push: Image auf Registry uploaden
- docker stop: Stoppt einen laufenden Docker-Container.
- docker rm: Entfernt einen Docker-Container.
- docker exec: Führt eine Befehlszeile innerhalb eines laufenden Docker-Containers aus.

## Server-Client
Docker besteht aus einem Client-Server-Modell, bei dem der Docker-Client mit dem Docker-Daemon kommuniziert. Der Docker-Client ist das primäre Benutzeroberfläche-Tool, während der Docker-Daemon die Container erstellt, startet und verwaltet.

#### Docker Architecture
![](/public/dockerarchitecture.jpg)


## Daemon
Der Docker-Daemon ist ein Hintergrundprozess, der auf dem Host-System läuft und Docker-Container erstellt, verwaltet und überwacht. Er nimmt Befehle vom Docker-Client entgegen und führt sie aus.

## Installation von Docker (Vorbereitungen, Befehle)

#### Windows
- WSL 2 Backend
- Linux Kernel installieren
- Docker Desktop installieren (App mit GUI, mit der Entwickler Docker-Container erstellen, ausführen und verwalten können)

#### Linux
- sudo apt install docker

## Sinnhaftigkeit von Docker
Docker ist sinnvoll, weil es Entwicklern ermöglicht, Anwendungen schnell und einfach bereitzustellen und zu skalieren. Docker verbessert auch die Zusammenarbeit und Integration zwischen Entwicklungs- und Betriebsabteilungen.

## Docker im DevOps
Docker ist ein wichtiges Werkzeug im DevOps-Bereich, da es die Zusammenarbeit und die schnelle Bereitstellung von Anwendungen ermöglicht. Docker unterstützt auch Automatisierung, Testautomatisierung und Continuous Integration/Continuous Delivery (CI/CD). Es befindet sich im Bereich Deployment.

![](/public/devops.jpg)

## Docker Community
Die Docker-Community ist eine Gruppe von Entwicklern und Enthusiasten, die an der Entwicklung und Verbesserung von Docker beteiligt sind. Die Docker-Community trägt zur Entwicklung neuer Funktionen, zur Lösung von Problemen und zur Erstellung von Docker-basierten Projekten bei.