import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  title: 'Project Title',
  rootClassName: '',
  imageAlt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard1.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard1
