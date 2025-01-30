'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [wordArray, setWordArray] = useState<string[]>([]);

  useEffect(() => {
    setWordArray(words.split(' '));
  }, [words]);

  return (
    <div className='font-bold'>
      {wordArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className='mr-2.5 inline-block'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1,
              ease: 'easeOut',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
