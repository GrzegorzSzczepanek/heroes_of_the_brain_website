import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<main class="flex flex-col items-center justify-center min-h-screen"><h1 class="text-2xl font-bold mb-4" data-svelte-h="svelte-q9i5rl">Login</h1> <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"><div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2">Email:
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email"${add_attribute("value", email, 0)}></label></div> <div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2">Password:
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password"${add_attribute("value", password, 0)}></label></div> <div class="flex items-center justify-between" data-svelte-h="svelte-1o9jhex"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button></div></form> ${``}</main>`;
});
export {
  Page as default
};
