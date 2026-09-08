// Generates every derived view of content/site.ts:
//   public/llms.txt          — what crawling agents read
//   resume/resume-print.html — print source for resume/generate.sh
// and fills in any personal asset that is missing with the placeholder from
// content.example/, so a fresh clone builds without owning the real ones.
//
// Runs automatically before `npm run dev` and `npm run build`.

import { cp, mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const exists = (p) => access(p).then(() => true, () => false);

// Bootstrap: a clone has content.example/ but no content/.
if (!(await exists(join(root, 'content')))) {
  await cp(join(root, 'content.example'), join(root, 'content'), { recursive: true });
  console.log('content/ created from content.example/ — edit content/site.ts');
}

// Images live in content/ but have to be served from public/ and resume/, both
// of which are gitignored at those paths. content/ wins; content.example/ only
// fills a gap, so a clone renders something instead of a broken image.
for (const [asset, target] of [
  ['portrait.jpg', 'public/portrait.jpg'],
  ['og.png', 'public/og.png'],
  ['headshot.jpg', 'resume/headshot.jpg'],
]) {
  const dest = join(root, target);
  const own = join(root, 'content', asset);
  const src = (await exists(own)) ? own : join(root, 'content.example', asset);
  if (src !== own && (await exists(dest))) continue;
  if (!(await exists(src))) continue;
  await mkdir(dirname(dest), { recursive: true });
  await cp(src, dest);
  if (src !== own) console.log(`placeholder ${target} (replace with content/${asset})`);
}

const { site, skills, experience, projects, earlier, education, resume, llms } =
  await import(join(root, 'content/site.ts'));

// Bullets carry <em> for the web accent colour; print drops it, then escapes.
const plain = (s) =>
  s.replace(/<\/?em>/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const enDash = (s) => s.replace(/ — /g, ' – ');

// ---------------------------------------------------------------- llms.txt
const llmsTxt = `# ${site.name}

> ${llms.summary}

## About

- **Role:** ${site.role} — high-scale APIs & distributed systems
- **Location:** ${site.location}
- **Experience:** ${llms.years}
- **Core stack:** ${llms.coreStack}
- **Differentiators:** ${llms.differentiators}

## Highlights

${llms.highlights.map((h) => `- ${h}`).join('\n')}

## Links

- [Website](${site.url})
- [Résumé (PDF)](${site.url}${site.resumePdf})
- [GitHub](${site.github})
- [LinkedIn](${site.linkedin})
- [Email](mailto:${site.email})

## Projects

${projects.map((p) => `- [${p.name}](${p.href}) — ${p.description}`).join('\n')}

## Contact

${llms.contact} Best reached at ${site.email}.
`;
await writeFile(join(root, 'public/llms.txt'), llmsTxt);

// ------------------------------------------------------------ resume HTML
// Skipped inside the Docker build, which excludes resume/ (see .dockerignore).
if (await exists(join(root, 'resume'))) {
  const css = await readFile(join(root, 'resume/resume.css'), 'utf8');
  const mono = "'Geist Mono',ui-monospace,monospace";
  const serif = "'Cormorant Garamond',serif";
  const link = (href, text) =>
    `<a href="${href}" style="color:inherit; text-decoration:none;">${text}</a>`;

  const entry = (job) => `
  <div class="rz-entry">
    <div class="rz-role" style="display:flex; justify-content:space-between; align-items:baseline; gap:16px;">
      <span style="font-family:${serif}; font-style:italic; font-weight:600; font-size:15pt; color:#312B3A;">${plain(job.org)}${job.meta ? ` <span style="font-size:10pt; color:#6E6574;">(${plain(job.meta)})</span>` : ''} — ${plain(job.role)}</span>
      <span style="font-family:${mono}; font-size:8.5pt; color:#A8A2AE; white-space:nowrap;">${enDash(job.period)}</span>
    </div>
    <div style="display:grid; gap:5px; margin-top:7px;">
${job.bullets.map((b) => `      <div class="rz-bullet"><span>•</span><span>${plain(b)}</span></div>`).join('\n')}
    </div>
  </div>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${site.name} — Résumé</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
${css.trimEnd()}
</style>
</head>
<body>
  <header style="display:flex; justify-content:space-between; align-items:center; gap:22px; border-bottom:1.5px solid #312B3A; padding-bottom:15px; margin-bottom:20px;">
    <div>
      <div style="font-family:${serif}; font-style:italic; font-weight:600; font-size:34pt; line-height:1; color:#312B3A; letter-spacing:-0.01em;">${plain(site.name)}</div>
      <div style="font-size:11pt; color:#7B6A92; margin-top:8px; font-weight:500;">${plain(resume.title)}</div>
      <div style="font-family:${mono}; font-size:8.5pt; letter-spacing:0.02em; color:#6E6574; margin-top:10px;">${[
        link(`mailto:${site.email}`, site.email),
        link(site.url, site.url.replace(/^https?:\/\//, '')),
        link(site.github, site.githubLabel),
        link(site.linkedin, site.linkedinLabel),
      ].join('&nbsp;·&nbsp;')}</div>
      <div style="font-family:${mono}; font-size:8.5pt; letter-spacing:0.02em; color:#6E6574; margin-top:4px;">${plain(site.location)}</div>
    </div>
    <img src="${resume.headshot}" alt="${plain(site.name)}" style="width:0.95in; height:0.95in; border-radius:8px; object-fit:cover; border:1px solid #D9D2DE; flex-shrink:0;">
  </header>
  <p style="font-size:10pt; line-height:1.5; color:#3a3442; margin:0 0 18px;">
    ${plain(resume.summary)}
  </p>
  <h2>Skills</h2>
  <div style="display:grid; gap:6px; margin-bottom:18px;">
${skills
  .map(
    (s) =>
      `    <div style="display:grid; grid-template-columns:120px 1fr; gap:16px; font-size:9.5pt; line-height:1.45; color:#3a3442;"><span style="font-weight:600; color:#312B3A;">${plain(s.label)}</span><span>${plain(s.items.join(', '))}</span></div>`
  )
  .join('\n')}
  </div>
  <h2>Experience</h2>
${experience.map(entry).join('\n')}
  <h2>Earlier Experience</h2>
  <div style="display:grid; gap:9px; margin-bottom:18px;">
${earlier
  .map(
    (e) =>
      `    <div style="font-size:9.5pt; line-height:1.45; color:#3a3442;"><span style="font-weight:600; color:#312B3A;">${plain(e.name)} — ${plain(e.role)} (${e.years})</span> — ${plain(e.body)}</div>`
  )
  .join('\n')}
  </div>
  <h2>Education</h2>
  <div style="font-size:9.5pt; line-height:1.45; color:#3a3442;">
    ${education.map((ed) => `${plain(ed.title)} — ${plain(ed.org)}, ${ed.year}`).join('&nbsp;&nbsp;·&nbsp;&nbsp;')}
  </div>
</body>
</html>
`;
  await writeFile(join(root, 'resume/resume-print.html'), html);
}

console.log('content built: public/llms.txt, resume/resume-print.html');
