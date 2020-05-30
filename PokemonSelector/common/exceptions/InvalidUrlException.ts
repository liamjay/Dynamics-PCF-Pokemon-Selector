/**
 * @class InvalidUrlException
 *
 * @description A custom exception for when an invalid URL is provided
 */
export class InvalidUrlException extends Error
{
    public constructor(message: string)
    {
        super(message);

        this.name = "InvalidUrlException";
    }
}