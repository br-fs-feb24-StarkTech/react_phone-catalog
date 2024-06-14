import { AboutSectionProps } from '../../types/AboutSectionProps';
import './AboutSection.scss';

export const AboutSection: React.FC<AboutSectionProps> = ({ descriptions }) => {
  return (
    <div className="about">
      <h3 className="about__title">About</h3>

      {descriptions.map((description, descriptionIndex) => (
        <div key={descriptionIndex} className="description about__description">
          <div className="description__title">{description.title}</div>
          {description.text.map((text, textIndex) => (
            <div key={textIndex} className="description__text">
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
