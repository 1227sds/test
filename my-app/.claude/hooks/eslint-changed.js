// PostToolUse: 수정된 .ts/.tsx 파일만 ESLint로 검사합니다.
// 오류가 있으면 종료 코드 2와 stderr로 결과를 Claude에게 돌려줍니다.
const fs = require('fs');
const { execFileSync } = require('child_process');

const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
const file = input.tool_input?.file_path || '';
const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

if (!/\.(ts|tsx)$/.test(file)) process.exit(0);

try {
  execFileSync('npx', ['eslint', file], {
    cwd: projectDir,
    stdio: 'pipe',
    shell: true, // Windows에서 npx는 셸을 통해 실행해야 합니다.
    timeout: 55000,
  });
  process.exit(0);
} catch (err) {
  const output = `${err.stdout || ''}${err.stderr || ''}`.trim();
  process.stderr.write(`ESLint 오류 (${file}):\n${output || err.message}\n`);
  process.exit(2);
}
