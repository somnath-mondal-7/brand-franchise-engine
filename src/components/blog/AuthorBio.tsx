import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import somnathAsset from "@/assets/team/somnath.png.asset.json";

const AuthorBio = () => {
  return (
    <div className="mt-16 pt-10 border-t border-neutral-200">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img
          src={somnathAsset.url}
          alt="Somnath Mondal"
          className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-[#F15A29]"
        />
        <div className="flex-1">
          <h3
            className="text-2xl font-bold text-neutral-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Somnath Mondal
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Founder of FranchiseLeadsPro. Somnath has spent years helping franchise
            brands across the United States scale through SEO, content marketing, and
            qualified inbound lead generation. He writes about US franchise policy,
            industry news, and the practical realities of growing a franchise system.
          </p>
          <Link to="/about">
            <Button
              variant="outline"
              className="border-neutral-300 text-neutral-900 hover:bg-[#F15A29] hover:text-white hover:border-[#F15A29]"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
