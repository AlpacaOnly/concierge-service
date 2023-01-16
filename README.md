# Concierge Service

## To start application you need to install dependencies using pnpm and start it.

- `npm install -g pnpm` - install package manager
- `pnpm install` - install dependecies
- `pnpm dev` - start server in dev mode

## Git workflow

### 1. Creating a new branch

- git checkout -b [new_feature] main
- replace [new_feature] with your own branch name

### 2. After you finish with the task, pull or fetch latest version of main

- git checkout main
- git pull
- git checkout [new_feature]
- git rebase main
- git push -f

### 3. If there are conflicts after rebasing

- Fix those conflicts manually
- git add .
- git rebase --continue

### 4. Keep repeating 3rd step untill all merge conflicts resolved and when you finished just push everything to your branch

# Github workrflow

### 1. Create a new pull request

### 2. Resolve conflicts if there is

### 3. Wait reviewers to approve changes
