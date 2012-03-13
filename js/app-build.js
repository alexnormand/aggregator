({
    baseUrl: "./",
    out: "../build/js/main.js",
    paths: {
	text: 'lib/requirejs/text',
	order: 'lib/requirejs/order',
	fastclick: 'lib/fastclick',
	jquery: 'lib/requirejs/require-jquery',
	bootstraptransition: 'lib/bootstrap-transition',
	bootstrapcollapse: 'lib/bootstrap-collapse',
	underscore: 'lib/underscore',
	backbone: 'lib/backbone'
    },
    optimize: "uglify",
    modules: [
        {
            name: "main",
            exclude: ['jquery']
        }
    ]
})
