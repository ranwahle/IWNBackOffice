"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ranwahle on 19/09/2016.
 */
var core_1 = require("@angular/core");
var actions_1 = require("../constants/actions");
var ServerActions = (function () {
    function ServerActions(store) {
        this.store = store;
    }
    ServerActions.prototype.onServerCall = function () {
        this.store.dispatch({ type: actions_1.Server.OnServerCall });
    };
    ServerActions.prototype.dismissServerCall = function () {
        this.store.dispatch(({ type: actions_1.Server.DismissServerCall }));
    };
    ServerActions = __decorate([
        core_1.Injectable()
    ], ServerActions);
    return ServerActions;
}());
exports.ServerActions = ServerActions;
