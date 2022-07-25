<script lang="ts">
export default {
  name: 'Login'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')

function sign(e) {
  e.preventDefault()
  console.log('asd')
}
</script>

<template>
  <div
    className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h1 class="text-3xl font-bold text-center">IoT SW</h1>
    <div class="max-w-sm p-8 border border-gray rounded-xl mt-8 mx-auto">
      <div class="text-xl text-center">관리자 로그인</div>
      <el-form class="mt-6" @submit="sign">
        <el-form-item prop="name">
          <el-input size="large" placeholder="아이디" />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input size="large" placeholder="비밀번호" type="password" />
        </el-form-item>
        <el-form-item>
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            로그인
          </button>
        </el-form-item>
      </el-form>
      <div class="flex justify-between">
        <a href="#" class="text-sm text-gray-500">관리자 등록</a>
        <a href="#" class="text-sm text-gray-500">ID/Password 찾기</a>
      </div>
    </div>
  </div>
</template>
