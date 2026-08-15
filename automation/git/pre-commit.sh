#!/bin/sh
# Mandatory Isolated React / Next.js Pre-Commit Hook (Linux / macOS)
# Executes TypeScript compiler verification (npx tsc --noEmit) before commit

echo "=========================================="
echo "🔍 [React Pre-Commit Hook] Validating TypeScript compilation..."
echo "=========================================="

if [ -f "package.json" ]; then
    if [ -f "tsconfig.json" ] && command -v npx >/dev/null 2>&1; then
        echo "⚙️ Running TypeScript check (npx tsc --noEmit)..."
        npx tsc --noEmit
        if [ $? -ne 0 ]; then
            echo "❌ [React Pre-Commit Hook] TypeScript compilation failed! Fix type errors before committing."
            exit 1
        fi
        echo "✅ [React Pre-Commit Hook] TypeScript compilation check passed cleanly."
    fi
fi

echo "✅ [React Pre-Commit Hook] All pre-commit checks passed cleanly."
