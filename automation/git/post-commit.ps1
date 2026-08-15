# Mandatory Isolated React Post-Commit Hook (Windows PowerShell)
# Graphify AST graph update after commit
[CmdletBinding()]
param()

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "⚡ [React Post-Commit Hook] Running post-commit workflows..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

$pythonBin = "python"
if (Get-Command "python3" -ErrorAction SilentlyContinue) {
    $pythonBin = "python3"
}

$code = @"
import os, sys
from pathlib import Path
try:
    from graphify.watch import _rebuild_code
    _rebuild_code(Path('.'))
    print('[React graphify hook] Structural AST graph updated successfully.')
except Exception as exc:
    print(f'[React graphify hook] Graph rebuild notice: {exc}')
"@

& $pythonBin -c $code 2>$null

Write-Host "✅ [React Post-Commit Hook] Completed successfully." -ForegroundColor Green
