import * as $protobuf from "protobufjs";
/** Properties of a HistoryWeatherDataResponse. */
export interface IHistoryWeatherDataResponse {
    /** HistoryWeatherDataResponse blockId */
    blockId?: number | null;

    /** HistoryWeatherDataResponse location */
    location?: string | null;

    /** HistoryWeatherDataResponse data */
    data?: IHistoryWeatherDataResponseItem[] | null;
}

/** Represents a HistoryWeatherDataResponse. */
export class HistoryWeatherDataResponse implements IHistoryWeatherDataResponse {
    /**
     * Constructs a new HistoryWeatherDataResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHistoryWeatherDataResponse);

    /** HistoryWeatherDataResponse blockId. */
    public blockId: number;

    /** HistoryWeatherDataResponse location. */
    public location: string;

    /** HistoryWeatherDataResponse data. */
    public data: IHistoryWeatherDataResponseItem[];

    /**
     * Creates a new HistoryWeatherDataResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HistoryWeatherDataResponse instance
     */
    public static create(properties?: IHistoryWeatherDataResponse): HistoryWeatherDataResponse;

    /**
     * Encodes the specified HistoryWeatherDataResponse message. Does not implicitly {@link HistoryWeatherDataResponse.verify|verify} messages.
     * @param message HistoryWeatherDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHistoryWeatherDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HistoryWeatherDataResponse message, length delimited. Does not implicitly {@link HistoryWeatherDataResponse.verify|verify} messages.
     * @param message HistoryWeatherDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHistoryWeatherDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HistoryWeatherDataResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HistoryWeatherDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): HistoryWeatherDataResponse;

    /**
     * Decodes a HistoryWeatherDataResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HistoryWeatherDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): HistoryWeatherDataResponse;

    /**
     * Verifies a HistoryWeatherDataResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HistoryWeatherDataResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HistoryWeatherDataResponse
     */
    public static fromObject(object: { [k: string]: any }): HistoryWeatherDataResponse;

    /**
     * Creates a plain object from a HistoryWeatherDataResponse message. Also converts values to other types if specified.
     * @param message HistoryWeatherDataResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: HistoryWeatherDataResponse,
        options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HistoryWeatherDataResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a HistoryWeatherDataResponseItem. */
export interface IHistoryWeatherDataResponseItem {
    /** HistoryWeatherDataResponseItem time */
    time?: string | null;

    /** HistoryWeatherDataResponseItem averagePressure */
    averagePressure?: number | null;

    /** HistoryWeatherDataResponseItem averageSeaLevelPressure */
    averageSeaLevelPressure?: number | null;

    /** HistoryWeatherDataResponseItem precipitation */
    precipitation?: number | null;

    /** HistoryWeatherDataResponseItem oneHourMaxPrecipitation */
    oneHourMaxPrecipitation?: number | null;

    /** HistoryWeatherDataResponseItem tenMinuteMaxPrecipitation */
    tenMinuteMaxPrecipitation?: number | null;

    /** HistoryWeatherDataResponseItem averageTemperature */
    averageTemperature?: number | null;

    /** HistoryWeatherDataResponseItem highestTemperature */
    highestTemperature?: number | null;

    /** HistoryWeatherDataResponseItem lowestTemperature */
    lowestTemperature?: number | null;

    /** HistoryWeatherDataResponseItem averageHumidity */
    averageHumidity?: number | null;

    /** HistoryWeatherDataResponseItem lowestHumidity */
    lowestHumidity?: number | null;

    /** HistoryWeatherDataResponseItem averageWindSpeed */
    averageWindSpeed?: number | null;

    /** HistoryWeatherDataResponseItem maximumWindSpeed */
    maximumWindSpeed?: number | null;

    /** HistoryWeatherDataResponseItem maximumWindDirection */
    maximumWindDirection?: string | null;

    /** HistoryWeatherDataResponseItem maximumGustSpeed */
    maximumGustSpeed?: number | null;

    /** HistoryWeatherDataResponseItem maximumGustDirection */
    maximumGustDirection?: string | null;

    /** HistoryWeatherDataResponseItem daylightHours */
    daylightHours?: number | null;

    /** HistoryWeatherDataResponseItem showFall */
    showFall?: number | null;

    /** HistoryWeatherDataResponseItem showDepth */
    showDepth?: number | null;

