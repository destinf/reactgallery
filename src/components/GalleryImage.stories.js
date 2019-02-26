import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryImage from './GalleryImage'
import 'bootstrap/dist/css/bootstrap.css'

export const galleryImage = {
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
}

storiesOf('GalleryImage', module)
  .add('default', () => <GalleryImage {...galleryImage} />)
