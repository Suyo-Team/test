const ERROR_TYPES = {
  ValidationError: (res, error) => {
    const VALIDATION_ERRORS = {
      unique: ({ field }) => ({ msg: `Error, el ${field} debe ser único.`, status: 500 }),
      default: () => ({ msg: 'Error sin manejar, contacta un administrador', status: 500 }),
    };
    const { errors } = error;
    const err = { status: [], errors: [] };

    Object.entries(errors).forEach(([key, value]) => {
      const { kind: type } = value;
      const handler = VALIDATION_ERRORS[type] || VALIDATION_ERRORS.default;
      const { msg, status } = handler({ field: key });
      err.status.push(status);
      err.errors.push(msg);
    });

    return err.errors.length === 1
      ? res.status(err.status[0]).json({ error: err.errors[0] })
      : res.status(err.status[0]).json({ errors: err.errors });
  },
  JsonWebTokenError: (res) => res.status(401).end(),
  DefaultError: (res) => res.status(500).json({ error: 'Error sin manejar, contacta un administrador.'}),
};

const errorHandler = (error, req, res, next) => {
  const { name } = error;
  const handler = ERROR_TYPES[name] || ERROR_TYPES.DefaultError;
  handler(res, error);
};

module.exports = errorHandler;
