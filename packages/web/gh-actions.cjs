var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mdegraw/yourproject.git',
        user: {
            name: 'mdegraw',
            email: 'michael.degraw@protonmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)