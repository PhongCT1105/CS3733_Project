import {
  CircleUser,
  CreditCard,
  FolderArchive,
  Key,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import "../../styles/globals.css";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/modeToggle.tsx";

export function HeaderHome() {
  return (
    <div className={"flex flex-col"}>
      <div className="flex gap-4 border-b-4 border-yellow-500 pl-4">
        <nav className="text-lg w-full font-medium flex items-center text-nowrap mt-2">
          <a href="/login" className="flex text-lg font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="720"
              height="132"
              fill="none"
              viewBox="0 0 1000 99"
            >
              <path
                fill="#003A96"
                d="M85.1 53.19v2.775h-8.325v6.66h7.4V65.4h-7.4v7.955h-3.7v-20.35H85.1v.185Zm8.51 20.535c-4.625 0-7.215-2.59-7.215-7.77 0-4.995 2.59-7.77 7.215-7.77s7.215 2.59 7.215 7.77c.185 5.18-2.405 7.77-7.215 7.77Zm3.515-7.77c0-3.33-1.11-5.18-3.515-5.18-2.405 0-3.515 2.035-3.515 5.18 0 3.33 1.11 5.18 3.515 5.18 2.59.185 3.515-2.035 3.515-5.18Zm17.39 7.4-.74-2.405c-.37 1.665-1.85 2.775-4.44 2.775-2.035 0-3.33-.74-4.07-1.85-.925-1.295-.925-2.775-.925-4.625v-8.695h3.515v8.88c0 .925 0 1.665.555 2.405.555.74 1.295 1.11 2.405 1.11 2.405 0 2.775-2.035 2.775-3.33v-9.065h3.515v14.8h-2.59Zm9.805-14.8.74 2.59c.555-1.665 1.85-2.775 4.44-2.775 2.22 0 3.515.925 4.255 2.035.925 1.295.925 2.775.925 4.44v8.695h-3.515v-8.88c0-.925 0-1.665-.555-2.405-.555-.74-1.11-1.11-2.405-1.11-2.59 0-2.96 2.035-2.96 3.33v9.065h-3.515v-14.8h2.59v-.185Zm27.565-6.105v21.09h-2.775l-.555-2.59c-.37 1.665-2.035 2.775-4.44 2.775-4.07 0-6.29-3.145-6.29-7.585 0-4.625 2.22-7.77 6.475-7.77 2.22 0 3.515.74 4.07 2.59v-8.51h3.515Zm-10.36 13.505c0 2.96.925 4.995 3.515 4.995s3.515-2.22 3.515-4.995c0-2.96-.925-4.995-3.515-4.995s-3.515 2.035-3.515 4.995ZM160.21 54.3c0 1.11-.925 2.035-2.22 2.035-1.295 0-2.22-.925-2.22-2.035s.925-2.035 2.22-2.035c1.295 0 2.22.925 2.22 2.035Zm-.37 4.255v14.8h-3.515v-14.8h3.515Zm7.03 0 .74 2.59c.555-1.665 1.85-2.775 4.44-2.775 2.22 0 3.515.925 4.255 2.035.925 1.295.925 2.775.925 4.44v8.695h-3.515v-8.88c0-.925 0-1.665-.555-2.405-.555-.74-1.11-1.11-2.405-1.11-2.59 0-2.96 2.035-2.96 3.33v9.065h-3.515v-14.8h2.59v-.185Zm20.165 9.25c-.74 0-1.48 0-2.035-.185-.37.185-.74.555-.74 1.295 0 1.11 1.11 1.11 2.035 1.11h2.59c1.85 0 5.92 0 5.92 4.07 0 3.33-2.59 4.995-7.955 4.995-4.81 0-6.845-1.295-6.845-3.515 0-2.59 2.775-2.96 2.96-2.96 0 0-1.85-.74-1.85-2.59 0-1.85 1.85-2.59 2.775-2.775-1.665-.74-2.59-2.22-2.59-4.07 0-2.96 2.405-4.81 6.105-4.81 1.85 0 3.33.37 4.44 1.295.74-1.85 2.22-1.85 3.145-1.85h.37v2.96s-.555-.185-1.11-.185c-.74 0-1.11.185-1.295.185.37.74.74 1.48.74 2.405-.555 2.775-2.96 4.625-6.66 4.625Zm-2.96 4.995s-1.11.555-1.11 1.85 1.11 1.85 3.7 1.85c2.775 0 4.44-.74 4.44-2.035 0-1.48-1.85-1.48-2.775-1.48h-4.255V72.8Zm5.365-9.805c0-1.48-.925-2.405-2.405-2.405-1.48 0-2.405.74-2.405 2.405 0 1.48.925 2.405 2.405 2.405 1.48 0 2.405-.925 2.405-2.405Zm20.535-9.805 6.475 15.54 6.29-15.54h4.625v20.35h-3.515V57.63l-5.92 14.8h-3.33l-5.92-14.8v15.91h-3.33V53.19h4.625Zm33.485 19.795s-2.035.74-4.625.74c-2.775 0-4.625-.74-5.735-1.85-1.295-1.295-2.035-3.33-2.035-5.735 0-4.81 2.405-7.955 6.845-7.955 2.405 0 4.255.925 5.365 2.59 1.11 1.665 1.11 3.885 1.11 6.29h-9.62c0 2.59 1.48 4.07 4.255 4.07 2.035 0 4.255-.74 4.255-.74h.185v2.59Zm-2.775-8.325c0-2.405-.74-3.885-2.775-3.885s-2.96 1.48-3.145 3.885h5.92Zm9.805-6.105.74 2.59c.37-1.665 1.665-2.775 4.255-2.775s3.885 1.11 4.44 2.96c.74-2.035 2.035-2.96 4.255-2.96 2.405 0 3.515 1.11 4.07 2.035.74 1.295.74 2.775.74 4.44v8.695h-3.515v-8.88c0-.925 0-1.665-.37-2.405-.37-.555-1.11-1.11-2.22-1.11-2.405 0-2.775 2.035-2.775 3.33v9.065h-3.515v-8.88c0-.925 0-1.665-.37-2.405-.37-.555-1.11-1.11-2.22-1.11-2.405 0-2.775 2.035-2.775 3.33v9.065h-3.515v-14.8h2.775v-.185Zm26.455-6.105v8.695c.555-1.665 1.85-2.775 4.44-2.775 3.885 0 6.29 2.775 6.29 7.585 0 4.995-2.405 7.77-6.66 7.77-2.22 0-3.7-.74-4.44-2.59l-.925 2.22h-2.22V52.45h3.515Zm0 13.69c0 2.96.925 5.18 3.515 5.18s3.515-2.22 3.515-5.18c0-2.96-.925-4.995-3.515-4.995-2.59-.185-3.515 1.85-3.515 4.995Zm25.715 6.845s-2.035.74-4.625.74c-2.775 0-4.625-.74-5.735-1.85-1.295-1.295-2.035-3.33-2.035-5.735 0-4.81 2.405-7.955 6.845-7.955 2.405 0 4.255.925 5.365 2.59 1.11 1.665 1.11 3.885 1.11 6.29h-9.62c0 2.59 1.48 4.07 4.255 4.07 2.035 0 4.255-.74 4.255-.74h.185v2.59Zm-2.775-8.325c0-2.405-.74-3.885-2.775-3.885s-2.96 1.48-3.145 3.885h5.92Zm15.54-2.96s-.74-.185-1.48-.185c-3.145 0-3.145 2.405-3.145 3.515v8.325h-3.7v-14.8h2.775l.74 2.96c.555-2.405 2.405-3.145 4.625-3.145h.37v3.33h-.185Zm3.7 8.14-2.035 7.585h-2.59l1.11-7.585h3.515Zm16.095-16.65 6.475 15.54 6.29-15.54h4.625v20.35h-3.515V57.63l-5.92 14.8h-3.145l-5.92-14.8v15.91h-3.145V53.19h4.255Zm22.2 5.735s1.85-.74 4.81-.74c2.22 0 4.255.37 5.18 1.85.74 1.11.74 2.59.74 4.07V69.1c0 .555 0 1.665 1.295 1.665.37 0 .74-.185.74-.185v2.405s-.74.185-1.85.185c-1.85 0-3.145-.74-3.33-2.59-.555 1.665-2.22 2.775-4.44 2.775-2.96 0-4.81-1.85-4.81-4.44 0-3.145 2.59-4.81 7.4-4.81h1.48c0-1.295 0-1.85-.37-2.405-.37-.555-1.11-.925-2.59-.925-2.22 0-4.07.74-4.07.74h-.185v-2.59Zm4.255 12.025c1.11 0 2.035-.555 2.59-1.48.555-.925.555-2.035.555-2.59v-.37h-.74c-1.48 0-4.255 0-4.255 2.405-.185 1.295.555 2.035 1.85 2.035Zm20.35-9.25h-.185s-1.85-.74-3.515-.74c-1.48 0-2.22.555-2.22 1.295 0 2.22 6.66 1.665 6.66 6.66 0 3.145-2.59 4.625-6.105 4.625-2.59 0-4.255-.74-4.255-.74v-2.775h.185s2.22.925 4.07.925c1.665 0 2.405-.74 2.405-1.48 0-2.59-6.66-1.85-6.66-6.66 0-2.775 2.035-4.44 5.92-4.44 2.035 0 3.7.555 3.7.555V61.7Zm12.58 0h-.185s-1.85-.74-3.515-.74c-1.48 0-2.22.555-2.22 1.295 0 2.22 6.66 1.665 6.66 6.66 0 3.145-2.59 4.625-6.105 4.625-2.59 0-4.255-.74-4.255-.74v-2.775h.185s2.22.925 4.07.925c1.665 0 2.405-.74 2.405-1.48 0-2.59-6.66-1.85-6.66-6.66 0-2.775 2.035-4.44 5.92-4.44 2.035 0 3.7.555 3.7.555V61.7Zm27.38.925v9.99s-2.59 1.11-6.29 1.11c-6.29 0-10.545-3.33-10.545-10.175 0-7.215 4.44-10.545 10.915-10.545 2.96 0 5.18.74 5.18.74v2.775h-.185s-2.035-.925-4.81-.925c-4.44 0-7.215 2.405-7.215 7.585s2.775 7.77 6.66 7.77c1.48 0 2.59-.37 2.59-.37V65.4h-3.7v-2.775h7.4Zm15.54 10.36s-2.035.74-4.625.74c-2.775 0-4.625-.74-5.735-1.85-1.295-1.295-2.035-3.33-2.035-5.735 0-4.81 2.405-7.955 6.845-7.955 2.405 0 4.255.925 5.365 2.59 1.11 1.665 1.11 3.885 1.11 6.29h-9.62c0 2.59 1.48 4.07 4.255 4.07 2.035 0 4.255-.74 4.255-.74h.185v2.59Zm-2.775-8.325c0-2.405-.74-3.885-2.775-3.885s-2.96 1.48-3.145 3.885h5.92Zm9.99-6.105.74 2.59c.555-1.665 1.85-2.775 4.44-2.775 2.22 0 3.515.925 4.255 2.035.925 1.295.925 2.775.925 4.44v8.695h-3.7v-8.88c0-.925 0-1.665-.555-2.405-.555-.74-1.11-1.11-2.405-1.11-2.59 0-2.96 2.035-2.96 3.33v9.065h-3.515v-14.8h2.775v-.185Zm25.9 14.43s-2.035.74-4.625.74c-2.775 0-4.625-.74-5.735-1.85-1.295-1.295-2.035-3.33-2.035-5.735 0-4.81 2.405-7.955 6.845-7.955 2.405 0 4.255.925 5.365 2.59 1.11 1.665 1.11 3.885 1.11 6.29h-9.62c0 2.59 1.48 4.07 4.255 4.07 2.035 0 4.255-.74 4.255-.74h.185v2.59Zm-2.775-8.325c0-2.405-.74-3.885-2.775-3.885s-2.96 1.48-3.145 3.885h5.92Zm15.54-2.96s-.74-.185-1.48-.185c-3.145 0-3.145 2.405-3.145 3.515v8.325h-3.515v-14.8h2.775l.74 2.96c.555-2.405 2.405-3.145 4.625-3.145h.37v3.33h-.37Zm2.59-2.775s1.85-.74 4.81-.74c2.22 0 4.255.37 5.18 1.85.74 1.11.74 2.59.74 4.07V69.1c0 .555 0 1.665 1.295 1.665.37 0 .74-.185.74-.185v2.405s-.74.185-1.85.185c-1.85 0-3.145-.74-3.33-2.59-.555 1.665-2.22 2.775-4.44 2.775-2.96 0-4.81-1.85-4.81-4.44 0-3.145 2.59-4.81 7.4-4.81h1.48c0-1.295 0-1.85-.37-2.405-.37-.555-1.11-.925-2.59-.925-2.22 0-4.07.74-4.07.74h-.185v-2.59Zm4.44 12.025c1.11 0 2.035-.555 2.59-1.48.555-.925.555-2.035.555-2.59v-.37h-.74c-1.48 0-4.255 0-4.255 2.405-.37 1.295.37 2.035 1.85 2.035Zm14.8-18.5v21.09h-3.515V52.45h3.515Zm18.5.74c1.48 0 3.33 0 4.81.925 1.295.74 2.22 2.035 2.22 4.07 0 4.07-3.515 4.44-3.515 4.44s4.81.185 4.81 4.995c0 2.405-1.11 3.7-2.59 4.625-1.85 1.11-3.885 1.11-5.55 1.11h-6.66v-20.35h6.475v.185Zm-2.96 8.325h2.405c.74 0 1.665 0 2.405-.37.74-.37 1.295-1.11 1.295-2.405 0-1.295-.555-2.035-1.295-2.405-.74-.37-1.665-.37-2.405-.37h-2.405v5.55Zm0 9.25h2.96c.925 0 2.035 0 2.96-.555.925-.555 1.48-1.48 1.48-2.775s-.555-2.22-1.48-2.775c-1.11-.555-2.035-.555-2.96-.555h-2.96v6.66Zm22.57-9.065s-.74-.185-1.48-.185c-3.145 0-3.145 2.405-3.145 3.515v8.325h-3.515v-14.8h2.775l.74 2.96c.555-2.405 2.405-3.145 4.625-3.145h.37v3.33h-.37Zm6.66-7.4c0 1.11-.925 2.035-2.22 2.035-1.295 0-2.22-.925-2.22-2.035s.925-2.035 2.22-2.035c1.295 0 2.22.925 2.22 2.035Zm-.37 4.255v14.8h-3.515v-14.8h3.515Zm10.175 9.25c-.74 0-1.48 0-2.035-.185-.37.185-.74.555-.74 1.295 0 1.11 1.11 1.11 2.035 1.11h2.59c1.85 0 5.92 0 5.92 4.07 0 3.33-2.59 4.995-7.955 4.995-4.81 0-6.845-1.295-6.845-3.515 0-2.59 2.775-2.96 2.96-2.96 0 0-1.85-.74-1.85-2.59 0-1.85 1.85-2.59 2.775-2.775-1.665-.74-2.59-2.22-2.59-4.07 0-2.96 2.405-4.81 6.105-4.81 1.85 0 3.33.37 4.44 1.295.74-1.85 2.22-1.85 3.145-1.85h.37v2.96s-.555-.185-1.11-.185c-.74 0-1.11.185-1.295.185.37.74.74 1.48.74 2.405-.555 2.775-2.96 4.625-6.66 4.625Zm-3.145 4.995s-1.11.555-1.11 1.85 1.11 1.85 3.7 1.85c2.775 0 4.44-.74 4.44-2.035 0-1.48-1.85-1.48-2.775-1.48h-4.255V72.8Zm5.55-9.805c0-1.48-.925-2.405-2.405-2.405-1.48 0-2.405.74-2.405 2.405 0 1.48.925 2.405 2.405 2.405 1.48 0 2.405-.925 2.405-2.405Zm11.84-10.545v8.51c.555-1.48 1.665-2.59 4.255-2.59 2.405 0 3.7.925 4.255 2.035.925 1.295.925 2.775.925 4.44v8.695h-3.515v-8.88c0-.925 0-1.665-.555-2.405-.555-.74-1.11-1.11-2.405-1.11-2.59 0-2.96 2.035-2.96 3.33v9.065h-3.515V52.45h3.515Zm13.875 6.475s1.85-.74 4.81-.74c2.22 0 4.255.37 5.18 1.85.74 1.11.74 2.59.74 4.07V69.1c0 .555 0 1.665 1.295 1.665.37 0 .74-.185.74-.185v2.405s-.74.185-1.85.185c-1.85 0-3.145-.74-3.33-2.59-.555 1.665-2.22 2.775-4.44 2.775-2.96 0-4.81-1.85-4.81-4.44 0-3.145 2.59-4.81 7.4-4.81h1.48c0-1.295 0-1.85-.37-2.405-.37-.555-1.11-.925-2.59-.925-2.22 0-4.07.74-4.07.74h-.185v-2.59Zm4.255 12.025c1.11 0 2.035-.555 2.59-1.48.555-.925.555-2.035.555-2.59v-.37h-.74c-1.48 0-4.255 0-4.255 2.405-.185 1.295.37 2.035 1.85 2.035Zm14.06-12.395.74 2.59c.37-1.665 1.665-2.775 4.255-2.775s3.885 1.11 4.44 2.96c.74-2.035 2.035-2.96 4.255-2.96 2.405 0 3.515 1.11 4.07 2.035.74 1.295.74 2.775.74 4.44v8.695h-3.515v-8.88c0-.925 0-1.665-.37-2.405-.37-.555-1.11-1.11-2.22-1.11-2.405 0-2.775 2.035-2.775 3.33v9.065h-3.515v-8.88c0-.925 0-1.665-.37-2.405-.37-.555-1.11-1.11-2.22-1.11-2.405 0-2.775 2.035-2.775 3.33v9.065h-3.515v-14.8h2.775v-.185ZM83.99 2.315c2.59 0 5.55 0 7.955 1.48 2.035 1.295 3.7 3.33 3.7 6.845 0 6.66-5.92 7.4-5.92 7.4s7.955.37 7.955 8.325c0 3.885-1.85 6.29-4.255 7.77-2.96 1.85-6.475 1.85-9.25 1.85h-11.1V2.315H83.99Zm-4.995 14.06h4.255c1.295 0 2.775 0 4.07-.74 1.295-.74 2.22-2.035 2.22-4.07s-.925-3.33-2.22-4.07c-1.295-.74-2.775-.74-4.07-.74h-4.07v9.62h-.185Zm0 15.54h4.81c1.48 0 3.33 0 4.995-.925s2.405-2.405 2.405-4.44c0-2.035-.555-3.7-2.22-4.625C87.32 21 85.47 21 83.99 21h-4.81v10.915h-.185Zm37-15.17s-1.295-.185-2.59-.185c-5.365 0-5.365 3.885-5.365 5.92v13.875h-5.92V11.38h4.44l1.11 4.81c.925-4.07 3.885-5.18 7.585-5.18h.555v5.735h.185ZM126.17 4.35c0 2.035-1.48 3.515-3.515 3.515s-3.515-1.48-3.515-3.515 1.48-3.515 3.515-3.515S126.17 2.5 126.17 4.35Zm-.74 7.03v24.79h-5.92V11.38h5.92Zm16.095 15.54c-1.295 0-2.405 0-3.33-.37-.555.37-1.295.925-1.295 2.035 0 1.85 2.035 1.85 3.33 1.85h4.07c3.145 0 9.805 0 9.805 6.66 0 5.365-4.255 8.325-13.32 8.325-7.955 0-11.47-2.22-11.47-5.92 0-4.44 4.625-4.995 4.81-4.995-.185 0-3.145-1.11-3.145-4.255 0-3.145 3.145-4.255 4.625-4.625-2.775-1.295-4.255-3.7-4.255-6.845 0-4.81 3.885-7.955 10.175-7.955 3.145 0 5.55.74 7.4 2.22 1.11-3.145 3.7-3.145 5.18-3.145h.555v4.81s-.925-.185-2.035-.185-1.665.185-2.035.37c.74 1.11 1.11 2.405 1.11 3.885 0 4.995-4.07 8.14-10.175 8.14Zm-5.18 8.325s-1.665.925-1.665 2.96c0 2.22 1.85 3.145 6.29 3.145 4.81 0 7.215-1.11 7.215-3.515 0-2.59-3.145-2.59-4.44-2.59h-7.4Zm9.25-16.465c0-2.59-1.48-3.885-4.07-3.885-2.59 0-4.07 1.295-4.07 3.885s1.48 3.885 4.07 3.885c2.59 0 4.07-1.295 4.07-3.885ZM164.28 1.02v14.245c.74-2.59 2.775-4.44 7.03-4.44 3.885 0 6.105 1.48 7.215 3.33 1.48 2.035 1.48 4.44 1.48 7.4V36.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.74-1.11-2.035-1.85-3.885-1.85-4.44 0-4.995 3.33-4.995 5.365v15.17h-5.92V1.02h5.735Zm22.2 11.1s3.145-1.11 7.955-1.11c3.7 0 7.03.555 8.695 3.145 1.295 1.85 1.295 4.44 1.295 6.66v8.51c0 1.11 0 2.96 2.035 2.96a4.52 4.52 0 0 0 1.295-.185v4.07s-1.295.37-3.145.37c-3.145 0-5.18-1.11-5.55-4.44-.925 2.96-3.7 4.44-7.215 4.44-4.81 0-7.955-2.96-7.955-7.4 0-5.365 4.44-7.955 12.21-7.955h2.405c0-2.035 0-3.145-.74-4.07-.74-1.11-1.85-1.665-4.44-1.665-3.515 0-6.66 1.295-6.66 1.295h-.37V12.12h.185Zm7.215 19.98c1.665 0 3.33-.74 4.255-2.405.74-1.48.74-3.33.74-4.255v-.555h-1.295c-2.59 0-7.03 0-7.03 3.885-.185 2.035 1.11 3.33 3.33 3.33Zm22.57-20.72 1.11 4.255c.74-2.775 2.775-4.81 7.215-4.81 4.255 0 6.475 1.85 7.585 4.995 1.11-3.33 3.515-4.995 7.215-4.995 3.885 0 5.92 1.665 7.03 3.33 1.295 2.035 1.295 4.44 1.295 7.4V36.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.555-.925-1.665-1.85-3.7-1.85-4.07 0-4.625 3.33-4.625 5.365v15.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.555-.925-1.665-1.85-3.7-1.85-4.07 0-4.625 3.33-4.625 5.365v15.17h-5.92V11.38h4.44Zm49.21.74s3.145-1.11 7.955-1.11c3.7 0 7.03.555 8.695 3.145 1.295 1.85 1.295 4.44 1.295 6.66v8.51c0 1.11 0 2.96 2.035 2.96.74 0 1.295-.185 1.295-.185v4.07s-1.295.37-3.145.37c-3.145 0-5.18-1.11-5.55-4.44-.925 2.96-3.7 4.44-7.215 4.44-4.81 0-7.955-2.96-7.955-7.4 0-5.365 4.44-7.955 12.21-7.955h2.405c0-2.035 0-3.145-.74-4.07-.74-1.11-1.85-1.665-4.44-1.665-3.515 0-6.66 1.295-6.66 1.295h-.37V12.12h.185Zm7.03 19.98c1.665 0 3.33-.74 4.255-2.405.74-1.48.74-3.33.74-4.255v-.555h-1.295c-2.59 0-7.03 0-7.03 3.885 0 2.035 1.11 3.33 3.33 3.33Zm22.755-20.72 1.11 4.255c.74-2.96 3.145-4.81 7.4-4.81 3.885 0 5.92 1.48 7.215 3.33 1.48 2.035 1.48 4.44 1.48 7.4V36.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.74-1.11-2.035-1.85-3.885-1.85-4.44 0-4.995 3.33-4.995 5.365v15.17h-5.92V11.38h4.255ZM340.4 1.02v35.15h-4.625l-1.11-4.07c-.74 2.775-3.33 4.625-7.4 4.625-6.845 0-10.545-5.18-10.545-12.765 0-7.585 3.7-13.135 10.915-13.135 3.515 0 5.92 1.295 6.845 4.255V1.02h5.92Zm-17.39 22.755c0 4.995 1.665 8.325 5.735 8.325s5.735-3.515 5.735-8.51c0-4.995-1.48-8.14-5.55-8.14s-5.92 3.515-5.92 8.325Zm38.85-21.46 6.66 26.27 6.845-25.53h6.105l6.845 25.53 6.66-26.27h5.18l-9.25 33.855H384.8l-6.845-25.715-7.03 25.715h-6.105l-9.25-33.855h6.29Zm50.505 34.595c-7.585 0-12.025-4.44-12.025-12.95 0-8.51 4.44-13.135 12.21-13.135 7.585 0 12.025 4.44 12.025 12.95 0 8.51-4.44 13.135-12.21 13.135Zm5.92-13.135c0-5.55-1.85-8.695-5.735-8.695-4.07 0-5.735 3.515-5.735 8.695 0 5.55 1.85 8.695 5.735 8.695 4.07.185 5.735-3.33 5.735-8.695ZM434.01 11.38l1.11 4.255c.74-2.775 2.775-4.81 7.215-4.81 4.255 0 6.475 1.85 7.585 4.995 1.11-3.33 3.515-4.995 7.215-4.995 3.885 0 5.92 1.665 7.03 3.33 1.295 2.035 1.295 4.44 1.295 7.4V36.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.555-.925-1.665-1.85-3.7-1.85-4.07 0-4.625 3.33-4.625 5.365v15.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.555-.925-1.665-1.85-3.7-1.85-4.07 0-4.625 3.33-4.625 5.365v15.17h-5.92V11.38h4.44Zm56.425 24.05s-3.33 1.11-7.77 1.11c-4.81 0-7.585-1.295-9.435-3.145-2.22-2.22-3.33-5.365-3.33-9.435 0-8.14 4.07-13.135 11.47-13.135 4.07 0 7.03 1.48 8.88 4.255 1.665 2.775 1.665 6.475 1.665 10.36h-15.91c0 4.255 2.405 6.66 7.03 6.66 3.515 0 7.03-1.295 7.03-1.295h.37v4.625Zm-4.625-14.06c0-4.07-1.295-6.475-4.625-6.475-3.515 0-4.81 2.405-5.18 6.475h9.805Zm15.725-9.99 1.11 4.255c.74-2.96 3.145-4.81 7.4-4.81 3.885 0 5.92 1.48 7.215 3.33 1.48 2.035 1.48 4.44 1.48 7.4V36.17h-5.92V21.555c0-1.48 0-2.96-.74-4.07-.74-1.11-2.035-1.85-3.885-1.85-4.44 0-4.995 3.33-4.995 5.365v15.17h-5.92V11.38h4.255Zm21.645 1.85 1.85-12.025h5.55l-3.33 12.025h-4.07Zm25.16 3.515h-.37s-3.145-1.295-5.92-1.295c-2.59 0-3.7.925-3.7 2.22 0 3.885 11.1 2.775 11.1 11.285 0 5.18-4.255 7.585-10.175 7.585-4.255 0-7.03-1.11-7.03-1.11v-4.81h.37s3.7 1.48 6.845 1.48c2.775 0 3.885-1.11 3.885-2.59 0-4.44-11.1-3.145-11.1-11.285 0-4.44 3.515-7.4 9.805-7.4 3.515 0 6.105.925 6.105.925v4.995h.185Zm23.865-14.43V16.19h14.985V2.315h6.105V36.17h-6.105V20.815h-14.985V36.17H566.1V2.315h6.105ZM610.5 36.91c-7.585 0-12.025-4.44-12.025-12.95 0-8.51 4.44-13.135 12.21-13.135 7.585 0 12.025 4.44 12.025 12.95 0 8.51-4.44 13.135-12.21 13.135Zm5.92-13.135c0-5.55-1.85-8.695-5.735-8.695-4.07 0-5.735 3.515-5.735 8.695 0 5.55 1.85 8.695 5.735 8.695 4.07.185 5.735-3.33 5.735-8.695Zm25.715-7.03h-.37s-3.145-1.295-5.92-1.295c-2.59 0-3.7.925-3.7 2.22 0 3.885 11.1 2.775 11.1 11.285 0 5.18-4.255 7.585-10.175 7.585-4.255 0-7.03-1.11-7.03-1.11v-4.81h.37s3.7 1.48 6.845 1.48c2.775 0 3.885-1.11 3.885-2.59 0-4.44-11.1-3.145-11.1-11.285 0-4.44 3.515-7.4 9.805-7.4 3.515 0 6.105.925 6.105.925v4.995h.185Zm6.105 28.305V11.38h4.625l1.11 4.07c.74-2.775 3.33-4.625 7.4-4.625 6.845 0 10.545 5.18 10.545 12.765 0 7.585-3.7 13.135-10.915 13.135-3.515 0-5.92-1.295-6.845-4.255v12.58h-5.92Zm17.39-21.275c0-4.995-1.665-8.325-5.735-8.325-4.255 0-5.735 3.515-5.735 8.51 0 4.995 1.665 8.325 5.735 8.325s5.735-3.515 5.735-8.51ZM683.205 4.35c0 2.035-1.48 3.515-3.515 3.515s-3.515-1.48-3.515-3.515 1.48-3.515 3.515-3.515c2.22 0 3.515 1.665 3.515 3.515Zm-.555 7.03v24.79h-5.92V11.38h5.92Zm20.905 24.605s-1.85.555-4.44.555c-3.515 0-5.92-.925-7.03-2.775-1.11-1.665-1.11-3.7-1.11-6.475V16.005h-4.625V11.75h4.44V5.275l5.92-1.665v8.14h6.845v4.255h-6.845v11.1c0 1.665 0 2.775.555 3.7.555.925 1.48 1.11 2.59 1.11 1.665 0 3.33-.555 3.33-.555h.37v4.625Zm5.365-23.865s3.145-1.11 7.955-1.11c3.7 0 7.03.555 8.695 3.145 1.295 1.85 1.295 4.44 1.295 6.66v8.51c0 1.11 0 2.96 2.035 2.96.74 0 1.295-.185 1.295-.185v4.07s-1.295.37-3.145.37c-3.145 0-5.18-1.11-5.55-4.44-.925 2.96-3.7 4.44-7.215 4.44-4.81 0-7.955-2.96-7.955-7.4 0-5.365 4.44-7.955 12.21-7.955h2.405c0-2.035 0-3.145-.74-4.07-.74-1.11-1.85-1.665-4.44-1.665-3.515 0-6.66 1.295-6.66 1.295h-.37V12.12h.185Zm7.215 19.98c1.665 0 3.33-.74 4.255-2.405.74-1.48.74-3.33.74-4.255v-.555h-1.295c-2.59 0-7.03 0-7.03 3.885-.185 2.035 1.11 3.33 3.33 3.33ZM740 1.02v35.15h-5.92V1.02H740Z"
              />
              <path
                fill="#009CA6"
                d="M7.03 28.585H0v22.94h7.03v-22.94Zm8.14 0v22.94h7.215v-22.94H15.17Zm15.355 0v22.94h7.03v-22.94h-7.03ZM0 24.145h52.91V17.67H0v6.475ZM26.455.095 0 8.79v6.845l26.455-8.88 26.455 8.88V8.79L26.455.095ZM52.91 50.97c-.185.37-2.775 4.81-19.61 4.81H19.61C2.22 55.965.37 58.185 0 58.37v6.66c.37-.185 2.22-2.405 19.61-2.59H33.3c16.835 0 19.425-4.44 19.61-4.81v-6.66Zm0 10.915c-.185.37-2.775 4.81-19.61 4.81H19.61C2.22 66.88.37 69.1 0 69.285v6.66c.37-.185 2.22-2.405 19.61-2.59H33.3c16.835 0 19.425-4.44 19.61-4.81v-6.66Zm-7.215-33.3v21.83c5.735-1.295 7.03-3.33 7.03-3.7v-18.13h-7.03Z"
              />
            </svg>
          </a>
          <div className={"flex w-full items-center justify-end gap-4 pr-4"}>
            <a href="/home" className={"hover:text-yellow-500"}>
              Home
            </a>
            <a href="/service-requests" className={"hover:text-yellow-500"}>
              Service Requests
            </a>
            <a href="/csv-table" className={"hover:text-yellow-500"}>
              CSV Table
            </a>
            <a href="/map-editor" className={"hover:text-yellow-500"}>
              Map Editor
            </a>
            <a href="/about-us" className={"hover:text-yellow-500"}>
              About Us
            </a>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary" // CHANGE THIS TO MAKE THE COLOR RIGHT?
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      window.location.href = "/request-log-Page";
                    }}
                  >
                    <FolderArchive className="mr-2 h-4 w-4" />
                    <span>Request Logs</span>
                    <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Switch Account</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          onClick={() => {
                            window.location.href = "/login";
                          }}
                        >
                          <Key className="mr-2 h-4 w-4" />
                          <span>Admin</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            window.location.href = "/login";
                          }}
                        >
                          <User className="mr-2 h-4 w-4" />
                          <span>Patient</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <div className="flex text-lg w-full font-medium items-center justify-between w-full">
        <a
          href="/login"
          className="hover:bg-yellow-500 hover:text-black text-white text-center flex-grow bg-blue-900 inline-block p-3"
        >
          I'm a patient
        </a>
        <a
          href="/login"
          className="hover:bg-yellow-500 hover:text-black text-white text-center flex-grow bg-blue-900 inline-block p-3"
        >
          I'm a physician
        </a>
        <a
          href="/login"
          className="hover:bg-yellow-500 hover:text-black text-white text-center flex-grow bg-blue-900 inline-block p-3"
        >
          I'm an admin
        </a>
      </div>
    </div>
  );
}