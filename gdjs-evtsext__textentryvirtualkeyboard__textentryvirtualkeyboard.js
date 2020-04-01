
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard = gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard || {};

/**
 * Behavior generated from Mobile virtual keyboard for Text Entry
 * @class TextEntryVirtualKeyboard
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("TextEntryVirtualKeyboard::TextEntryVirtualKeyboard", gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard);

// Properties:
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.userFunc0x15148a38 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (typeof document === "undefined") {
    console.error("This behavior is only running in a Browser-like environment");
    return;
}

// Select and focus the input associated to the object when opening the keyboard
gdjs._extensionMobileKeyboard.openKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input) {
        var textEntry = eventsFunctionContext.getObjects("Object")[0];
        input.value = textEntry.getString();
        input.style.removeProperty("visibility");
        input.focus();
    }
}

// Blur the input associated to an ID
gdjs._extensionMobileKeyboard.closeKeyboardById = function (uniqueID) {
    var input = document.getElementById(uniqueID);
    if (input) {
        input.blur();
        input.style.setProperty("visibility", "hidden");
    }
}

// Blur the input associated to an object
gdjs._extensionMobileKeyboard.closeKeyboard = function (eventsFunctionContext) {
    var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
    var input = document.getElementById(uniqueID);
    if (input) {
        var textEntry = eventsFunctionContext.getObjects("Object")[0];
        textEntry.setString(input.value);
        input.blur();
        input.style.setProperty("visibility", "hidden");
    }
}

// Return the id of the current behavior object
gdjs._extensionMobileKeyboard.getUniqueIdInObject = function (eventsFunctionContext) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    return eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput._uniqueId;
}

// Save an ID inside the object
var setUniqueIdInObject = function (id) {
    var behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    eventsFunctionContext.getObjects("Object")[0]._mobileKeyboardExtensionInput = { "_uniqueId": id };
}

// Create an input for the current object
const input = document.createElement("input");
input.type = "text";
input.setAttribute("spellcheck", "false"); // Disable spell checking (blue line on mobile under words)
input.style = "background-color: transparent;border: 0px;outline: transparent;color: #0000;";

// Create an identifier that is unique
var uniqueId = "GDevelop_Mobile_Keyboard_Input" + Date.now() + '-' + Math.floor(Math.random() * 100000);
input.id = uniqueId; // Apply it to the input
setUniqueIdInObject(uniqueId); // Apply it to the object

document.body.appendChild(input); // Add input to the document HTML

// Handle key presses on the input
input.addEventListener("keyup", function (event) {
    input.focus();

    // Force selection to be at the end (to mimic Text Entry)
    var length_string = input.value.length;
    input.setSelectionRange(length_string, length_string);

    // Support for removing the last character
    if (event.keyCode == 8 || event.keyCode == 46) { // 8=Backspace, 46=Del
        input.value = input.value.slice(0, -1);
    }

    var textEntry = eventsFunctionContext.getObjects("Object")[0];
    textEntry.setString(input.value);//Edit textEntry _str value

    if (event.keyCode === 13) { // 13=Enter key 
        //Send id to function for close keyboard
        if (gdjs._extensionMobileKeyboard.closeKeyboard != undefined) {
            gdjs._extensionMobileKeyboard.closeKeyboardById(uniqueId);
        }
    }
}, { passive: false });

};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x15004bac = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.userFunc0x15148a38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x15004bac
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x15004bac(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x5b7088


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onCreatedContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.userFunc0x1514b208 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.openKeyboard) { 
    gdjs._extensionMobileKeyboard.openKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x151445e4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.userFunc0x1514b208(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x151445e4
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x151445e4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x5b7088


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboard = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.openKeyboardContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.userFunc0x1514b560 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

if (gdjs._extensionMobileKeyboard.closeKeyboard) { 
    gdjs._extensionMobileKeyboard.closeKeyboard(eventsFunctionContext);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x151445e4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.userFunc0x1514b560(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x151445e4
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x151445e4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x5b7088


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboard = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.closeKeyboardContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext = {};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1= [];
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2= [];

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.userFunc0x15149c20 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._extensionMobileKeyboard = gdjs._extensionMobileKeyboard || {};

var uniqueID = gdjs._extensionMobileKeyboard.getUniqueIdInObject(eventsFunctionContext);
var element = document.getElementById(uniqueID);
if (element) {
    element.parentNode.removeChild(element);
}
};
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x1500654c = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.userFunc0x15149c20(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x1500654c
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x1500654c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7088


gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromScene = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onOwnerRemovedFromSceneContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__TextEntryVirtualKeyboard__TextEntryVirtualKeyboard.TextEntryVirtualKeyboard.prototype.onDestroy = function() {
  // Redirect call to onOwnerRemovedFromScene (the old name of onDestroy)
  if (this.onOwnerRemovedFromScene) this.onOwnerRemovedFromScene();
};

// Methods:

