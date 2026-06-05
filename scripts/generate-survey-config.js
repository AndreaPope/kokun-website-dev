import { writeFileSync, existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env if present (local dev); on Netlify, env vars are already in process.env
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY must be set in .env or Netlify environment variables.');
  process.exit(1);
}

writeFileSync(
  'public/survey/carejourney/config.js',
  `const SUPABASE_CONFIG = {\n  url: "${url}",\n  anonKey: "${anonKey}"\n};\n`
);

console.log('Generated public/survey/carejourney/config.js');
