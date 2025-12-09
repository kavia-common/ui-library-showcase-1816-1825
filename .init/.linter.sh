#!/bin/bash
cd /home/kavia/workspace/code-generation/ui-library-showcase-1816-1825/frontend_ui_library
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

