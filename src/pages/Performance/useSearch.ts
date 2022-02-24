import { getPerformance } from '@/services/performance'

export type SearchForm = { userName?: string; orderDate: string[] }

export const useSearch = (form: FormState<SearchForm, string | string[] | undefined>) => {
  const onSearch = async () => {
    const body = {
      userName: form.userName[0],
      orderDate: form.orderDate[0],
    }
    
    const res = await getPerformance(body)
  }

  return {
    onSearch,
  }
}