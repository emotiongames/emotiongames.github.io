gdjs.mainMenuSceneCode = {};
gdjs.mainMenuSceneCode.GDStartButtonObjects1= [];
gdjs.mainMenuSceneCode.GDStartButtonObjects2= [];
gdjs.mainMenuSceneCode.GDGameNameObjects1= [];
gdjs.mainMenuSceneCode.GDGameNameObjects2= [];

gdjs.mainMenuSceneCode.conditionTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition1IsTrue_0 = {val:false};
gdjs.mainMenuSceneCode.condition2IsTrue_0 = {val:false};


gdjs.mainMenuSceneCode.mapOfGDgdjs_46mainMenuSceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.mainMenuSceneCode.GDStartButtonObjects1});gdjs.mainMenuSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

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
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "gameScene");
}}

}


}; //End of gdjs.mainMenuSceneCode.eventsList0x5b6e18


gdjs.mainMenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainMenuSceneCode.GDStartButtonObjects1.length = 0;
gdjs.mainMenuSceneCode.GDStartButtonObjects2.length = 0;
gdjs.mainMenuSceneCode.GDGameNameObjects1.length = 0;
gdjs.mainMenuSceneCode.GDGameNameObjects2.length = 0;

gdjs.mainMenuSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['mainMenuSceneCode'] = gdjs.mainMenuSceneCode;
