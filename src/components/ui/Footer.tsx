import type { FC } from "react";
import { siteConfig } from "@/config/site";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Footer: FC = () => {
  return (
    <footer className="footer bg-base-200 text-base-content">
      <MaxWidthWrapper className="footer bg-base-200 py-20 text-base-content">
        {siteConfig.footer.map((f, i) => (
          <div key={i}>
            <span className="footer-title">{f.title}</span>
            {f.services.map((s, i) => (
              <a key={i} className="link-hover link">
                {s}
              </a>
            ))}
          </div>
        ))}
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter Your Email please</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="email@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute right-0 top-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
