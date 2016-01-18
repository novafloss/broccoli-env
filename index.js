exports.getEnv = getEnv
exports.setEnvs = setEnvs

var envs = ['production', 'development']

function getEnv () {
  var env = process.env.BROCCOLI_ENV || 'development'

  if (! (envs.indexOf(env) > -1) ) {
    throw new Error('Environment set to "' + env + '", but BROCCOLI_ENV only accepts one of the following values: ' + envs.join(', '))
  }

  return env
}

function setEnvs(e) {
  envs = e;
}
