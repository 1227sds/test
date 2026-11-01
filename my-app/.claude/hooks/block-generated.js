// PreToolUse: node_modules/.next 아래 파일 수정을 차단합니다.
// 종료 코드 2 = 도구 호출 차단, stderr 내용은 Claude에게 전달됩니다.
const fs = require('fs');

const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
const file = (input.tool_input?.file_path || '').replace(/\\/g, '/');

if (/(^|\/)(node_modules|\.next)\//.test(file)) {
  process.stderr.write(
    `차단됨: ${file} 은(는) 설치/빌드 산출물 디렉터리입니다. 직접 수정하지 마세요.\n` +
      '의존성 변경은 package.json을 수정한 뒤 설치 명령으로 처리하세요.\n',
  );
  process.exit(2);
}

process.exit(0);
