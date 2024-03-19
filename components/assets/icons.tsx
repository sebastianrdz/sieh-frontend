import {
  LucideProps,
  Moon,
  SunMedium,
  Settings,
  BarChart2,
  Folder,
  Wallet,
  Contact,
  Users,
  LogOut,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronsLeftIcon,
  ChevronRight,
  ChevronsRightIcon,
  Plus,
  MoreHorizontal,
  MoreVertical,
  Settings2,
  ChevronsUpDown,
  ArrowDown,
  ArrowUp,
  Trash,
  Edit,
  Eye,
  Download,
  CalendarDaysIcon,
  type XIcon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  settings: Settings,
  barChart: BarChart2,
  folder: Folder,
  wallet: Wallet,
  contact: Contact,
  users: Users,
  logOut: LogOut,
  helpCircle: HelpCircle,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronsLeftIcon: ChevronsLeftIcon,
  chevronRight: ChevronRight,
  chevronsRightIcon: ChevronsRightIcon,
  plus: Plus,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  settings2: Settings2,
  chevronsUpDown: ChevronsUpDown,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  trash: Trash,
  edit: Edit,
  eye: Eye,
  download: Download,
  calendarDaysIcon: CalendarDaysIcon,
  logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 238 240"
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      {...props}
    >
      <path
        d="M119 21.883C119 43.732 119.004 43.768 121.25 44.37C122.488 44.701 125.137 44.979 127.138 44.986C132.722 45.007 147.773 49.717 154.818 53.648C158.292 55.587 163.494 59.095 166.378 61.443L171.62 65.713L174.485 62.848C178.776 58.557 183.172 57.841 203.089 58.188C212.941 58.36 221.002 58.201 221.001 57.837C220.998 56.022 208.345 40.6 201.392 33.936C187.571 20.691 173.345 12.078 155.415 6.101C147.01 3.299 129.007 0 122.122 0H119V21.883ZM97.433 3.314C97.135 4.089 97.029 7.374 97.196 10.612L97.5 16.5H104H110.5V9.5V2.5L104.237 2.202C99.562 1.979 97.837 2.261 97.433 3.314ZM11.232 4.168C9.705 5.695 9.551 21.292 11.035 24.066C11.945 25.766 13.2 26 21.413 26C28.193 26 31.073 25.617 31.915 24.602C32.669 23.694 32.974 19.758 32.787 13.352L32.5 3.5L22.482 3.218C15.544 3.022 12.086 3.314 11.232 4.168ZM55 19C53.184 20.816 53 22.333 53 35.5C53 54.883 52.097 54 71.929 54C84.167 54 87.14 53.717 88.429 52.429C89.72 51.137 90 48.135 90 35.584C90 22.057 89.791 20.121 88.171 18.655C86.645 17.273 83.92 17 71.671 17C58.333 17 56.818 17.182 55 19ZM0 25.93C0 27.487 0.638 28 2.573 28C5.856 28 5.564 24.655 2.24 24.18C0.539 23.938 0 24.359 0 25.93ZM12 37V42.11L16.75 41.805L21.5 41.5V37V32.5L16.75 32.195L12 31.89V37ZM27.607 42.582C26.552 45.332 26.95 53.55 28.2 54.8C28.86 55.46 31.695 56 34.5 56C37.305 56 40.14 55.46 40.8 54.8C42.05 53.55 42.448 45.332 41.393 42.582C40.517 40.299 28.483 40.299 27.607 42.582ZM99.416 44.358C99.105 45.168 98.997 47.107 99.175 48.666C99.478 51.31 99.801 51.5 104 51.5H108.5V47.5C108.5 43.508 108.492 43.499 104.241 43.192C101.199 42.972 99.82 43.305 99.416 44.358ZM51.384 62.442C50.21 65.5 51.447 67.5 54.514 67.5C57.152 67.5 57.537 67.121 57.813 64.25C58.106 61.216 57.921 61 55.032 61C53.259 61 51.701 61.616 51.384 62.442ZM13.223 65.557C11.107 67.038 11 67.784 11 81C11 98.586 10.423 98 27.723 98C44.322 98 44 98.336 44 81C44 63.664 44.322 64 27.723 64C18.229 64 14.941 64.353 13.223 65.557ZM137.607 66.582C136.589 69.235 136.929 74.529 138.2 75.8C138.86 76.46 141.02 77 143 77C147.447 77 149 75.546 149 71.382C149 65.801 148.247 65 143 65C139.558 65 138.043 65.444 137.607 66.582ZM66.073 68.635C64.14 71.092 64 72.56 64 90.41V109.55L56.726 116.775L49.453 124H30.949C15.82 124 12.04 124.284 10.223 125.557C8.052 127.077 8 127.581 8 147.057C8 165.667 8.134 167.134 10 169C11.862 170.862 13.333 171 31.326 171C56.948 171 55 173.024 55 146.409V126.446L61.775 119.723L68.55 113H87.55H106.55L113.775 120.274L121 127.547V147.274C121 165.667 121.135 167.135 123 169C124.863 170.863 126.333 171 144.427 171H163.855L165.964 168.319C167.955 165.787 168.066 164.554 167.956 146.175L167.839 126.713L174.643 119.856L181.446 113H200.723C218.667 113 220.138 112.862 222 111C223.863 109.137 224 107.667 224 89.539C224 64.042 225.933 66 200.766 66C182 66 181.897 66.012 179.416 68.493L176.923 70.986L177.044 90.137L177.165 109.287L169.857 116.644L162.55 124H143.984H125.418L118.575 117.004L111.731 110.009L111.616 89.917C111.466 63.929 113.558 66 87.462 66H68.145L66.073 68.635ZM125 83.5C125 85.5 125.5 86 127.5 86C129.5 86 130 85.5 130 83.5C130 81.5 129.5 81 127.5 81C125.5 81 125 81.5 125 83.5ZM231.856 96.681C231.544 109.112 231.246 111.202 229.438 113.619C224.738 119.905 223.057 120.47 207.929 120.846L194 121.192V125.648C194 143.695 180.927 168.31 164.887 180.464C153.167 189.345 135.461 196 123.553 196H119V218V240L126.25 239.984C139.899 239.955 160.784 234.13 174.869 226.426C207.42 208.619 230.254 177.155 236.463 141.554C238.676 128.864 238.469 109.118 235.997 96.987C232.742 81.011 232.25 80.975 231.856 96.681ZM136.667 84.667C136.3 85.033 136 90.418 136 96.631C136 110.257 135.743 110 149.378 110C161.471 110 162 109.443 162 96.712C162 83.818 162.192 84 148.631 84C142.418 84 137.033 84.3 136.667 84.667ZM0 110.5V117H6.5H13V110.5V104H6.5H0V110.5ZM43.39 105.427C43.088 106.212 42.99 107.9 43.171 109.177C43.439 111.067 44.199 111.558 47.25 111.81L51 112.121V108.06C51 104.08 50.931 104 47.469 104C45.332 104 43.721 104.564 43.39 105.427ZM71.2 126.2C69.55 127.85 69.55 149.15 71.2 150.8C72.85 152.45 94.15 152.45 95.8 150.8C97.45 149.15 97.45 127.85 95.8 126.2C95.011 125.411 90.8 125 83.5 125C76.2 125 71.989 125.411 71.2 126.2ZM95 170.5V177H101.5H108V170.5V164H101.5H95V170.5ZM72.667 165.667C72.3 166.033 72 167.608 72 169.167C72 171.648 72.373 172 75 172C77.762 172 78 171.722 78 168.5C78 165.5 77.667 165 75.667 165C74.383 165 73.033 165.3 72.667 165.667ZM27.422 182.344C27.138 183.083 27.04 187.02 27.203 191.094L27.5 198.5L35.914 198.793C41.971 199.004 44.559 198.724 45.149 197.793C46.103 196.289 46.286 184.908 45.393 182.582C44.577 180.454 28.23 180.238 27.422 182.344ZM59.724 190.002L57 192.145V206.918C57 219.959 57.214 221.884 58.829 223.345C60.366 224.736 63.147 225 76.294 225C90.729 225 92.009 224.851 92.965 223.066C93.546 221.98 94 214.577 94 206.188C94 193.522 93.749 191.036 92.35 189.872C91.169 188.89 86.685 188.409 76.574 188.18C63.386 187.881 62.267 188.002 59.724 190.002ZM0.433001 202.314C0.156001 203.037 0.0570007 208.55 0.214001 214.564L0.5 225.5L11.857 225.784C19.374 225.972 23.685 225.677 24.607 224.911C26.433 223.396 26.598 203.998 24.8 202.2C23.037 200.437 1.114 200.54 0.433001 202.314ZM102.409 204.378C101.138 207.69 102.412 209.5 106.014 209.5C109.221 209.5 109.5 209.26 109.5 206.5C109.5 203.845 109.125 203.464 106.243 203.186C104.047 202.974 102.798 203.363 102.409 204.378ZM33.198 219.25L33.5 224.5H38.5H43.5L43.802 219.25L44.105 214H38.5H32.895L33.198 219.25ZM98 234V239H103H108V234V229H103H98V234ZM23.362 233.5C22.469 235.827 23.727 238 25.969 238C27.559 238 28 237.349 28 235C28 232.651 27.559 232 25.969 232C24.851 232 23.678 232.675 23.362 233.5Z"
        fill="currentColor"
      />
    </svg>
  ),
};
