# Etapes d'installation du repo :
### Commandes :
``` ts
npm install  /*pour installer toutes les dépendances */
npm run dev /* pour vérifier que le projet ce lance bien */ 
git init /* pour créer le repo */ 
git add . /* enregistrer un repo vierge sur Github */
git commit -m "first commit" /* nom du commit */
```
Sur Github créer un nouveau repository

``` ts
git remote add origin git@github.com:MarineLigny/vite-front-ecommerce.git /* lien pour relier Github à mon projet VSC */ 
git push -u origin master /* push sur master et non main*/ 
```


# Techno 
React + Vite + Typescript 

# Gitflow 

branch Master 
|___ branch dev puis PR 

# Règles de code : 
- utilisation des single quotes : ''
- indentation avec 2 tabulations 
- enlever les console.log avant de commit
- règle de commit :
``` ts
git commit -m "<type> [optional scope]: <description>
```
``` ts
<Type>
#feat : création d’une fonctionnalité pour l’utilisateur.rice 

#fix : correction d’un bug pour l’utilisateur.rice

#refactor : refactor du code de production

#test : création et refactor de tests

#chore : configuration du projet
```
``` js
<scope>
Le scope désigne la section de la codebase à laquelle le commit apporte des modifications. Il est indiqué entre parenthèses. En général il s'agit d'un dossier parent au composant que l'on mofifie. 
ex: feat (add-card-product) : define addCardButton component
```


