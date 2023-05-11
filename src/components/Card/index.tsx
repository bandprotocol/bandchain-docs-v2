import React from 'react'

export type CardItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
  to: string
  target: '_self' | '_blank'
}

export default function Card({ title, Svg, description, to, target }: CardItem): JSX.Element {
  return (
    <a className="card-link" href={to} target={target}>
      <div className="icon">
        <Svg role="img" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  )
}
