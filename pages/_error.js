import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Duh, sth went wrong :(</h1>
    <p>Try me <Link href="/"><a>back</a></Link></p>
  </div>
);

export default errorPage;
