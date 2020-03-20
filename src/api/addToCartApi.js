export function executeRules(selectedChoices, success = true) {

  console.log('**** executeRules', selectedChoices);
  return new Promise((resolve, reject) =>
    setTimeout(() => success
      ? resolve(true)
      : reject({ message: 'Execute rules failed' }), 2000));
}

export function createConfiguration(selectedChoices, success = true) {

  console.log('**** createConfiguration', selectedChoices);
  return new Promise((resolve, reject) =>
    setTimeout(() => success
      ? resolve('AF2D5038-C866-4606-B29F-794C96F667B2')
      : reject({ message: 'Create configuration failed' }), 6000));
}

export function getSkuMap(selectedChoices, success = true) {

  console.log('**** getSkuMap', selectedChoices);
  return new Promise((resolve, reject) =>
    setTimeout(() => success
      ? resolve({ sku: '22899182' })
      : reject({ message: 'Get sku failed' }), 2000));
}


export function sendToThdCart(configurationGuid, sku, success = true) {

  const payload = {
    configurationGuid,
    sku,
  }

  console.log('**** sendToThdCart', payload);
  return new Promise((resolve, reject) =>
    setTimeout(() => success
      ? resolve('9090990')
      : reject({ message: 'Send to THD cart failed' }), 3000));
}

