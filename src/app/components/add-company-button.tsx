'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
