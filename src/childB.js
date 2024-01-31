import { memo } from 'react';

function ChildB() {

  console.log("Child component");

  // isme childA problem ko overcome krnge useMemo ka use krke . i.e. memo se wrap kr denge.
  return (<>


  </>)
}
export default memo(ChildB); //wrap by memo