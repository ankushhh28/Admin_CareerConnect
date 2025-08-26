const errorMessages = {
  USER_NOT_FOUND: "User does not exist",
  INVALID_PASSWORD: "Invalid password",
  EMAIL_REQUIRED: "Email is required",
  PASSWORD_REQUIRED: "Password is required",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "You are not allowed to perform this action",
  SERVER_ERROR: "Something went wrong on the server",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  ENROLLMENT_EXIST: "Enrollment number already exists",
};

function errorDecorator(statusCode, key) {
  const message = errorMessages[key] || "Unknown error occurred";
  const error = new Error(message);
  error.statusCode = statusCode;
  error.key = key;
  throw error;
}

module.exports = errorDecorator;
