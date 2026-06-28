import type { Metadata } from 'next';

import { isAdminAuthConfigured } from '@/shared/lib/admin-auth';

import { AdminLoginForm } from './ui/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Вход в админку',
};

export default function AdminLoginPage() {
  return <AdminLoginForm configured={isAdminAuthConfigured()} />;
}
