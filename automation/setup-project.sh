#!/usr/bin/env bash
# React Self-Contained Project Setup Script (Linux / macOS)
set -e

NO_GRAPHIFY=false
GIT_HOOKS="off"

while [[ $# -gt 0 ]]; do
  case $1 in
    --no-graphify) NO_GRAPHIFY=true; shift ;;
    --git-hooks) GIT_HOOKS="$2"; shift 2 ;;
    *) shift ;;
  esac
done

echo "[react-setup] Initializing React project..."

if [ "$NO_GRAPHIFY" = false ]; then
    bash react/templates/graphify/graphify-setup.sh || true
fi

if [ ! -f ".gitignore" ] && [ -f "react/git-ignore/gitignore.template" ]; then
    cp react/git-ignore/gitignore.template .gitignore
fi

echo "[react-setup] React project initialized cleanly."
