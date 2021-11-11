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
            new Play('hobby').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.duty', () => {
            new Play('duty').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.try', () => {
            new Play('try').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.propose', () => {
            new Play('propose').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.firstMet', () => {
            new Play('firstMet').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.thundered', () => {
            new Play('thundered').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.trouble', () => {
            new Play('trouble').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.reflection', () => {
            new Play('reflection').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.reflectEyeOfGod', () => {
            new Play('reflectEyeOfGod').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.encourage', () => {
            new Play('encourage').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.souvenir', () => {
            new Play('souvenir').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.idea', () => {
            new Play('idea').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.birthday', () => {
            new Play('birthday').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.hateFood', () => {
            new Play('hateFood').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough01', () => {
            new Play('breakthrough01').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough02', () => {
            new Play('breakthrough02').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough03', () => {
            new Play('breakthrough03').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.breakthrough04', () => {
            new Play('breakthrough04').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodNight', () => {
            new Play('goodNight').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodEvening', () => {
            new Play('goodEvening').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.favoriteFood', () => {
            new Play('favoriteFood').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.snow', () => {
            new Play('snow').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.rain', () => {
            new Play('rain').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipDelay', () => {
            new Play('gossipDelay').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipRelax', () => {
            new Play('gossipRelax').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.gossipChance', () => {
            new Play('gossipChance').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.share', () => {
            new Play('share').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe01', () => {
            new Play('readMe01').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe02', () => {
            new Play('readMe02').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe03', () => {
            new Play('readMe03').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe04', () => {
            new Play('readMe04').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.readMe05', () => {
            new Play('readMe05').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodSunlight', () => {
            new Play('goodSunlight').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodMorning', () => {
            new Play('goodMorning').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.question', () => {
            new Play('question').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.questionEyeOfGod', () => {
            new Play('questionEyeOfGod').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.goodAfternoon', () => {
            new Play('goodAfternoon').run();
        }));
        context.subscriptions.push(vscode.commands.registerCommand('lovekeqing.pursue', () => {
            new Play('pursue').run();
        }));
    }
};

export default Play;

