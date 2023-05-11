import React from 'react'
// import styles from './styles.module.css'
import Card, { CardItem } from '../../Card'

const FeatureList: CardItem[] = [
  {
    title: 'Introduction to BandChain',
    Svg: require('@site/static/img/intro.svg').default,
    description: <>High-level overview of the BandChain</>,
    to: '/',
    target: '_self',
  },
  {
    title: 'Client Libary',
    Svg: require('@site/static/img/dev.svg').default,
    description: <>Learn how to use Band's client library to query data from BandChain</>,
    to: '/',
    target: '_self',
  },
  {
    title: 'Band VRF',
    Svg: require('@site/static/img/intro.svg').default,
    description: (
      <>Learn how to use Band's VRF to generate random numbers in a secure and verifiable way</>
    ),
    to: '/',
    target: '_self',
  },
  {
    title: 'DApps Integration',
    Svg: require('@site/static/img/dapps.svg').default,
    description: <>Discover how to integrate Band's oracle data into your applications</>,
    to: '/',
    target: '_self',
  },
  {
    title: 'Developer Tools',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>
        Learn how to use Band's integration tools to integrate Band's oracle data into your
        applications
      </>
    ),
    to: '/',
    target: '_self',
  },
]

export default function GetStartedSection(): JSX.Element {
  return (
    <section>
      <div className="card-wrapper">
        {FeatureList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
