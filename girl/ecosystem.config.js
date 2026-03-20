/**
 * PM2 설정 - girl 서버 (SteamDeck)
 *
 * 실행: pm2 start ecosystem.config.js
 * 로그: ../logs/qwen3.5-4B.log
 */
const LOCAL_BIN_PATH = '/home/deck/.local/bin';

module.exports = {
  apps: [
    {
      name: 'qwen3.5-4B',
      script: `${LOCAL_BIN_PATH}/koboldcpp`,
      args: [
        '--model ./models/Qwen3.5-4B-Q5_K_M.gguf',
        '--host 0.0.0.0',
        '--gpulayers 20',
        '--usevulkan 0',
        '--contextsize 16384',
        '--threads 4',
        '--smartcontext',
        '--port 58081',
      ].join(' '),
      interpreter: 'none',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      error_file: '../logs/qwen3.5-4B.log',
      out_file: '../logs/qwen3.5-4B.log',
      env_file: '.env',
      max_memory_restart: '8G',
      autorestart: true,
    },
  ],
};
