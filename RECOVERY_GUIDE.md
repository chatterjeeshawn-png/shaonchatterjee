# Portfolio Site - Git Recovery Points

## How to Use Timeline for Safe Changes

VS Code's Timeline tab (on the left sidebar) shows git commits. You can:

1. **Make changes** to your code
2. **Test them** - verify they work
3. **Create a checkpoint**: Open VS Code terminal and run:
   ```bash
   git add .
   git commit -m "Your description here"
   ```

## Quick Commit Commands

Save a checkpoint after successful changes:
```bash
git add .
git commit -m "Fixed resume styling" 
```

View all checkpoints:
```bash
git log --oneline
```

Revert to a previous checkpoint:
```bash
git reset --hard HEAD~1      # Go back 1 commit
git reset --hard <commit-id> # Go back to specific commit
```

## Current Recovery Point

Initial stable commit: 
- ✓ Resume page with skill alignment
- ✓ Project cards with GAO/STAR toggle
- ✓ Modal system for resources
- ✓ Navigation highlighting
- ✓ Home page title rotation

## Timeline View

1. Open VS Code's File Explorer
2. Click the **TIMELINE** tab at the bottom
3. You should see git commits
4. Click any commit to see what changed
5. Right-click to compare versions or revert

After refreshing VS Code, commits should appear in the Timeline!
