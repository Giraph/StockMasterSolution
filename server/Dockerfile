# Utilisation d'une image Node.js
FROM node:latest

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie du package.json et du package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Exposition du port
EXPOSE 8000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
