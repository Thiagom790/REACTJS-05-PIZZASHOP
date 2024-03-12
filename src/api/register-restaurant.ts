import { api } from '@/lib/axios'

export interface RegisterRestaurant {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

// Nesse padrão se cria um arquivo para cada função
export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurant) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    phone,
    email,
  })
}
