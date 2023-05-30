<template>
  <footer
    class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 cursor-default sm:text-left text-center"
  >
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ new Date().getFullYear() }} <a class="">Designed by Austyn Washington</a>.
        All Rights Reserved.
      </span>

      <ul
        class="md:flex flex-wrap items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <el-popover
          :width="300"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        >
          <template #reference> Want a custom website like this? Click here to contact me today! </template>
          <template #default>
            <div
              class="demo-rich-conent"
              style="display: flex; gap: 16px; flex-direction: column"
            >
              <img
                src="../assets/church_img/austyn_img.jpg"
                class="rounded-full mr-4 w-20 h-20 object-cover"
                alt=""
              />
              <div>
                <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">
                  Austyn Washington
                </p>
                <p
                  class="demo-rich-content__mention"
                  style="margin: 0; font-size: 14px; color: var(--el-color-info)"
                >
                <div class="flex space-x-2"><el-icon class="mt-1"><Message/></el-icon>
            <p class="pb-6">
      
            austynwashington@gmail.com
            </p>
   
          </div>
                </p>
              </div>

              <p class="demo-rich-content__desc" style="margin: 0">
               Software engineer, UX/UI/Web Designer 
              </p>
            </div>
          </template>
        </el-popover>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
