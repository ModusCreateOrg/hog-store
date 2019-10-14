// @ts-nocheck
import React, { Suspense } from 'react';
import lazy from 'react-lazy-named';

const LoremIpsum = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve(import('react-lorem-ipsum')), 5000)
    ),
  'LoremIpsum'
);

const BoringContent = () => (
  <section>
    <h2>Terms and Conditions</h2>
    <Suspense fallback={null}>
      <LoremIpsum avgWordsPerSentence={12} p={10} />
    </Suspense>
  </section>
);

export default BoringContent;
