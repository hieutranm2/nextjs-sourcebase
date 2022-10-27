<h1 align="center">介護SASS</h1>

## Before You Begin
- Install **Node.js 16 LTS**
- Install **Yarn**
- Install **Git**
- Install **Visual Studio Code** and all recommended extensions

## Project Structure
```
public
   |-- favicon.ico
   |-- images
       |-- vercel.svg
   |-- storybook
src
   |-- components
   |   |-- button
   |   |   |-- Button.module.css
   |   |   |-- Button.stories.tsx
   |   |   |-- Button.tsx
   |-- pages
   |   |-- api
   |   |   |-- hello.ts
   |   |-- login
   |   |   |-- Login.module.css
   |   |   |-- index.page.tsx
   |   |-- index.page.tsx
   |   |-- _app.page.tsx
   |   |-- _document.page.tsx
   |-- styles
   |   |-- Home.module.css
   |   |-- globals.css
.env.local
```
## Getting Started
1. Install all dependencies with Yarn

```bash
$ yarn install
```

2. Set up `.env.local`

```bash
$ cp .env.local.example .env.local
```

3. Run the development server

```bash
$ yarn dev

# or you can specify your development port as below:
$ yarn dev -p YOUR_PORT
```

4. **(Optional)** Run Storybook on the local

```bash
$ yarn storybook
```

## Production Build

1. Build Storybook

```bash
$ yarn build-storybook
```

2. Build Next application

```bash
$ yarn build
```

3. Try running the production on the local

```bash
$ yarn start
```

## Testing

You can easily run the tests as below:

**Note: you need to stop running Storybook development first*

```bash
$ yarn test
```

Also, you need to notice about visual testing when it's failed. If you actively make a change that cause the testing to failed, let update snapshot with below steps:

```bash
# 1. Run Storybook on the local
$ yarn storybook

# 2. Run script to update snapshot
$ yarn test-visual:updateSnapshot
```

If not, please try finding the problem and resolve it.
