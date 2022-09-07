exports.find_language = async function (name) {
    const lag = languages = [
        'as','1c','abnf','accesslog','actionscript','ada','ado','adoc','apache','apacheconf','applescript','arduino','arm','armasm','asciidoc','aspectj','atom','autohotkey','autoit','avrasm','awk','axapta','bash','basic','bat',
        'bf','bind','bnf','brainfuck','c','c++','cal','capnp','capnproto','cc','ceylon','clean','clj','clojure-repl','clojure','cls','cmake.in','cmake','cmd','coffee','coffeescript','console','coq','cos',
        'cpp','cr','craftcms','crm','crmsh','crystal','cs','csharp','cson','csp','css','d','dart','dcl','delphi','dfm','diff','django','dns','do','docker','dockerfile','dos','dpr','dsconfig','dst','dts',
        'dust','ebnf','elixir','elm','erb','erl','erlang-repl','erlang','excel','f90','f95','feature','fix','flix','fortran','freepascal','fs','fsharp','gams','gauss','gcode','gemspec','gherkin','glsl',
        'gms','go','golang','golo','gradle','graph','groovy','gss','gyp','h','h++','haml','handlebars','haskell','haxe','hbs','hpp','hs','hsp','html.handlebars','html.hbs','html','htmlbars','http','https','hx',
        'hy','hylang','i7','iced','icl','inform7','ini','instances','irb','irpf90','java','javascript','jboss-cli','jinja','js','json','jsp','jsx','julia','k','kdb','kotlin','lasso','lassoscript','lazarus',
        'ldif','leaf','less','lfm','lisp','livecodeserver','livescript','llvm','lpr','ls','lsl','lua','m','mak','makefile','markdown','mathematica','matlab','maxima','md','mel','mercury','mips','mipsasm',
        'mizar','mk','mkd','mkdown','ml','mm','mma','mojolicious','monkey','moo','moon','moonscript','n1ql','nc','nginx','nginxconf','nim','nimrod','nix','nixos','nsis','obj-c','objc',
        'objectivec','ocaml','openscad','osascript','oxygene','p21','parser3','pas','pascal','patch','pb','pbi','pcmk','perl','pf.conf','pf','php','php3','php4','php5','php6','pl','plist','pm','podspec','pony',
        'powershell','pp','processing','profile','prolog','protobuf','ps','puppet','purebasic','py','python','q','qml','qt','r','rb','rib','roboconf','rs','rsl','rss','ruby','ruleslanguage','rust','scad','scala',
        'scheme','sci','scilab', 'scss','sh','shell','smali','smalltalk','sml','sqf','sql','st','stan','stata','step','step21','stp','styl','stylus','subunit','sv','svh','swift','taggerscript','tao','tap',
        'tcl','tex','thor','thrift','tk','toml','tp','ts','twig','typescript','v','vala','vb','vbnet','vbs','vbscript-html','vbscript','verilog','vhdl','vim','wildfly-cli','x86asm','xhtml','xjb',
        'xl','xls','xlsx','xml','xpath','xq','xquery','xsd','xsl','yaml','yml','zep','zephir','zone','zsh'
    ]
    .sort()
    .sort((a, b) => a.length - b.length)
    return lag.find(lag => name.endsWith(lag))
}

