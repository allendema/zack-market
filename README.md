# Zack-Market

## Developing
This project uses [bun](https://bun.com) as package manager and runner.
Once you've installed dependencies with `bun install`, start a development server:

```bash
bun run --bun dev
```
No need for restarts!

## Design Principles
See [./.design.md](./.design.md)

## General Inspirations
Website: [https://www.mcmaster.com/](https://www.mcmaster.com/)
Javascript: [https://sebhastian.com/](https://sebhastian.com/)
Svelte Concepts:
    - State [https://joyofcode.xyz/how-to-share-state-in-svelte-5](https://joyofcode.xyz/how-to-share-state-in-svelte-5)
    - sveltebyexample - State [https://sveltebyexample.com/state/](https://sveltebyexample.com/state/)

## TODOs
- 404 Page [https://www.404s.design/](https://www.404s.design/)
- Minimal Caching [https://github.com/sveltejs/kit/issues/3642#issuecomment-1031640046](https://github.com/sveltejs/kit/issues/3642#issuecomment-1031640046)
- Make Linting/Formatting possible when using Bun (instead of node.js) and Eslint (+Prettier?).
- Fix running bun adapter [https://github.com/gornostay25/svelte-adapter-bun](https://github.com/gornostay25/svelte-adapter-bun)
- Fix ProductCard height/width in route: http://localhost:5173/alnatura/brand/alnatura
