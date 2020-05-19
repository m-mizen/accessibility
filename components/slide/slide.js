import React from "react";

export function Slide(props) {
  return (
    <section className="slide" id={props.id}>
      <div className="slide__container">
        <div className="slide__lhs">
          {props.title && <h2 className="slide__title">{props.title}</h2>}
          {props.asides && <div className="slide__asides">{props.asides}</div>}
        </div>
        <div className="slide__rhs">{props.children}</div>
      </div>
      <style jsx>{`
        .slide {
          display: block;
        }
        .slide__container {
          min-height: 100vh;
          display: flex;
          width: 100%;
          max-width: 98%;
          margin: auto;
          flex: 1 1 auto;
          display: flex;
          position: relative;
        }
        .slide__lhs {
          height: 100vh;
          position: sticky;
          top: 0;
          flex: 0 0 25%;
          padding: 0.5rem var(--grid-padding);
          display: flex;
          flex-direction: column;
          border-right: 0.125rem solid currentColor;
          text-align: right;
        }
        .slide__content {
          flex: 1 1 auto;
          display: flex;
        }
      `}</style>
    </section>
  );
}
