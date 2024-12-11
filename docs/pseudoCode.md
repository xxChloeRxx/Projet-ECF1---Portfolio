## Pseudo-code JS

### Fonctionnalité de la barre de navigation:
Je souhaite créer une barre de navigation qui permet de naviguer de façon dynamique entre les différentes sections du portfolio en utilisant Javascript. Quand l'utilisateur clique sur un lien de la barre de navigation, la section correspondante du portfolio doit être affichée sur la même page afin d'éviter un chargement supplémentaire. Pour ce faire, il faut tout d'abord préparer les sections du portfolio dans le html dans une div ``#menu``. Il faut ensuite ajouter ``data-gallery`` avec un id à chaque afin de pouvoir les identifier et les cacher. Enfin, il faut créer une fonction qui va permettre de cacher les sections et d'afficher la section correspondante à l'id du lien cliqué.
<br><br>
1. Lancer le script lorsque le DOM est entièrement chargé :
   - Ajouter un écouteur d'événements sur "DOMContentLoaded".
   ```
   document.addEventListener('DOMContentLoaded', () => {
    ```
    <br><br><br><br>

2. Définir les IDs des éléments de la page :
   - `menuContainer` : Élément avec l'ID 'menu'.
   - `galleryContent` : Élément avec l'ID 'nav-content'.
   - `pageSections` : Ensemble des sections principales sélectionnées avec un sélecteur spécifique.
    ```
   const menuContainer = document.getElementById('menu');
   const galleryContent = document.getElementById('nav-content');
   const pageSections = document.querySelectorAll('.page-section');
   ```

<br><br><br><br>
3. Définir la fonction `createMenu` pour générer le menu dynamiquement :<br>
   a. Sélectionner tous les éléments `h2` dans le conteneur de menu.
```
   const menuItems = menuContainer.querySelectorAll('h2');
```
<br><br>
   b. Pour chaque élément de menu :
      i. Ajouter un écouteur d'événements "click".
```
      menuItems.forEach(item => {
        item.addEventListener('click', () =>
      )})
 ```
<br><br>
      ii. Lorsqu'un élément est cliqué :<br>
          - Récupérer l'attribut `data-gallery` de l'élément cliqué.<br>
``` 
        const galleryId = item.getAttribute('data-gallery');
 ```
<br><br>
          - Afficher dans la console le texte de l'élément cliqué et son ID de galerie pour vérifier son bon fonctionnement.<br>
```
    console.log(`Clicked menu item: ${item.textContent}, Gallery ID: ${galleryId}`);
```
<br><br>
          - Appeler la fonction `createGallery` avec l'ID de galerie pour créer la galerie dynamique.<br>
```
    const gallery = createGallery(galleryId);
```
<br><br>
          - Cacher toutes les sections statiques de la page (`pageSections`) afin d'afficher seulement le contenu dynamique.<br>
```
    pageSections.forEach(section => {
        section.style.display = 'none';
    });
```
<br><br>
          - Afficher la section de galerie (`galleryContent`).
```
    galleryContent.style.display = 'block';
```
<br><br>
          - Effacer le contenu actuel de `galleryContent`.
```
    galleryContent.innerHTML = ''; 
```
<br><br>
          - Ajouter la galerie nouvellement créée dans `galleryContent`.<br>
```
    galleryContent.appendChild(gallery);
```

4. Définir la fonction `createGallery` pour créer une galerie dynamique :<br>   
```
function createGallery(galleryId) {
}
  ```
   a.Afficher dans la console un message indiquant l'ID de galerie en cours de création.<br>
   ```
    console.log(`Creating gallery for ID: ${galleryId}`);
   ```
   <br><br>
   b. Créer un élément `div` pour envelopper la galerie.<br>
   ```
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
   ```
   <br><br>
   c. Ajouter une classe CSS `gallery-wrapper` à cet élément.<br>
   ```
    const galleryWrapper = document.createElement('div');
   ```
   <br><br>
   d. Définir un objet `galleryTitles` pour mapper les IDs de galeries à leurs titres respectifs.<br>
   ```
    const galleryTitles = {
        gallery1: ' < Maquettes & Sites Web > ',
        gallery2: ' < Mon CV > ',
        gallery3: ' < Me Contacter > ',
    };
   ```
   <br><br>
   e. Utiliser cet objet pour personnaliser la galerie en fonction de l'ID.<br>
   ```
    createMenu();
   ```

5. Appeler `createMenu` pour initialiser les interactions du menu dynamique.
 ```
    createMenu();
   ```
6. Terminer le script.
