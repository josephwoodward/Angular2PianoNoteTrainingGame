System.register(['angular2/src/facade/browser', "angular2/core"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var browser_1, core_1;
    var WINDOW, WindowRef_, WINDOW_PROVIDERS;
    function _window() {
        return browser_1.window;
    }
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WINDOW = (function () {
                function WINDOW() {
                }
                Object.defineProperty(WINDOW.prototype, "nativeWindow", {
                    get: function () {
                        return _window();
                    },
                    enumerable: true,
                    configurable: true
                });
                return WINDOW;
            })();
            exports_1("WINDOW", WINDOW);
            WindowRef_ = (function (_super) {
                __extends(WindowRef_, _super);
                function WindowRef_() {
                    _super.call(this);
                }
                Object.defineProperty(WindowRef_.prototype, "nativeWindow", {
                    get: function () {
                        return _window();
                    },
                    enumerable: true,
                    configurable: true
                });
                return WindowRef_;
            })(WINDOW);
            exports_1("WINDOW_PROVIDERS", WINDOW_PROVIDERS = [
                new core_1.Provider(WINDOW, { useClass: WindowRef_ }),
            ]);
        }
    }
});
//# sourceMappingURL=WindowService.js.map