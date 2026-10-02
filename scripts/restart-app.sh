#!/usr/bin/env bash
# Restart aplikacji BeanShop w Codespace (przywraca dane startowe).
pkill -f "tsx src/server.ts" 2>/dev/null
sleep 1
nohup bash -c 'ENABLE_TEST_API=1 npm start' > /tmp/beanshop.log 2>&1 &
for i in $(seq 1 20); do
  if curl -s http://localhost:3000/api/health > /dev/null; then
    echo "BeanShop działa: http://localhost:3000 (branch: $(git branch --show-current))"
    exit 0
  fi
  sleep 0.5
done
echo "Aplikacja nie wystartowała. Log: /tmp/beanshop.log"
exit 1
