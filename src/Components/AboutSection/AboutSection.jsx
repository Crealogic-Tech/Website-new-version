import React from "react";

function AboutSection() {
  return (
    <section className="py-20 h-[89vh]">
      <div className="container-xxl">
        <div className="flex flex-cols g-4">
          <div className="tag">
            <img
              src="https://cdn.prod.website-files.com/60530d64d0c48cbd53eb4a84/6694be527e4af33294bbc2d2_PuzzlePiece.svg"
              loading="lazy"
              alt=""
              className="w-10"
            />
            <div className="tag-text">THE SOLUTION</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
