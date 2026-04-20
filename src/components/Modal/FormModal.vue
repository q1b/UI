<template>
  <button
    type="button"
    @click="openModal"
    class="
      inline-flex
      justify-center
      px-4
      py-2
      text-sm
      font-medium
      focus:outline-none
      focus-visible:ring-2
      border
      rounded-md
      focus-visible:ring-offset-2
      hover:bg-purple-200
      focus-visible:ring-purple-500
      text-purple-900
      bg-purple-100
      border-transparent
    "
  >
    Click!
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div
        class="
          w-full
          fixed
          inset-0
          flex
          items-center
          justify-center
          z-10
          overflow-y-auto
        "
      >
        <div class="min-h-screen w-max px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>
          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
              :style="['boxShadow: 0px 7px 20px 0px rgb(20 44 64 / 20%)']"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 w-max"
              >
                <h1 class="text-3xl w-max">Login</h1>
              </DialogTitle>
              <div class="mt-2 w-max">
                <form class="w-max" action="">
                  <section class="mt-6 w-max relative">
                    <input
                      v-model="email"
                      name="email"
                      class="
                        z-10
                        relative
                        bg-transparent
                        h-10
                        peer
                        border-b-2
                        text-base
                        border-gray-300
                        text-blueGray-900
                        placeholder-transparent
                        focus:outline-none focus:border-indigo-600
                        w-64
                      "
                      type="text"
                      placeholder="Email"
                    />
                    <label
                      class="
                        z-0
                        text-sm
                        transition-all
                        absolute
                        text-gray-600
                        left-0
                        -top-4
                        peer-placeholder-shown:text-gray-300
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:top-2
                        peer-focus:-top-4
                        peer-focus:text-gray-600
                        peer-focus:text-sm
                      "
                      for="usernameField"
                      >Username or Email</label
                    >
                  </section>
                  <section class="mt-6 w-max relative">
                    <input
                      v-model="password"
                      name="password"
                      class="
                        z-10
                        relative
                        bg-transparent
                        h-10
                        peer
                        border-b-2
                        text-base
                        border-gray-300
                        text-blueGray-900
                        placeholder-transparent
                        focus:outline-none focus:border-indigo-600
                        w-64
                      "
                      type="password"
                      placeholder="P"
                    />
                    <label
                      class="
                        z-0
                        text-sm
                        transition-all
                        absolute
                        text-gray-600
                        left-0
                        -top-4
                        peer-placeholder-shown:text-gray-300
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:top-2
                        peer-focus:-top-4
                        peer-focus:text-gray-600
                        peer-focus:text-sm
                      "
                      for="passwordField"
                      >Password</label
                    >
                  </section>
                </form>
              </div>

              <div class="mt-4 w-max">
                <button
                  type="button"
                  class="
                    mt-4
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    mr-2
                    text-sm
                    font-medium
                    focus:outline-none
                    focus-visible:ring-2
                    border
                    rounded-md
                    focus-visible:ring-offset-2
                    hover:bg-purple-200
                    focus-visible:ring-purple-500
                    text-purple-900
                    bg-purple-100
                    border-transparent
                  "
                  @click="
                    consoleLog(
                      `Email is :- ${email} \n Password is :- ${password}`
                    )
                  "
                >
                  Login
                </button>
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    text-sm
                    font-medium
                    focus:outline-none
                    focus-visible:ring-2
                    border
                    rounded-md
                    focus-visible:ring-offset-2
                    hover:bg-violet-200
                    focus-visible:ring-violet-500
                    text-violet-900
                    bg-violet-100
                    border-transparent
                  "
                  @click="closeModal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

let email = ref('')
let password = ref('')

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

function consoleLog(...email) {
  console.log(...email)
}
</script>
