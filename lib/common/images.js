const definedSizes = {
  '1x': {
    description: 'Image transformed to predefined small size',
    example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879_1x.png',
    type: 'string',
    format: 'uri'
  },
  '2x': {
    description: 'Image transformed to predefined medium size',
    example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879_2x.png',
    type: 'string',
    format: 'uri'
  },
  '3x': {
    description: 'Image transformed to predefined big size',
    example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879_1x.png',
    type: 'string',
    format: 'uri'
  },
  gallery: {
    description: 'Image transformed to predefined size to use in gallery',
    example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879_gallery.png',
    type: 'string',
    format: 'uri'
  },
  avatar: {
    description: 'Image transformed to predefined size to use as "avatar"',
    example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879_avatar.png',
    type: 'string',
    format: 'uri'
  }
}

function getImages (sizes = ['1x', '2x', '3x', 'avatar'], strict = false) {
  const sizesMap = sizes.reduce((memo, size) => {
    if (!definedSizes[size]) {
      throw new ReferenceError(`Size '${size}' is not defined`)
    }

    memo[size] = { ...definedSizes[size] }
    return memo
  }, {})

  return {
    description: 'Images object with URLs of various types of images',
    anyOf: [{
      type: 'object',
      additionalProperties: !strict,
      properties: {
        ...sizesMap,
        original: {
          description: 'Original image',
          example: 'https://my-storage.io/images/f5a3cc72-7fb5-4d2c-bda5-9b2983c7e879.png',
          type: 'string',
          format: 'uri'
        }
      } }, {
      type: 'null'
    }]
  }
}

module.exports = { getImages }
