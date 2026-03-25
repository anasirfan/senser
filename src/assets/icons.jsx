/**
 * All SVG icons used in the app.
 * To replace any icon, swap the SVG content inside its component.
 * Each export is a standalone React component.
 */

export const SenserLogo = ({ className }) => (
  <img src="/logo.png" alt="SenseR" className={className} />
)

export const PlayCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#0091FF" strokeWidth="2" fill="none" />
    <polygon points="10,8 16,12 10,16" fill="#0091FF" />
  </svg>
)

export const EmployeeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0091FF" strokeWidth="1.5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const StoreIcon = () => (
  <img src="/Store Insights.svg" alt="" width="20" height="20" />
)

export const MailIcon = ({ size = 16, stroke = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 16 13" fill="none">
    <path d="M15.5 2C15.5 1.175 14.825 0.5 14 0.5H2C1.175 0.5 0.5 1.175 0.5 2M15.5 2V11C15.5 11.825 14.825 12.5 14 12.5H2C1.175 12.5 0.5 11.825 0.5 11V2M15.5 2L8 7.25L0.5 2" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CheckCircleIcon = ({ size = 20, stroke = '#0091FF' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

/**
 * Maps feature card icon names (from content JSON) to icon components.
 * Add new entries here when adding new feature card types.
 */
export const featureIcons = {
  employee: EmployeeIcon,
  store: StoreIcon,
}
