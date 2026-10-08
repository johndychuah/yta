import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function LegacyChineseDesk() {
  const router=useRouter();
  useEffect(()=>{void router.replace('/zh/services/china-malaysia-desk');},[router]);
  return <p className="p-8"><Link href="/zh/services/china-malaysia-desk">前往新版中马业务页面</Link></p>;
}
