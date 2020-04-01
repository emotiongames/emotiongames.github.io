gdjs.mainMenuSceneCode = {};
gdjs.mainMenuSceneCode.GDStartButtonObjects1= [];
gdjs.mainMenuSceneCode.GDStartButtonObjects2= [];
gdjs.mainMenuSceneCode.GDGameNameObjects1= [];
gdjs.mainMenuSceneCode.GDGameNameObjects2= [];
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1= [];
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects2= [];
gdjs.mainMenuSceneCode.GDEmailInputObjects1= [];
gdjs.mainMenuSceneCode.GDEmailInputObjects2= [];
gdjs.mainMenuSceneCode.GDEmailTextObjects1= [];
gdjs.mainMenuSceneCode.GDEmailTextObjects2= [];
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1= [];
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects2= [];
gdjs.mainMenuSceneCode.GDErrorMessageObjects1= [];
gdjs.mainMenuSceneCode.GDErrorMessageObjects2= [];

gdjs.mainMenuSceneCode.conditionTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition1IsTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition2IsTrue_0 = {val:false};


gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailInputObjects1Objects = Hashtable.newFrom({"EmailInput": gdjs.mainMenuSceneCode.GDEmailInputObjects1});gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailEntryTextObjects1Objects = Hashtable.newFrom({"EmailEntryText": gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1});gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailInputObjects1Objects = Hashtable.newFrom({"EmailInput": gdjs.mainMenuSceneCode.GDEmailInputObjects1});gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailEntryTextObjects1Objects = Hashtable.newFrom({"EmailEntryText": gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1});gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.mainMenuSceneCode.GDStartButtonObjects1});gdjs.mainMenuSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainMenuSceneCode.condition0IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.createFrom(runtimeScene.getObjects("CursorTextBox"));
gdjs.mainMenuSceneCode.GDErrorMessageObjects1.createFrom(runtimeScene.getObjects("ErrorMessage"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainMenuSceneCode.GDErrorMessageObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDErrorMessageObjects1[i].hide();
}
}}

}


{

gdjs.mainMenuSceneCode.GDEmailInputObjects1.createFrom(runtimeScene.getObjects("EmailInput"));

gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailInputObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mainMenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.mainMenuSceneCode.condition1IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.createFrom(runtimeScene.getObjects("CursorTextBox"));
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.createFrom(runtimeScene.getObjects("EmailEntryText"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i].activate(true);
}
}{gdjs.evtsExt__TextEntryVirtualKeyboard__openKeyboard.func(runtimeScene, gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailEntryTextObjects1Objects, "TextEntryVirtualKeyboard", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.mainMenuSceneCode.GDEmailInputObjects1.createFrom(runtimeScene.getObjects("EmailInput"));

gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailInputObjects1Objects, runtimeScene, true, true);
}if ( gdjs.mainMenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.mainMenuSceneCode.condition1IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.createFrom(runtimeScene.getObjects("CursorTextBox"));
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.createFrom(runtimeScene.getObjects("EmailEntryText"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i].activate(false);
}
}{gdjs.evtsExt__TextEntryVirtualKeyboard__closeKeyboard.func(runtimeScene, gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDEmailEntryTextObjects1Objects, "TextEntryVirtualKeyboard", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.createFrom(runtimeScene.getObjects("EmailEntryText"));

gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i].getString() == "" ) {
        gdjs.mainMenuSceneCode.condition0IsTrue_0.val = true;
        gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[k] = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i];
        ++k;
    }
}
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length = k;}if (gdjs.mainMenuSceneCode.condition0IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDEmailTextObjects1.createFrom(runtimeScene.getObjects("EmailText"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDEmailTextObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDEmailTextObjects1[i].setString("Tester e-mail");
}
}}

}


{

gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.createFrom(runtimeScene.getObjects("EmailEntryText"));

gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length;i<l;++i) {
    if ( gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i].behaviorActivated("TextEntryVirtualKeyboard") ) {
        gdjs.mainMenuSceneCode.condition0IsTrue_0.val = true;
        gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[k] = gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[i];
        ++k;
    }
}
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length = k;}if ( gdjs.mainMenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.mainMenuSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1 */
gdjs.mainMenuSceneCode.GDEmailTextObjects1.createFrom(runtimeScene.getObjects("EmailText"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDEmailTextObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDEmailTextObjects1[i].setString((( gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length === 0 ) ? "" :gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[0].getString()));
}
}}

}


{

gdjs.mainMenuSceneCode.GDStartButtonObjects1.createFrom(runtimeScene.getObjects("StartButton"));

gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.mainMenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.mainMenuSceneCode.condition1IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.createFrom(runtimeScene.getObjects("EmailEntryText"));
{gdjs.evtTools.network.sendHttpRequest("https://api.backendless.com/2C4A95E1-350F-9088-FF00-61C030C97100/E736C626-131A-469C-B577-25EBEA7EA772", "/services/testers_api/exists?email='" + (( gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length === 0 ) ? "" :gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1[0].getString()) + "'", "", "GET", "application/json", runtimeScene.getVariables().getFromIndex(0));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.mainMenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameScene");
}}

}


{


gdjs.mainMenuSceneCode.condition0IsTrue_0.val = false;
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.mainMenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.mainMenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.mainMenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.mainMenuSceneCode.condition1IsTrue_0.val) {
gdjs.mainMenuSceneCode.GDErrorMessageObjects1.createFrom(runtimeScene.getObjects("ErrorMessage"));
{for(var i = 0, len = gdjs.mainMenuSceneCode.GDErrorMessageObjects1.length ;i < len;++i) {
    gdjs.mainMenuSceneCode.GDErrorMessageObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.mainMenuSceneCode.eventsList0x5b6e18


gdjs.mainMenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainMenuSceneCode.GDStartButtonObjects1.length = 0;
gdjs.mainMenuSceneCode.GDStartButtonObjects2.length = 0;
gdjs.mainMenuSceneCode.GDGameNameObjects1.length = 0;
gdjs.mainMenuSceneCode.GDGameNameObjects2.length = 0;
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects1.length = 0;
gdjs.mainMenuSceneCode.GDEmailEntryTextObjects2.length = 0;
gdjs.mainMenuSceneCode.GDEmailInputObjects1.length = 0;
gdjs.mainMenuSceneCode.GDEmailInputObjects2.length = 0;
gdjs.mainMenuSceneCode.GDEmailTextObjects1.length = 0;
gdjs.mainMenuSceneCode.GDEmailTextObjects2.length = 0;
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects1.length = 0;
gdjs.mainMenuSceneCode.GDCursorTextBoxObjects2.length = 0;
gdjs.mainMenuSceneCode.GDErrorMessageObjects1.length = 0;
gdjs.mainMenuSceneCode.GDErrorMessageObjects2.length = 0;

gdjs.mainMenuSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['mainMenuSceneCode'] = gdjs.mainMenuSceneCode;
