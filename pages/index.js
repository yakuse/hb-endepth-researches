import React from 'react';

import UK2 from '@/screens/UK/UK2/UK2';
import Germany3 from '@/screens/Germany/Germany-3/Germany-3';

export default function HomePage() {
  return (
    <div>
      <div style={{ height: 30 }} />

      <h1 className="p-3 text-center text-2xl">Germany - 3</h1>
      <div className="mx-auto max-w-3xl">
        <Germany3 />
      </div>

      <div style={{ height: 30 }} />

      <h1 className="p-3 text-center text-2xl">UK - 2</h1>
      <div className="mx-auto max-w-3xl">
        <UK2 />
      </div>

      <div style={{ height: 60 }} />
    </div>
  );
}
