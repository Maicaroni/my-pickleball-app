const fs = require('fs');

const filePath = 'src/pages/Profile.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log('Analyzing JSX structure around the error...\n');

// Find the details section
let detailsStart = -1;
let detailsEnd = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("tournamentDetailTab === 'details'")) {
    detailsStart = i;
    break;
  }
}

// Find the end of details section (where guidelines starts)
for (let i = detailsStart + 1; i < lines.length; i++) {
  if (lines[i].includes("tournamentDetailTab === 'guidelines'")) {
    detailsEnd = i - 1;
    break;
  }
}

console.log(`Details section: lines ${detailsStart + 1} to ${detailsEnd + 1}`);

// Analyze div structure in the details section
let divStack = [];
let fragmentStack = [];

for (let i = detailsStart; i <= detailsEnd; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  // Track React fragments
  if (line.includes('<>')) {
    fragmentStack.push(lineNum);
    console.log(`Line ${lineNum}: Fragment opened - ${line.trim()}`);
  }
  if (line.includes('</>')) {
    const openFragment = fragmentStack.pop();
    console.log(`Line ${lineNum}: Fragment closed (opened at ${openFragment}) - ${line.trim()}`);
  }
  
  // Track div tags
  const openDivs = (line.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (line.match(/<\/div>/g) || []).length;
  
  for (let j = 0; j < openDivs; j++) {
    divStack.push(lineNum);
  }
  
  for (let j = 0; j < closeDivs; j++) {
    const openDiv = divStack.pop();
    if (!openDiv) {
      console.log(`Line ${lineNum}: EXTRA closing div - ${line.trim()}`);
    }
  }
  
  if (openDivs > 0 || closeDivs > 0) {
    console.log(`Line ${lineNum}: +${openDivs} -${closeDivs} divs, stack depth: ${divStack.length} - ${line.trim()}`);
  }
}

console.log(`\nFinal div stack depth: ${divStack.length}`);
if (divStack.length > 0) {
  console.log('Unclosed divs opened at lines:', divStack);
}

console.log(`\nFinal fragment stack depth: ${fragmentStack.length}`);
if (fragmentStack.length > 0) {
  console.log('Unclosed fragments opened at lines:', fragmentStack);
}