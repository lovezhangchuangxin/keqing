import axios, { AxiosRequestHeaders } from "axios";
import * as vscode from 'vscode';

// 风向
enum WindDrection {
    E = 1,
    S = 2,
    W = 3,
    N = 4,
    SE = 5,
    SW = 6,
    NW = 7,
    NE = 8
}

/**
 * 天气信息
 */
interface Info {
    /**
     * 温度
     */
    temperature?: number;
    /**
     * 风力等级
     */
    windGrade?: string;
    /**
     * 风向
     */
    windDrection?: string;
    /**
     * 天气（比如是晴天还是雨天之类的）
     */
    weather?: string;
    /**
     * 白天
     */
    weatherDay?: string;
    /**
     * 晚上
     */
    weatherNight?: string;
    /**
     * 天气的详细信息
     */
    bodytempInfo?: string;
}

/**
 * 爬虫类，爬取公开天气信息
 */
export class Spider {
    url: string = '';
    headers: AxiosRequestHeaders = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44"
    };
    city: string;
    info: Info = {};
    constructor(city: string, headers?: AxiosRequestHeaders) {
        this.city = city;
        this.url = `http://weathernew.pae.baidu.com/weathernew/pc?query=${encodeURIComponent(this.city + '天气')}&srcid=4982&city_name=${encodeURIComponent(this.city)}`;
        if (headers) {
            this.headers = headers;
        }
        this.Init();
    }

    Init = () => {
        try {
            axios({
                url: this.url,
                method: "GET",
                headers: this.headers
            }).then(({ data }) => {
                // 天气数据在script标签中的data["weather"]中
                const weatherDataReg = /data\["weather"\]=([\s\S]+?);/;
                let obj = data.match(weatherDataReg)[1];
                const weatherData = JSON.parse(decodeURIComponent(obj));

                this.info = {
                    temperature: parseInt(weatherData.temperature),
                    windGrade: weatherData.wind_power,
                    windDrection: weatherData.wind_direction,
                    weather: weatherData.weather,
                    weatherDay: weatherData.weather_day,
                    weatherNight: weatherData.weather_night,
                    bodytempInfo: weatherData.bodytemp_info,
                }
            }).catch(err => {
                vscode.window.showErrorMessage('爬取天气失败，请确认城市填写正确');
            })
        } catch (error) {
            vscode.window.showErrorMessage('爬取天气失败，请确认城市填写正确');
        }
    }
};

