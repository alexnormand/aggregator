({
    baseUrl: "./",
    out: "../build/js/main.js",
    paths: {
	text: 'lib/requirejs/text',
	order: 'lib/requirejs/order',
	fastclick: 'lib/fastclick',
	jquery: 'lib/jquery',
	bootstraptransition: 'lib/bootstrap-transition',
	bootstrapcollapse: 'lib/bootstrap-collapse',
	underscore: 'lib/underscore',
	backbone: 'lib/backbone'
    },
    optimize: "uglify",
    name: "lib/requirejs/almond",
    include: "main",
    wrap:true
})
