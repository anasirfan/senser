import { SenserLogo, PlayCircleIcon, MailIcon } from '../assets/icons'
import FeatureCard from './FeatureCard'
import BenefitItem from './BenefitItem'

export default function LeftContent({ content, onCtaClick, onVideoClick }) {
  const { headline, description, ctaButton, sectionLabel, featureCards, benefits } = content

  return (
    <div className="left-content">
      <div className="hero-wrapper">
        <div className="header-block">
          <h1 className="headline">
            {headline.prefix}
            <span className="highlight">{headline.highlight}</span>
            {headline.lineBreak && <br />}
            {headline.suffix}{' '}
            <span className="senser-brand">
              <SenserLogo className="senser-logo-icon" />
            </span>
          </h1>
          <p className="description">{description}</p>
        </div>
      </div>

      <div className="cta-wrap">
        <button className="cta-btn" type="button" onClick={onCtaClick}>
          <MailIcon size={16} stroke="#fff" />
          <span>{ctaButton}</span>
        </button>
      </div>
      <div className="hero-curve" />

      <div className="content-wrapper">
        <button className="section-label" type="button" onClick={onVideoClick}>
          <PlayCircleIcon />
          <span className="section-label-text">{sectionLabel}</span>
        </button>

        <div className="feature-cards">
          {featureCards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>

        <div className="mobile-collage">
          <img src="/Mobile2.png" alt="" className="mobile-collage-img" />
        </div>

        <div className="benefits-section">
          <h2 className="benefits-title">{benefits.title}</h2>
          <div className="benefits-list">
            {benefits.items.map((item, i) => (
              <BenefitItem key={i} text={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
