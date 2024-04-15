// useModalStore.js
import create from 'zustand';

const useModalStore = create((set) => ({
  signupModal: {
    show: true,
  },

  setSignupModal: (props) => set({ show: props.show }),
}));

export default useModalStore;
