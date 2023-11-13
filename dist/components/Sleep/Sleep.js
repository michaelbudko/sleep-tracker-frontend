"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
require("bootstrap/dist/css/bootstrap.min.css");
const bootstrap_1 = require("bootstrap");
const Sleep = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const [numDays, setNumDays] = (0, react_1.useState)(7);
    const [dateFrom, setDateFrom] = (0, react_1.useState)('');
    const [dateTo, setDateTo] = (0, react_1.useState)('');
    const [riseTime, setRiseTime] = (0, react_1.useState)('');
    const [numCoreSleep, setNumCoreSleep] = (0, react_1.useState)([0, 0, 0]);
    const [numInsomniaSleep, setNumInsomniaSleep] = (0, react_1.useState)([0, 0, 0]);
    const [numGoodSleep, setNumGoodSleep] = (0, react_1.useState)([0, 0, 0]);
    const [avgSleepTime, setAvgSleepTime] = (0, react_1.useState)([0, 0, 0]);
    const [avgTimeInBed, setAvgTimeInBed] = (0, react_1.useState)([0, 0, 0]);
    const [avgSleepEfficiency, setAvgSleepEfficiency] = (0, react_1.useState)([0, 0, 0]);
    const [avgSleepQuality, setAvgSleepQuality] = (0, react_1.useState)([0, 0, 0]);
    const [numDaysWithinRiseTime, setNumDaysWithinRiseTime] = (0, react_1.useState)([0, 0, 0]);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await axios_1.default.get('https://get-form-responses-4ydnoxgsaa-uc.a.run.app/');
                const data = await response.data;
                console.log(data);
                setNumDays(data.num_responses);
                setDateFrom(data.date_from);
                setDateTo(data.date_to);
                setAvgSleepEfficiency(data.avg_sleep_efficiency);
                setAvgSleepQuality(data.avg_sleep_quality);
                setAvgTimeInBed(data.avg_time_in_bed);
                setAvgSleepTime(data.avg_sleep_time);
                setNumCoreSleep(data.num_core_sleep_nights);
                setNumGoodSleep(data.num_good_sleep_nights);
                setNumInsomniaSleep(data.num_insomnia_nights);
                setNumDaysWithinRiseTime(data.num_woke_up_desired_time_nights);
                setRiseTime(data.desired_rise_time);
                // Update other state variables similarly
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: 'menu' },
            react_1.default.createElement(bootstrap_1.Button, null, "View Site")),
        react_1.default.createElement("div", { className: "sleep-container text-center" },
            react_1.default.createElement("div", { className: "text-center d-flex align-items-center justify-content-center mb-3" },
                react_1.default.createElement("div", { className: 'd-inline-block' },
                    react_1.default.createElement("form", null,
                        react_1.default.createElement("label", null,
                            "Desired Rise Time:",
                            react_1.default.createElement("input", { type: "text", value: riseTime + 'am' })))),
                react_1.default.createElement("div", { className: "d-inline-block date-range m-2" },
                    react_1.default.createElement("h3", { style: { whiteSpace: 'nowrap' } },
                        numDays,
                        " Days: from ",
                        dateFrom,
                        " to ",
                        dateTo))),
            react_1.default.createElement("table", { className: "table table-bordered" },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null),
                        react_1.default.createElement("th", null, "Now"),
                        react_1.default.createElement("th", null, "1 Day Ago"),
                        react_1.default.createElement("th", null, "1 Week Ago"))),
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Number of Core Nights of Sleep:"))),
                        react_1.default.createElement("td", null,
                            " ",
                            numCoreSleep[0]),
                        react_1.default.createElement("td", null, numCoreSleep[1]),
                        react_1.default.createElement("td", null, numCoreSleep[2])),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Number of Insomnia Nights:"))),
                        react_1.default.createElement("td", null,
                            " ",
                            numInsomniaSleep[0]),
                        react_1.default.createElement("td", null, numInsomniaSleep[1]),
                        react_1.default.createElement("td", null, numInsomniaSleep[2])),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Number of Nights of Good Sleep:"))),
                        react_1.default.createElement("td", null,
                            " ",
                            numGoodSleep[0]),
                        react_1.default.createElement("td", null, numGoodSleep[1]),
                        react_1.default.createElement("td", null, numGoodSleep[2])),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Average Sleep Time:"))),
                        react_1.default.createElement("td", null, (_a = avgSleepTime[0]) === null || _a === void 0 ? void 0 : _a.toFixed(2)),
                        react_1.default.createElement("td", null, (_b = avgSleepTime[1]) === null || _b === void 0 ? void 0 : _b.toFixed(2)),
                        react_1.default.createElement("td", null, (_c = avgSleepTime[2]) === null || _c === void 0 ? void 0 : _c.toFixed(2))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Average Time in Bed:"))),
                        react_1.default.createElement("td", null, (_d = avgTimeInBed[0]) === null || _d === void 0 ? void 0 : _d.toFixed(2)),
                        react_1.default.createElement("td", null, (_e = avgTimeInBed[1]) === null || _e === void 0 ? void 0 : _e.toFixed(2)),
                        react_1.default.createElement("td", null, (_f = avgTimeInBed[2]) === null || _f === void 0 ? void 0 : _f.toFixed(2))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Average Sleep Efficiency:"))),
                        react_1.default.createElement("td", null, (_g = (avgSleepEfficiency[0] * 100)) === null || _g === void 0 ? void 0 :
                            _g.toFixed(2),
                            "%"),
                        react_1.default.createElement("td", null, (_h = (avgSleepEfficiency[1] * 100)) === null || _h === void 0 ? void 0 :
                            _h.toFixed(2),
                            "%"),
                        react_1.default.createElement("td", null, (_j = (avgSleepEfficiency[2] * 100)) === null || _j === void 0 ? void 0 :
                            _j.toFixed(2),
                            "%")),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Average Sleep Quality:"))),
                        react_1.default.createElement("td", null, (_k = avgSleepQuality[0]) === null || _k === void 0 ? void 0 : _k.toFixed(2)),
                        react_1.default.createElement("td", null, (_l = avgSleepQuality[1]) === null || _l === void 0 ? void 0 : _l.toFixed(2)),
                        react_1.default.createElement("td", null, (_m = avgSleepQuality[2]) === null || _m === void 0 ? void 0 : _m.toFixed(2))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("div", { className: "info text-start ps-5 pt-3" },
                                react_1.default.createElement("th", null, "Number of Days Within Rise Time:"))),
                        react_1.default.createElement("td", null, numDaysWithinRiseTime[0]),
                        react_1.default.createElement("td", null, numDaysWithinRiseTime[1]),
                        react_1.default.createElement("td", null, numDaysWithinRiseTime[2])))))));
};
exports.default = Sleep;
//# sourceMappingURL=Sleep.js.map