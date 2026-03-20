/**
 * PM2 Logrotate 설정: ./pm2-logrotate.json
 * 적용: pm2 install pm2-logrotate 후 설정값 적용
 */
module.exports = {
  apps: [
    {
      name: 'qwen3-vl-4b',
      script: '/Users/crong/.local/bin/mlx_lm.server',
      args: [
        '--model mlx-community/Qwen3-VL-4B-Instruct-4bit',
        '--host 0.0.0.0',
        '--port 58081',
      ].join(' '),
      interpreter: 'none',

      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
      error_file: './logs/qwen3-vl-4b.log',
      out_file: './logs/qwen3-vl-4b.log',
      env_file: '.env',
      max_memory_restart: '8G',
      autorestart: true,
    },
  ],
};
