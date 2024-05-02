import { Icon } from "@/components/ui/Icon";
import { FORMATS } from "@/lib/data/challenges";

export function FormatGrid() {
  return (
    <div className="fgrid">
      {FORMATS.map((format) => (
        <div key={format.title} className="fmt">
          <span className="fmt-i">
            <Icon name={format.icon} />
          </span>
          <div className="fmt-top">
            <h4>{format.title}</h4>
            <small>{format.duration}</small>
          </div>
          <p>{format.body}</p>
        </div>
      ))}
    </div>
  );
}
