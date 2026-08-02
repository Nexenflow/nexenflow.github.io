import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '../../phase 8 - special pages');
const outputDir = path.resolve(__dirname, '../public/pdfs');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Lucide SVG Icons embedded as raw strings
const SVG_ICONS = {
    activity: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#476A33" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#476A33" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    zap: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D39D4C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#476A33" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 12 2 2 4-4"/></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#476A33" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#476A33" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
};

const files = [
    // Standard Official Versions
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2_resume.md'),
        outputName: 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2_resume.pdf',
        title: "Feuille d'Anesthésie Informatisée — Fiche Résumée v2.0",
        category: "HealthTech — Bloc Opératoire & SSPI",
        isVisual: false
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2.md'),
        outputName: 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2.pdf',
        title: "Feuille d'Anesthésie Informatisée — Fiche Détaillée v2.0",
        category: "HealthTech — Spécifications Complètes",
        isVisual: false
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2_resume.md'),
        outputName: 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2_resume.pdf',
        title: "Feuille de Réanimation Informatisée — Fiche Résumée v2.0",
        category: "HealthTech — Soins Intensifs & 24/7",
        isVisual: false
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2.md'),
        outputName: 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2.pdf',
        title: "Feuille de Réanimation Informatisée — Fiche Détaillée v2.0",
        category: "HealthTech — Spécifications Complètes",
        isVisual: false
    },

    // Visual Illustrated Versions (with Lucide SVG icons & enhanced visual cards)
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2_resume.md'),
        outputName: 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2_resume_visuelle.pdf',
        title: "Feuille d'Anesthésie Informatisée — Fiche Résumée Visuelle v2.0",
        category: "HealthTech — Version Illustrée",
        isVisual: true
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2.md'),
        outputName: 'HealthTech_Feuille_Anesthesie_Fiche_Technique_v2_visuelle.pdf',
        title: "Feuille d'Anesthésie Informatisée — Fiche Détaillée Visuelle v2.0",
        category: "HealthTech — Version Illustrée",
        isVisual: true
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2_resume.md'),
        outputName: 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2_resume_visuelle.pdf',
        title: "Feuille de Réanimation Informatisée — Fiche Résumée Visuelle v2.0",
        category: "HealthTech — Version Illustrée",
        isVisual: true
    },
    {
        input: path.join(baseDir, 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2.md'),
        outputName: 'HealthTech_Feuille_Reanimation_Fiche_Technique_v2_visuelle.pdf',
        title: "Feuille de Réanimation Informatisée — Fiche Détaillée Visuelle v2.0",
        category: "HealthTech — Version Illustrée",
        isVisual: true
    }
];

