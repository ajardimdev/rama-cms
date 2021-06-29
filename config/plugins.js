module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: 'ramablob',
      accountKey: 'NpzEDDsLZFxjkEqocCeMRrDt+aMawqrobXVpfpVl9MzVJ8CfClU8WpWYy00sa7bamuztWXXHD1mlUt9Y7DdNRw==',
      serviceBaseURL: 'https://ramablob.blob.core.windows.net/',
      containerName: 'assets',
      defaultPath: 'assets',
      maxConcurrent: 10
    }
  }
});
