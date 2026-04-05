#!/bin/bash
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$($HOME/.local/share/fnm/fnm env)"
cd /Users/miguel/Code/alcalumi-web
npm run dev
