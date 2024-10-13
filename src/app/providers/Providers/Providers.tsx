import { ReactNode } from 'react';
import {QueryClientProvider} from '../QueryClientProvider';

interface Props {
    children: ReactNode;
}

const Providers = (props: Props) => {
    const {children} = props;
    return (
        <QueryClientProvider>
            {children}
        </QueryClientProvider>
    );
};

export default Providers;
