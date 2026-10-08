import './LoadingScreen.css';

interface LoadingScreenProps {
  active: boolean;
}

const LoadingScreen = ({ active }: LoadingScreenProps) => (
  <div
    className={`loader${active ? '' : ' is-done'}`}
    role="status"
    aria-label={active ? 'Loading portfolio' : 'Portfolio loaded'}
    aria-hidden={active ? undefined : true}
  >
    <div className="loader__inner">
      <p className="loader__word">AJI FAIRUS</p>
      <div className="loader__track">
        <div className="loader__bar" />
      </div>
    </div>
  </div>
);

export default LoadingScreen;
