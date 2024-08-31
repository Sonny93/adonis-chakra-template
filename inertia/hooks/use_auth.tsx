import { usePage } from '@inertiajs/react';
import type { InertiaPage } from '~/types/inertia';

const useAuth = () => usePage<InertiaPage>().props.auth;
export default useAuth;
