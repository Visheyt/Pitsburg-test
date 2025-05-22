import BillsIcon from '@/shared/svg/BillsIcon.vue'
import CartIcon from '@/shared/svg/CartIcon.vue'
import ChatIcon from '@/shared/svg/ChatIcon.vue'
import DashboardIcon from '@/shared/svg/DashboardIcon.vue'
import RecipesIcon from '@/shared/svg/RecipesIcon.vue'
import SettingsIcon from '@/shared/svg/SettingsIcon.vue'
import StoreIcon from '@/shared/svg/StoreIcon.vue'
import TariffIcon from '@/shared/svg/TariffIcon.vue'

export const navItems = [
  {
    id: 0,
    name: 'Дашборд',
    icon: DashboardIcon,
    dropDown: false,
    routePath: '/dashboard',
  },
  {
    id: 1,
    name: 'Магазин',
    icon: StoreIcon,
    dropDown: false,
    routePath: '/store',
  },
  {
    id: 2,
    name: 'Заказ',
    icon: CartIcon,
    dropDown: true,
    routePath: '/cart',
  },
  {
    id: 3,
    name: 'Платежи',
    icon: BillsIcon,
    dropDown: false,
    routePath: '/bills',
  },
  {
    id: 4,
    name: 'Рецепты',
    icon: RecipesIcon,
    dropDown: false,
    routePath: '/recipes',
  },
  {
    id: 5,
    name: 'Тарифы',
    icon: TariffIcon,
    dropDown: false,
    routePath: '/tariffs',
  },
  {
    id: 6,
    name: 'Чат',
    icon: ChatIcon,
    dropDown: false,
    routePath: '/chat',
  },
  {
    id: 7,
    name: 'Настройки',
    icon: SettingsIcon,
    dropDown: false,
    routePath: '/settings',
  },
] as const
