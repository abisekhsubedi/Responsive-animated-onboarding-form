module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-font-magician")({
            foundries: ['google'],
            hosted: ['./src/fonts'],
            aliases: {
                
            }
        })
    ]
}