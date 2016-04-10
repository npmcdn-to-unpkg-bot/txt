ssh fortitude <<'ENDSSH'
  cd writing && git pull && npm i && npm run build
ENDSSH
