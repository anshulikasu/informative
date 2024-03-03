import React from "react";
import "./Ourblogs.css";

function Ourblogs() {
  return (
    <div className="ourblogs">
      <div className="ourblogs_one">
        <h2>Our Blogs</h2>
        <p className="p_blog">
          With Cobalt, managing your business finances is effortless,
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making,
          and fingertips. Say no to spreadsheets and tools designed in the 80s.
        </p>
      </div>

      <div className="pcard_tr">
        <div className="pcard_sub">
          <h2>Lorem Ipsum dolor simple</h2>
          <p>
            All your data and finances in one place to provide quick answers and
            make decisions instantly.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Lorem Ipsum dolor simple</h2>
          <p>
            Have full control of your business finances on the go using our
            iOS/Android mobile apps. Because, you know, it’s 2023.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Lorem Ipsum dolor simple</h2>
          <p>
            Choose the alerts you need and receive them via email, mobile or
            Slack. Review and take action in one click.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Lorem Ipsum dolor simple</h2>
          <p>
            Bring your data with our built-in integrations for accounting,
            revenue tools and banking.
          </p>
        </div>
        <div className="pcard_sub">
          <h2>Lorem Ipsum dolor simple</h2>
          <p>
            Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K
            on Windows. Dark mode.
          </p>
        </div>
      </div>
      <button className="bt_ex">Explore More</button>
    </div>
  );
}

export default Ourblogs;
