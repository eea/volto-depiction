import imageMiddleware from './middleware/images';

const applyConfig = (config) => {
  // Enable Depiction
  if (config.settings.depiction === undefined) {
    config.settings.depiction = '/image_preview';
  }

  // Depiction express-middleware
  if (__SERVER__) {
    const express = require('express');
    config.settings.expressMiddleware = [
      ...(config.settings.expressMiddleware || []),
      imageMiddleware(express),
    ];
  }

  return config;
};

export default applyConfig;
