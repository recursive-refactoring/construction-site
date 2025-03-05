import { Fragment } from "react";

export const BulletTextPoint = (props) => {
  const { heading, description, points, description2 } = props;
  return (
    <div>
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
          fontSize: "1rem",
          fontWeight: 400,
        }}
      >
        {description}
        <ul
          style={{
            marginBottom: "0px",
            paddingLeft: "1.3rem",
          }}
        >
          {points?.map((point) => (
            <Fragment key={point}>
              <li>
                {point?.heading} {point?.title ?? point}
              </li>
            </Fragment>
          ))}
        </ul>
        {description2}
      </div>
      <br />
    </div>
  );
};
