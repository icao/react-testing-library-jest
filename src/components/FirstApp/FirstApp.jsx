import PropTypes from "prop-types";

function FirstApp({ title, subtitle }) {
  return (
    <div className="app">
      <header>
        <h1 data-testid="test-title"> {title} </h1>
        <h2 data-testid="test-subtitle">{subtitle}</h2>
        <h3>{subtitle}</h3>
        <p>{subtitle}</p>
      </header>
    </div>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  subtitle: "soy un subtitulo",
};

export default FirstApp;
