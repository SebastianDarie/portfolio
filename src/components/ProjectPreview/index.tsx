import { h } from 'preact';
import styles from './styles.module.scss';

interface Project {
  url: string;
  layout: string;
  title: string;
  client: string;
  published_at: string;
  img: string;
  description: string;
  tags: string[];
}

const PortfolioPreview: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.titleCard}
        style={{ backgroundImage: `url(${project.img})` }}
      >
        {/* <h1 className={styles.title}>{project.title}</h1> */}
      </div>
      <div className='pa3'>
        <p className={`${styles.desc} mt0 mb2`}>{project.description}</p>
        <div className={styles.tags}>
          Tagged:
          {project.tags.map((t) => (
            <div className={styles.tag} data-tag={t}>
              {t}
            </div>
          ))}
        </div>
        <a className={styles.link} href={project.url}>
          <span className={styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioPreview;
