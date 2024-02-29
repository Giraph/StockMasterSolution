# StockMasterSolution

## Prérequis
- Node.js et npm doivent être installés sur votre machine.
- Docker doit être installé sur votre machine.

## Frontend

1. Ouvrez un terminal et accédez au répertoire du frontend.
2. Exécutez la commande suivante pour installer les dépendances :
    ```shell
    npm i
    ```
3. Ensuite, exécutez la commande suivante pour démarrer le serveur de développement :
    ```shell
    npm run dev
    ```
4. Le frontend sera accessible à l'adresse http://localhost:3000.

## Backend

1. Ouvrez un terminal et accédez au répertoire du backend.
2. Exécutez la commande suivante pour construire les conteneurs Docker :
    ```shell
    docker-compose build
    ```
3. Ensuite, exécutez la commande suivante pour démarrer les conteneurs Docker en arrière-plan :
    ```shell
    docker-compose up -d
    ```
4. Le backend sera accessible à l'adresse http://localhost:8080.
