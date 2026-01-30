# 🚀 GUIDE D'ACCÈS RAPIDE - Portfolio Gabriel

## 📍 Où Trouver Quoi

### 🔧 Configuration

| Besoin | Fichier | Description |
|--------|---------|-------------|
| Config générale | `src/lib/config.ts` | Paramètres du site |
| Constantes | `src/lib/constants.ts` | Valeurs globales |
| Utilitaires | `src/lib/utils.ts` | Fonctions utiles |
| Variables d'env | `.env.production` | Config production |

### 🌍 Multi-Langue

| Besoin | Fichier | Action |
|--------|---------|--------|
| Ajouter langue | `src/lib/i18n.ts` | Ajouter objet traductions |
| Utiliser traductions | Tout `.svelte` | `import { language }` |
| Sélecteur | `src/lib/LanguageSwitcher.svelte` | Composant réutilisable |
| Ajouter string | `src/lib/i18n.ts` | Ajouter dans tous les langues |

### 📝 Formulaires

| Formulaire | Fichier | Validation |
|-----------|---------|-----------|
| Contact | `src/routes/contact/+page.svelte` | `src/lib/validation.ts` |
| Traduction | `src/lib/TranslationForm.svelte` | Email, contenu, langues |
| Feedback | `src/lib/FeedbackForm.svelte` | Note (1-5), commentaire |
| API | `src/routes/contact/+server.ts` | POST /contact |

### 🎨 Composants

```
src/lib/
├── Navbar.svelte            # Navigation principale
├── Footer.svelte            # Pied de page
├── LanguageSwitcher.svelte  # Sélecteur langue
├── FeedbackForm.svelte      # Formulaire feedback
└── TranslationForm.svelte   # Formulaire traduction
```

### 📄 Pages

```
src/routes/
├── +page.svelte          # Accueil
├── about/+page.svelte    # À propos
├── projects/+page.svelte # Projets
├── services/+page.svelte # Services (8)
├── contact/
│   ├── +page.svelte      # Contact + sections
│   └── +server.ts        # API
```

### 📚 Documentation

| Document | Contenu |
|----------|---------|
| `SUMMARY.md` | Résumé complet des changements |
| `UPDATES.md` | Liste détaillée des mises à jour |
| `DEPLOYMENT.md` | Guide de déploiement complet |
| `TESTING.md` | Checklist de tests |
| `README.md` | Infos générales du projet |

---

## 🎯 Tâches Courantes

### Ajouter une Nouvelle Langue

1. **Modifier `src/lib/i18n.ts`**:
```typescript
const fr = { ... };
const en = { ... };
const mg = { ... };
const xx = { ... };  // Nouvelle langue

const translations = { fr, en, mg, xx };
```

2. **Ajouter au sélecteur** (`LanguageSwitcher.svelte`):
```typescript
const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'mg', label: 'Malagasy', flag: '🇲🇬' },
  { code: 'xx', label: 'New Lang', flag: '🏴' }  // New
];
```

### Ajouter un Nouveau Service

1. **Modifier `src/routes/services/+page.svelte`**:
```typescript
const services = [
  // ... existing
  {
    title: "New Service",
    description: "Description...",
    icon: "🎯",
    color: "from-color-500 to-color-600",
    // ... autres propriétés
  }
];
```

### Connecter à une Base de Données

1. **Installer le driver** (exemple MongoDB):
```bash
npm install mongodb
```

2. **Créer `src/lib/db.ts`**:
```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.PRIVATE_DB_URL);
export const db = client.db('portfolio');
```

3. **Modifier `src/routes/contact/+server.ts`**:
```typescript
import { db } from '$lib/db';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  
  // Sauvegarder en BD
  await db.collection('contacts').insertOne({
    ...data,
    timestamp: new Date()
  });
};
```

### Configurer Email (Nodemailer)

1. **Installer**:
```bash
npm install nodemailer
```

2. **Modifier `src/routes/contact/+server.ts`**:
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.PRIVATE_EMAIL,
    pass: process.env.PRIVATE_EMAIL_PASSWORD
  }
});

// Dans POST:
await transporter.sendMail({
  from: data.email,
  to: 'contact@gabriel.dev',
  subject: data.subject,
  text: data.message
});
```

### Ajouter Google Analytics

1. **Ajouter à `svelte.config.js`**:
```javascript
export const csr = {
  preload: ['/ga.js']
};
```

2. **Ajouter script dans `src/routes/+layout.svelte`**:
```svelte
<script>
  import { dev } from '$app/environment';
  
  if (!dev) {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args) { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  }
</script>
```

---

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev              # Démarrer serveur dev
npm run check           # Vérifier code
npm run check:watch     # Watch mode

# Build
npm run build           # Build production
npm run preview         # Prévisualiser build

# Nettoyage
rm -rf .svelte-kit node_modules
npm install
npm run build
```

---

## 🔐 Variables d'Environnement

### Development (`.env`)
```env
PUBLIC_SITE_URL=http://localhost:5173
```

### Production (`.env.production`)
```env
PUBLIC_SITE_URL=https://gabriel-portfolio.dev
PUBLIC_EMAIL=contact@gabriel.dev
PRIVATE_DB_URL=mongodb://...
PRIVATE_EMAIL_PASSWORD=...
PRIVATE_SENDGRID_KEY=...
```

---

## 📞 Support

### Erreurs Courantes

**Erreur: "Cannot find module"**
```bash
npm install
npm run build
```

**Mode sombre ne persiste pas**
- Vérifier localStorage dans DevTools
- Vérifier `src/routes/+layout.svelte`

**Formulaires ne s'envoient pas**
- Vérifier API endpoint
- Vérifier console pour erreurs
- Vérifier network tab

**Traductions manquantes**
- Vérifier `src/lib/i18n.ts`
- Vérifier toutes les langues ont la clé
- Redémarrer serveur dev

### Resources

- [Docs SvelteKit](https://kit.svelte.dev)
- [Docs Tailwind](https://tailwindcss.com)
- [Docs TypeScript](https://www.typescriptlang.org)
- [Docs Svelte](https://svelte.dev)

---

## 🎯 Checklist Rapide

Avant chaque commit:
- [ ] `npm run check` réussit
- [ ] Pas d'erreurs console
- [ ] Code formaté
- [ ] Types TypeScript OK
- [ ] Tests manuels OK

Avant déploiement:
- [ ] `npm run build` réussit
- [ ] `npm run preview` fonctionne
- [ ] Tests complets réussis
- [ ] Documentation mise à jour
- [ ] `.env.production` configuré

---

**Dernière mise à jour**: 2026-01-30
**Auteur**: Gabriel
**Version**: 1.0.0 ✅
