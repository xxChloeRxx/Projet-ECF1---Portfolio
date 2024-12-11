# Evaluation ECF 1 partie Front End

Ce projet est un portfolio personnel de développeur web en front end. Il est conçu pour présenter mes compétences en développement web, en particulier en front end. Le portfolio est divisé en différentes sections, chacune présentant un aspect différent de mes compétences.


### Structure du projet
Voici un aperçu de la structure du répertoire du projet :
 ```
/Projet-ECF1---Portfolio
    /docs                           # Documentations du projet
    /public
        /assets
            /images
            /movies
            /sounds
            /maquettes
            /sites
        /css
            /frameworks
                /bootstrap
                /fontawesome
            /views
            style.css
            normalize.min.css           # CSS de normalisation
            style.min.css               # Feuille de style du site
            zoning.min.css              # CSS de zoning pour le developpement
        /fonts
        /js
            /frameworks
                vue.js
                rick.min.js
            main.js                  # Fichier Main JavaScript
        /scss
            _colors.scss
            _extends.scss
            _mixins.scss
            _fonts.scss
            zoning.scss             # SCSS de zoning pour le developpement
            normalize.scss          # CSS de normalisation
            style.scss              # style global SCSS
```

## Choix techniques effectués
## Fonctionnalités
- **Navigation** : Une barre de navigation permettant de naviguer dde façon dynamique entre les différentes sections du portfolio en utilisant Javascript.
- **Aperçu des projets** : Une section présentant des aperçus de projets réalisés. Chaque aperçu est un lien vers le projet correspondant avec un aperçu visuel et une description.
- **CV** : Une section présentant mes compétences et parcours professionel. Plusieures sections sont présentes pour mettre en avant mes compétences.
- **Contact** : Une section de contact pour me contacter. Elle comprend un formulaire de contact avec des champs pour le nom, l'adresse e-mail, le sujet et le message.
- **Mentions Légales** : Une page de mentions légales avec les informations juridiques du site contenant Copyright, Hébergeur, etc.

## Compilation SCSS

### Installation des outils nécessaires
1. Assurez-vous d'avoir Node.js et npm installés sur votre machine.
2. Installez Sass via npm en exécutant la commande suivante :

   ```bash
   npm install -g sass
   ```

   Cette commande installe Sass en tant qu'outil de ligne de commande global.

### Compilation et minification des fichiers SCSS
Pour compiler et minifier vos fichiers SCSS en CSS :

1. Exécutez la commande suivante dans le terminal :

   ```bash
   sass --style=compressed chemin/vers/fichier.scss chemin/vers/sortie.css
   ```

   - Remplacez `chemin/vers/fichier.scss` par le chemin vers votre fichier SCSS source.
   - Remplacez `chemin/vers/sortie.css` par le chemin où vous souhaitez enregistrer le fichier CSS compilé.

2. Si vous travaillez sur plusieurs fichiers SCSS, vous pouvez utiliser cette commande pour traiter un dossier entier :

   ```bash
   sass --style=compressed dossier/scss dossier/css
   ```

   Cette commande compile tous les fichiers SCSS d'un dossier en fichiers CSS dans un autre dossier.

## Compilation des fichiers JS avec Terser

### Installation de Terser
1. Installez Terser globalement en utilisant npm :

   ```bash
   npm install -g terser
   ```

   Cette commande rend Terser disponible en tant qu'outil de ligne de commande.

2. Vous pouvez également l'ajouter à votre projet en tant que dépendance :

   ```bash
   npm install --save-dev terser
   ```

### Compilation et minification des fichiers JS avec Terser
Pour minifier vos fichiers JavaScript :

1. Utilisez la commande suivante dans le terminal :

   ```bash
   terser chemin/vers/fichier.js -o chemin/vers/fichier.min.js -c -m
   ```

   - Remplacez `chemin/vers/fichier.js` par le chemin vers votre fichier JavaScript source.
   - Remplacez `chemin/vers/fichier.min.js` par le chemin où vous souhaitez enregistrer le fichier minifié.
   - Les options `-c` et `-m` permettent respectivement de compresser et de minifier le code.

2. Pour traiter plusieurs fichiers JavaScript, vous pouvez utiliser des outils comme `find` ou des scripts Node.js pour automatiser le processus.

### Exemple de script npm pour automatiser
Ajoutez ces scripts à votre fichier `package.json` pour automatiser la compilation SCSS et JS :

```json
"scripts": {
  "scss": "sass --style=compressed src/scss:dist/css",
  "js": "terser src/js/*.js -o dist/js/ --compress --mangle"
}
```

Ensuite, exécutez :

```bash
npm run scss
npm run js
```

Cela compile tous les fichiers SCSS et JS définis dans les chemins spécifiés.



