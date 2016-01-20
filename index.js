exports.getEnv = getEnv
exports.setEnvs = setEnvs

var envs = ['development', 'production']

function getEnv () {
  var env = process.env.BROCCOLI_ENV
  if (!env) {
    if (envs.length > 0) {
      env = envs[0];
    }
  }

  if (envs.indexOf(env) === -1) {
    throw new Error('Environment set to "' + env + '", but BROCCOLI_ENV only accepts one of the following values: ' + envs.join(', '))
  }

  return env
}

function setEnvs(e) {
  envs = e;
  return this;
}
