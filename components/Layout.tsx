import React, { useState, createContext, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScopingModal from './ScopingModal';

type ModalContextType = {
  openScopingModal: (servicePillar?: string) => void;
};

const ModalContext = createContext<ModalContextType>({
  openScopingModal: () => {}
});

export const useScopingModal = () => useContext(ModalContext);

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultPillar, setDefaultPillar] = useState('ISO Management Systems');

  const openScopingModal = (pillar?: string) => {
    if (pillar) setDefaultPillar(pillar);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openScopingModal }}>
      <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans selection:bg-[#16A34A] selection:text-white flex flex-col justify-between">
        <div>
          <Header onOpenModal={() => openScopingModal()} />
          <main>{children}</main>
        </div>
        <Footer />
        <ScopingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          initialService={defaultPillar}
        />
      </div>
    </ModalContext.Provider>
  );
}
