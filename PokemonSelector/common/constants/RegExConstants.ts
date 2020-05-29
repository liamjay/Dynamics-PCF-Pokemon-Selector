/**
 * @class RegExConstants
 *
 * @description List of constants related to regular expression
 */
export class RegExConstants
{
    /**
     * @property GuidPattern
     *
     * @type {string}
     *
     * @description Regular expression for the structure of a Guid
     */
    public static readonly GuidPattern: string = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$";
}
