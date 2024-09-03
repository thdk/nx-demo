## Create nx workspace

```sh
npx create-nx-workspace@latest nx-demo

Need to install the following packages:
create-nx-workspace@19.6.4
Ok to proceed? (y)


 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Which stack do you want to use? · none
✔ Package-based monorepo, integrated monorepo, or standalone project? · integrated
✔ Which CI provider would you like to use? · github

 NX   Creating your v19.6.4 workspace.

✔ Installing dependencies with npm
✔ Successfully created the workspace: nx-demo.
✔ Nx Cloud has been set up successfully
✔ CI workflow has been generated successfully

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 NX   Nx CLI is not installed globally.

This means that you will have to use "npx nx" to execute commands in the workspace.
Run "npm i -g nx" to be able to execute command directly.


 NX   Your CI setup is almost complete.

Finish it by visiting: https://cloud.nx.app/connect/4bBQtKTPG8



—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 NX   First time using Nx? Check out this interactive Nx tutorial.

https://nx.dev/getting-started/tutorials/npm-workspaces-tutorial

```

> Package-based monorepo, integrated monorepo, or standalone project? · integrated

```sh
cd nx-demo
```

## Install plugins

See a [list of official packages](https://nx.dev/nx-api#official-packages-reference)

```sh
npx nx add @nx/remix
npx nx add @nx/node
npx nx add @nx/nest
```

## Generate applications

```sh
npx nx g @nx/remix:application --directory apps/remix-app --name remix-app --projectNameAndRootFormat as-provided --unitTestRunner vitest --e2eTestRunner playwright
```

## Navigate the nx workspace

```sh
npx nx show project remix-app
```

> nx run [project][:target][:configuration]

```sh
npx nx run remix-app:dev
```

## Generate libraries

```sh
# use vite / vitest when prompted
npx nx g @nx/js:lib api-client
```
