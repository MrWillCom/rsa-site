module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("scripts");

    eleventyConfig.setTemplateFormats([
        "njk",
        "css",
        "png",
    ]);

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
        markdownTemplateEngine: 'njk',
    }
}