import * as sound from 'sound-play';
import * as path from 'path';
import * as vscode from 'vscode';

class Play {
    public song: string;

    public volume: number;

    constructor(song: string, volome: number = 10) {
        this.song = song;
        this.volume = volome;
    }

    public run() {
        const filePath = path.join(__dirname, `../assets/music/${this.song}.mp3`);
        sound.play(filePath);
    }

    public static addCommand(context: vscode.ExtensionContext) {
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.hobby', () => {
            new Play('爱好').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.duty', () => {
            new Play('本职').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.try', () => {
            new Play('尝试').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.propose', () => {
            new Play('倡议').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.firstMet', () => {
            new Play('初次见面').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.thundered', () => {
            new Play('打雷的时候').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.trouble', () => {
            new Play('烦恼').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.reflection', () => {
            new Play('反思').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.reflectEyeOfGod', () => {
            new Play('反思神之眼').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.encourage', () => {
            new Play('鼓励').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.souvenir', () => {
            new Play('纪念品').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.idea', () => {
            new Play('理念').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.birthday', () => {
            new Play('生日').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.hateFood', () => {
            new Play('讨厌的食物').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough01', () => {
            new Play('突破-承').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough02', () => {
            new Play('突破-合').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough03', () => {
            new Play('突破-起').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough04', () => {
            new Play('突破-转').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodNight', () => {
            new Play('晚安').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodEvening', () => {
            new Play('晚上好').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.favoriteFood', () => {
            new Play('喜欢的食物').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.snow', () => {
            new Play('下雪的时候').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.rain', () => {
            new Play('下雨的时候').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipDelay', () => {
            new Play('闲聊-耽误').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipRelax', () => {
            new Play('闲聊-放松').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipChance', () => {
            new Play('闲聊-机会').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.share', () => {
            new Play('想分享的见闻').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe01', () => {
            new Play('想要了解刻晴-其一').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe02', () => {
            new Play('想要了解刻晴-其二').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe03', () => {
            new Play('想要了解刻晴-其三').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe04', () => {
            new Play('想要了解刻晴-其四').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe05', () => {
            new Play('想要了解刻晴-其五').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodSunlight', () => {
            new Play('阳光很好').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodMorning', () => {
            new Play('早上好').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.questionEyeOfGod', () => {
            new Play('质疑神之眼').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodAfternoon', () => {
            new Play('中午好').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.pursue', () => {
            new Play('追寻').run();
        }));
    }
};

export default Play;

