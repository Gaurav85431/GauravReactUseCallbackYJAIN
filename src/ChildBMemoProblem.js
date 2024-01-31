import { memo } from 'react';

function ChildBMemoProblem(Listener) {

  console.log("Child component memo problem");

  // isme childA problem ko overcome krnge useMemo ka use krke . i.e. memo se wrap kr denge.
  return (<>


  </>)
}
export default memo(ChildBMemoProblem); //wrap by memo