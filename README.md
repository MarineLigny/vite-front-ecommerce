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


## règle de commit :
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

## Règle de Lint :

regarder la doc de @commitlint/config-conventional "pour le formatage des commits comme en entreprise. 
Si pas déjà en librairie, faire le npm install puis echo, sinon faire juste le echo.

**Attention** créer une sous branche pour faire l'installation 
``` js
git checkout -b setup-config-lint
```
- création d’un fichier de configuration commitlint.config.js
- indication dans le fichier que vous souhaitez utiliser les règles des Conventional Commits pour linter vos commits

1. Formater le fichier commitlint.config.js en ts
2. Modifier le fichier en creant un Type 
``` ts
const config: UserConfig = { 
	extends: ['@commitlint/config-conventional'] 
	};

export default config;
```
3. clique droit sur ``UserConfig`` permet de "voir" les propriétés que l'on peut ajouter. 
4. configuration du hook avec "husky" par exemple. 
``` js
npx husky init
```
un fichier **.husky** est désormais présent dans le projet. 
``` js
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```
ajoute le fichier commit-msg dans .husky puis supprimer le fichier pre-commit qui ne sert à rien. 

5. enfin tester vos commit avec un commit aléatoire, ex :git commit -m "pouet". husky devrait bloquer le commit. 