export default function Project({ index, title, setModal, subtitle, tech }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <div className="projectHeader">
        <h2>{title}</h2>

        <div className="tech">
          {tech.map((item) => (
            <div className="tool">{item}</div>
          ))}
        </div>
      </div>
      <div className="projectBody">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
