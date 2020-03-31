gdjs.historySceneCode = {};
gdjs.historySceneCode.GDNewObjectObjects1= [];
gdjs.historySceneCode.GDNewObjectObjects2= [];
gdjs.historySceneCode.GDSkipButtonObjects1= [];
gdjs.historySceneCode.GDSkipButtonObjects2= [];

gdjs.historySceneCode.conditionTrue_0 = {val:false};
gdjs.historySceneCode.condition0IsTrue_0 = {val:false};
gdjs.historySceneCode.condition1IsTrue_0 = {val:false};
gdjs.historySceneCode.condition2IsTrue_0 = {val:false};


gdjs.historySceneCode.mapOfGDgdjs_46historySceneCode_46GDSkipButtonObjects1Objects = Hashtable.newFrom({"SkipButton": gdjs.historySceneCode.GDSkipButtonObjects1});gdjs.historySceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.historySceneCode.condition0IsTrue_0.val = false;
{
gdjs.historySceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "changeSceneTimer");
}if (gdjs.historySceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainMenuScene", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "changeSceneTimer");
}}

}


{

gdjs.historySceneCode.GDSkipButtonObjects1.createFrom(runtimeScene.getObjects("SkipButton"));

gdjs.historySceneCode.condition0IsTrue_0.val = false;
gdjs.historySceneCode.condition1IsTrue_0.val = false;
{
gdjs.historySceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.historySceneCode.mapOfGDgdjs_46historySceneCode_46GDSkipButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.historySceneCode.condition0IsTrue_0.val ) {
{
gdjs.historySceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.historySceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainMenuScene", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "changeSceneTimer");
}}

}


}; //End of gdjs.historySceneCode.eventsList0x5b6e18


gdjs.historySceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.historySceneCode.GDNewObjectObjects1.length = 0;
gdjs.historySceneCode.GDNewObjectObjects2.length = 0;
gdjs.historySceneCode.GDSkipButtonObjects1.length = 0;
gdjs.historySceneCode.GDSkipButtonObjects2.length = 0;

gdjs.historySceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['historySceneCode'] = gdjs.historySceneCode;
