import * as vscode from 'vscode';
import { Keqing } from './ts/logic';
import { Play } from './ts/play';
import { Showimg } from './ts/showImg';
import * as path from 'path';

const keqing = new Keqing();

export function activate(context: vscode.ExtensionContext) {

	Play.addCommand(context);

	// 有bug,打开不同的工作区，firstMet会重复执行
	// if (keqing.config.get('first')) {
	// 	// 不能直接调用下面的 lovekeqing.sayHello 命令，因为执行顺序问题
	// 	vscode.window.showInformationMessage('你会喜欢我的吧', '海誓山盟', '至死不渝').then(data => {
	// 		vscode.commands.executeCommand('lovekeqing.firstMet');
	// 		console.log(data);
	// 	});
	// 	vscode.workspace.getConfiguration('lovekeqing').update('first', false);
	// }
	// else {
	// 	keqing.hello();
	// 	keqing.warnTemperature();
	// 	keqing.relax();
	// }

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
			'纪念品', '理念', '生日', '讨厌的食物', '突破-合', '突破-起', '突破-转', '突破-承', '晚安', '晚上好', '喜欢的食物', '下雪的时候',
			'下雨的时候', '闲聊-耽误', '闲聊-放松', '闲聊-机会', '想分享的见闻', '想要了解刻晴-其一', '想要了解刻晴-其二',
			'想要了解刻晴-其三', '想要了解刻晴-其四', '想要了解刻晴-其五', '阳光很好', '早上好', '质疑神之眼', '质疑', '中午好', '追寻'];

		const voiceCommand = ['hobby', 'duty', 'try', 'propose', 'firstMet', 'thundered', 'trouble', 'reflection',
			'reflectEyeOfGod', 'encourage', 'souvenir', 'idea', 'birthday', 'hateFood', 'breakthrough01', 'breakthrough02',
			'breakthrough03', 'breakthrough04', 'goodNight', 'goodEvening', 'favoriteFood', 'snow', 'rain', 'gossipDelay',
			'gossipRelax', 'gossipChance', 'share', 'readMe01', 'readMe02', 'readMe03', 'readMe04', 'readMe05', 'goodSunlight',
			'goodMorning', 'questionEyeOfGod', 'question', 'goodAfternoon', 'pursue'];

		vscode.window.showQuickPick(voiceArr, {}).then(data => {
			let myCommand = '';
			if (data != undefined) {
				myCommand = 'lovekeqing.' + voiceCommand[voiceArr.indexOf(data)];
				vscode.commands.executeCommand(myCommand);
			}
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.showImgs', () => {
		let src: string = keqing.config.get('imgSrc') as string;
		if (src == "") {
			src = path.join(__dirname, '../assets/image');
		}
		Showimg.show(src);
	}));

}

export function deactivate() {
	if (keqing.timeId) {
		clearInterval(keqing.timeId);
		keqing.timeId = null;
	}
}