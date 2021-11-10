// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Keqing from './logic';
import Play from './play';


const keqing = new Keqing();

export function activate(context: vscode.ExtensionContext) {

	Play.addCommand(context);

	keqing.hello();
	keqing.warnTemperature();
	keqing.relax();

	context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.sayHello', () => {
		vscode.window.showInformationMessage('你会喜欢我的吧', '海誓山盟', '至死不渝').then(data => {
			vscode.commands.executeCommand('lovekeqing.firstMet');
			console.log(data);
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.chooseVoice', () => {

		const voiceArr = ['爱好', '本职', '尝试', '倡议', '初次见面', '打雷的时候', '烦恼', '反思', '反思神之眼', '鼓励',
			'纪念品', '理念', '生日', '讨厌的食物', '突破-合', '突破-起', '突破-转', '晚安', '晚上好', '喜欢的食物', '下雪的时候',
			'下雨的时候', '闲聊-耽误', '闲聊-放松', '闲聊-机会', '想分享的见闻', '想要了解刻晴-其一', '想要了解刻晴-其二',
			'想要了解刻晴-其三', '想要了解刻晴-其四', '想要了解刻晴-其五', '阳光很好', '早上好', '质疑神之眼', '中午好', '追寻'];

		const voiceCommand = ['hobby', 'duty', 'try', 'propose', 'firstMet', 'thundered', 'trouble', 'reflection',
			'reflectEyeOfGod', 'encourage', 'souvenir', 'idea', 'birthday', 'hateFood', 'breakthrough01', 'breakthrough02',
			'breakthrough03', 'breakthrough04', 'goodNight', 'goodEvening', 'favoriteFood', 'snow', 'rain', 'gossipDelay',
			'gossipRelax', 'gossipChance', 'share', 'readMe01', 'readMe02', 'readMe03', 'readMe04', 'readMe05', 'goodSunlight',
			'goodMorning', 'goodAfternoon', 'pursue'];

		vscode.window.showQuickPick(voiceArr, {}).then(data => {
			let myCommand = 'lovekeqing.pursue';
			if (data) {
				myCommand = 'lovekeqing.' + voiceCommand[voiceArr.indexOf(data)];
			}
			vscode.commands.executeCommand(myCommand);
		});
	}));

}

// this method is called when your extension is deactivated
export function deactivate() {
	clearInterval(keqing.timeId);
	keqing.timeId = null;
}

function test() {
	// let uri = vscode.Uri.file("../");
	// let success = await vscode.commands.executeCommand('vscode.openFolder', uri);
	// console.log(success);
	// console.log('hello world!');
}