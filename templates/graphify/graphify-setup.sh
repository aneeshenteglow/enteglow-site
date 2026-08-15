#!/usr/bin/env bash
# React Graphify Setup Script
set -e
echo "[react-graphify-setup] Checking environment..."
PYTHON_BIN="python3"
if ! command -v python3 >/dev/null 2>&1; then PYTHON_BIN="python"; fi
if ! "$PYTHON_BIN" -c "import graphify" >/dev/null 2>&1; then
    "$PYTHON_BIN" -m pip install graphify-code
fi
if [ ! -f ".graphifyignore" ] && [ -f "react/templates/graphify/.graphifyignore" ]; then
    cp "react/templates/graphify/.graphifyignore" .graphifyignore
fi
if command -v graphify >/dev/null 2>&1; then graphify .; fi
echo "[react-graphify-setup] React graph ready."
