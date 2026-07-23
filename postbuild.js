import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'dist', 'index.html');
const aspxPath = path.join(__dirname, 'dist', 'SharePointPage.aspx');

try {
  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Add C# ASPX directive to the very top
    // This instructs SharePoint to parse and render it as an execution page rather than downloading it
    const aspxHeader = `<%@ Page Language="C#" %>\n`;
    content = aspxHeader + content;
    
    fs.writeFileSync(aspxPath, content, 'utf8');
    console.log('\x1b[32m%s\x1b[0m', '✓ Generated SharePointPage.aspx in dist folder.');
  } else {
    console.error('Error: dist/index.html not found. Run npm run build first.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error during postbuild script:', error);
  process.exit(1);
}
