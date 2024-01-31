import { useCallback, useState } from 'react';
import './App.css';
// import ChildA from './childA';
import ChildB from './childB';
import ChildBMemoProblem from './ChildBMemoProblem';
import ChildBSolution from './childC';
import ChildBSolDep from './dependency';
// import ChildBSolutionWithDependency from './childDEPENDENCY.JS';

function App() {

  const [add, setAdd] = useState(0);

  function Learning() {
    console.log("This is function pass to childBMemoProblem");
  }


  const [count, setCount] = useState(0);


  const MyLearning = useCallback(() => {
    console.log("This is useCallback");
  })


  const MyLearningNew = useCallback(() => {
    console.log("This is useCallback");
  }, [count])


  // Hm chhahte hai hi jo <ChildBSolution /> hia wo sirf 1 bar render ho to isliye hmm [] (empty array ) likha hai.



  ////////////////////////For dependency jb ho ki ye condition pr aise chalna hai.

  const MyLearnings = useCallback(() => {
    console.log("This is useCallback");
  }, [count])

  // 
  /*
 const MyDependency = useCallback(() => {
   console.log("This is useCallback and used while dependency");
 }, [count])
 */
  // hm chahte hia ki koi dependency per like if count ka value itna ho to ye ho. like count value change to child variable rerender ho.



  return (
    <div className="">
      <h1>useCallback</h1>

      {/* ------------------------------ */}
      {/* <ChildA /> */}
      {/* to pehle ChildA i.e. child component chala  |||||
      // isme problem ye hai ki jitna bar button ko press karenge utna bar 'Child component' print hoga. perfomance degrade

      //To overcome we will wrap using useMemo; see <ChildB />
      */}


      {/* ------------------------------ */}

      <ChildB />
      {/* isme 1st time child component print hua but button k press krne pr nhi hua */}

      {/* Lekin isme problem ye hai ki agar hm koi function ko as a props isme pass krenge to button pr click krne pr bar bar child component print hoga. i.e. Jbki child memo se wrap hai fir v button ke click per chalega. */}
      {/* Yani ki ye v same problem as ChildA de rha hai. */}

      {/* see childBMemoProblem */}


      <ChildBMemoProblem Learning={Learning} />


      {/* yaha per child component problem jo hai wo re render ho rha hai button ke click karne per */}
      {/* reason:- 	Re-render isliye ho rha hai because React ke under ek term hota hia referential equality. Referential Equality me jb v hamra page re render hota hia to hmare page me kuch function re create hote hia. 
	According to example hmara  Learning function re create hoga to hmara child component ko lagega ki, ye function recreate hua hai .i.e.  Ya to ye function me kuch change hua hia ya ye function nayi hai. Isliye hmara child component fir se re render ho rha hia. But which we don’t want . TO overcome this PROBLEM we will use useCallback hooks.
 */}


      {/* ------------------------------ */}

      {/* hm useCallback ke under function ko likhenge see line 15  MyLearning function*/}
      {/* without any dependency. */}


      {/* We are passing props */}
      <ChildBSolution MyLearning={MyLearning} />
      {/* <ChildBSolution MyLearning={MyLearning} count={count} /> */}






      {/* ------------------------------ */}

      {/* with dependency */}
      {/* <ChildBSolutionWithDependency MyLearning={MyDependency} count={count} /> */}
      {/* <ChildBSolutionWithDependency MyLearnings={MyLearnings} count={count} /> */}
      {/* yaha se 2 value as a props paas kr rhe hai to  */}


      {/* ---------- */}

      <ChildBSolDep MyLearnings={MyLearnings} count={count} />



      <h1>{add}</h1>
      <h2>{count}</h2>

      <button onClick={() => setAdd(add + 1)} >Addition</button>

      <button onClick={() => setCount(count + 2)} >increase</button>

    </div>
  );
}

export default App;
