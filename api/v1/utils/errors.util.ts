export class BadRequestError extends Error {
    constructor(message: string) {
      super(message);
      this.statusCode = 400;
    }
    statusCode;
  }
  
  export class InvalidEmailError extends Error {
    constructor(message: string) {
      super(message);
      this.statusCode = 400;
    }
    statusCode;
  }
  
  export class InvalidCredentialsError extends Error {
    constructor(message: string) {
      super(message);
      this.statusCode = 400;
    }
    statusCode;
  }
  
  export class PasswordStrengthError extends Error {
    constructor(message: string, policy: string) {
      super(message);
      this.policy = policy;
      this.statusCode = 400;
    }
    policy;
    statusCode;
  }
  
  export class UnauthorizedError extends Error {
    constructor(message: string) {
      super(message);
      this.statusCode = 401;
    }
    statusCode;
  }
  
  export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.statusCode = 404;
    }
    statusCode;
  }
  
  export class TooManyAttemptsError extends Error {
    constructor(message: string, description: string) {
      super(message);
      this.description = description;
      this.statusCode = 429;
    }
    description;
    statusCode;
  }
