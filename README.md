# Application de Gestion de Notes Personnelles

Une application web moderne pour la gestion de notes personnelles, construite avec **Laravel 13** pour le backend et **React 19** pour le frontend. Cette application permet aux utilisateurs de créer, lire, mettre à jour et supprimer des notes dans un environnement sécurisé et réactif.

## 🚀 Fonctionnalités

-   **Authentification Sécurisée** : Inscription et connexion des utilisateurs via Laravel Sanctum.
-   **Gestion des Notes (CRUD)** :
    -   Création de nouvelles notes.
    -   Affichage de la liste des notes sur un tableau de bord.
    -   Modification des notes existantes.
    -   Suppression de notes.
-   **Interface Intuitive** : Design moderne et réactif utilisant Tailwind CSS.
-   **Tableau de Bord** : Vue d'ensemble des activités de l'utilisateur.

## 🛠️ Stack Technique

### Backend
-   **Framework** : [Laravel 13](https://laravel.com)
-   **Langage** : PHP 8.3+
-   **Authentification** : Laravel Sanctum
-   **Base de données** : SQLite (par défaut)

### Frontend
-   **Bibliothèque** : [React 19](https://reactjs.org)
-   **Outil de build** : [Vite 8](https://vitejs.dev)
-   **Styling** : [Tailwind CSS 3](https://tailwindcss.com)
-   **Icônes** : Lucide React
-   **Gestion des requêtes** : Axios

---

## ⚙️ Installation

### Prérequis
-   PHP 8.3 ou supérieur
-   Composer
-   Node.js & npm

### Étapes d'installation

1. **Cloner le projet**
    ```bash
    git clone <url-du-repo>
    cd projetWeb
    ```

2. **Configuration du Backend**
    ```bash
    cd backend
    composer install
    cp .env.example .env
    php artisan key:generate
    touch database/database.sqlite
    php artisan migrate
    ```

3. **Configuration du Frontend**
    ```bash
    cd ../frontend
    npm install
    ```

---

## 🏃 Lancement de l'application

Pour lancer l'application en mode développement, vous devez démarrer le serveur backend et le serveur frontend simultanément.

### 1. Démarrer le Backend
```bash
cd backend
php artisan serve
```
Le serveur sera disponible sur `http://localhost:8000`.

### 2. Démarrer le Frontend
```bash
cd frontend
npm run dev
```
L'application sera accessible via l'URL fournie par Vite (généralement `http://localhost:5173`).

---

## 📁 Structure du Projet

-   `/backend` : Code source de l'API Laravel (Routes, Contrôleurs, Modèles, Migrations).
-   `/frontend` : Code source de l'application React (Composants, Pages, Hooks).
-   `/frontend/src/api` : Configuration d'Axios pour la communication avec l'API.

## 🛡️ Sécurité

L'application utilise **Laravel Sanctum** pour l'authentification basée sur les jetons (tokens). Assurez-vous que les ports du frontend et du backend sont correctement configurés dans le fichier `.env` du backend pour éviter les problèmes de CORS.

---

*Développé avec ❤️ par [Votre Nom]*
# WebProject
