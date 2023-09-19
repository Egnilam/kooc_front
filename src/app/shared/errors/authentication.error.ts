export class AuthenticationError extends Error {
  statusCode = 401;

  constructor(message: string) {
    super(message);
  }
}
