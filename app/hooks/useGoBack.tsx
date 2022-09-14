import { useNavigate } from '@remix-run/react';
import { useCallback } from 'react';

export default function useGoBack() {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return goBack;
}