function generateHtmlContent(title, category, rawMarkdown, isVisual = false) {
    let md = rawMarkdown.replace(/^---[\s\S]*?---\n/, '');
    let htmlBody = marked.parse(md);

    if (isVisual) {
        // Enhance list items with SVG check icons
        htmlBody = htmlBody.replace(/<li>/g, `<li class="v-list-item"><span class="v-check-icon">${SVG_ICONS.check}</span><span>`);
        htmlBody = htmlBody.replace(/<\/li>/g, `</span></li>`);

        // Enhance tables with styled header badges
        htmlBody = htmlBody.replace(/<th>/g, `<th><span class="v-th-badge">`);
        htmlBody = htmlBody.replace(/<\/th>/g, `</span></th>`);
    }

    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        @page {
            size: A4 portrait;
            margin: 1.6cm 1.3cm 1.6cm 1.3cm;
        }

        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #181818;
            background: #ffffff;
            line-height: 1.55;
            font-size: 9pt;
            margin: 0;
            padding: 0;
        }

        /* ── CORPORATE HEADER ── */
        .pdf-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: ${isVisual ? '3px solid #476A33' : '2.5px solid #476A33'};
            padding-bottom: 12px;
            margin-bottom: 18px;
        }

        .pdf-brand {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .pdf-brand-logo {
            width: 38px;
            height: 38px;
            background: #364022;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DBCC63;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 16pt;
            box-shadow: ${isVisual ? '0 2px 6px rgba(54,64,34,0.2)' : 'none'};
        }

        .pdf-brand-text h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 14pt;
            font-weight: 800;
            color: #364022;
            margin: 0;
            letter-spacing: -0.02em;
            text-transform: uppercase;
        }

        .pdf-brand-text p {
            font-size: 7.5pt;
            color: #476A33;
            margin: 0;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

        .pdf-meta {
            text-align: right;
        }

        .pdf-meta-badge {
            display: inline-block;
            background: ${isVisual ? 'rgba(219, 204, 99, 0.25)' : 'rgba(71, 106, 51, 0.1)'};
            color: ${isVisual ? '#364022' : '#476A33'};
            font-size: 7.5pt;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            margin-bottom: 3px;
            border: ${isVisual ? '1px solid rgba(219, 204, 99, 0.5)' : 'none'};
        }

        .pdf-meta-date {
            font-size: 7.5pt;
            color: #666666;
            margin: 0;
        }

        /* ── TYPOGRAPHY ── */
        h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 15pt;
            font-weight: 800;
            color: #364022;
            margin-top: 0;
            margin-bottom: 10px;
            letter-spacing: -0.02em;
        }

        h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 11.5pt;
            font-weight: 700;
            color: #476A33;
            border-left: 3.5px solid #476A33;
            padding-left: 8px;
            margin-top: 16px;
            margin-bottom: 8px;
            break-after: avoid;
        }

        h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 9.5pt;
            font-weight: 600;
            color: #181818;
            margin-top: 12px;
            margin-bottom: 6px;
            break-after: avoid;
        }

        p {
            margin-top: 0;
            margin-bottom: 8px;
            color: #333333;
        }

        strong {
            color: #181818;
            font-weight: 600;
        }

        hr {
            border: none;
            border-top: 1px solid #eeeeee;
            margin: 14px 0;
        }

        /* ── VISUAL EDITION STYLES ── */
        .v-list-item {
            display: flex;
            align-items: flex-start;
            gap: 6px;
            list-style: none;
            margin-bottom: 5px;
        }

        .v-check-icon {
            margin-top: 2px;
            flex-shrink: 0;
            display: inline-flex;
        }

        ul {
            padding-left: ${isVisual ? '0' : '18px'};
        }

        /* ── TABLES ── */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0 14px 0;
            font-size: 8.5pt;
            break-inside: avoid;
        }

        th {
            background: #476A33;
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            text-align: left;
            padding: 6px 10px;
            border: 1px solid #476A33;
            font-size: 8pt;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        td {
            padding: 6px 10px;
            border: 1px solid #e0e0e0;
            color: #333333;
            vertical-align: top;
        }

        tr:nth-child(even) td {
            background: #f9fbf8;
        }

        /* ── CODE & ARCHITECTURE BLOCK ── */
        pre {
            background: #f4f6f4;
            border: 1px solid #d5ded2;
            border-left: 4px solid #476A33;
            border-radius: 6px;
            padding: 10px 14px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 7.5pt;
            line-height: 1.4;
            color: #181818;
            overflow-x: auto;
            margin: 10px 0;
            break-inside: avoid;
        }

        code {
            font-family: 'Courier New', Courier, monospace;
            background: #f4f4f4;
            padding: 1px 4px;
            border-radius: 3px;
            font-size: 8pt;
        }

        /* ── CORPORATE FOOTER ── */
        .pdf-footer {
            margin-top: 24px;
            padding-top: 10px;
            border-top: 1px solid #dddddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 7pt;
            color: #777777;
        }

        .pdf-footer-legal strong {
            color: #476A33;
        }
    </style>
</head>
<body>
    <div class="pdf-header">
        <div class="pdf-brand">
            <div class="pdf-brand-logo">C</div>
            <div class="pdf-brand-text">
                <h1>CACTUS® INFORMATIQUE</h1>
                <p>Solutions d'Informatisation & IoT Médical</p>
            </div>
        </div>
        <div class="pdf-meta">
            <div class="pdf-meta-badge">${category}</div>
            <p class="pdf-meta-date">Version 2.0 — ${isVisual ? 'Édition Visuelle & Illustrée' : 'Édition Officielle PDF'}</p>
        </div>
    </div>

    <main>
        ${htmlBody}
    </main>

    <div class="pdf-footer">
        <div class="pdf-footer-legal">
            <strong>CACTUS INFORMATIQUE</strong> — Lotissement Hliwa Rue 8 N° 69 Ain Sebaa Casablanca — ICE 000210663000082
        </div>
        <div>
            www.cactus.ma | contact@cactus.net.ma
        </div>
    </div>
</body>
</html>`;
}

async function buildPdfs() {
    console.log('🚀 Démarrage de la génération des PDF (Standard + Visuels Illustrés)...');
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const item of files) {
        if (!fs.existsSync(item.input)) {
            console.warn(`⚠️ Fichier MD introuvable : ${item.input}`);
            continue;
        }

        const rawMd = fs.readFileSync(item.input, 'utf-8');
        const html = generateHtmlContent(item.title, item.category, rawMd, item.isVisual);

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });

        const outputPath = path.join(outputDir, item.outputName);
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1.4cm',
                bottom: '1.4cm',
                left: '1.2cm',
                right: '1.2cm'
            }
        });

        console.log(`✅ PDF généré avec succès : ${item.outputName}`);
        await page.close();
    }

    await browser.close();
    console.log('🎉 Tous les 8 PDF Fiches Techniques (Standards & Visuels) ont été générés dans public/pdfs/');
}

buildPdfs().catch(err => {
    console.error('❌ Erreur lors de la génération des PDF :', err);
    process.exit(1);
});
