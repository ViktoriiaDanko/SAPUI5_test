/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"git/my_git/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});