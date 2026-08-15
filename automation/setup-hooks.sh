#!/usr/bin/env bash
# Git Hooks Installer for Enteglow Site
set -e

echo "🔧 Installing Git Hooks for Enteglow Site..."

HOOKS_DIR="$(pwd)/.githooks"

if [ ! -d "$HOOKS_DIR" ]; then
    mkdir -p "$HOOKS_DIR"
fi

# Ensure executable permissions on all hooks
chmod +x .githooks/* 2>/dev/null || true

# Configure git to use .githooks directory
git config core.hooksPath .githooks

# Also sync to default .git/hooks if .git directory exists
if [ -d ".git/hooks" ]; then
    cp .githooks/post-commit .git/hooks/post-commit 2>/dev/null || true
    cp .githooks/pre-commit .git/hooks/pre-commit 2>/dev/null || true
    chmod +x .git/hooks/post-commit .git/hooks/pre-commit 2>/dev/null || true
fi

echo "✅ Git hooks installed successfully!"
echo "   - pre-commit: Runs 'npx tsc --noEmit' type check before commit"
echo "   - post-commit: Automatically updates Graphify graph after commit"
