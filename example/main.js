/**
 * Class for Handling Hover Tooltips
 * @param option
 * @constructor
 */
function Info(option) {
    this.setting = $.extend({
        // defaults.
        tooltip_wrapper_selector: '#tooltip-info',
        debug: true
    }, option);
}

Info.prototype.bindHandler = function() {
    var $this = this;// to have the this context even in anonymous functions
    if($this.setting.debug) {
        console.log('Info.bindHandler()');
    }
    $(document).mousemove(function(e) {
        if($this.setting.debug) {
            console.log('Info.bindHandler().document.mousemove');
        }
        console.log(e.target);
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.className);
        console.log(e.target.parentElement.parentElement.className);
        var active_element = {
            id: e.target.id,
            class: e.target.className
        };
        console.log(active_element);
        var parent = this.parseParent(e.target.parentElement);

        $($this.setting.tooltip_wrapper_selector).html('<div></div>');
    });
};

Info.prototype.parseParent = function(parentElement, parsed) {
    if(typeof parsed === 'undefined') {
        parsed = [];
    }
    parsed.push({
        tag: parentElement.tagName,
    });
    if(0 < parentElement.className.length){
        //parsed
    }
};

$(function() {
    var info = new Info();
    info.bindHandler();
});