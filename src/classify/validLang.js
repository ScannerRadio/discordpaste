/* eslint-disable id-length */
const extensionMaps = {
	dyalog: "apl",
	asn: "asn.1", asn1: "asn.1",
	b: "brainfuck", bf: "brainfuck",
	"cmake.in": "cmake",
	cob: "cobol", cbl: "cobol", ccp: "cobol", cpy: "cobol",
	clj: "clojure", boot: "clojure", cl2: "clojure", cljc: "clojure", cljs: "clojure",
	"cljs.hl": "clojure", cljscm: "clojure", cljx: "clojure", hic: "clojure",
	coffee: "coffeescript", _coffee: "coffeescript", cake: "coffeescript", cjsx: "coffeescript", iced: "coffeescript",
	cr: "crystal",
	di: "d",
	patch: "diff",
	dyl: "dylan", intr: "dylan", lid: "dylan",
	eclxml: "ecl",
	e: "eiffel",
	erl: "erlang", "app.src": "erlang", es: "erlang", escript: "erlang", hrl: "erlang", xrl: "erlang", yrl: "erlang",
	fth: "forth", "4th": "forth", fr: "forth", frt: "forth", fs: "forth",
	f90: "fortran", f03: "fortran", f08: "fortran", f77: "fortran", f95: "fortran", fpp: "fortran",
	feature: "gherkin",
	grt: "groovy", gtpl: "groovy", gvy: "groovy",
	htm: "html", "html.hl": "html", xht: "html", xhtml: "html",
	"haml.deface": "haml",
	hbs: "handlebars",
	hs: "haskell", hsc: "haskell",
	hx: "haxe", hxsl: "haxe",
	pro: "idl", dlm: "idl",
	js: "javascript", _js: "javascript", bones: "javascript", es6: "javascript",
	frag: "javascript", gs: "javascript", jake: "javascript", jsb: "javascript", jscad: "javascript",
	jsfl: "javascript", jsm: "javascript", jss: "javascript", njs: "javascript", pac: "javascript",
	sjs: "javascript", ssjs: "javascript", xsjs: "javascript", xsjslib: "javascript",
	jl: "julia",
	ls: "livescript", _ls: "livescript",
	nse: "lua", rbxs: "lua", wlua: "lua",
	mumps: "m",
	md: "markdown", mdown: "markdown", mdwn: "markdown", mkd: "markdown", mkdn: "markdown", mkdown: "markdown",
	ron: "markdown", workbook: "markdown",
	cdf: "mathematica", ma: "mathematica", mt: "mathematica", nb: "mathematica",
	nbp: "mathematica", wl: "mathematica", wlt: "mathematica",
	m: "matlab",
	mo: "modelica",
	nsi: "nsis", nsh: "nsis",
	nginxconf: "nginx", vhost: "nginx",
	aw: "php", ctp: "php", php3: "php", php4: "php", php5: "php", phps: "php", phpt: "php",
	pas: "pascal", dfm: "pascal", dpr: "pascal", lpr: "pascal",
	pl: "perl", al: "perl", ph: "perl", plx: "perl", pm: "perl", pod: "perl",
	psgi: "perl", t: "perl",
	ps1: "powershell", psd1: "powershell", psm1: "powershell",
	proto: "protocol buffer",
	jade: "pug",
	pp: "puppet",
	py: "python", bzl: "python", gyp: "python", gypi: "python", lmi: "python",
	py3: "python", pyde: "python", pyi: "python", pyp: "python", pyt: "python", pyw: "python", rpy: "python",
	tac: "python", wsgi: "python", xpy: "python",
	rd: "r", rsx: "r",
	rb: "ruby", builder: "ruby", eye: "ruby", gemspec: "ruby", god: "ruby", jbuilder: "ruby",
	mspec: "ruby", podspec: "ruby", rabl: "ruby", rake: "ruby", rbuild: "ruby", rbw: "ruby",
	rbx: "ruby", ru: "ruby", spec: "ruby", thor: "ruby", watchr: "ruby",
	rs: "rust", "rs.in": "rust",
	rq: "sparql",
	cql: "sql", ddl: "sql", mysql: "sql", prc: "sql", tab: "sql", udf: "sql", viw: "sql",
	scm: "scheme", sch: "scheme", sld: "scheme", sls: "scheme", sps: "scheme", ss: "scheme",
	sh: "shell", bash: "shell", bats: "shell", command: "shell", ksh: "shell",
	"sh.in": "shell", tmux: "shell", tool: "shell", zsh: "shell",
	cs: "smalltalk",
	tpl: "smarty",
	styl: "stylus",
	adp: "tcl", tm: "tcl",
	ttl: "turtle",
	vhd: "vhdl", vhf: "vhdl", vhi: "vhdl", vho: "vhdl", vhs: "vhdl", vht: "vhdl", vhw: "vhdl",
	v: "verilog", veo: "verilog",
	adml: "xml", admx: "xml", ant: "xml", axml: "xml", builds: "xml", ccxml: "xml", clixml: "xml", cproject: "xml",
	csl: "xml", csproj: "xml", ct: "xml", dita: "xml", ditamap: "xml", ditaval: "xml", "dll.config": "xml",
	dotsettings: "xml", filters: "xml", fsproj: "xml", fxml: "xml", glade: "xml", gml: "xml", grxml: "xml",
	iml: "xml", ivy: "xml", jelly: "xml", jsproj: "xml", kml: "xml", launch: "xml", mdpolicy: "xml", mjml: "xml",
	mm: "xml", mod: "xml", mxml: "xml", nproj: "xml", nuspec: "xml", odd: "xml", osm: "xml", pkgproj: "xml",
	plist: "xml", props: "xml", ps1xml: "xml", psc1: "xml", pt: "xml", rdf: "xml", resx: "xml",
	rss: "xml", scxml: "xml", sfproj: "xml", srdf: "xml", storyboard: "xml", stTheme: "xml",
	"sublime-snippet": "xml", targets: "xml", tmCommand: "xml", tml: "xml", tmLanguage: "xml", tmPreferences: "xml",
	tmSnippet: "xml", tmTheme: "xml", ts: "xml", tsx: "xml", ui: "xml", urdf: "xml", ux: "xml", vbproj: "xml",
	vcxproj: "xml", vsixmanifest: "xml", vssettings: "xml", vstemplate: "xml", vxml: "xml", wixproj: "xml",
	wsdl: "xml", wsf: "xml", wxi: "xml", wxl: "xml", wxs: "xml", x3d: "xml", xacro: "xml", xaml: "xml", xib: "xml",
	xlf: "xml", xliff: "xml", xmi: "xml", "xml.dist": "xml", xproj: "xml", xsd: "xml", xspec: "xml", xul: "xml",
	zcml: "xml",
	xq: "xquery", xql: "xquery", xqm: "xquery", xqy: "xquery",
	yml: "yaml", reek: "yaml", rviz: "yaml", "sublime-syntax": "yaml", syntax: "yaml", "yaml-tmlanguage": "yaml",
	"yml.mysql": "yaml"
};

