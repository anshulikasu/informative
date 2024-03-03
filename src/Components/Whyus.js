import React from "react";
import "./Whyus.css";
import whyusImage from "../images/webinar.png";

function Whyus() {
  return (
    <div className="whyus">
      <h2 className="whyus_hd1">Why Choose Us</h2>
      <h3 className="whyus_hd2">
        Turn Pro to harness the power of AI, make Raycast your own with custom
        themes, keep your Macs in sync and more.
      </h3>
      <div className="whyus_sub">
        <div className="wtcard_sub">
          <img
            src="https://s3-alpha-sig.figma.com/img/7db9/392c/c6a64bda6908650cd8df51fa450af222?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPXdsWnRsqDUhBS7ugJFGt3kVnn5quRBB6N2TO-CYSik3bLj2wUdFcGl3nKBmUIL~SJHqZ4xIhSvU18JU2WE0SWhihFjmAy6bF1ag0pQmApw7ib7b9U2NE24-CDt78B3L51mt9xxxuEWkusxtEkVuFWaEYGkEswcSQagDU~YY6j4GvHSxLl7h22kJGwqE5mbdgBwm4UcsrYUyQ7flJqpYqrl~kUckD4RpiMds9vjckmQP4MkYnTfH6uZPudnFwzgmI6IxCvOmQtFcPAREBz4zTsgm05MjNw0DGqidwy9iETfcZ47vkPpfMKmhUX-kfYt43na1LMjo90hCfq6H8CSFA__"
            alt="Image Description"
          />
          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Ask anything, anytime, anywhere. Stuck while programming? Need some
            copy? Or just have a question - Ask AI.
          </p>
        </div>
        <div className="wtcard_sub">
          <img
            src="https://s3-alpha-sig.figma.com/img/febb/8971/b0fd508555348fe731254ea3ebd338c9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDOJRb4JuA91WHKIQMhIO6N6IkxiGH2sQtGRF5AlA~xXkhPig3CD02k2KvAGhWYC-vY~5iloBHRGDp9Qubb4qpaRb8G3YdggUPzUZvgcti0bbpdhPlIeGz6xTTUY3d~RaI~CQtGK-OcA6g6P3ClZ1BszriGE0WcWCwdFAFTbxAgEMCxt2zu-k08GQot0Ts91lqUGq97Ctj4~wDPvPq5FhIYzFZX6RXeTdJjl9seysq1BPdgzEQbeq8ozu6fiwwWNuA1POfA1uIFZ974t9vqW2TqrLzodchUWpST1LzaYQJIC9wRlnPDBIUMT0koNPozcDuRreOF4nTFupCHlCVYC0Q__"
            alt="Image Description"
          />
          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Keep everything safe and updated across your Macs. Perfect to switch
            between personal and work setup.
          </p>
        </div>
        <div className="wtcard_sub">
          <img
            src="https://s3-alpha-sig.figma.com/img/5df6/8a06/f5ce4736258eb3d116a8d861dfb9f641?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHUIQ0GRWBC6NMnxUBxUh4yQBxUgJRTH8eW-IgEAYu4IBLpjb~ewuF7udK5Gcs8PehsSHz6ZJ4FxLy4tnyc9zDAMxTMF833pkcysiwBFeTWxydoBwk5qhUT~GJ104PZn9bR8gU5ypGU37UKtYbvrsjYeacyfrxjCbT7FS152iRHEmeSDDvwiXv~6dqrvRYWWGV~LW84XzzSkh8X~cLvvJG7s0C7U6TNP1BMwGqgUhuXYNzJJ~fgcYhOmf6tOIxqBaT5AtQ42oaHPVyaEzlOZNMRw6dU3~Qy3Z~vftic1IOYR3GdaqL6I5fNvSMpS7FRbQ-n-wKk-0OjqYmLIAqLXDA__"
            alt="Image Description"
          />
          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Make Raycast your own with gorgeous pre-made themes or design your
            own and share it with the community.
          </p>
        </div>
      </div>
      <div className="why_img">
        <img src={whyusImage} alt="Banner" />
      </div>
    </div>
  );
}

export default Whyus;
