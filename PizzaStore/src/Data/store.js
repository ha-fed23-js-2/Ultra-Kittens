import { create } from 'zustand'

const useMyStore = create(set => ({
    username: 'Nisse',
    balance: 0
}))
