import React from 'react'

import GalleryImage from './GalleryImage'

const GalleryRow = (props) => {
  return (
      <tr>
      {props.images.map(result => (
          <td key={result._source.index}><GalleryImage {...result._source} /></td>
      ))}
      </tr>
 )
}
export default GalleryRow
