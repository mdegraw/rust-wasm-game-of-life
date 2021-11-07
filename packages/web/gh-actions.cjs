var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mdegraw/rust-wasm-game-of-life.git',
        user: {
            name: 'mdegraw',
            email: 'michael.degraw@protonmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)