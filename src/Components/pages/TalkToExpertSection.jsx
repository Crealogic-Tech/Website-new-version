import React from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import Button from "../../Components/buttons/Button"; // Ensure the correct import path

function TalkToExpertSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <div className="excellences flex flex-col gap-5 md:flex-row justify-between items-center border border-[#c06c84] rounded-xl p-5">
            <h3 className="text-2xl font-semibold">
              Do You Want to Turn Your Idea into Reality?
            </h3>
            <Link to="/contact"> {/* Changed from `href` to `to` */}
              <Button text="Talk to our experts" className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkToExpertSection;
