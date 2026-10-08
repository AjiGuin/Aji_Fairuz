interface Props {
  label?: string;
}

const ArrowIcon = ({ label = '' }: Props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden={label ? false : true}
    focusable="false"
  >
    <path
      d="M4 12h15M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
