"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var home_component_1 = require("./home/home.component");
var not_found_component_1 = require("./not-found/not-found.component");
var appRoutes = [
    // order of routes in router is important beacause it search for first route that match
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    // this should not be the first route
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map