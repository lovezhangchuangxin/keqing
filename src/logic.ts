import Spider from "./spider";
import * as vscode from 'vscode'

class Keqing {

    time: number;
    timeId: any;
    config: vscode.WorkspaceConfiguration;
    constructor() {
        this.time = new Date().getHours();
        this.config = vscode.workspace.getConfiguration('lovekeqing');
    }

    hello() {

        if (this.time >= 0 && this.time < 11) {
            vscode.commands.executeCommand('lovekeqing.goodMorning');
        }

        else if (this.time >= 11 && this.time < 15) {
            vscode.commands.executeCommand('lovekeqing.goodAfternoon');
        }

        else {
            vscode.commands.executeCommand('lovekeqing.goodEvening');
        }
    }

    warnTemperature() {
        let spider = new Spider(this.config.get('city') as string);
        setTimeout(() => {
            const info = spider.info;
            if (info.weather?.includes('晴') || info.weather?.includes('阳') || info.weather?.includes('好')) {
                vscode.commands.executeCommand('lovekeqing.goodSunlight');
            }
            else if (info.weather?.includes('雷')) {
                vscode.commands.executeCommand('lovekeqing.thundered');
            }
            else if (info.weather?.includes('雨')) {
                vscode.commands.executeCommand('lovekeqing.snow');
            } else if (info.weather?.includes('雪')) {
                vscode.commands.executeCommand('lovekeqing.rain');
            }
        }, 9000);
    }

    relax(): NodeJS.Timeout {
        this.timeId = setInterval(() => {
            vscode.commands.executeCommand('lovekeqing.gossipRelax');
        }, 3600 * 1000 * (this.config.get('interval') as number));
        return this.timeId;
    }

};



export default Keqing;