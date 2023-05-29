<template>
    <div class="lg:ml-64 inset-0">
        <TheHeader />
        <TheSidebar />
        <!-- bg open -->
        <!-- <div><div class="fixed bg-slate-900 bg-opacity-70 w-full h-full inset-x-0 top-0 z-30 lg:hidden"></div></div> -->
        <main>
            <div class="max-w-full flex-auto lg:max-w-none lg:pr-0 z-30 mt-14">
                <article>
                    <header class="space-y-1 bg-slate-300 font-roboto items-center">
                        <p class="px-4 py-4 xl:px-8 my-5 uppercase font-semibold text-2xl items-center">
                            Dashboard
                        </p>
                    </header>
                    <div class="px-4 md:px-6 lg:px-8 my-5">
                        <router-view></router-view>
                    </div>
                </article>
            </div>
        </main>
        <TheFooter />
    </div>
</template>

<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'; 
import TheSidebar from '@/components/layout/TheSidebar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>