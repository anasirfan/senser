import { CheckCircleIcon } from '../assets/icons'

export default function BenefitItem({ text }) {
  return (
    <div className="benefit-item">
      <CheckCircleIcon />
      <span>{text}</span>
    </div>
  )
}
