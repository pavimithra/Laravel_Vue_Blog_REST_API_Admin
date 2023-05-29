<template>
    <header class="fixed h-14 top-0 left-0 lg:left-64 right-0 z-50 shadow-md flex flex-wrap justify-between pl-2 md:pl-3 lg:pl-5 bg-white items-center transition duration-500">
            <div class="flex items-center">
                <button type="button" class="relative mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  />
                        <!-- <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  /> -->
                    </svg>
                </button>
            </div>
            <div class="relative flex pl-2 lg:hidden flex-grow basis-0 items-center">
                <img class="h-9 w-auto" src="/logoIcon.png">
                <img class="hidden h-9 w-auto md:block" src="/logoSmall.png" alt="logo" />
            </div>
            <div class="relative flex basis w-auto justify-end gap-4 md:gap-6 lg:gap-8 md:flex-grow items-center h-full">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
                <a class="" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </a>
                
                <!-- Profile dropdown -->
                <div  class="relative font-roboto flex h-full border-l px-2 md:px-3 lg:px-5 hover:bg-slate-100">
                    <div class="group flex items-center cursor-pointer">
                        <img @click="logout" :src="'/avatar/isha.png'" class="shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full" alt="Vite logo" />
                        <div class="ml-3 rtl:ml-0 rtl:mr-3 font-semibold text-md hidden md:flex md:flex-col">
                            <span class=""> {{ user.name }} </span>
                            <span class=" ">Administrator</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script setup>
import useAuth from '@/composables/auth';
const { user, logout } = useAuth()
</script>