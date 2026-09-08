// Génère la valeur à mettre dans la variable d'env ADMIN_PASSWORD_HASH.
// Usage: node scripts/hash-password.mjs "mon-mot-de-passe"
import { randomBytes, scryptSync } from 'node:crypto';

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hash-password.mjs "mon-mot-de-passe"');
  process.exit(1);
}

const salt = randomBytes(16).toString('hex');
const hash = scryptSync(password, salt, 64).toString('hex');
console.log(`${salt}:${hash}`);
