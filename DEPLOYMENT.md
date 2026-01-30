# 🚀 Guide de Déploiement - Portfolio Gabriel

## Préparation pour la Production

### 1. **Vérifications Préalables**

```bash
# Vérifier les dépendances
npm list

# Vérifier la qualité du code
npm run check

# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Lint (si configuré)
npm run lint
```

### 2. **Build Production**

```bash
# Nettoyer les builds précédents
rm -rf build dist .svelte-kit

# Construire l'application
npm run build

# Prévisualiser le build
npm run preview
```

### 3. **Variables d'Environnement**

Créer un fichier `.env.production` avec:

```env
# Base du site
PUBLIC_SITE_URL=https://gabriel-portfolio.dev
PUBLIC_SITE_NAME=Gabriel | Développeur Full-Stack

# Email
PUBLIC_EMAIL=contact@gabriel.dev
PUBLIC_PHONE=+261 XX XXX XX XX

# API (si utilisé)
PUBLIC_API_URL=https://api.gabriel-portfolio.dev

# Analyse
PUBLIC_GA_ID=UA-XXXXXXXXX-X

# Clés externes
PRIVATE_SENDGRID_KEY=your_sendgrid_key
PRIVATE_DB_URL=your_database_url
```

### 4. **Optimisations**

#### Images
```bash
# Optimiser les images
npx imagemin src/static --out-dir=src/static
```

#### CSS
Le build Svelte + Tailwind fait automatiquement le purging du CSS inutilisé.

#### JavaScript
- Tree-shaking automatique avec Vite
- Code splitting pour les routes dynamiques

### 5. **Tests Avant Déploiement**

```bash
# Vérifier que tout fonctionne
npm run build
npm run preview

# Tester les formulaires
# - Contact
# - Traduction
# - Feedback

# Vérifier les performances
# - Lighthouse
# - WebPageTest
```

---

## Déploiement Recommandé

### **Option 1: Vercel** (Recommandé pour SvelteKit)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déploiement en production
vercel --prod
```

Configuration `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x'
    })
  }
};
```

### **Option 2: Netlify**

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Initialiser
netlify init

# Déployer
netlify deploy --prod
```

Configuration `netlify.toml`:
```toml
[build]
  command = "npm run build"
  functions = "svelte-kit/functions"
  publish = "build"

[dev]
  command = "npm run dev"
  port = 5173
```

### **Option 3: Docker + VPS**

Créer `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build/index.js"]
```

Déployer:
```bash
docker build -t gabriel-portfolio .
docker run -p 3000:3000 gabriel-portfolio
```

---

## Checklist de Déploiement

- [ ] Vérifier le `.env.production`
- [ ] Tester le build localement
- [ ] Vérifier les formulaires
- [ ] Tester sur mobile
- [ ] Vérifier le SEO
- [ ] Tester les liens
- [ ] Vérifier les images
- [ ] Tester les traductions
- [ ] Vérifier le dark mode
- [ ] Tester l'accessibilité
- [ ] Vérifier les performances
- [ ] Configurer l'email
- [ ] Configurer la BD (si nécessaire)
- [ ] Mettre en cache les assets
- [ ] Configurer le CORS
- [ ] Configurer les en-têtes de sécurité

---

## Configuration Serveur

### Nginx

```nginx
server {
    listen 80;
    server_name gabriel-portfolio.dev;
    
    # Redirection HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name gabriel-portfolio.dev;
    
    ssl_certificate /etc/ssl/certs/gabriel.crt;
    ssl_certificate_key /etc/ssl/private/gabriel.key;
    
    # Cache assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
    
    # Proxy vers l'app
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Apache

```apache
<VirtualHost *:443>
    ServerName gabriel-portfolio.dev
    
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/gabriel.crt
    SSLCertificateKeyFile /etc/ssl/private/gabriel.key
    
    <Directory /var/www/gabriel-portfolio>
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ index.html [QSA,L]
    </Directory>
    
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

---

## Monitorage Post-Déploiement

### Métriques Clés
- Uptime (Cron, Healthchecks.io)
- Erreurs serveur (Sentry, LogRocket)
- Performances (New Relic, DataDog)
- Utilisateurs (Google Analytics)

### Alertes
- Configurer des alertes pour les erreurs
- Monitorer les performances
- Vérifier la disponibilité

### Logs
```bash
# Consulter les logs
docker logs gabriel-portfolio

# Ou avec Vercel
vercel logs

# Ou avec Netlify
netlify logs
```

---

## Rollback

Si quelque chose ne va pas:

```bash
# Vercel
vercel rollback

# Netlify
netlify deploy --alias=rollback

# Docker
docker stop gabriel-portfolio
docker run -p 3000:3000 gabriel-portfolio:previous-tag
```

---

## Maintenance Continue

### Mises à Jour de Dépendances
```bash
npm outdated
npm update
npm audit fix
```

### Surveillance des Logs
```bash
# Erreurs courantes
grep "ERROR" logs.txt

# Requêtes lentes
grep "slow" logs.txt
```

### Performance
Vérifier régulièrement avec:
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- GTmetrix

---

## Support & Problèmes

### Erreurs Courantes

**503 Service Unavailable**
- Vérifier que le serveur est en cours d'exécution
- Vérifier les logs
- Redémarrer le conteneur

**Timeout sur les formulaires**
- Vérifier l'API
- Vérifier les limites de temps
- Vérifier la connexion réseau

**Images manquantes**
- Vérifier le chemin des assets
- Vérifier les permissions
- Vérifier le CDN

### Ressources
- [Documentation SvelteKit](https://kit.svelte.dev)
- [Guide Vercel](https://vercel.com/docs)
- [Guide Netlify](https://docs.netlify.com)

---

**Dernière mise à jour**: 2026-01-30
**Auteur**: Gabriel
