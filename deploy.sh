ssh fortitude <<'ENDSSH'
  cd writing && git pull && npm i && NODE_ENV=production npm run build
ENDSSH
