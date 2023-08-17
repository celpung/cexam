import TesKecermatan from '@/components/TesKecermatan'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Index() {
  const router = useRouter()
  return (
    <TesKecermatan character="angka" onResult={() => router.push('/simbol')} />
  )
}
