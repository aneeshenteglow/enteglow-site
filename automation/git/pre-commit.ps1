# Mandatory Isolated React / Next.js Pre-Commit Hook (Windows PowerShell)
# Executes TypeScript compiler verification (npx tsc --noEmit) before commit
[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🔍 [React Pre-Commit Hook] Validating TypeScript compilation..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if (Test-Path "package.json") {
    if (Test-Path "tsconfig.json") {
        Write-Host "⚙️ Running TypeScript check (npx tsc --noEmit)..." -ForegroundColor Yellow
        npx tsc --noEmit
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ [React Pre-Commit Hook] TypeScript compilation failed!" -ForegroundColor Red
            exit 1
        }
        Write-Host "✅ [React Pre-Commit Hook] TypeScript check passed cleanly." -ForegroundColor Green
    }
}

Write-Host "✅ [React Pre-Commit Hook] All pre-commit checks passed cleanly." -ForegroundColor Green
