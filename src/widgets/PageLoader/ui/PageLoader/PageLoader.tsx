import { Loader } from '@/shared/ui/Loader';
import styles from './PageLoader.module.scss';


export const PageLoader = () => (
    <div className={styles.PageLoader}>
        <Loader />
    </div>
);
