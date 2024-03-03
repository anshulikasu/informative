import React from "react";
import "./Productwork.css";

function Productworks() {
  return (
    <div className="productworks">
      <div className="p_container">
        <h2>How Our Product Works</h2>
        <div>
          <p className="p_p">
            With Cobalt, managing your business finances is effortless,
            empowering, and anything but boring. Our intuitive platform brings
            clarity to your cash flow, simplifies your financial
            decision-making, and fingertips. Say no to spreadsheets and tools
            designed in the 80s
          </p>
        </div>
      </div>
      <div className="pcard_tr">
        <div className="pcard_sub">
          <h2>Step 1</h2>
          <p>
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Step 2</h2>
          <p>
            Every end-to-end project of ours begins with a bespoke pre-build
            strategy. From brand ID consultation to in-depth code reviews we're
            here to set the stage for success.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Step 3</h2>
          <p>
            After we have a comprehensive understanding of your brand, we'll be
            ready to move onto design. Each page or asset will be designed,
            reviewed, and given your stamp of approval.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Step 4</h2>
          <p>
            Whether we've just finished designing your new site or you're
            handing off finished designs for us to develop in Webflow, we're
            here to apply our trusted development process to your project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Productworks;
