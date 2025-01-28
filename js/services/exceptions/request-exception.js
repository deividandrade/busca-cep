export default function RequestException(menssage) {
  const error = new Error(menssage);
  return error;
}

RequestException.prototype = Object.create(Error.prototype);