    /** HistoryWeatherDataResponseItem dayWeatherDescription */
    dayWeatherDescription?: string | null;

    /** HistoryWeatherDataResponseItem nightWeatherDescription */
    nightWeatherDescription?: string | null;

    /** HistoryWeatherDataResponseItem date */
    date?: number | null;
}

/** Represents a HistoryWeatherDataResponseItem. */
export class HistoryWeatherDataResponseItem implements IHistoryWeatherDataResponseItem {
    /**
     * Constructs a new HistoryWeatherDataResponseItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHistoryWeatherDataResponseItem);

    /** HistoryWeatherDataResponseItem time. */
    public time: string;

    /** HistoryWeatherDataResponseItem averagePressure. */
    public averagePressure: number;

    /** HistoryWeatherDataResponseItem averageSeaLevelPressure. */
    public averageSeaLevelPressure: number;

    /** HistoryWeatherDataResponseItem precipitation. */
    public precipitation: number;

    /** HistoryWeatherDataResponseItem oneHourMaxPrecipitation. */
    public oneHourMaxPrecipitation: number;

    /** HistoryWeatherDataResponseItem tenMinuteMaxPrecipitation. */
    public tenMinuteMaxPrecipitation: number;

    /** HistoryWeatherDataResponseItem averageTemperature. */
    public averageTemperature: number;

    /** HistoryWeatherDataResponseItem highestTemperature. */
    public highestTemperature: number;

    /** HistoryWeatherDataResponseItem lowestTemperature. */
    public lowestTemperature: number;

    /** HistoryWeatherDataResponseItem averageHumidity. */
    public averageHumidity: number;

    /** HistoryWeatherDataResponseItem lowestHumidity. */
    public lowestHumidity: number;

    /** HistoryWeatherDataResponseItem averageWindSpeed. */
    public averageWindSpeed: number;

    /** HistoryWeatherDataResponseItem maximumWindSpeed. */
    public maximumWindSpeed: number;

    /** HistoryWeatherDataResponseItem maximumWindDirection. */
    public maximumWindDirection: string;

    /** HistoryWeatherDataResponseItem maximumGustSpeed. */
    public maximumGustSpeed: number;

    /** HistoryWeatherDataResponseItem maximumGustDirection. */
    public maximumGustDirection: string;

    /** HistoryWeatherDataResponseItem daylightHours. */
    public daylightHours: number;

    /** HistoryWeatherDataResponseItem showFall. */
    public showFall: number;

    /** HistoryWeatherDataResponseItem showDepth. */
    public showDepth: number;

    /** HistoryWeatherDataResponseItem dayWeatherDescription. */
    public dayWeatherDescription: string;

    /** HistoryWeatherDataResponseItem nightWeatherDescription. */
    public nightWeatherDescription: string;

    /** HistoryWeatherDataResponseItem date. */
    public date: number;

    /**
     * Creates a new HistoryWeatherDataResponseItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HistoryWeatherDataResponseItem instance
     */
    public static create(properties?: IHistoryWeatherDataResponseItem): HistoryWeatherDataResponseItem;

    /**
     * Encodes the specified HistoryWeatherDataResponseItem message. Does not implicitly {@link HistoryWeatherDataResponseItem.verify|verify} messages.
     * @param message HistoryWeatherDataResponseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHistoryWeatherDataResponseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HistoryWeatherDataResponseItem message, length delimited. Does not implicitly {@link HistoryWeatherDataResponseItem.verify|verify} messages.
     * @param message HistoryWeatherDataResponseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
        message: IHistoryWeatherDataResponseItem,
        writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HistoryWeatherDataResponseItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HistoryWeatherDataResponseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): HistoryWeatherDataResponseItem;

    /**
     * Decodes a HistoryWeatherDataResponseItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HistoryWeatherDataResponseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): HistoryWeatherDataResponseItem;

    /**
     * Verifies a HistoryWeatherDataResponseItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HistoryWeatherDataResponseItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HistoryWeatherDataResponseItem
     */
    public static fromObject(object: { [k: string]: any }): HistoryWeatherDataResponseItem;

    /**
     * Creates a plain object from a HistoryWeatherDataResponseItem message. Also converts values to other types if specified.
     * @param message HistoryWeatherDataResponseItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
        message: HistoryWeatherDataResponseItem,
        options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HistoryWeatherDataResponseItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
