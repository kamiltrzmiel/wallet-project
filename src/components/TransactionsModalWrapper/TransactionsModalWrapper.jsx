import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import EditTransactionModal from 'components/EditTrasactionModal/EditTransactionModal';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';

const options = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: [0.08, 0.82, 0.17, 1] },
};

const TransactionsModalWrapper = () => {
  const { isModalAddTransactionOpen, isModalEditTransactionOpen } = useSelector(
    state => state.global
  );

  return (
    <AnimatePresence>
      {(isModalAddTransactionOpen || isModalEditTransactionOpen) && (
        <motion.div {...options} className="modals">
          {isModalAddTransactionOpen && <AddTransactionModal />}
          {isModalEditTransactionOpen && <EditTransactionModal />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransactionsModalWrapper;
