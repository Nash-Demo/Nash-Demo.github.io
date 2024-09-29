# NexteWave-Website

## Description

Ce projet est le module website de la plateforme NexteWave, destiné à être associer aux autres modules Odoo de la dite plateforme.

## Statut du projet

Le projet en developpement. La release en cours vise à produire le code HTML/CSS/JS de l'entièreté des interfaces front du site.

## Demarrer avec le projet

### Depandance

Aucune dependances n'est nécéssaire à l'exécution de code. Seule la CLI tailwindcss est utilisé pour générer le code CSS des classe utilisé. Voir la documentation [Use Tailwind CSS without Node.js](https://tailwindcss.com/blog/standalone-cli).

### Outils utilisés

- Environnement
  ```
  - Ubuntu v22.04.3 LTS
  - VS Code
  ```
- Langage & Framework

  ```
  - HTML 5
  - JS
  - CSS 3 (& Tailwind CSS v3.3.5)
  ```

### Installation

Code exécutable sur n'importe quel Navigateur web (Chrome, Opera, FireFox, Edge...). Pour l'édition, un IDE de projet web (HTML/CSS/JS) est suffisant.

### Démarrage

```shell
# Create a tailwind.config.js file
./tailwindcss init

# Start a watcher
./tailwindcss -i input.css -o output.css --watch

# Compile and minify your CSS for production
./tailwindcss -i input.css -o output.css --minify
```

**NB.** Si le fichier `tailwind.config.js` est déjà crée, la première étape n'est pas nécessaire.

## Contributeur

`@Quentin Monthe`
