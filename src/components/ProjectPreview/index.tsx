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
  live_url: string;
}

const PortfolioPreview: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <a href={project.live_url} target='_blank' className={styles.projectLink}>
        <h2>{project.title}</h2>
      </a>
      {/* <article className={styles.article}>
        <a href={project.live_url} target='_blank'>
          <img src={project.img} className={styles.projectImg} />
        </a>
        <a href='' target='_blank'></a>
        <a href='' target='_blank'></a>
        <p></p>
      </article> */}
      <div className={styles.card}>
        <div
          className={styles.titleCard}
          style={{ backgroundImage: `url(${project.img})` }}
        ></div>
        <div className='pa3'>
          <p className={`${styles.desc} mt0 mb2`}>{project.description}</p>
          <div className={styles.tags}>
            Highlights:
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
    </>
  );
};

export default PortfolioPreview;
