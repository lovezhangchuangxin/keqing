import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class Showimg {
    public static show(dir: string) {
        const panel = vscode.window.createWebviewPanel(
            'keqingShowImg',
            'keqing',
            vscode.ViewColumn.One,
            {
                localResourceRoots: [vscode.Uri.file(dir)],
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );

        const srcs = createSrcfrompath(dir, panel);
        if (srcs) {
            let html = getWebviewContent(srcs);
            if (html) {
                panel.webview.html = getWebviewContent(srcs) as string;
            }
        }
    }
}

function getWebviewContent(keqingSrcs: Array<vscode.Uri>): string | undefined {
    let str = '';
    keqingSrcs.forEach(src => {
        str += `<div id="imgItem"><img src="${src}" alt=""></div>`;
    })
    try {
        let config = vscode.workspace.getConfiguration('lovekeqing');
        let html = fs.readFileSync(path.join(__dirname, '../assets/html/index.txt'), 'utf-8');
        html = html.replace('{{column}}', String(config.get('column')));
        html = html.replace('{{height}}', String(config.get('height')));
        html = html.replace('{{border}}', String(config.get('border')));
        html = html.replace('{{imgMargin}}', String(config.get('imgMargin')));
        html = html.replace('{{imgMargin}}', String(config.get('imgMargin')));
        html = html.replace('{{bodyBg}}', String(config.get('bodyBg')));
        html = html.replace('{{imgBgc}}', String(config.get('imgBgc')));
        return html.replace('{{keqingyyds}}', str);
    }
    catch {
        vscode.window.showErrorMessage('readfile error');
        return undefined;
    }

}

// 根据路径返回可用的src
function createSrcfrompath(dir: string, panel: vscode.WebviewPanel): Array<vscode.Uri> | undefined {
    let imgSrcs: Array<vscode.Uri> = [];
    try {
        let files = fs.readdirSync(dir);
        const imgReg = /.*\.(jpg|png|jpeg|gif|svg)$/;
        files.forEach((file) => {
            if (imgReg.test(file)) {
                imgSrcs.push(panel.webview.asWebviewUri(vscode.Uri.file(
                    `${dir}\\${file}`
                )));
            }
        })
        return imgSrcs;
    }
    catch {
        vscode.window.showErrorMessage('readdir error!');
        return undefined;
    }
}