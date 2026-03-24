const errorMiddleware = (err, req, res, next) => {
  try {
    //Copies properties from err into a new object error
    // This avoids modifying the original error
    let error = { ...err };

    // sometime does NOT properly copy message (and other hidden properties)
    error.message = err.message;

    // mongoose bad object
    if (err.name === "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //mongoose duplicate key
    if (err.code === 11000) {
      const message = "Duplicate field value entered";
      error = new Error(message);
      error.statusCode = 400;
    }

    //validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors || {}).map((val) => val.message);
      error = new Error(message.join(","));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    next(error);
    console.error(error);
  }
};

export default errorMiddleware;
