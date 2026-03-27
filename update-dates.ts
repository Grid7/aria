import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('posts') && f.endsWith('.ts'));

// Generate 39 dates
const dates: string[] = [];

// 19 posts before Mar 27 (e.g., Mar 17 to Mar 26, 2 per day)
for (let i = 0; i < 19; i++) {
  const day = Math.floor(i / 2) + 17;
  const hour = 10 + (i % 2) * 5 + Math.floor(Math.random() * 3); // 10-12 or 15-17
  const minute = Math.floor(Math.random() * 60);
  const dateStr = `2026-03-${day.toString().padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00Z`;
  dates.push(dateStr);
}

// 20 posts from Mar 27 to Apr 5 (10 days, 2 per day)
for (let i = 0; i < 20; i++) {
  const dayOffset = Math.floor(i / 2);
  const date = new Date(Date.UTC(2026, 2, 27 + dayOffset)); // Month is 0-indexed, so 2 = March
  const hour = 8 + (i % 2) * 8 + Math.floor(Math.random() * 4); // 8-11 or 16-19
  const minute = Math.floor(Math.random() * 60);
  date.setUTCHours(hour, minute, 0, 0);
  dates.push(date.toISOString().replace('.000Z', 'Z'));
}

// Sort dates descending so newer posts have higher IDs or whatever?
// Actually, let's just assign them to posts in the order we find them.
let dateIndex = 0;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/date:\s*'[^']+'/g, () => {
    if (dateIndex < dates.length) {
      const newDate = dates[dateIndex++];
      return `date: '${newDate}'`;
    }
    return `date: '2026-01-01T00:00:00Z'`;
  });
  
  fs.writeFileSync(filePath, content);
}

console.log(`Updated ${dateIndex} dates.`);
