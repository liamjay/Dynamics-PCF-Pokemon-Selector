import * as _ from "underscore";
import { RegExConstants } from "./constants/RegExConstants";

export class It
{
    /**
     * @method isNotNull
     * @description Returns true if the given value is not null
     * @param {T} value
     * @returns {boolean}
     */
    public static isNotNull<T>(value: T): boolean
    {
        return value !== null;
    }

    /**
     * @method isNotUndefined
     * @description Returns true if the given value is not undefined
     * @param {T} value
     * @returns {boolean}
     */
    public static isNotUndefined<T>(value: T): boolean
    {
        return value !== undefined;
    }

    /**
     * @method isNotNullOrUndefined
     * @description Returns true if the given value is not null or undefined
     * @param {T} value
     * @returns {boolean}
     */
    public static isNotNullOrUndefined<T>(value: T): boolean
    {
        return It.isNotUndefined(value) && It.isNotNull(value);
    }

    /**
     * @method isNull
     * @description Returns true if the given value is null
     * @param {T} value
     * @returns {boolean}
     */
    public static isNull<T>(value: T): boolean
    {
        return value === null;
    }

    /**
     * @method isUndefined
     * @description Returns true if the given value is undefined
     * @param {T} value
     * @returns {boolean}
     */
    public static isUndefined<T>(value: T): boolean
    {
        return value === undefined;
    }

    /**
     * @method isNullOrUndefined
     * @description Returns true if the given value is null or undefined
     * @param {T} value
     * @returns {boolean}
     */
    public static isNullOrUndefined<T>(value: T): boolean
    {
        return It.isUndefined(value) || It.isNull(value);
    }

    /**
     * @method isNotAPopulatedArray
     * @description Returns true if the given array is null/undefined or not populated with any elements
     * @param {Array<T>} array
     * @returns {boolean}
     */
    public static isNotAPopulatedArray<T>(array: Array<T>): boolean
    {
        return (It.isNullOrUndefined(array) || !Array.isArray(array) || !(array.length > 0));
    }

    /**
     * @method isAPopulatedArray
     * @description Returns true if the given array is not null/undefined and is populated with one or more elements
     * @param {Array<T>} array
     * @returns {boolean}
     */
    public static isAPopulatedArray<T>(array: Array<T>): boolean
    {
        return (It.isNotNullOrUndefined(array) && Array.isArray(array) && array.length > 0);
    }

    /**
     * @method isAnEmptyString
     * @description Returns true if the given string is null/undefined and has no characters
     * @param {string} value
     * @returns {boolean}
     */
    public static isAnEmptyString(value: string): boolean
    {
        return It.isNotNullOrUndefined(value) && typeof value === "string" &&  value.trim().length === 0;
    }

    /**
     * @method isNotAPopulatedString
     * @description Returns true if the given string is not populated with characters
     * @param {string} value The value to check
     * @returns {boolean}
     */
    public static isNotAPopulatedString(value: string): boolean
    {
        return It.isNullOrUndefined(value) || It.isAnEmptyString(value);
    }

    /**
     * Returns true if the given string is populated
     *
     * @static
     * @param {string} value The value to check
     * @returns {boolean}
     * @memberof It
     */
    public static isAPopulatedString(value: string): boolean
    {
        return !It.isNotAPopulatedString(value);
    }

    /**
     * Returns true if the given object is empty
     *
     * @static
     * @param {Object} obj The value to check
     * @returns {boolean}
     * @memberof It
     */
    public static isAnEmptyObject(obj: Object): boolean
    {
        return this.isNotNullOrUndefined(obj) && Object.keys(obj).length === 0;
    }

    /**
     * Returns true if the given object is populated
     *
     * @static
     * @param {Object} obj The value to check
     * @returns {boolean}
     * @memberof It
     */
    public static isNotAnEmptyObject(obj: Object): boolean
    {
        return this.isNotNullOrUndefined(obj) && Object.keys(obj).length !== 0;
    }

    /**
     * @method isAPopulatedArrayWithValidElements
     * @description Returns true if the given array does not contain invalid elements like null, undefined or empty string at
     * any place of the array
     * @param {Array<T>} array
     * @returns {boolean}
     */
    public static isAPopulatedArrayWithValidElements<T>(array: Array<T>): boolean
    {
        if (this.isNotAPopulatedArray(array))
        {
            return false;
        }

        const isValid = array.every(item =>
        {
            if (typeof item === "string")
            {
                return It.isAPopulatedString(item);
            }
            else
            {
                return this.isNotNullOrUndefined(item);
            }


        });

        return isValid;
    }

    /**
     * @method isNotAPopulatedArrayWithValidElements
     * @description Returns true if the given array contains invalid elements like null, undefined or empty string at any place of the array
     * @param {Array<T>} array
     * @returns {boolean}
     */
    public static isNotAPopulatedArrayWithValidElements<T>(array: Array<T>): boolean
    {
        return !this.isAPopulatedArrayWithValidElements(array);
    }


    /**
     * @method isArrayOfObjects
     * @description Returns true if the given array contains object
     * @param {Array<T>} array
     * @returns {boolean}
     */
    public static isArrayOfObjects<T>(array: Array<T>): boolean
    {
        let isValid: boolean = false;

        if (It.isNotAPopulatedArray(array))
        {
            return false;
        }

        array.some(item =>
        {
            if (typeof item === "object")
            {
                return isValid = true;
            }
        });

        return isValid;
    }

    /**
     * @description Returns true if the provided value is an object
     *
     * @static
     * @template T
     * @param {T} value
     * @returns {boolean}
     * @memberof It
     */
    public static isAnObject<T>(value: T): boolean
    {
        return It.isNotNullOrUndefined(value) && typeof value === "object";
    }

    /**
     * @description Returns true if the provided value is not an object
     *
     * @static
     * @template T
     * @param {T} value
     * @returns {boolean}
     * @memberof It
     */
    public static isNotAnObject<T>(value: T): boolean
    {
        return !It.isAnObject(value);
    }

    /**
     * @description Returns true if the provided object is instantiated and has the deep property (by dot notation string) instantiated
     *
     * @static
     * @param {object} obj
     * @param {string} path
     * @returns {boolean}
     * @memberof It
     */
    public static hasDeepPropertySet(obj: object, path: string): boolean
    {
        if (It.isNullOrUndefined(obj) || It.isNotAPopulatedString(path))
        {
            return false;
        }

        const pathAsArray = path.split(".");

        const hasPropertyAtPathFunction = _.property(pathAsArray);

        return It.isNotNullOrUndefined(hasPropertyAtPathFunction(obj));
    }

     /** @method isNotAPopulatedGuid
     *
     * @description Validate that the provided string is not a populated Guid
     *
     * @param {string} item String to be validated
     *
     * @returns boolean
     */
    public static isNotAPopulatedGuid(item: string): boolean
    {
        if (It.isNullOrUndefined(item))
        {
            return true;
        }

        const guidRegEx: RegExp = new RegExp(RegExConstants.GuidPattern, "i");

        const isValid: boolean = guidRegEx.test(item);

        return !isValid;
    }
}
