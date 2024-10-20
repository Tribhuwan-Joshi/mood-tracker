const errorHandler = (err, req, res, next) => {
  console.error(err); // we can use the errors specifically but for now I am consoling it.
  const statusCode = err.status || 500;

  // Send the response back to the client
  res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected error occurred",
  });
};

module.exports = { errorHandler };
