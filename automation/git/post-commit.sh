#!/bin/sh
# Mandatory Isolated React Post-Commit Hook (Linux / macOS)
# Graphify AST graph update after commit

echo "=========================================="
echo "⚡ [React Post-Commit Hook] Running post-commit workflows..."
echo "=========================================="

PYTHON_BIN="python3"
if ! command -v python3 >/dev/null 2>&1; then
    if command -v python >/dev/null 2>&1; then
        PYTHON_BIN="python"
    fi
fi

$PYTHON_BIN -c "
import os, sys
from pathlib import Path

try:
    from graphify.watch import _rebuild_code
    _rebuild_code(Path('.'))
    print('[React graphify hook] Structural AST graph updated successfully.')
except Exception as exc:
    print(f'[React graphify hook] Graph rebuild notice: {exc}')
" 2>/dev/null || true

echo "✅ [React Post-Commit Hook] Completed successfully."
