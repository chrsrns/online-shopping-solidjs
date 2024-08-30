import toast, { Toaster } from "solid-toast";
import { A } from "@solidjs/router";

interface PostCheckoutModalProps {
  onCloseClick: () => void;
}
let PostCheckoutModal = (props: PostCheckoutModalProps) => {
  // TODO: Trigger close action on mobile back action
  return (
    <div
      class="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 animate-fade_in bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        onClick={() => {
          props.onCloseClick();
        }}
      ></div>

      <div class="pointer-events-none fixed inset-0 z-10 h-screen w-screen">
        <div class="flex min-h-full flex-col items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="pointer-events-auto relative flex w-full flex-[1_1_1px] flex-grow transform animate-fade_in_fast flex-col overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-xl lg:max-w-2xl dark:bg-walnut_brown-400">
            <div class="w-full flex-grow overflow-auto">
              <h1 class="pt-10 text-center text-4xl dark:text-white">
                Quote on quote "Checkout Successful"!
              </h1>
              <hr class="my-8" />
              <p class="mx-8 my-2 text-center dark:text-white">
                Well, that's it!
              </p>
              <p class="mx-8 my-2 text-center dark:text-white">
                Thank you for trying this pet project of mine! This helped me
                try out other frameworks that I was not familiar with. Now that
                it's finished, I can confidently say that I learned a lot of the
                basics of the SolidJS framework ( WAY MORE than what I did
                before starting this ).
              </p>
              <p class="mx-8 my-8 text-center dark:text-white">
                If you want to see more projects of mine, you can go to my
                <span class="italic"> projects portal </span>or my{" "}
                <span class="italic"> online resume </span>
                and have a look!
              </p>
              <div class="flex w-full flex-wrap justify-center gap-4 px-8">
                <A
                  href="https://chrsrns.github.io/personal-projects-portal/"
                  target="_blank"
                  class="basis-2/5 rounded bg-yellow-400 p-4 text-center text-sm font-medium transition hover:scale-105"
                >
                  My Projects Portal
                </A>
                <A
                  href="https://chrsrns.github.io/css-resume/"
                  target="_blank"
                  class="basis-2/5 rounded bg-yellow-400 p-4 text-center text-sm font-medium transition hover:scale-105"
                >
                  My Online Resume
                </A>
              </div>
            </div>
            <div class="bg-timberwolf-800 px-4 py-3 sm:flex sm:gap-4 sm:px-6 dark:bg-black_olive">
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  props.onCloseClick();
                  toast.remove();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default PostCheckoutModal;
