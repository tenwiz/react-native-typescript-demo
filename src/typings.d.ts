declare module 'redux-freeze';

declare module 'environment' {
  const value: {
    api: {
      shows: string;
      episodes: string;
      cast: string;
    };
    isDevelopment: boolean;
    isProduction: boolean;
    isTesting?: boolean;
  };

  export default value;
}
