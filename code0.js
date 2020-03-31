gdjs.presentationSceneCode = {};
gdjs.presentationSceneCode.GDlogoNameObjects1= [];
gdjs.presentationSceneCode.GDlogoNameObjects2= [];

gdjs.presentationSceneCode.conditionTrue_0 = {val:false};
gdjs.presentationSceneCode.condition0IsTrue_0 = {val:false};
gdjs.presentationSceneCode.condition1IsTrue_0 = {val:false};


gdjs.presentationSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.presentationSceneCode.condition0IsTrue_0.val = false;
{
gdjs.presentationSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "changeSceneTimer");
}if (gdjs.presentationSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "historyScene", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "changeSceneTimer");
}}

}


}; //End of gdjs.presentationSceneCode.eventsList0x5b6e18


gdjs.presentationSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.presentationSceneCode.GDlogoNameObjects1.length = 0;
gdjs.presentationSceneCode.GDlogoNameObjects2.length = 0;

gdjs.presentationSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['presentationSceneCode'] = gdjs.presentationSceneCode;
