# Playwright Component Testing demos

Demos pour le talk "Craftez vos composants front avec Playwright"

How to setup component testing with Playwright:
1. Init Playwright with `npm init playwright`
2. Set up Playwright gallery and config for component testing via agents or with a lib. I used [playwright-gallery](https://www.npmjs.com/package/playwright-gallery)
```bash
npm install --save-dev playwright-gallery
npx playwright-gallery init
```
3. Write a [story](src/Counter.story.tsx) and a [test](src/Counter.spec.tsx)
4. Run tests
```bash
npm test
```

[Official documentation](https://playwright.dev/docs/test-components)

## Demo 1 - First Playwright component test

[Demo1.spec.tsx](./src/Demo1.spec.tsx)

[Demo1-annotated.spec.tsx](./src/Demo1-annotated.spec.tsx)

[Fetch.story.tsx](./src/Fetch.story.tsx)

Very similar to [Testing Library example](https://testing-library.com/docs/react-testing-library/example-intro/#quickstart), it shows that you are probably familiar with Playwright !

## Demo 2 - Live-coding

Let's code a counter with the help of [Playwright VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

[Counter.spec.tsx](./src/Counter.spec.tsx)

[Counter.tsx](./src/Counter.tsx)

We can make TDD !
