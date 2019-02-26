import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GalleryRow from './GalleryRow'

const galleryImage = { _source: {
  "_id": "5c474d1d64e068d4e935ee2b",
  "index": 0,
  "guid": "7eb93dff-6843-4e53-b640-80afd67b92bc",
  "picture": "https://via.placeholder.com/500",
  "user": {
    "name": "Teresa Rivas",
    "gender": "female",
    "age": 35,
    "email": "teresarivas@playce.com",
    "phone": "+1 (987) 444-2286",
    "address": "916 Dunne Place, Roy, Missouri, 4758"
  },
  "tags": [
    "qui",
    "elit",
    "duis",
    "voluptate",
    "non",
    "aute",
    "mollit"
  ]
} }

const images = function() {
  let result = []
  for (let i=0; i < 5; i++) {
    result.push(galleryImage)
  }
  return result
}()

storiesOf('GalleryRow', module)
  .add('default', () => <GalleryRow images={images} />)
