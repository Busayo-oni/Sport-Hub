import { Link } from "react-router-dom";
export default function ArticleCard({ image, title, excerpt, date, link }) {
    return (
      <div className="border border-border rounded-lg p-4 shadow-lg">
        <div><img src={image} alt="" /></div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted">{excerpt}</p>
        <p className="text-xs text-muted mt-2">Published on {date}</p>
        <Link to={link} className="text-primary underline mt-2 inline-block">Read Full Article</Link>
      </div>
    );
  }
  