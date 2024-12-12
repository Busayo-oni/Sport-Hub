import { Link } from "react-router-dom";

export default function SportCard({ sportName, image, description, link }) {
  return (
    <div className="border border-border rounded-lg p-4 shadow-lg">
      <img src={image} alt={`${sportName} image`} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl mt-3 font-semibold">{sportName}</h3>
      <p className="text-sm text-muted mt-2">{description}</p>
      <Link to={link} className="text-primary underline mt-4 inline-block">Read More</Link>
    </div>
  );
}
