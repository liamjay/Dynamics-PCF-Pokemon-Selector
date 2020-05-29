/**
 * @class InvalidRequestException
 *
 * @description A custom exception for when an invalid request is provided
 */
export class InvalidRequestException extends Error
{
    public constructor(message: string)
    {
        super(message);

        this.name = "InvalidRequestException";
    }
}
