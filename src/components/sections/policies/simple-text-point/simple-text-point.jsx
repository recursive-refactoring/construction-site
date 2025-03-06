export const SimpleTextPoint = (props) => {
  const { heading, description, phone, address, email } = props;
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
        }}
      >
        {heading}
      </p>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 400,
        }}
      >
        {description}
      </div>
      {address && (
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 400,
          }}
        >
          <span style={{ fontWeight: "600" }}>Address : </span>
          {address}
        </div>
      )}
      {phone && (
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
          }}
        >
          <span style={{ fontWeight: "600" }}>Phone : </span>
          {phone}
        </div>
      )}
      {email && (
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
          }}
        >
          <span style={{ fontWeight: "600" }}>Email : </span>
          {email}
        </div>
      )}
      <br />
    </div>
  );
};
