# ✅ CHECKLIST DE TESTS - Portfolio Gabriel

## Tests à Faire Avant Déploiement

### 🌐 Navigation & Liens

- [ ] Page d'accueil charge correctement
- [ ] Tous les liens de navigation fonctionnent
- [ ] Les transitions entre pages sont fluides
- [ ] Le menu mobile s'ouvre/ferme correctement
- [ ] Les liens externes s'ouvrent dans un nouvel onglet
- [ ] Le bouton retour en haut fonctionne
- [ ] Les ancres (#section) fonctionnent

### 📝 Formulaires

#### Contact
- [ ] Champs requis validés
- [ ] Email validation fonctionne
- [ ] Message minimum 10 caractères
- [ ] Message maximum 5000 caractères
- [ ] Envoi du formulaire fonctionne
- [ ] Message de succès s'affiche
- [ ] Message d'erreur en cas de problème
- [ ] Le formulaire se réinitialise après envoi

#### Traduction
- [ ] Sélection des langues fonctionne
- [ ] Bouton swap langues inversé correctement
- [ ] Validation: langues différentes
- [ ] Validation: email requis
- [ ] Validation: contenu minimum
- [ ] Envoi fonctionne
- [ ] Notification de succès

#### Feedback
- [ ] Sélection des notes (1-5)
- [ ] Commentaire validé (min 3 caractères)
- [ ] Email optionnel accepté
- [ ] Envoi fonctionne
- [ ] Notification de succès

### 🎨 Design & Layout

#### Desktop (1920px+)
- [ ] Layout centré et équilibré
- [ ] Tous les éléments visibles
- [ ] Pas de débordement horizontal
- [ ] Espacement correct
- [ ] Typographie lisible

#### Tablet (768px - 1024px)
- [ ] Grilles responsive
- [ ] Menu collapse correctement
- [ ] Images redimensionnées
- [ ] Pas d'éléments cachés
- [ ] Touches tactiles suffisamment grandes

#### Mobile (320px - 640px)
- [ ] Menu burger fonctionne
- [ ] Layout empilé
- [ ] Texte lisible
- [ ] Boutons touchables (48px min)
- [ ] Pas de scroll horizontal
- [ ] Images responsive
- [ ] Formulaires adaptés au clavier

### 🌓 Dark Mode

- [ ] Toggle dark mode fonctionne
- [ ] Persistence du thème (localStorage)
- [ ] Tous les éléments visibles en dark mode
- [ ] Texte lisible en dark mode
- [ ] Contraste suffisant
- [ ] Transitions fluides

### 🌍 Multi-Langue

- [ ] Sélecteur de langue visible
- [ ] Langue FR par défaut
- [ ] Passage à EN fonctionne
- [ ] Passage à MG fonctionne
- [ ] Persistence de la langue
- [ ] Tous les textes traduits
- [ ] Dates formatées correctement

### 📱 Responsive Images

- [ ] Images chargent correctement
- [ ] Images responsive (srcset)
- [ ] Pas d'images cassées
- [ ] Optimisation des dimensions
- [ ] Format WebP si supporté

### ⚡ Performance

- [ ] Page accueil < 2s
- [ ] Animations fluides (60fps)
- [ ] Pas de lag au scroll
- [ ] Pas de freeze pendant interaction
- [ ] Network tab propre
- [ ] Pas de requête inutile
- [ ] Cache browser utilisé

### 🔍 SEO

- [ ] Tous les `<title>` présents
- [ ] Toutes les `<meta description>` présentes
- [ ] Favicon visible
- [ ] Open Graph meta tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] robots.txt

### ♿ Accessibilité

- [ ] Tous les boutons cliquables
- [ ] ARIA labels présents
- [ ] Tab navigation fonctionne
- [ ] Focus visible
- [ ] Contraste suffisant (WCAG AA)
- [ ] Images ont alt text
- [ ] Formes ont labels
- [ ] Landmarks HTML5
- [ ] Pas de erreurs dans console

### 🔒 Sécurité

- [ ] HTTPS activé (en production)
- [ ] Pas de credentials en hardcoded
- [ ] Pas de données sensibles en localStorage
- [ ] CORS configuré
- [ ] CSP headers
- [ ] X-Frame-Options
- [ ] Pas de XSS vulnerability
- [ ] Pas de SQL injection

### 🌐 Navigateurs & Devices

#### Navigateurs
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Brave
- [ ] Opera

#### Systèmes d'Exploitation
- [ ] Windows
- [ ] macOS
- [ ] Linux
- [ ] iOS
- [ ] Android

### 🧪 Edge Cases

- [ ] Network offline (PWA ready)
- [ ] Connexion lente
- [ ] Navigateur sans JavaScript
- [ ] JavaScript désactivé
- [ ] Cookies désactivés
- [ ] Très longues chaînes de texte
- [ ] Caractères spéciaux/unicode
- [ ] Pas de localStorage
- [ ] Écran très petit (320px)
- [ ] Écran très grand (4K)

### 📊 Analytics & Monitoring

- [ ] Google Analytics configuré
- [ ] Events trackés (form submit, etc.)
- [ ] Pas d'erreurs JavaScript en console
- [ ] Pas d'erreurs 404
- [ ] Performance metrics collectés
- [ ] Error tracking fonctionne

### ✉️ Formulaires

- [ ] Emails de confirmation envoyés
- [ ] Emails reçus correctement
- [ ] Données persistées correctement
- [ ] Pas de spam/injection
- [ ] Rate limiting fonctionne
- [ ] Notification utilisateur

### 🎯 Fonctionnalités Spécifiques

#### Services
- [ ] 8 services affichés
- [ ] Descriptions complètes
- [ ] Images/icônes présentes
- [ ] Lien "En savoir plus" fonctionne

#### Traduction
- [ ] Toutes les combinaisons de langues
- [ ] FR → EN, MG
- [ ] EN → FR, MG
- [ ] MG → FR, EN

#### Feedback
- [ ] Note (1-5) stockée
- [ ] Commentaire stocké
- [ ] Email optionnel

#### Documents
- [ ] Liens de téléchargement valides
- [ ] Fichiers accessibles
- [ ] Format correct

### 🔄 Intégration Continue

- [ ] Build succède sans erreur
- [ ] Tests passent
- [ ] Linter valide
- [ ] Type check OK
- [ ] Déploiement automatique fonctionne

---

## Scores Cibles

| Métrique | Cible | Actuel |
|----------|-------|--------|
| Lighthouse Performance | 85+ | __ |
| Lighthouse Accessibility | 90+ | __ |
| Lighthouse Best Practices | 85+ | __ |
| Lighthouse SEO | 90+ | __ |
| Core Web Vitals: LCP | <2.5s | __ |
| Core Web Vitals: FID | <100ms | __ |
| Core Web Vitals: CLS | <0.1 | __ |

---

## Checklist Finale

- [ ] Tous les tests MANUELS complétés
- [ ] Audit Lighthouse réussi (85+)
- [ ] Tests cross-browser réussis
- [ ] Tests mobile réussis
- [ ] Tests d'accessibilité réussis
- [ ] Tests de performance réussis
- [ ] Tests de sécurité réussis
- [ ] Build production succède
- [ ] Documentation mise à jour
- [ ] Prêt pour déploiement ✅

---

**Auteur**: Gabriel
**Date**: 2026-01-30
**Status**: À COMPLÉTER AVANT DÉPLOIEMENT
