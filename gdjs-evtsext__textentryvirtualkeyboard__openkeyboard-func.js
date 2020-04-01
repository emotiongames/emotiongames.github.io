gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.userFunc0x1779d800 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.openKeyboard) { 
    gdjs._extensionMobileKeyboard.openKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x1779d59c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.userFunc0x1779d800(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x1779d59c
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x1779d59c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x5b7328


gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.func = function(runtimeScene, Object, Behavior, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