/* eslint-enable id-length */

const validLangs = ["apl", "asciiarmor", "asn.1", "asterisk", "brainfuck", "clike", "clojure",
	"cmake", "cobol", "coffeescript", "commonlisp", "crystal", "css", "cypher", "d", "dart",
	"diff", "django", "dockerfile", "dtd", "dylan", "ebnf", "ecl", "eiffel", "elm", "erlang",
	"factor", "fcl", "forth", "fortran", "gas", "gfm", "gherkin", "go", "groovy", "haml",
	"handlebars", "haskell-literate", "haskell", "haxe", "html", "http",
	"idl", "javascript", "jinja2", "jsx", "julia", "livescript", "lua", "markdown", "mathematica",
	"mbox", "meta", "mirc", "mllike", "modelica", "mscgen", "mumps", "nginx", "nsis", "ntriples",
	"octave", "oz", "pascal", "pegjs", "perl", "php", "pig", "powershell", "properties", "protobuf",
	"pug", "puppet", "python", "q", "r", "rpm", "rst", "ruby", "rust", "sas", "sass", "scheme", "shell",
	"sieve", "slim", "smalltalk", "smarty", "solr", "soy", "sparql", "spreadsheet", "sql", "stex",
	"stylus", "swift", "tcl", "textile", "tiddlywiki", "tiki", "toml", "tornado", "troff", "ttcn-cfg",
	"ttcn", "turtle", "twig", "vb", "vbscript", "velocity", "verilog", "vhdl", "vue", "webidl", "xml",
	"xquery", "yacas", "yaml-frontmatter", "yaml", "z80"];

module.exports = lang => {
	if(extensionMaps[lang]) lang = extensionMaps[lang];
	if(!~validLangs.indexOf(lang)) lang = false;

	return lang;
};
