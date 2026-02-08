const TourMeta = ({ items }) => {
  return (
    <div className="tour-meta">
      {items.map((item, index) => (
        <div className="meta-item" key={index}>
          <p className="label">{item.label}</p>
          <p className="value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default TourMeta;
