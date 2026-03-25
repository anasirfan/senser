import { featureIcons } from '../assets/icons'

export default function FeatureCard({ icon, title, items }) {
  const Icon = featureIcons[icon]

  return (
    <div className="feature-card">
      <div className="feature-card-header">
        {Icon && <Icon />}
        <span className="feature-card-title">{title}</span>
      </div>
      <ul className="feature-card-body">
        {items.map((item, i) => (
          <li key={i}>
            <span className="bullet" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
