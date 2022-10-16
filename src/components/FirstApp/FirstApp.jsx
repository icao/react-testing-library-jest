import PropTypes from "prop-types";

function FirstApp({ title, subtitle }) {
  return (
    <div className="app">
      <header>
        <h1 data-testid="test-title"> {title} </h1>
        <h2 id="subtitle">{subtitle}</h2>
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
