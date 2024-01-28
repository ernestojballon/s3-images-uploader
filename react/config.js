
const defaultConfig = {
  server:'localhost'
}
const getConfig = () => {
  const env = process.env.ENVIRONMENT || 'development';

  const configs={
    development:{
      ...defaultConfig,
      server:'localhost'
    },
    docker:{
      ...defaultConfig,
      server:'server'
    },
    production:{
      ...defaultConfig,
      server:'localhost'
    }
  }

  return configs[env];
}

export default getConfig;