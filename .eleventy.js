module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/scripts");

    eleventyConfig.setTemplateFormats([
        "njk",
        "md",
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