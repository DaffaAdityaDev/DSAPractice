function generateHashtag (str) {
    if (str.trim() === '') {
        return false;
    }

    const string = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const hashtag = `#${string}`;

    return hashtag.length > 140 ? false : hashtag;
}

console.log(generateHashtag('Do We have A Hashtag')); // #DoWeHaveAHashtag
