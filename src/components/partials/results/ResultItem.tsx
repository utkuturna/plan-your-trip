import styles from './ResultItem.module.scss';
import { FunctionComponent } from 'react';

export interface IResultItem {
  id: number;
  image: string;
  title: string;
  summary: string;
  price: number;
  product_url: string;
  discount_percentage?: number;
}

const ResultItem: FunctionComponent<IResultItem> = ({
  id,
  image,
  title,
  summary,
  price,
  product_url,
  discount_percentage,
}) => {
  let finalPrice = price;
  if (discount_percentage) {
    finalPrice = price - (price * discount_percentage) / 100;
  }

  return (
    <div className={styles.container}>
      <a
        href={product_url}
        className={styles.link}
        target="_blank"
        title={`Check out ${title} on tiqets website!`}
      />
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{summary}</div>
        <div className={styles.price}>
          <span className={finalPrice !== price ? styles.sale : styles.regular}>
            {finalPrice.toLocaleString('nl-NL', {
              style: 'currency',
              currency: 'EUR',
            })}
          </span>
          {finalPrice !== price && (
            <span className={styles.old}>
              {price.toLocaleString('nl-NL', {
                style: 'currency',
                currency: 'EUR',
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
