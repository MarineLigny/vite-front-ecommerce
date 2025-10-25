# Etapes d'installation du repo :

### Commandes :

```ts
npm install  /*pour installer toutes les dépendances */
npm run dev /* pour vérifier que le projet ce lance bien */
git init /* pour créer le repo */
git add . /* enregistrer un repo vierge sur Github */
git commit -m "first commit" /* nom du commit */
```

Sur Github créer un nouveau repository

```ts
git remote add origin git@github.com:MarineLigny/vite-front-ecommerce.git /* lien pour relier Github à mon projet VSC */
git push -u origin master /* push sur master et non main*/
```

# Techno

React + Vite + Typescript

# Gitflow

branch Master
|\_\_\_ branch dev puis PR

# Règles de code :

- utilisation des single quotes : ''
- indentation avec 2 tabulations
- enlever les console.log avant de commit

## règle de commit :

```ts
git commit -m "<type> [optional scope]: <description>
```

```ts
<Type>
#feat : création d’une fonctionnalité pour l’utilisateur.rice

#fix : correction d’un bug pour l’utilisateur.rice

#refactor : refactor du code de production

#test : création et refactor de tests

#chore : configuration du projet
```

```js
<scope>
Le scope désigne la section de la codebase à laquelle le commit apporte des modifications. Il est indiqué entre parenthèses. En général il s'agit d'un dossier parent au composant que l'on mofifie.
ex: feat (add-card-product) : define addCardButton component
```

## Paramétrer Lint pour créer des règles de commit :

regarder la doc de @commitlint/config-conventional "pour le formatage des commits comme en entreprise.
Si pas déjà en librairie, faire le npm install puis echo, sinon faire juste le echo.

**Attention** créer une sous branche pour faire l'installation

```js
git checkout -b setup-config-lint
```

- création d’un fichier de configuration commitlint.config.js
- indication dans le fichier que vous souhaitez utiliser les règles des Conventional Commits pour linter vos commits

1. Formater le fichier commitlint.config.js en ts
2. Modifier le fichier en creant un Type

```ts
const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
};

export default config;
```

3. clique droit sur `UserConfig` permet de "voir" les propriétés que l'on peut ajouter.
4. configuration du hook avec "husky" par exemple.

```js
npx husky init
```

un fichier **.husky** est désormais présent dans le projet.

```js
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

ajoute le fichier commit-msg dans .husky puis supprimer le fichier pre-commit qui ne sert à rien.

5. enfin tester vos commit avec un commit aléatoire, ex :git commit -m "pouet". husky devrait bloquer le commit.

## Paramétrer Eslint avec librairie React-hook et Jsx-ally

Pensez à bien paramétrer Eslint pour qu'il ne soit pas obselète; Pour cela importer les plugins React-hook et Jsx-Ally et les lier à votre fichier eslints.config

**Attention** ici on a l'ancienne version de Eslint.

1. extends :

- ajouter React-hook/recommanded
- ajouter jsx/ally/recommanded
- vérifier la doc pour ajouter ou enlever des rules

2. console.log :

- ajouter dans rules : 'no-console': 'error',

3. test:

- ajouter un console.log dans App.tsx par exemple. Normalement une erreur apparait dessus (pas bloquant pour travailler).
- testez le plugin qui veille à l’accessibilité de votre code, à savoir eslint-plugin-jsx-a11y

```
Ce plugin prévoit une règle, img-redundant-alt, qui sert à éviter l’inclusion des mots “image”, “picture” ou “photo”, en valeur d’un attribut alt. Autrement dit, quand elle est activée, cette règle invite à écrire “Tour Eiffel” au lieu de “Image de la tour Eiffel”.
```

- lire la doc pour vérifier si on veut ajouter des erreurs à jsx-ally (recommanded/error)

## Prettier

1. lire la doc de Prettier pour l'installer.
2. node --eval "fs.writeFileSync('.prettierrc','{}\n')"
3. ajouter les règles que l'on veut utiliser
4. faire un test en ajoutant const bla = "bla" dans app.tsx par exemple. Normalement le double quote se transforme en simple quote.

### Raccourcir les chemins : absolu paths

Permet d'éviter d'avoir ../../../../ s'il y a 5 fichier à remonter.

`ex: '../../../../../common/utils/formatDate'`

pour cela il faut créer des chemins absolus.

1. ouvrez le fichier tsconfig.json
2. après "noFallthroughCasesInSwitch": true, ajouter `"baseUrl": "src"`
3. ouvrez vite.config.ts et à la suite de react, ajouter

```ts
resolve: {
  alias: [
    { find: 'common', replacement: '/src/common' },
    { find: 'features', replacement: '/src/features' },
  ],
},
```

## configurer Tailwind

Tailwind est bien pour créer un projet rapidement.

1. importer la librairie Tailwind
2. `npx tailwindcss init -p --ts`  
   Grâce au --ts à la fin de la commande, le fichier tailwind.config.ts est en TypeScript
3.
