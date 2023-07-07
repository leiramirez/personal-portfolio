import React from 'react'

function Card(props) {
  return (
    <li className="projects__card">
      <img 
        className="projects__card__img" 
        src={props.src}
        alt={props.alt} 
      />
      <div className="projects__card__info">
        <h3 className="projects__card__title">{props.title}</h3>
        <p className="projects__card__date"><i>{props.date}</i></p>
        <p className="projects__card__desc">{props.desc}</p>
        <p className="projects__card__link__text"><a href={props.link}><strong>{props.link_text}</strong></a></p>
      </div>
    </li>
  )
}

export default Card