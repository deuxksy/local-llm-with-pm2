/**
 * PM2 설정 - eve 서버 (macOS)
 *
 * 실행: pm2 start ecosystem.config.js
 * 로그: ../logs/Qwen3-VL-4B.log
 */
require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  apps: [
    {
      name: 'Qwen3-VL-4B',
      script: `${process.env.LOCAL_BIN_PATH}/mlx_lm.server`,
      args: [
        '--model mlx-community/Qwen3-VL-4B-Instruct-4bit',
        '--host 0.0.0.0',
        '--port 58081',
      ].join(' '),
      interpreter: 'none',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      error_file: '../logs/Qwen3-VL-4B.log',
      out_file: '../logs/Qwen3-VL-4B.log',
      env_file: '.env',
      max_memory_restart: '8G',
      autorestart: true,
    },
  ],
};
