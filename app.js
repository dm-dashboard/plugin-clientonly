'use strict';

var Module = require('meanio').Module;

var EdpClientonly = new Module('edp-clientonly');

EdpClientonly.register(function(app, auth, database, dashcore) {

    EdpClientonly.routes(app, auth, database);

    EdpClientonly.menus.add({
        title: 'Client Only Widgets',
        link: 'edpClientonly admin',
        roles: ['admin'],
        menu: 'plugins'
    });

    EdpClientonly.aggregateAsset('js', '../lib/angular-youtube-mb/dist/angular-youtube-embed.min.js');
    EdpClientonly.aggregateAsset('css', 'clientonly.css');

    EdpClientonly.angularDependencies(['youtube-embed']);
    return EdpClientonly;
});
