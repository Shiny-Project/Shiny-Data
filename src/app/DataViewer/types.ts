export type WeatherMeasurements =
    | "averagePressure"
    | "averageSeaLevelPressure"
    | "precipitation"
    | "oneHourMaxPrecipitation"
    | "tenMinuteMaxPrecipitation"
    | "averageTemperature"
    | "highestTemperature"
    | "lowestTemperature"
    | "averageHumidity"
    | "lowestHumidity"
    | "averageWindSpeed"
    | "maximumWindSpeed"
    | "maximumWindDirection"
    | "maximumGustSpeed"
    | "maximumGustDirection"
    | "daylightHours"
    | "showFall"
    | "showDepth"
    | "dayWeatherDescription"
    | "nightWeatherDescription";

export enum WeatherMeasurementsMap {
    "averagePressure" = "平均气压",
    "averageSeaLevelPressure" = "平均海平面气压",
    "precipitation" = "降水量",
    "oneHourMaxPrecipitation" = "最大一小时降水",
    "tenMinuteMaxPrecipitation" = "最大十分钟降水",
    "averageTemperature" = "平均气温",
    "highestTemperature" = "最高气温",
    "lowestTemperature" = "最低气温",
    "averageHumidity" = "平均湿度",
    "lowestHumidity" = "最低湿度",
    "averageWindSpeed" = "平均风速",
    "maximumWindSpeed" = "最大风速",
    "maximumWindDirection" = "最大风向",
    "maximumGustSpeed" = "最大瞬时风速",
    "maximumGustDirection" = "最大瞬时风向",
    "daylightHours" = "日照时间",
    "showFall" = "降雪量",
    "showDepth" = "积雪深度",
    "dayWeatherDescription" = "日间天气描述",
    "nightWeatherDescription" = "夜间天气描述",
}
