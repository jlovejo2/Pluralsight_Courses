var Renderer = /** @class */ (function () {
    // instance way
    // constructor(private viewTemplate: HTMLDivElement) {
    //     this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    // }
    // render(html: string) {
    //     this.viewTemplate.innerHTML = html;
    // }
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=renderer.js.map