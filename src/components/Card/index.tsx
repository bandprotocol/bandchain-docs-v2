import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'

export type CardItem = {
  title: string
  description: JSX.Element
  to: string
  target: '_self' | '_blank'
  iconPath?: string
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>
}

export default function Card({
  title,
  description,
  to,
  target,
  iconPath,
  Svg,
}: CardItem): JSX.Element {
  return (
    <a className="card-link" href={to} target={target}>
      <div className="icon">
        {iconPath && <img src={useBaseUrl(`${iconPath}`)} />}
        {Svg && <Svg role="img" />}
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  )
}
