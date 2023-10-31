import { ModalContext } from '@/providers/modal-provider'
import { useContext } from 'react'

export const useModal = () => {
  const context = useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}