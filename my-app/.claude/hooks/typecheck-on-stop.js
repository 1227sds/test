// Stop: TypeScript/TSX 변경이 있을 때만 `tsc --noEmit`을 실행합니다.
// 타입 오류가 있으면 종료 코드 2로 Claude가 계속 고치도록 합니다.
// stop_hook_active가 true이면(이미 한 번 막은 뒤) 무한 반복을 피하려고 통과시키고 경고만 남깁니다.
const fs = require('fs');
const { execFileSync, execSync } = require('child_process');

const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { cwd: projectDir, stdio: 'pipe', shell: true, ...opts });

// 1) 변경된 TS 파일이 있는지 확인 (없으면 tsc를 돌릴 이유가 없음)
let changed = '';
try {
  changed = execSync('git status --porcelain', { cwd: projectDir, stdio: 'pipe' }).toString();
} catch {
  process.exit(0); // git이 없으면 검사 생략
}
const hasTsChange = changed
  .split('\n')
  .some((line) => /\.(ts|tsx)$/.test(line.trim()));
if (!hasTsChange) process.exit(0);

// 2) 타입 검사
try {
  run('npx', ['tsc', '--noEmit'], { timeout: 170000 });
  process.exit(0);
} catch (err) {
  const output = `${err.stdout || ''}${err.stderr || ''}`.trim();
  const message = `타입 오류가 남아 있습니다:\n${output || err.message}`;

  if (input.stop_hook_active) {
    process.stderr.write(`경고: ${message}\n`);
    process.exit(0);
  }
  process.stderr.write(message + '\n');
  process.exit(2);
}
