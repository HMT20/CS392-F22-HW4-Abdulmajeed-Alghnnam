function mooncakeSays(message) {
  let mooncake = '(0_0 i am here)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
