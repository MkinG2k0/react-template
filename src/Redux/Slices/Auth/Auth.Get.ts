import { useStore } from 'Redux/Store/Redux.hooks'

export const GetAuth = () => useStore((state) => state)['Auth']
