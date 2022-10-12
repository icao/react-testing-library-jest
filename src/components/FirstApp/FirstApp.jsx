import  PropTypes  from "prop-types";

function FirstApp({ title, subtitle }) {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </header>
    </div>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string,
  suntitle: PropTypes.string,
}


export default FirstApp;
