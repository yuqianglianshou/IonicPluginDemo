import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare let window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  onClickBtn() {
    if (window.cordova) {
      //一种写法  
      // 调用的方法名和参数对应关系来自于 根目录下\plugins\你的插件\www\插件名字.js 
      // exports.coolMethod = function (arg0, success, error) {
      //   exec(success, error, 'MyPlugin', 'coolMethod', [arg0]);
      // };
      window.cordova.plugins.MyPlugin.coolMethod(
        "你帅气么？",
        function (success_msg) { alert("原生返回成功信息 == " + JSON.stringify(success_msg)); },
        function (error_msg) { alert("原生返回失败信息 == " + JSON.stringify(error_msg)); }
      );
      //又一种写法
      // window.cordova.plugins.MyPlugin.coolMethod("ionic 传递到原生的参数",
      //   (reply_success: any) => {
      //     console.log("reply_success == " + JSON.stringify(reply_success));
      //   },
      //   (reply_error: any) => {
      //     console.log("reply_error == " + JSON.stringify(reply_error));
      //   }
      // );
    } else {
      console.log("非移动设备");
    }
  }
}
