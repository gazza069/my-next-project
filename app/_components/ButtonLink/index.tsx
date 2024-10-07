import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function ButtonLink ({href, children}) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}