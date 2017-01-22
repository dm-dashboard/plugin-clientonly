'use strict';

var init = function(core, io, settings, assignedLogger){
    assignedLogger.info('Client Only package loaded, nothing to load server side');
};

module.exports = {
    init : init,
    refresh : function(){
        //Do nothing
    }
};